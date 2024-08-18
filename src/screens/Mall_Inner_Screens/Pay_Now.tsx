import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image, TextInput,ScrollView } from "react-native";
 
import { SafeAreaView } from "react-native-safe-area-context";

const Pay_Now: React.FC = ({ navigation  }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.9;  // 90% of the device width
const imageHeight = (imageWidth / 345) * 435;

   
  const goToSplashScreen = () => {
    navigation.navigate('Mall_Signup');
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
        justifyContent:'center',
        gap:18,
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
        Cart
        </Text>


            <View style={{
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

            </View>
            <TouchableOpacity style={{
                width:100,
                height:40,
                borderRadius:9,
                backgroundColor:'#F47E34',
                justifyContent:'center',
                alignItems:'center'
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
                    Delivery
                </Text>
            </TouchableOpacity>



            <TouchableOpacity style={{
                width:100,
                height:40,
                borderRadius:9,
                borderWidth: 1,
                borderColor: '#F47E34',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{
                     color: '#333',
                     textAlign: 'center',
                     fontFamily: 'Poppins',
                     fontSize: 14,
                     fontStyle: 'normal',
                     fontWeight: 'bold',
                     letterSpacing: 1,
                }}>
                   PickUp
                </Text>
            </TouchableOpacity>


       </View>



       <View style={{
        flexDirection:'column',
        gap:20,
        paddingLeft:10,
        paddingRight:10
       }}>

        <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:130,
            height:120,
            resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
            
           
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor 
            </Text>

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Raleway',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: 18,
                 letterSpacing: -0.14,
            }}>
            Pink, Size M
            </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Pink, Size M
                </Text>

                <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Less.png')}
                style={{width:30,
                        height:30
                }}
                
                />
            </TouchableOpacity>

            <View style={{borderRadius:7,width:37,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                1
                </Text>
            </View>

            <TouchableOpacity>
                <Image
                source={require('../../assets/images/More.png')}
                style={{width:30,
                    height:30
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:3
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                $17,00
                </Text>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                <Text style={{
                    color: '#000000',
                    fontFamily: 'Raleway',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 18,
                    letterSpacing: -0.14,
                }}>
                    Remaining:
                </Text>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 12,
                     fontStyle: 'normal',
                     fontWeight: '700',
                     lineHeight: 18,
                     letterSpacing: -0.14,
                }}>
                19 MIN 46 SEC
                </Text>
             

          

             
                </View>


                 


            </View>

        </View>
        
        


        </View>

        <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:130,
            height:120,
            resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
            
           
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor 
            </Text>

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Raleway',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: 18,
                 letterSpacing: -0.14,
            }}>
            Pink, Size M
            </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Pink, Size M
                </Text>

                <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Less.png')}
                style={{width:30,
                        height:30
                }}
                
                />
            </TouchableOpacity>

            <View style={{borderRadius:7,width:37,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                1
                </Text>
            </View>

            <TouchableOpacity>
                <Image
                source={require('../../assets/images/More.png')}
                style={{width:30,
                    height:30
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:3
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                $17,00
                </Text>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                <Text style={{
                    color: '#000000',
                    fontFamily: 'Raleway',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 18,
                    letterSpacing: -0.14,
                }}>
                    Remaining:
                </Text>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 12,
                     fontStyle: 'normal',
                     fontWeight: '700',
                     lineHeight: 18,
                     letterSpacing: -0.14,
                }}>
                19 MIN 46 SEC
                </Text>
             

          

             
                </View>


                 


            </View>

        </View>
        
        


        </View>


        <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:130,
            height:120,
            resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
            
           
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor 
            </Text>

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Raleway',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: 18,
                 letterSpacing: -0.14,
            }}>
            Pink, Size M
            </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Pink, Size M
                </Text>

                <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Less.png')}
                style={{width:30,
                        height:30
                }}
                
                />
            </TouchableOpacity>

            <View style={{borderRadius:7,width:37,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                1
                </Text>
            </View>

            <TouchableOpacity>
                <Image
                source={require('../../assets/images/More.png')}
                style={{width:30,
                    height:30
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:3
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                $17,00
                </Text>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                <Text style={{
                    color: '#000000',
                    fontFamily: 'Raleway',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 18,
                    letterSpacing: -0.14,
                }}>
                    Remaining:
                </Text>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 12,
                     fontStyle: 'normal',
                     fontWeight: '700',
                     lineHeight: 18,
                     letterSpacing: -0.14,
                }}>
                19 MIN 46 SEC
                </Text>
             

          

             
                </View>


                 


            </View>

        </View>
        
        


        </View>



        <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:130,
            height:120,
            resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
            
           
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor 
            </Text>

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Raleway',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: 18,
                 letterSpacing: -0.14,
            }}>
            Pink, Size M
            </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Pink, Size M
                </Text>

                <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Less.png')}
                style={{width:30,
                        height:30
                }}
                
                />
            </TouchableOpacity>

            <View style={{borderRadius:7,width:37,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                1
                </Text>
            </View>

            <TouchableOpacity>
                <Image
                source={require('../../assets/images/More.png')}
                style={{width:30,
                    height:30
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:3
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                $17,00
                </Text>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                <Text style={{
                    color: '#000000',
                    fontFamily: 'Raleway',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 18,
                    letterSpacing: -0.14,
                }}>
                    Remaining:
                </Text>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 12,
                     fontStyle: 'normal',
                     fontWeight: '700',
                     lineHeight: 18,
                     letterSpacing: -0.14,
                }}>
                19 MIN 46 SEC
                </Text>
             

          

             
                </View>


                 


            </View>

        </View>
        
        


        </View>


        <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:130,
            height:120,
            resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
            
           
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor 
            </Text>

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Raleway',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: 18,
                 letterSpacing: -0.14,
            }}>
            Pink, Size M
            </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Pink, Size M
                </Text>

                <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Less.png')}
                style={{width:30,
                        height:30
                }}
                
                />
            </TouchableOpacity>

            <View style={{borderRadius:7,width:37,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                1
                </Text>
            </View>

            <TouchableOpacity>
                <Image
                source={require('../../assets/images/More.png')}
                style={{width:30,
                    height:30
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:3
                
            }}>
                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 14,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                $17,00
                </Text>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                <Text style={{
                    color: '#000000',
                    fontFamily: 'Raleway',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 18,
                    letterSpacing: -0.14,
                }}>
                    Remaining:
                </Text>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 12,
                     fontStyle: 'normal',
                     fontWeight: '700',
                     lineHeight: 18,
                     letterSpacing: -0.14,
                }}>
                19 MIN 46 SEC
                </Text>
             

          

             
                </View>


                 


            </View>

        </View>
        
        


        </View>

       


        

        


         



        
       </View>



        


</ScrollView>

<View style={{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    // 
    width:'100%',
    height:60,
    marginBottom:20
    
    }}>
    <Text style={{
          color: '#202020',
          fontFamily: 'Raleway',
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 22,
          letterSpacing: -0.18,

          
    }}>
        Total $34,00
    </Text>

    <TouchableOpacity style={{
        backgroundColor:'#F47E34',
        borderRadius:11,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:120
    }}>
        <Text style={{
             color: '#F3F3F3',
             textAlign: 'center',
             fontFamily: 'Nunito Sans',
             fontSize: 16,
             fontStyle: 'normal',
             fontWeight: 'bold',
             lineHeight: 25,
        }}>
            To Pay
        </Text>
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
});

export default Pay_Now;
















