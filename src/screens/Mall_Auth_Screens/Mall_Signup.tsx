import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseurl } from "../../BaseUrl";

const Mall_Signup: React.FC = ({ navigation,setUserIsAuthenticated  }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.9;  // 90% of the device width
const imageHeight = (imageWidth / 345) * 435;

   
  const goToSplashScreen = () => {
    navigation.navigate('Mall_Login');
  };
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [Home_Address, onChangeHome_Address] = React.useState('');
  const [reenterpassword, onChangeReenterPassword] = React.useState('');


  const handleSignUp = async () => {
    const requestData = {
        type:'customer',
        email:email.toLowerCase(),
        
        password,
        zipCode:"123",
        Home_Address:"US",
        Name:name

        
    };

    console.log(requestData,"REQ")

    try {
        const response = await fetch(`${baseurl}/create-customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);

            navigation.navigate("Mall_Login")

           ;
        } else {
            console.error('Error TS11:', response.statusText);
            
        }
    } catch (error) {
        console.error('Error:', error);

        
    }
};



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/loginbackground.png')}
        style={styles.background}
      >
        <View style={[styles.container, { height: windowHeight }]}>

        <View >
        <Image
        source={require('../../assets/images/signuppic.png')}
        // style={[styles.logo, { width: imageWidth, height: imageHeight }]}

        style={[styles.logo ]}
        
        />      
        
        
        </View>  

<ScrollView>

    <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center' ,gap:10,marginBottom:35}}>

        <View style={{alignItems:'center'}}>


    <Text style={styles.text}>
    Sign Up
        </Text>

        <Text style={{color:'black',fontSize:16,textAlign:'center'}}>
        Ready to jump in the luxurious{'\n'}Shopping Experience
        </Text>
        </View>


 


<View style={{flexDirection:'column',gap:15}}>

    

<View style={styles.inputWrapper}>
        <Image
          source={require('../../assets/images/email.png')}
          style={styles.icon}
        />
        <TextInput
         style={{
          color:'black'
        }}
        
          placeholder="Enter Your Name"
          placeholderTextColor="#736B66"
          
          onChangeText={onChangeName}
          value={name}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Image
          source={require('../../assets/images/email.png')}
          style={styles.icon}
        />
        <TextInput
         style={{
          color:'black'
        }}
          placeholder="Enter Your Email"
          placeholderTextColor="#736B66"
         
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>


      <View style={styles.inputWrapper}>
        <Image
          source={require('../../assets/images/lock.png')}
          style={styles.icon}
        />
        <TextInput
         style={{
          color:'black'
        }}
          placeholder="Enter Your Password"
          placeholderTextColor="#736B66"
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={password}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Image
          source={require('../../assets/images/lock.png')}
          style={styles.icon}
        />
        <TextInput
         style={{
          color:'black'
        }}
          placeholder="Re-enter Password"
          placeholderTextColor="#736B66"
          secureTextEntry={true}
        />
      </View>

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
    
    
    }} onPress={handleSignUp}>
            <Text style={{color:'white',fontSize:18}}>
            Sign Up
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

<TouchableOpacity onPress={goToSplashScreen}>


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
            </TouchableOpacity>
        </View>

        <Text style={{   color: '#F47E34',
    textAlign: 'center',
    fontFamily: 'Barlow',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 14,  // Adjust if you need a specific line height
    letterSpacing: -0.028,
    textDecorationLine: 'underline',
    }}>
        Forgot Password
        </Text>

</View>
 

         


         


    </View>

</ScrollView>

 
           
           
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

export default Mall_Signup;
















