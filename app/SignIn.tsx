import { Alert, Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react';
// Firebase
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth, fireStore } from '@/Firebase/FirebaseConfig';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Icon
import { Fontisto, Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// Component
import Loading from '@/components/animations/Loading';
import { doc, getDoc } from 'firebase/firestore';

const SignIn = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
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

  // Sign in method
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleEmailChange = (text) => setEmail(text);
	const handlePasswordChange = (text) => setPassword(text)

  // Sign in method
	const signInMethod = async () => {
		if (!email && !password) {
			ToastAndroid.show('Vui lòng nhập Email và Mật khẩu', ToastAndroid.SHORT);
			return;
		} if (!email) {
			ToastAndroid.show('Vui lòng nhập Email', ToastAndroid.SHORT);
			return;
		} if (!password) {
			ToastAndroid.show('Vui lòng nhập Mật khẩu', ToastAndroid.SHORT);
			return;
		}
		try {
			setLoading(true);
			const response = await signInWithEmailAndPassword(auth, email, password);
			setLoading(false);
			console.log('User signed in', response?.user.email);
			// setUser(response?.user);

			// Show notification
			ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
			navigation.replace('TabNavigator');

			setEmail('');
			setPassword('');

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
			if (msg.includes('(auth/missing-password)')) { msg = 'Vui lòng nhập Mật khẩu' }
			if (msg.includes('(auth/invalid-credential)')) { msg = 'Email và Mật khẩu không hợp lệ!' }
			// Alert.alert('Invalid sign in', msg);
      console.log(msg);
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
          <View style={{ paddingBottom: 15 }}>
            <Text style={[styles.title, { color: theme.text }]}>Email hoặc Tên người dùng</Text>
            <TextInput style={[styles.textInput, { color: theme.text, backgroundColor: theme.gray }]}
              keyboardType='email-address'
              onChangeText={handleEmailChange}
            />
          </View >

          <View>
            <Text style={[styles.title, { color: theme.text }]}>Mật khẩu</Text>

            <View style={[styles.passInput, { backgroundColor: theme.gray }]}>
              <TextInput style={{ height: 50, width: 270, color: theme.text, backgroundColor: theme.gray }}
                secureTextEntry={hide}
                onChangeText={handlePasswordChange}
              />

              <TouchableOpacity style={{ width: 50, alignItems: 'center' }} onPress={hidePass}>
                <Feather name={eye} size={24} color={theme.text} />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.rememberContainer}>

          <TouchableOpacity style={styles.rmbWrapLeft} onPress={handleRemember}>
            <Fontisto name={remember} size={20} color={theme.text} />
            <Text style={{ fontSize: 12, paddingLeft: 5, color: theme.text }}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={{ color: 'tomato', fontSize: 12 }}>Forgot password?</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.signInBtnContainer}>
          {loading
            ? (
              <Loading />
            )
            : (
              <TouchableOpacity style={styles.signInBtn} onPress={signInMethod}>
                <Text style={[styles.signInText, { color: theme.white }]}>Sign In</Text>
              </TouchableOpacity>
            )
          }
        </View>

        <View style={styles.orContainer}>
          <View style={{ height: 0.5, width: '35%', backgroundColor: theme.text }}></View>
          <Text style={{ color: theme.text }}>Or</Text>
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
          <Text style={{ fontWeight: 'bold', color: theme.text }}>Not a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: 'plum', fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'space-between'
  },


  // bg img container
  bgImgContainer: {
    height: '25%',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },


  // Input container
  inputContainer: {
    height: 200,
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
    width: 330,
    // borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  passInput: {
    flexDirection: 'row',
    height: 50,
    width: 330,
    borderRadius: 10,
    paddingLeft: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1
  },

  rememberContainer: {
    height: '3%',
    width: 330,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
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
  signInBtnContainer: {
    height: '20%',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInBtn: {
    height: 50,
    width: '95%',
    backgroundColor: 'plum',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // borderWidth: 0.5,
    // marginTop: 50
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
    // borderWidth: 1,
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
    marginBottom: 30,
    // borderWidth: 1
  }
})