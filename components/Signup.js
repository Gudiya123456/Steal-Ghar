import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState,useEffect } from "react";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import Checkbox from "expo-checkbox";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Loader from "./PageLoader";
const Signup = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
const fontLoad=()=>{
  if (!fontsLoaded) {
    return null;
  }
}
  

  const [btnLoading, setBtnLoading]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [defaultParams] = useState({
   name:'',
   email:'',
   phone:'',

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
     
      if (!params.name) {
        errors = { ...errors, name: 'name no is required!' };
    }
    if (!params.email) {
      errors = { ...errors, email: 'email no is required!' };
  }
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
            url: "https://sourcefilesolutions.com/steelghar/console/api/register",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
                // Authorization: 'Bearer ' + crmToken,
            },
        });
console.log(response)
       
    } catch (error) {
        if (error.response.status === 422) {
            const serveErrors = error.response.data.errors;
            for (var key in serveErrors) {
                setErros({ ...errors, [key]: serveErrors[key][0] });
            }
           
        } 
        // else ErrorHandle(error);
    } finally {
        setBtnLoading(false)
    }
};

const update = () => {
  const isValid = validate();

  if (isValid.totalErrors) return false;
  alert('hi')

  const data = new FormData();
  data.append("name", params.name);
  data.append("email", params.email);
  data.append("phone", params.phone);
  updateApi(data);
};

 

  useEffect(() => {
    checkToken();
    fontLoad();
  }, [])

  checkToken = async () => {
    setIsLoading(false)
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) navigation.navigate('Login')

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
    {
      isLoading ? <Loader/> :(
        <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
        <View style={style.header}>
          <Image
            source={require("../assets/logowhite.png")}
            style={{ width: perfectSize(250), resizeMode: "contain" }}
          />
        </View>
        <View style={style.inputContainer}>
          <View style={style.inputfield}>
            <FontAwesome name="user-o" size={perfectSize(22)} color="black" />
            <TextInput
              style={style.input}
              placeholder="Enter Your Full Name"
              underlineColorAndroid="transparent"
              onChangeText={text => changeValue('name', text)}

            />
          </View>
  
          <View style={style.inputfield}>
            <MaterialCommunityIcons
              name="email-outline"
              size={perfectSize(22)}
              color="black"
            />
            <TextInput
              style={style.input}
              placeholder="Enter Your Email Address"
              underlineColorAndroid="transparent"
              inputMode="email"
              onChangeText={text => changeValue('email', text)}

            />
          </View>
  
          <View style={style.inputfield}>
            <Feather name="phone" size={perfectSize(22)} color="black" />
            <TextInput
              style={style.input}
              placeholder="Enter Your Phone Number"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={text => changeValue('phone', text)}
              
            />
          </View>
          <View
            style={{
              marginHorizontal: perfectSize(45),
              marginTop: perfectSize(20),
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              style={{ color: "red" }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "red" : undefined}
            />
            <Text
              style={{
                marginLeft: perfectSize(5),
                fontFamily: "Montserrat_500Medium",
              }}
            >
              I Agree to Steel-Ghar Terms of use, privacy-policy and Refund terms
            </Text>
          </View>
          <View style={{ marginTop: perfectSize(55) }}>
            <TouchableOpacity style={style.button} onPress={update} >
              <Text style={style.button.text}>Signup</Text>
            </TouchableOpacity>
          </View>
  
          <View style={style.footer}>
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                fontSize: perfectSize(16),
              }}
            >
              Already Have an account ?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  marginTop: perfectSize(10),
                  fontSize: perfectSize(16),
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      )
    }
    </>
  )
   
};

export default Signup;
const style = StyleSheet.create({
  header: {
    flex: 1.5,

    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flex: 4,
    backgroundColor: "white",
    borderTopStartRadius: perfectSize(20),
    borderTopEndRadius: perfectSize(20),
  },
  inputfield: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: perfectSize(10),
    marginHorizontal: perfectSize(40),
    marginVertical: perfectSize(5),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(25),
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

  footer: {
    marginTop: perfectSize(40),
    alignItems: "center",
  },
});
