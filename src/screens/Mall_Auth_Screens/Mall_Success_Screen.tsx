import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Mall_Success_Screen: React.FC = ({ navigation  }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.9;  // 90% of the device width
const imageHeight = (imageWidth / 345) * 435;

   
  const goToSplashScreen = () => {
    navigation.navigate('FirstInner');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/loginbackground.png')}
        style={styles.background}
      >
        <View style={[styles.container, { height: windowHeight }]}>



            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',gap:100}}>



          <View>
            <Image
            source={require('../../assets/images/luckyonelogo.png')}
            style={{resizeMode:'contain',height:90,width:125}}
            
            />
          </View>


          <View style={{justifyContent:'center',alignItems:'center',gap:10}}>
          <Image
            source={require('../../assets/images/roundcheck.png')}
            style={{resizeMode:'contain',height:90,width:125}}
            
            />

            <Text style={{ color: '#000',
    fontFamily: 'Raleway',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',}}>
                Success
            </Text>

            <Text style={{ color: '#000',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',}}>
            You Have successfully Registered{'\n'}In mega shopping experience
            </Text>

          </View>

          <View style={{gap:10}}>
          <TouchableOpacity
     style={{backgroundColor:'#F47E34',  
     width: 343,
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius:200,
    flexDirection:'row',
    gap:10,
    
    
    }} onPress={goToSplashScreen}>
            <Text style={{color:'white',fontSize:18}}>
            Start Shopping
            </Text>

            <Image
            source={require("../../assets/images/arrow.png")}
            style={{width:24,height:24}}
            />
        </TouchableOpacity>

        <View style={{flexDirection:'row' ,justifyContent:'center' ,gap:5}}>
            <Text 
    style={{color: '#736B66',  // Replace with your variable if necessary
    textAlign: 'center',
    fontFamily: 'Barlow',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
       // Adjust if you need a specific line height
    letterSpacing: -0.028,
    }}>
            Already have an account?
            </Text>

            <Text style={{
                  color: '#F47E34',  // Replace with your variable if necessary
                  fontFamily: 'Barlow',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '700',
                    // Adjust if you need a specific line height
                  letterSpacing: -0.028,
                  textDecorationLine: 'underline',
            }}>
            Sign In.
            </Text>
        </View>

      
          </View>
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
     
    paddingHorizontal: 10,
    width: 343, 
    borderRadius: 1234,
    borderWidth: 1,
    borderColor: '#F47E34',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(251, 86, 7, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    
    
    
    // Ensure the input field spans the full width of its container
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
     height:290,
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
    
  },
  input:{
    borderRadius: 1234,
    borderWidth: 1,
    borderColor: '#F47E34',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(251, 86, 7, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    
  },
  icon:{
    height:20,
    width:20
  }
});

export default Mall_Success_Screen;
















