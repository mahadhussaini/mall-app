import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image, TextInput,ScrollView, Pressable } from "react-native";
 
import { SafeAreaView } from "react-native-safe-area-context";
import { baseurl } from "../../BaseUrl";
import CenteredModal from "./Modal";


interface parking{


}


const Parking: React.FC = ({ navigation  }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.9;  // 90% of the device width
const imageHeight = (imageWidth / 345) * 435;


  const handle_callback=(flag:any)=>{

    console.log(flag,"FLAG PARENT")

    get_products()


  }



   
  const goToSplashScreen = () => {
    navigation.navigate('Mall_Signup');
  };

  

const [parking,setparking]=useState([])


  useEffect(()=>{
    get_products()
  },[])
  const [isPressed, setIsPressed] = useState(false);

  const get_products = async () => {
    try {

      


        

        const response = await fetch(`${baseurl}/get_parkings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Success: Parking', data);

            setparking(data.data)

         



             
        } else {
            console.error('Error TS:', response.statusText);
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

        <ScrollView>

       <View style={{
        flexDirection:'row',
        justifyContent:'space-evenly',
        // gap:18,
        // backgroundColor:'red',
        width:'100%',
        alignItems:'center',
        marginTop:20,
        marginBottom:20
       }}>

        <Text style={{ 
    color: '#202020',
    fontFamily: 'Raleway',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: -0.28,}}>
        Parking 
        </Text>


            {/* <View style={{
                width:30,
                height:30,
                backgroundColor:'#FFFFFF',
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row'
            }}>

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Raleway',
                 fontSize: 18,
                 fontStyle: 'normal',
                 fontWeight: '700',
                 lineHeight: 24,
                 letterSpacing: -0.18,
            }}> 
                5
            </Text>

            </View> */}
            
            <Text style={{
                 color: '#333333', // Ensure the color code is a full six digits
                 textAlign: 'center',
                 fontFamily: 'Poppins',
                 fontSize: 18,
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 // Assuming 'normal' translates to the same value as fontSize
                 letterSpacing: 1,
                 alignItems:'center'
            }}>
                Choose Parking
            </Text>


       </View>

       <ScrollView horizontal={true} style={{ marginBottom: 50,marginLeft:20 }}>
      <View style={{ flexDirection: 'row', gap: 15 ,marginRight:20}}>

        <TouchableOpacity style={{
          width: 100,
          height: 40,
          borderRadius: 9,
          backgroundColor: '#F47E34',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
            1st Floor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 100,
          height: 40,
          borderRadius: 9,
          backgroundColor: '#F47E34',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
            2nd Floor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 100,
          height: 40,
          borderRadius: 9,
          backgroundColor: '#F47E34',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
            3rd Floor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 100,
          height: 40,
          borderRadius: 9,
          backgroundColor: '#F47E34',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
            4th Floor
          </Text>
        </TouchableOpacity>


        
         



        </View>
          </ScrollView>

 
 



          <ScrollView horizontal={true}>
<View style={{flexDirection:"row"}}>

 <View style={{marginLeft:20}}>
  <View style={{justifyContent:"center",alignItems:"center",marginBottom:20}}>
<TouchableOpacity style={{width:40,height:40, borderRadius: 4,
    backgroundColor: 'rgba(244, 126, 52, 0.10)',}}>
  <Text style={{ color: '#F47E34',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    // If you need the line-height to be the same as the font size
    letterSpacing: 1,}}>
    A
  </Text>
</TouchableOpacity>

  </View>
          <ScrollView horizontal={true} style={{ marginBottom: 50,width:343 , }}>


          {
   parking.filter(e=>e.parking_slot==="A").slice(0,3).map((e,i)=>(
    <View style={{borderWidth:5,
                 borderColor: '#757897', // Color of the border
                 borderStyle: 'dashed',
                 marginRight:5
}} key={i}>
        {
    e.parking_occupied==="1" ?
      ( <View>

        <Image
       source={require("../../assets/images/car.png")}
        style={{height:100,width:100}}
        
        />
    
        </View>)
      :
      (<View style={{height:100,width:100,alignItems:'center',justifyContent:'center'}}>
         <PressableItem key={i} parking_id={e._id} parking_slot={e.parking_slot}
          parking_zone={e.parking_number}  handle_callback={handle_callback}/>
        </View>)


  }
 

    </View>

    ))
}


</ScrollView>

<ScrollView horizontal={true} style={{ marginBottom: 50,width:343 , }}>

{
   parking.filter(e=>e.parking_slot==="A").slice(3,6).map((e,i)=>(
    <View style={{borderWidth:5,
                 borderColor: '#757897', // Color of the border
                 borderStyle: 'dashed',
                 marginRight:5
}} key={i}>
        {
    e.parking_occupied==="1" ?
      ( <View>

        <Image
       source={require("../../assets/images/car.png")}
        style={{height:100,width:100}}
        
        />
    
        </View>)
      :
      (<View style={{height:100,width:100,alignItems:'center',justifyContent:'center'}}>
         <PressableItem key={i} parking_id={e._id} parking_slot={e.parking_slot}
          parking_zone={e.parking_number}  handle_callback={handle_callback}/>
        </View>)


  }
 

    </View>

    ))
}



</ScrollView>


<ScrollView horizontal={true} style={{ marginBottom: 50,width:343 , }}>


{
   parking.filter(e=>e.parking_slot==="A").slice(6,9).map((e,i)=>(
    <View style={{borderWidth:5,
                 borderColor: '#757897', // Color of the border
                 borderStyle: 'dashed',
                 marginRight:5
}} key={i}>
        {
    e.parking_occupied==="1" ?
      ( <View>

        <Image
       source={require("../../assets/images/car.png")}
        style={{height:100,width:100}}
        
        />
    
        </View>)
      :
      (<View style={{height:100,width:100,alignItems:'center',justifyContent:'center'}}>
         <PressableItem key={i} parking_id={e._id} parking_slot={e.parking_slot}
          parking_zone={e.parking_number}  handle_callback={handle_callback} />
        </View>)


  }
 

    </View>

    ))
}


</ScrollView>
 </View>


 



 

  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5,paddingLeft:10,
    paddingRight:10
  }}>
    <Image
    source={require("../../assets/images/orangedot.png")}
    style={{height:30,
      width:30
    }}
    />
     <View>
      <Text>
        Entry
      </Text>
    </View>
  <View style={{ }}>
      <View style={{width: 1,                  // Width of the line
    height: 500,               // Height of the line (adjust as needed)
    borderWidth: 3,
    borderColor: '#757897',       // Line color (black in this case)
    borderStyle: 'dashed',}} />
    </View>

   
  </View>







  <View>
  <View style={{justifyContent:"center",alignItems:"center",marginBottom:20}}>
<TouchableOpacity style={{width:40,height:40, borderRadius: 4,
    backgroundColor: 'rgba(244, 126, 52, 0.10)',}}>
  <Text style={{ color: '#F47E34',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    // If you need the line-height to be the same as the font size
    letterSpacing: 1,}}>
    B
  </Text>
</TouchableOpacity>

  </View>
          <ScrollView horizontal={true} style={{ marginBottom: 50,width:343 , }}>

          {
   parking.filter(e=>e.parking_slot==="B").slice(0,3).map((e,i)=>(
    <View style={{borderWidth:5,
                 borderColor: '#757897', // Color of the border
                 borderStyle: 'dashed',
                 marginRight:5
}} key={i}>
        {
    e.parking_occupied==="1" ?
      ( <View>

        <Image
       source={require("../../assets/images/car.png")}
        style={{height:100,width:100}}
        
        />
    
        </View>)
      :
      (<View style={{height:100,width:100,alignItems:'center',justifyContent:'center'}}>
         <PressableItem key={i} parking_id={e._id} parking_slot={e.parking_slot}
          parking_zone={e.parking_number}  handle_callback={handle_callback} />
        </View>)


  }
 

    </View>

    ))
}



</ScrollView>

<ScrollView horizontal={true} style={{ marginBottom: 50,width:343 , }}>


{
   parking.filter(e=>e.parking_slot==="B").slice(3,6).map((e,i)=>(
    <View style={{borderWidth:5,
                 borderColor: '#757897', // Color of the border
                 borderStyle: 'dashed',
                 marginRight:5
}} key={i}>
        {
    e.parking_occupied==="1" ?
      ( <View>

        <Image
       source={require("../../assets/images/car.png")}
        style={{height:100,width:100}}
        
        />
    
        </View>)
      :
      (<View style={{height:100,width:100,alignItems:'center',justifyContent:'center'}}>
         <PressableItem key={i} parking_id={e._id} parking_slot={e.parking_slot}
          parking_zone={e.parking_number}  handle_callback={handle_callback}/>
        </View>)


  }
 

    </View>

    ))
}



</ScrollView>


<ScrollView horizontal={true} style={{ marginBottom: 50,width:343 , }}>


{
   parking.filter(e=>e.parking_slot==="B").slice(6,9).map((e,i)=>(
    <View style={{borderWidth:5,
                 borderColor: '#757897', // Color of the border
                 borderStyle: 'dashed',
                 marginRight:5
}} key={i}>
        {
    e.parking_occupied==="1" ?
      ( <View>

        <Image
       source={require("../../assets/images/car.png")}
        style={{height:100,width:100}}
        
        />
    
        </View>)
      :
      (<View style={{height:100,width:100,alignItems:'center',justifyContent:'center'}}>
         <PressableItem key={i} parking_id={e._id} parking_slot={e.parking_slot}
          parking_zone={e.parking_number} handle_callback={handle_callback}/>
        </View>)


  }
 

    </View>

    ))
}


</ScrollView>
 </View>



</View>
          </ScrollView>






 </ScrollView>


      



        


 

 
           
           
        </View>
        
      </ImageBackground>
    </SafeAreaView>
  );
};

const PressableItem = ({parking_id,parking_slot,parking_zone,handle_callback}:any) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);

  const handle_callback1=(flag:any)=>{

    console.log(flag,"FLAGttttt")

    handle_callback("FLAG TRUE")



  }

  return (
    <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
       

     <CenteredModal parking_id={parking_id} parking_slot={parking_slot} parking_zone={parking_zone} callback={handle_callback1}/>
     
        
    </View>
  );
};





const styles = StyleSheet.create({
  dashedLine: {
    width: '100%', // You can set a specific width if needed
    height: 1, // Adjust the height to make the line thicker
    borderWidth: 1,
    borderColor: '#000', // Set your desired color
    borderStyle: 'dashed',
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingLeft:10,
    paddingRight:10
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
    // 
    
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

,

  button1: {
    backgroundColor: 'rgba(244, 126, 52, 0.10)',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  
  },
  buttonPressed: {
    backgroundColor: 'rgba(244, 126, 52, 0.40)',
    borderColor:'#F47E34',
    borderWidth:1
  },
});

export default Parking;
















