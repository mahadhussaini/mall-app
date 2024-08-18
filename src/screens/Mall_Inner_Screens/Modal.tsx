import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Button, Pressable,TouchableOpacity, Image, ImageBackground } from 'react-native';
import { baseurl } from '../../BaseUrl';
 

const CenteredModal = ({parking_id,parking_slot,parking_zone,callback}:any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);



  
  const AcceptHandle = async (e:any) => {
 
    const requestData = {
         
      parking_id:parking_id      


        

        
    };

    console.log(requestData,"Accept handle")

    try {
        const response = await fetch(`${baseurl}/edit_parking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Success Parking:', data);

            setModalVisible(false)

            callback("FLAGGG")

            

            
           

            

             

             
          
        } else {
            console.error('Error TS:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};






  return (

    <View style={styles.container}>
  
        

         <Pressable
        onPressIn={() => setIsPressed(true) }
        onPress={() => setModalVisible(true)}
        onPressOut={() => setIsPressed(false)}
        style={({ pressed }) => [
          styles.button1,
          pressed || isPressed ? styles.buttonPressed : null,
        ]}
      >
        <Text style={{width:60,height:30}}></Text>
      </Pressable>

      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={{gap:10,justifyContent:'center',alignItems:'center',marginBottom:20}}>
          <Text style={{ 
            textAlign: 'center',
            color:"#F47E34",
            fontSize:25,
            fontWeight:"bold"
          }}> 
              Reserve Your Parking Space
            </Text>

            <View style={{flexDirection:'row',gap:10}}>
          <Text style={styles.modalText}> 
              Parking Zone: 
            </Text>
            <Text style={{
              textAlign: 'center',
                          color:"#8B4000",
                          fontSize:20,
                          fontWeight:"bold"}}> 
                {parking_slot}
            </Text>
            <Text style={styles.modalText}> 
              Parking Slot: 
            </Text>

            <Text style={{
              textAlign: 'center',
              color:"#8B4000",
              fontSize:20,
              fontWeight:"bold"
            }}> 
              {parking_zone}
            </Text>

            </View>
        

            <Text style={styles.modalText}> 
            Would you like to reserve this parking space?
 
            </Text>


            <View style={{flexDirection:'row' , justifyContent:'center', paddingTop:20,gap:20}}>
<TouchableOpacity style={{
  
    backgroundColor:'#F47E34',
    borderRadius:15
 
} }  onPress={AcceptHandle}>
<Image
source={require('../../assets/images/white_check.png')}
style={styles.cross_logo}
/>
</TouchableOpacity>

<TouchableOpacity  style={{
  backgroundColor:'white',
  borderRadius:15
}}onPress={() => setModalVisible(!modalVisible)}>
<Image
source={require('../../assets/images/orange_cross.png')}
style={styles.cross_logo}
/>
</TouchableOpacity>
</View>


</View>


             <View>

              <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}  >

              <Image
              source={require("../../assets/images/crossx.png")}
              style={{height:30,width:30}}
              
              />
              </TouchableOpacity>
             </View>

              
             
          </View>
        </View>
      </Modal>
    </View>

   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross_logo:{
    height:50,
    width:50

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    height: 350,
    backgroundColor: '#fff5cc',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'transparent',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    color:"#F47E34",
    fontSize:20,
    fontWeight:"bold"
  },




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

  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
   
  },
});

export default CenteredModal;
