import { Alert, Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react';
// Firebase
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, fireStore } from '@/Firebase/FirebaseConfig';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Icon
import { Fontisto, Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// Component
import Loading from '@/components/animations/Loading';

const SignUp = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   const {user, setUser} = useAuth();
   // Handle visible passwords
   const [eye, setEye] = useState('eye')
   const [hide, setHide] = useState(true);
   const hidePass = () => {
      eye == 'eye' ? setEye('eye-off') : setEye('eye');
      hide === true ? setHide(false) : setHide(true);
   };
   const [remember, setRemember] = useState('checkbox-passive')
   const handleRemember = () => {
      remember == 'checkbox-passive' ? setRemember('checkbox-active') : setRemember('checkbox-passive');
   };

   // Sign up method
   const { SignUpMethod } = useAuth();
   const [loading, setLoading] = useState(false);

   const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleUserNameChange = (text) => setUserName(text);
	const handleEmailChange = (text) => setEmail(text);
	const handlePasswordChange = (text) => setPassword(text);

   const handleSignUp = async () => {
      if (!email && !password && !userName) {
         ToastAndroid.show('Vui lòng nhập Họ tên, Email và Mật khẩu', ToastAndroid.SHORT);
         return;
      }
      if (!userName) {
         ToastAndroid.show('Vui lòng nhập Họ và tên', ToastAndroid.SHORT);
         return;
      }
      if (!email) {
         ToastAndroid.show('Vui lòng nhập Email', ToastAndroid.SHORT);
         return;
      }
      if (!password) {
         ToastAndroid.show('Vui lòng nhập Mật khẩu', ToastAndroid.SHORT);
         return;
      }
      try {
			setLoading(true);
			const response = await createUserWithEmailAndPassword(auth, email, password);
			setLoading(false);

			navigation.replace("TabNavigator");
			// Show notification
			ToastAndroid.show('Đăng ký và Đăng nhập thành công!', ToastAndroid.SHORT);

         // Set user data
			await setDoc(doc(fireStore, 'user', response?.user?.uid), {
				userId: response?.user?.uid,
				userName,
				email,
				password,
			});
			console.log('Store user in4 success');
         // Get user data
			try {
				const userRef = doc(fireStore, "user", response?.user?.uid);
				const docSnap = await getDoc(userRef);
				const data = docSnap.data();

				if (docSnap.exists()) {
					console.log("User data:", data);
					setUser(data);
				} else {
					console.log("No such document!");
				}
			} catch (error) {
				console.error('Fetch user error:', error);
			}

		} catch (error) {
			let msg = error.message;
			if (msg.includes('(auth/invalid-email)')) { msg = 'Email hoặc Tên người dùng không hợp lệ!' }
			if (msg.includes('(auth/email-already-in-use)')) { msg = 'Email hoặc Tên người dùng đã được sử dụng!' }
			if (msg.includes('(auth/missing-email)')) { msg = 'Vui lòng nhập Email!' }
			if (msg.includes('(auth/missing-password)')) { msg = 'Vui lòng nhập Mật khẩu!' }
			if (msg.includes('(auth/weak-password)')) { msg = 'Mật khẩu không hợp lệ!\nYêu cầu 6 ký tự!' }
			// console.error(msg);
			ToastAndroid.show(msg, ToastAndroid.SHORT);
			setLoading(false);
		}
   };
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <View style={styles.bgImgContainer}>
               <Image style={styles.bgImg} source={require('../assets/background/logoGenTeach2.png')} />
            </View>

            <View style={styles.inputContainer}>
               <View style={{ paddingBottom: 10 }}>
                  <Text style={[styles.title, { color: theme.text }]}>Họ và tên</Text>
                  <TextInput style={[styles.textInput, { color: theme.text, backgroundColor: theme.gray }]}
                     keyboardType='default'
                     onChangeText={handleUserNameChange}
                  />
               </View >

               <View style={{ paddingBottom: 10 }}>
                  <Text style={[styles.title, { color: theme.text }]}>Email hoặc tên người dùng</Text>
                  <TextInput style={[styles.textInput, { color: theme.text, backgroundColor: theme.gray }]}
                     keyboardType='email-address'
                     onChangeText={handleEmailChange}
                  />
               </View >

               <View>
                  <Text style={[styles.title, { color: theme.text }]}>Mật khẩu</Text>

                  <View style={[styles.passInput, { backgroundColor: theme.gray }]}>
                     <TextInput style={{ height: 50, width: '85%', color: theme.text, backgroundColor: theme.gray }}
                        secureTextEntry={hide}
                        onChangeText={handlePasswordChange}
                     />

                     <TouchableOpacity style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }} onPress={hidePass}>
                        <Feather name={eye} size={24} color={theme.text} />
                     </TouchableOpacity>
                  </View>

               </View>
            </View>

            <View style={styles.rememberContainer}>

               <TouchableOpacity style={styles.rmbWrapLeft} onPress={handleRemember}>
                  <Fontisto name={remember} size={20} color={theme.text} />
                  <Text style={{ fontSize: 12, paddingLeft: 5, color: theme.text }}>Nhớ mật khẩu</Text>
               </TouchableOpacity>

               <TouchableOpacity  onPress={() => Alert.alert('Quên mật khẩu?', 'Truy cập GenTeach.edu.vn để được hỗ trợ!')} >
                  <Text style={{ color: 'tomato', fontSize: 12 }}>Quên mật khẩu?</Text>
               </TouchableOpacity>

            </View>

            <View style={styles.signUpBtnContainer}>
               {loading
                  ? (
                     <Loading />
                  )
                  : (
                     <TouchableOpacity style={styles.signInBtn} onPress={handleSignUp}>
                        <Text style={[styles.signInText, { color: theme.white }]}>Đăng ký</Text>
                     </TouchableOpacity>
                  )
               }
            </View>

            <View style={styles.orContainer}>
               <View style={{ height: 0.5, width: '35%', backgroundColor: theme.text }}></View>
               <Text style={{ color: theme.text }}>Hoặc</Text>
               <View style={{ height: 0.5, width: '35%', backgroundColor: theme.text }}></View>
            </View>

            <View style={styles.otherMethod}>
               <TouchableOpacity style={[styles.fbBtn, { borderColor: theme.text }]}>
                  <Ionicons name="logo-facebook" size={27} color="blue" />

                  <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 10, color: theme.text }}>Facebook</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.fbBtn, { borderColor: theme.text }]}>
                  {/* <Ionicons name="logo-google" size={24} color="black" /> */}
                  <Image source={require('../assets/icons/google.png')} style={{ height: 24, width: 23 }} />
                  <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 10, color: theme.text }}>Google</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.signUpText}>
               <Text style={{ fontWeight: 'bold', color: theme.text }}>Đã có tài khoản? </Text>
               <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={{ color: 'plum', fontWeight: 'bold' }}>Đăng nhập</Text>
               </TouchableOpacity>
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default SignUp

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBarHeight : 0,
      alignItems: 'center',
      justifyContent: 'space-between'
   },


   // bg img container
   bgImgContainer: {
      height: '25%',
      width: '100%',
      //  borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   bgImg: {
      height: 150,
      width: 300,
      resizeMode: 'contain'
   },


   // Input container
   inputContainer: {
      height: 250,
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },

   title: {
      // width: '100%',
      fontSize: 13,
      fontWeight: 'bold',
      alignItems: 'center',
      paddingLeft: 5,
      paddingBottom: 2
      // borderWidth: 1,
   },
   textInput: {
      height: 50,
      minWidth: '95%',
      // borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      alignSelf: 'center',
   },
   passInput: {
      flexDirection: 'row',
      height: 50,
      width: '95%',
      borderRadius: 10,
      paddingLeft: 10,
      // paddingHorizontal: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },

   rememberContainer: {
      height: 30,
      width: '85%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginVertical: 10,
      // borderWidth: 1
   },
   rmbWrapLeft: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },


   // Sign in btn
   signUpBtnContainer: {
      height: '20%',
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   signInBtn: {
      height: 50,
      width: '85%',
      backgroundColor: 'plum',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      //  marginTop: 50
   },
   signInText: {
      fontSize: 14,
      fontWeight: 'bold',
   },


   // other method
   orContainer: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // marginTop: 50,
      // marginBottom: 5
   },

   otherMethod: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1
   },

   fbBtn: {
      flexDirection: 'row',
      height: 40,
      width: '40%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 0.5
   },

   signUpText: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30
      // borderWidth: 1
   }
})