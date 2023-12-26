import { StyleSheet, Image, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftMenu from "./LeftMenu";
import RightItems from "./RightItems";
import { perfectSize } from "./Login";
import HomeContent from "./HomeContent";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const Home = ({ navigation }) => {
  const [cart, setCart] = useState();
  const [wishlist, setWishlist] = useState();
  const drawer = createDrawerNavigator();

  // await AsyncStorage.getItem('token');

  const [isLoading,setIsLoading]=useState(true);
  const[products,setProducts]=useState([]);
  const[banners,setBanners]=useState([]);
  const[brands,setBrands]=useState([]);
  const fetchHomeData=async ()=>{

    setIsLoading(true)

    // let token =await AsyncStorage.getItem('token');
    // token?token=token:token="guest user";

    try {
      const response = await axios({
            method: 'post',
            url: "https://sourcefilesolutions.com/steelghar/console/api/home-data",
           
            headers: {
                "Content-Type": "multipart/form-data",
                // Authorization: 'Bearer ' + crmToken,
            },
        });

if(response.data.status=="success"){
  console.log(444444444)
  const homeData=response.data.homeData;
  setProducts(homeData.latestProducts)
  setBanners(homeData.banners)
  setBrands(homeData.brands)
}


    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchHomeData();
  },[])
  return (
    <>
      <drawer.Navigator drawerContent={(props) => <LeftMenu {...props} />}>
        <drawer.Screen
          name="Sample"
          component={()=><HomeContent banners={banners} products={products} brands={brands}/>}
          
          options={{
            headerRight: () => (
              // <Text onPress={() => navigation.navigate("Wishlist")}>Hello</Text>
              <View
                style={{ flexDirection: "row", marginRight: perfectSize(22) }}
              >
                <Feather
                  name="shopping-cart"
                  size={perfectSize(24)}
                  color="black"
                  style={{ marginRight: perfectSize(15) }}
                  onPress={() => navigation.navigate("Cart")}
                />
                  <View>
                    <Button onPress={ fetchHomeData
                    } title="vnngn" />
                  </View>
                {cart && (
                  <View
                    style={{
                      position: "absolute",
                      right: perfectSize(28),
                      top: perfectSize(-10),
                      backgroundColor: "red",
                      borderRadius: perfectSize(18),
                      height: perfectSize(20),
                      minWidth: perfectSize(20),
                      padding: perfectSize(3),
                      lineHeight: perfectSize(16),
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: perfectSize(12),
                        padding: perfectSize(3),
                        lineHeight: perfectSize(10),
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      0
                    </Text>
                  </View>
                )}
                <AntDesign
                  name="hearto"
                  size={perfectSize(24)}
                  color="black"
                  onPress={() => navigation.navigate("Wishlist")}
                />
                {wishlist && (
                  <View
                    style={{
                      position: "absolute",
                      right: perfectSize(-10),
                      top: perfectSize(-10),
                      backgroundColor: "red",
                      borderRadius: perfectSize(18),
                      height: perfectSize(20),
                      minWidth: perfectSize(20),
                      padding: perfectSize(3),
                      lineHeight: perfectSize(16),
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: perfectSize(12),
                        padding: 3,
                        lineHeight: perfectSize(10),
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      0
                    </Text>
                  <View>
                    <Button title="vnngn" />
                  </View>

                  </View>
                )}
              </View>
            ),
            headerTitle: () => (
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            ),
          }}
        />
      </drawer.Navigator>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  logo: {
    // marginLeft: perfectSize(-23),
    width: perfectSize(190),
    resizeMode: "contain",
  },
});
