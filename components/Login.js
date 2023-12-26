import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { create } from "react-native-pixel-perfect";
// import {
//   useFonts,
//   Montserrat_500Medium,
//   Montserrat_600SemiBold,
//   Montserrat_800ExtraBold,
// } from "@expo-google-fonts/montserrat";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PageLoader from "./PageLoader";
export const PerfectFixSize = {
  width: 414,
  height: 896,
};
const auth = true;

export const perfectSize = create(PerfectFixSize);
const Login = ({ navigation }) => {
 const [btnLoading, setBtnLoading]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [defaultParams] = useState({
   phone:''
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
      if (!params.phone) {
          errors = { ...errors, phone: 'phone no is required!' };
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
            url:  "https://sourcefilesolutions.com/steelghar/console/api/login",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
                // Authorization: 'Bearer ' + crmToken,
            },
        });
if(response.data.status=="success")
{
  if(response.data.action=="otp")
  {
navigation.navigate('OTP', {phone:params.phone})
  }
  
}
else if(response.data.status=="error")
{
   if(response.data.action=="register")
  {
   
navigation.navigate('Signup')


  }
}
       
    } catch (error) {

      console.log(error)
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
 
  data.append("phone", params.phone);
 
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
      {isLoading ? <PageLoader /> : (
        <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
          <StatusBar style="light" />
          <View style={style.header}>
            <Image
              source={require("../assets/logowhite.png")}
              style={{ width: perfectSize(250), resizeMode: "contain" }}
            />
          </View>
          <View style={style.inputContainer}>
            <View style={style.inputfield}>
              <Feather name="phone" size={perfectSize(22)} color="black" />
              <TextInput
                style={style.input}
                placeholder="Enter Your Phone Number"
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                maxLength={10}
                value={params.phone}
                // onChange={(e)=>console.log(e)}
                onChangeText={text => changeValue('phone', text)}
              />
            </View>
           
            <View>
              <Text style={{marginLeft: perfectSize(40), color:"red"}}  >{errors.phone}</Text>
            </View>
            <View style={{ marginTop: perfectSize(35) }}>
              <TouchableOpacity
                style={style.button}
                onPress={update}
              >
                <Text style={style.button.text}>Get OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Login;
const style = StyleSheet.create({
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 3,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: perfectSize(50),
  },
  inputfield: {
    marginTop: perfectSize(10),
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: perfectSize(10),
    marginHorizontal: perfectSize(40),
    marginVertical: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
  },
  input: {
    fontSize: perfectSize(16),
    fontFamily: "Montserrat_600SemiBold",
    flex: 1,
    paddingLeft: perfectSize(10),
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: perfectSize(40),
    text: {
      color: "white",
      fontSize: perfectSize(16),
      fontFamily: "Montserrat_600SemiBold",
    },
  },
});
