import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
// import {
//   useFonts,
//   Montserrat_500Medium,
//   Montserrat_600SemiBold,
//   Montserrat_800ExtraBold,
// } from "@expo-google-fonts/montserrat";
import OTPTextInput from "react-native-otp-textinput";
import { perfectSize } from "./Login";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "./PageLoader";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Otp = ({navigation, route}) => {
  console.log(route.params.phone);
  const phone=route.params.phone;
  // let [fontsLoaded] = useFonts({
  //   Montserrat_500Medium,
  //   Montserrat_600SemiBold,
  //   Montserrat_800ExtraBold,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
 const [btnLoading, setBtnLoading]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [defaultParams] = useState({
  
   otp:''
});
const [params, setParams] = useState(JSON.parse(JSON.stringify(defaultParams)));
    const [errors, setErros] = useState({});

    const changeValue = (e, value) => {
      setErros({ ...errors, [e]: '' });
      setParams({ ...params, [e]: value });
  };
    const validate = () => {
      setErros({});
      let errors = {};
      if (!params.otp) {
          errors = { ...errors, otp: 'otp  is required!' };
      }
      
     
      setErros(errors);
      return { totalErrors: Object.keys(errors).length };
  };
  const updateApi = async (data) => {
    setBtnLoading(true)
    console.log(data);
    try {
        const response = await axios({
            method: 'post',
            url:  " https://sourcefilesolutions.com/steelghar/console/api/otp-verify",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
                // Authorization: 'Bearer ' + crmToken,
            },
        });
        console.log(response.data)
if(response.data.status=="success"){
  // store token
 
    await AsyncStorage.setItem(
      'token',
      response.data.customer.token,
    );

    navigation.navigate('Home')
  
}
       
    } catch (error) {

      console.log(error.response.data)

        if (error.response.status === 422) {
            const serveErrors = error.response.data.errors;
            for (var key in serveErrors) {
                setErros({ ...errors, [key]: serveErrors[key][0] });
            }
           
        } 
        // console.log("else part")
        // else ErrorHandle(error);
    } finally {
        setBtnLoading(false)
    }
};

const update = () => {
  const isValid = validate();
  if (isValid.totalErrors) return false;
  const data = new FormData();
  data.append("phone", phone);
  data.append("otp", params.otp);
 
  updateApi(data);
};

 

  useEffect(() => {
    checkToken()
  }, [])

  checkToken = async () => {
    setIsLoading(true)
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) navigation.navigate('Home')

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  return (

    <>
    {
      isLoading ? <Loader/>:(
        <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
        <StatusBar style="light" />
        <View style={style.header}>
          <Image
            source={require("../assets/logowhite.png")}
            style={{ width: perfectSize(250), resizeMode: "contain" }}
          />
        </View>
  
        <View style={style.inputContainer}>
          <View style={{ alignItems: "center", marginTop: perfectSize(50) }}>
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                fontSize: perfectSize(20),
              }}
            >
              Enter OTP
            </Text>
            <View
              style={{
                marginHorizontal: perfectSize(50),
                marginTop: perfectSize(20),
              }}
            >
              <OTPTextInput 
              handleTextChange={
                (e)=>{
                  changeValue('otp',e)
                }
              }
              autoFocus={true} tintColor="#fff" inputCount={4} style={style.otp} />
            </View>

            <View>
              <Text style={{marginLeft: perfectSize(40), color:"red"}}  >{errors.otp}</Text>
            </View>
            <View
              style={{
                marginTop: perfectSize(35),
                marginBottom: perfectSize(25),
              }}
            >
              <TouchableOpacity style={style.button}
              onPress={update}
              >
  
                <Text style={style.button.text} onPress={update} >SUBMIT</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: perfectSize(18),
                }}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      )
    }
    </>
   
  );
};

export default Otp;
const style = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 2,
    borderTopEndRadius: perfectSize(20),
    borderTopStartRadius: perfectSize(20),
    //backgroundColor: "#85dceb",
    backgroundColor: "white",
    padding: perfectSize(10),
  },

  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    width: perfectSize(170),
    marginHorizontal: perfectSize(40),
    text: {
      color: "white",
      fontSize: perfectSize(16),
      fontFamily: "Montserrat_600SemiBold",
    },
  },
  otp: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: perfectSize(1),
    borderRadius: 10,
    height: perfectSize(55),
    width: perfectSize(55),
    borderBottomWidth: perfectSize(1),
    margin: perfectSize(15),
    textAlign: "center",
  },
});
