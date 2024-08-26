import React, { useContext } from "react";
import {
	Button,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
	Alert,
	ToastAndroid,
	StyleSheet,
	Dimensions,
	Platform,
	StatusBar
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Icon
import { Ionicons, Fontisto, FontAwesome5, Entypo, AntDesign, Feather } from "@expo/vector-icons";
// Component
import SettingCard from "../../components/home/SettingCard";
// Context
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
// Firebase
import { auth } from "../../Firebase/FirebaseConfig";


const Profile = ({ navigation }) => {
	const { theme } = useTheme();
	const { user, setUser } = useAuth();
	// Sign out
	const signOutMethod = async () => {
		try {
			await auth.signOut();
			console.log("User signed out");
			// Navigation
			navigation.replace("SignIn");
			// Show notification
			ToastAndroid.show('Signed out successfully', ToastAndroid.SHORT);
			setUser('');
		} catch (error) {
			console.error("Sign out error:", error);
		}
	};

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.safeView}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()} >
						<AntDesign name="arrowleft" size={25} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={{ fontWeight: 'bold', color: 'black' }}>Trang cá nhân</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Entypo name="menu" size={25} color="black" />
					</TouchableOpacity>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.profileImgContainer}>
						<Image
							style={styles.profileImg}
							source={require("../../assets/background/Logo.jpg")}
							resizeMode="center"
						/>

						<View style={{ marginLeft: 5 }}>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>{user?.userName}</Text>
							<Text style={{ opacity: 0.5 }}>{user?.email}</Text>
						</View>
					</View>

					<View style={styles.in4Container}>
						<View style={styles.textWrap}>
							<Text style={styles.number}>0</Text>
							<Text style={styles.text}>Follower</Text>
						</View>
						<View style={styles.textWrap}>
							<Text style={styles.number}>0</Text>
							<Text style={styles.text}>Following</Text>
						</View>
						<View style={styles.textWrap}>
							<Text style={styles.number}>0</Text>
							<Text style={styles.text}>Post</Text>
						</View>
					</View>


					<View style={[styles.settingContainer]}>
						<SettingCard
							onPress={null}
							name="Người theo dõi"
							icon={<Fontisto name="persons" size={24} color="black" />}
						/>

						<SettingCard
							onPress={null}
							name="Đang theo dõi"
							icon={<Fontisto name="person" size={24} color="black" />}
						/>

						<SettingCard
							onPress={null}
							name="Bài viết"
							icon={<Entypo name="documents" size={24} color="black" />}
						/>

						<SettingCard
							onPress={() => navigation.navigate('Cart')}
							name="Giỏ hàng của bạn"
							icon={<AntDesign name="shoppingcart" size={24} color="black" />}
						/>

						<SettingCard
							onPress={null}
							name="Bộ sưu tập"
							icon={<Feather name="bookmark" size={24} color="black" />}
						/>

						<SettingCard
							onPress={null}
							name="Mục yêu tích"
							icon={<AntDesign name="staro" size={24} color="black" />}
						/>

						<SettingCard
							onPress={() => navigation.navigate('UpGradeAccountDetail')}
							name="Nâng cấp tài khoản"
							icon={<FontAwesome5 name="angle-double-up" size={24} color="gold" />}
						/>
					</View>

					<View style={styles.moreContainer}>

						<SettingCard
							onPress={() => Alert.alert('Thông tin về GenTeach', 'Truy cập Facebook hoặc Instagram để biết thêm!')}
							name="Thông tin về GenTeach"
							icon={<Ionicons name="information-circle-outline" size={24} color="black" />}
						/>

						<SettingCard
							onPress={null}
							name="Phản hồi"
							icon={<AntDesign name="exclamation" size={24} color="black" />}
						/>

						<SettingCard
							onPress={null}
							name="Yêu cầu giúp đỡ"
							icon={<Ionicons name="help" size={24} color="black" />}
						/>

						<SettingCard
							onPress={signOutMethod}
							name="Đăng xuất"
							icon={<AntDesign name="logout" size={24} color="red" />}
						/>

					</View>

				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	safeView: {
		flex: 1,
		height: Dimensions.get('screen').height,
		width: Dimensions.get('screen').width,
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
	},

	// Profile
	header: {
		height: 60,
		width: '100%',
		// borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		// borderWidth: 1
	},


	profileImgContainer: {
		height: 100,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// borderWidth: 1
	},
	profileImg: {
		height: 80,
		width: 80,
		marginRight: 10,
		borderRadius: 50
	},
	in4Container: {
		height: 70,
		// borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	textWrap: {
		alignItems: 'center',
	},
	number: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	text: {
		fontSize: 12,
		opacity: 0.7,
		// color: 'white'
	},


	// Setting container
	settingContainer: {
		height: 'auto',
		width: '97%',
		// backgroundColor: 'white',
		borderWidth: 0.5,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	settingWrap: {
		height: 55,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 20
		// borderWidth: 1,
	},
	wrapLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		// paddingHorizontal: 10
	},

	// 
	moreContainer: {
		height: 'auto',
		width: '97%',
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 0.5,
		alignSelf: 'center',
		alignItems: 'center',
		// justifyContent: 'center',
		borderRadius: 10,
	},
})