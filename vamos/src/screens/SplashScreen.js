import React, { useEffect, useRef } from 'react'
import { View,Animated,Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../styles/theme';
import Logo from '../assets/vamos.png.png';
const SplashScreen = () => {

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Value...
    const startAnimation = useRef(new Animated.Value(0)).current;

    const scaleLogo = useRef(new Animated.Value(1)).current;
    // offset animation
    const moveLogo = useRef(new Animated.ValueXY({x:0, y:0})).current;

    useEffect (()=>{

        // starting animation after 500ms
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: -Dimensions.get('window').height + (edges.top + 65 ),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        toValue: 0.35,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                     toValue: {
                            x:(Dimensions.get("window").width / 2) - 35,
                            y : (Dimensions.get("window").height / 2) - 20
                        },
                        useNativeDriver: true
                    }
                )
            ])
            .start();
        }, 500);
    })
  return (
    <View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left:0 ,
        right:0,
    }}
    >
   
    <Animated.View style={{
        flex:1,
        backgroundColor: theme.colors.primary,
        transform: [
               { translateY: startAnimation }
        ]
    }}>
        <Animated.View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <Animated.Image source={Logo} style={{
                width: 150,
                height: 130,
                marginBottom: 20,
                transform: [
                    {translateX: moveLogo.x},
                    {translateY: moveLogo.y},
                    {scale: scaleLogo}
                    
                ]
            }
            }></Animated.Image>
        </Animated.View>

    </Animated.View>
         
    </View>
  )
}

export default SplashScreen;