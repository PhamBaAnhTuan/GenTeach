import React, { useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	Button,
	StyleSheet,
	Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Slider from '@react-native-community/slider';
// Route get params
import { useRoute } from "@react-navigation/native";
// Icons
import { AntDesign } from "@expo/vector-icons";
import {
	MaterialCommunityIcons,
	Entypo,
	MaterialIcons,
	FontAwesome6,
	Feather
} from "@expo/vector-icons";

const PodcastDetail = ({ navigation }) => {
	const route = useRoute();
	const selectedPodcast = route.params?.selectedPodcast;

	const [iconName1, setIconName1] = useState("favorite-border");
	const [iconName2, setIconName2] = useState("pause-circle");
	const [iconColor, setIconColor] = useState("black");

	const onPressIcon1 = () => {
		setIconName1(
			iconName1 === "favorite-border" ? "favorite" : "favorite-border",
		);
		setIconColor(
			iconColor === "black" ? "plum" : "black",
		);
	};
	const onPressIcon2 = () => {
		setIconName2(
			iconName2 === "pause-circle" ? "play-circle" : "pause-circle",
		);
	};

	// Slider
	const [value, setValue] = useState(0);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]}
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>

				<View style={styles.navbarTop}>
					<TouchableOpacity onPress={() => navigation.goBack()} >
						<AntDesign name="arrowleft" size={25} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={{ fontWeight: 'bold' }}>Podcast</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Entypo name="menu" size={25} color="black" />
					</TouchableOpacity>
				</View>


				<View style={{ height: "50%", justifyContent: 'center' }}>
					<Image
						source={{ uri: selectedPodcast.img }}
						resizeMode="cover"
						style={styles.podcastImg}
					/>
				</View>

				<View style={styles.titleContainer}>
					<TouchableOpacity>
						<FontAwesome6 name="share" size={24} color="black" />
					</TouchableOpacity>
					<View>
						<Text style={styles.podcastTitle}>{selectedPodcast.name}</Text>
						<Text style={styles.podcastAuth}>{selectedPodcast.author}</Text>
					</View>
					<TouchableOpacity onPress={onPressIcon1}>
						<MaterialIcons
							name={iconName1}
							size={24}
							color={iconColor}
						/>
					</TouchableOpacity>
				</View>


				<View style={styles.timeLine}>
					<View>
						<Text style={{ fontSize: 13 }}>0:00</Text>
					</View>

					<Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={100}
						step={1}
						value={value}
						onValueChange={setValue}
						minimumTrackTintColor="pink"
						maximumTrackTintColor="black"
						thumbTintColor="plum"
					/>

					<View>
						<Text style={{ fontSize: 13 }}>{selectedPodcast.time}</Text>
					</View>
				</View>


				<View style={styles.navbarControl}>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="playlist-play"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign
							name="fastbackward"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={onPressIcon2}
					// delayPressOut={200}
					>

						<Feather name={iconName2} size={70} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="fastforward" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="play-speed"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default PodcastDetail;

const styles = StyleSheet.create({
	safeView: {
		flex: 1,
		height: Dimensions.get('screen').height,
		width: Dimensions.get('screen').width,
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
		justifyContent: 'space-between'
	},


	// Podcast Detail
	navbarTop: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		// borderWidth: 1,
	},
	podcastImg: {
		height: 330,
		width: 330,
		alignSelf: 'center',
		justifyContent: 'center',
		// flex: 1,
		borderRadius: 15
	},
	// Podcast name, author
	titleContainer: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		// borderWidth: 1
	},
	podcastTitle: {
		// width: 230,
		fontSize: 17,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',
		// borderWidth: 1
	},
	podcastAuth: {
		fontSize: 14,
		alignSelf: 'center',
		textAlign: 'center',
	},

	// Timeline
	timeLine: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingHorizontal: 10,
		// borderWidth: 1,
	},
	// Slider
	slider: {
		width: '75%',
		height: 40,
	},
	// Navbar Controller
	navbarControl: {
		height: 120,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		// borderWidth: 1
	}
})