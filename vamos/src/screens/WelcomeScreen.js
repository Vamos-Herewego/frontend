import React from 'react';
import { Pressable, Text, View} from 'react-native'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../styles/theme";
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


const  WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient style={{flex: 1}} colors={['#053f5c', '#9fe7f5']} >
       <View style={{flex: 1, top: 100}}>
             <View>
              <Image 
              source={require("../assets/soccer.png")}
              style={{
                  height: 100,
                  width: 100,
                  borderRadius:20,
                  position: "absolute",
                 transform: [
                  {translateX: 20},
                  { translateY: 50},
                  {rotate: "-15deg"}
                 ]

              }}
              />
              <Image 
              source={require("../assets/basketball.png")}
              style={{
                  height: 100,
                  width: 120,
                  borderRadius:20,
                  position: "absolute",
                  top:-50,
                  left: 100,
                 transform: [
                  {translateX: 50},
                  { translateY: 50},
                  {rotate: "-5deg"}
                 ]

              }}
              />
              <Image 
              source={require("../assets/tennis.png")}
              style={{
                  height: 100,
                  width: 100,
                  borderRadius:20,
                  position: "absolute",
                  top:130,
                  left: -20,
                 transform: [
                  {translateX: 50},
                  { translateY: 50},
                  {rotate: "15deg"}
                 ]

              }}
              />
              <Image 
              source={require("../assets/football.png")}
              style={{
                  height: 200,
                  width: 200,
                  borderRadius:20,
                  position: "absolute",
                  top:110,
                  left:100,
                 transform: [
                  {translateX: 50},
                  { translateY: 50},
                  {rotate: "-15deg"}
                 ]

              }}
              />
              {/* content */}
              <View style={{
                paddingHorizontal:22,
                position: 'absolute',
                top:400,
                width: '100%'
              }}>
                <Text style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#ffff"
                }}> Let's Get</Text>
                  <Text style={{
                  fontSize: 46,
                  fontWeight: 800,
                  color: "#ffff"
                }}> Started</Text>
                <View style={{marginVertical: 22 }}>
                <Text style={{
                  fontSize: 16,
                  marginVertical: 4,
                  color: "#ffff"
                }}>Connect with each other with chatting</Text>
                <Text style={{
                  fontSize: 16,
                  marginVertical: 4,
                  color: "#ffff"
                }}>Calling, Enjoy Safe and Private texting</Text>
                </View>
                <Button    title='Join Now'
                onPress={()=> navigation.navigate("signUp")}
                style={{
                  marginTop: 22,
                  width: '100%'}}/>
                  <View style={{
                    flexDirection:'row',
                    marginTop: 12,
                    justifyContent: 'center'
                  }}>
                    <Text style={{
                      fontSize:16,
                      color: '#ffff'
                    }}>
                      Already have an account?
                    </Text>
                    <Pressable onPress={()=>navigation.navigate("signin")}>
                      <Text  style={{
                        fontSize: 16,
                        color: "#fff",
                        fontWeight:'bold',
                        marginLeft: 4
                      }}>Login</Text>
                    </Pressable>
                  </View>
              </View>
             </View>
       </View>
    </LinearGradient>
  )
}

export default WelcomeScreen;