import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash: React.FC = ({ navigation  }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window

  // Function to handle navigation to the Signup screen
  const goToSplashScreen = () => {
    navigation.navigate('Splash_Second');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/splash.png')}
        style={styles.background}
      >
        <View style={[styles.container, { height: windowHeight }]}>
           

           <TouchableOpacity onPress={goToSplashScreen}>

           <Image
           source={require('../../assets/images/luckyonelogo.png')}
           style={styles.logo}
           
           />
           </TouchableOpacity>
           
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    padding: 13,
    backgroundColor: "#3DB9EA",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo:{
    height:150,
    width:250,
    resizeMode:'contain'

  }
});

export default Splash;
