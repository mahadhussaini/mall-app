import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash_Third: React.FC = ({ navigation  }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.9;  // 90% of the device width
const imageHeight = (imageWidth / 345) * 435;

   
  const goToSplashScreen = () => {
    navigation.navigate('Splash_Four');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/screentwobackground.png')}
        style={styles.background}
      >
        <View style={[styles.container, { height: windowHeight }]}>

        <View >
        <Image
        source={require('../../assets/images/pinkdressgirl.png')}
        // style={[styles.logo, { width: imageWidth, height: imageHeight }]}

        style={[styles.logo ]}
        
        />      
            <Image
            source={require('../../assets/images/smalllogo.png')}
            style={styles.logo1}
            
            />
        
        </View>  


    <View style={{flexDirection:'column',gap:10}}>
    <Text style={styles.text}>
    Take Advantage{'\n'}of the Offer Shopping
        </Text>

        <Text style={{color:'black',fontSize:16 }}>
        Publish up your selfies to make yourself {'\n'}more beautiful with our app!
        </Text>


    </View>
{/* <View style={{right:100,marginTop:10}}> */}

<View  style={{flexDirection:'row',gap:125,alignItems:'center'}}>


    <View style={{flexDirection:'row',gap:5}}>

    <View style={{width:50,height:10,backgroundColor:'#FED44B',flexShrink:0,borderRadius:20}}>
        
    </View>
        <View style={{flexDirection:'row',gap:5}}>
        <View style={{width:10,height:10,borderRadius:200,backgroundColor:'#BFBFBF'}}>

        </View>
        <View style={{width:10,height:10,borderRadius:200,backgroundColor:'#BFBFBF'}}>

        </View>
        </View>

    </View>

<TouchableOpacity onPress={goToSplashScreen}>

    <Image
    source={require("../../assets/images/arrowyellow.png")}
    style={{width:65,height:65,resizeMode:'contain'}}
    
    />
</TouchableOpacity>

</View>

           
           
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
    fontSize: 30,
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
     width:345,
     height:380,
    flexShrink:0,
    resizeMode:'contain'
  },
  logo1:{
   height:50,
   width:100,
   resizeMode: 'contain',
    flexShrink:0,
    marginTop: -20,
    marginLeft:20,
    // backgroundColor:'yellow'
    
  }
});

export default Splash_Third;
















