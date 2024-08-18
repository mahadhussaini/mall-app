import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity, Image, TextInput,ScrollView } from "react-native";
 
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { DevSettings } from "react-native";


interface Products {
    [x: string]: ReactNode;
    product_name: ReactNode;
    product_image: string | undefined;
    product_brand_image: string | undefined;
    
  }



const Add_to_cart: React.FC = ({ navigation ,setUserIsAuthenticated }:any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.9;  // 90% of the device width
const imageHeight = (imageWidth / 345) * 435;
const [products,setproducts]=useState<Products[]>([])

   
  const goToSplashScreen = () => {
    navigation.navigate('Pay_Now');
  };

  const Logout = async () => {
    console.log("LOG OUT")
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('cart');

    // navigation.dispatch(
    //     CommonActions.reset({
    //       index: 0,
    //       routes: [{ name: 'Mall_Signup' }],  // Adjust the route name as necessary
    //     })
    //   );
     

    DevSettings.reload();
  }



  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Error retrieving cart:', e);
    }
  };



//   useEffect(() => {
//     const fetchCart = async () => {
//       const cartItems = await getCart();
//       setproducts(cartItems)
//       console.log(cartItems,"RETRIEVE CARTS ITEMS"); // or update state with the cart items
//     };

//     fetchCart();
//   }, []);

const [price1,setprice1]=useState<number>(0)

  useFocusEffect(
    React.useCallback(() => {
        const fetchCart = async () => {
            const cartItems = await getCart();

            let price=0

            cartItems.forEach((element: any) => {
                price = price1 + parseInt(element.product_price)  
                setprice1(price)
            });


             
            setproducts(cartItems)
            console.log(cartItems,"RETRIEVE CARTS ITEMS",price); // or update state with the cart items
          };
        fetchCart();
    }, [])
  );


  const removeItemFromCart = async (itemId: any) => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      let currentCart = jsonValue != null ? JSON.parse(jsonValue) : [];
      currentCart = currentCart.filter((item: {
          _id: any; id: any; 
}) => item._id !== itemId);
      await AsyncStorage.setItem('cart', JSON.stringify(currentCart));
      setproducts(currentCart); // Update the local state as well


      let price=0

      currentCart.forEach((element: any) => {
          price = price1 + parseInt(element.product_price)  
          setprice1(price)
      });
    } catch (e) {
      console.error('Error removing item from cart:', e);
    }
  };

  const totalPrice = products.reduce((acc, product) => acc + parseInt(product.product_price),0);


  const [counts, setCounts] = useState<number[]>(products.map(() => 1));

  const increment = (index: number) => {

    console.log(index)

    setCounts(prevCounts => {
        const newCounts = [...prevCounts];
        newCounts[index]++;
        return newCounts;
    });
};

const decrement = (index: number) => {
    setCounts(prevCounts => {
        const newCounts = [...prevCounts];
        if (newCounts[index] > 1) {
            newCounts[index]--;
        }
        return newCounts;
    });
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
        marginTop:20
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
                2
            </Text>

            </View>
            <TouchableOpacity style={{
                width:100,
                height:40,
                borderRadius:9,
                backgroundColor:'#F47E34',
                justifyContent:'center',
                alignItems:'center'
            }}
            onPress={goToSplashScreen}>
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
            }} onPress={Logout}>
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

<View style={{justifyContent:'center',alignItems:'center'}}>
       <View style={{
        width:340,
        backgroundColor:'#F9F9F9',
        height:70,
        borderRadius:10,
        marginBottom:20,
        marginTop:20
        
       }}> 

       <Text style={{
         color: '#202020',
         fontFamily: 'Raleway',
         fontSize: 14,
         fontStyle: 'normal',
         fontWeight: 'bold',
         lineHeight: 18,
         letterSpacing: -0.14,
         padding:10
       }}>
       Shipping Address
       </Text>

       <View style={{
        flexDirection:'row',
        justifyContent:'space-evenly'
       }}>
        <Text style={{
            color: '#000000',
            fontFamily: 'Nunito Sans',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '400',
            
        }}>
        26, Duong So 2, Thao Dien Ward, An Phu, District 2,{'\n'} Ho Chi Minh city
        </Text>

        
        <TouchableOpacity>

        <Image
        source={require('../../assets/images/orange_button.png')}
        style={{width:30,height:30}}
        
        />
        </TouchableOpacity>
       </View>


       </View>

</View>

       <View style={{
        flexDirection:'column',
        gap:20,
        paddingLeft:15,
        paddingRight:15
       }}>



{
    products.map((e,i)=>(

        <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }} key={i}>


 <View style={{flexDirection:'row'}}>

<TouchableOpacity style={{backgroundColor:'white',width:40,height:40,alignItems:'center',justifyContent:'center',borderRadius:20,position:'absolute',zIndex:7,marginTop:70,marginLeft:15}} onPress={() => removeItemFromCart(e._id)}>

 
    
    <Image
    source={require('../../assets/images/delete.png')}
    style={{height:30,width:30,resizeMode:'contain'}}
    
    />
    
     
</TouchableOpacity>
        <Image
        source={{uri:e.product_image}}
        style={{
            width:150,
            height:120,
            resizeMode:'cover',
            borderRadius:20
        }}
        />

 </View>


        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:10
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            {
                e.product_name
            }
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
            {/* Pink, Size M */}
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
                       fontSize: 18,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Rs.{e.product_price}
                </Text>

                <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity onPress={()=>{decrement(i)}}>
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

                {/* {counts[i]} */}1
                
                </Text>
            </View>

            <TouchableOpacity onPress={()=>{increment(i)}}>
                <Image
                source={require('../../assets/images/More.png')}
                style={{width:30,
                    height:30
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

        </View>
        
        


        </View>


    ))
}








        {/* <View style={{
            flexDirection:'row',
            width:340,
            gap:5
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:150,
            height:120,
             resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:10
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
                       fontSize: 18,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                $17,00
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

        </View>
        
        


        </View> */}


        <Text style={{ 
            color: '#000000',
    fontFamily: 'Raleway',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    // React Native doesn't support 'normal' as a value; omit it if you want the default
    letterSpacing: -0.22,}}>
        From Your Wishlist
        </Text>

        <View style={{
            flexDirection:'row',
            width:340,
            
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:150,
            height:120,
             resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:10
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor{'\n'} sit amet consectetur.
            </Text>

            

            <View style={{
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>

                <View style={{
                    // backgroundColor:'blue',
                    width:150
                }}>

                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 18,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Rs.17.00
                </Text>
                </View>

                <View style={{flexDirection:'row',gap:15,justifyContent:'center',alignItems:'center'}}>


            
            <View style={{flexDirection:'row',gap:10,paddingLeft:10}}>


            <View style={{borderRadius:7,width:55,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                Spicy
                </Text>
            </View>


            <View style={{borderRadius:7,width:55,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                M
                </Text>
            </View>

            </View>




            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Add.png')}
                style={{width:30,
                    height:30,
                    resizeMode:'contain'
            }}
                />
            </TouchableOpacity>
                </View>


                 


            </View>

        </View>
        
        


        </View>


        <View style={{
            flexDirection:'row',
            width:340
        }}>

        <Image
        source={require('../../assets/images/food_image.png')}
        style={{
            width:150,
            height:120,
             resizeMode:'cover',
            borderRadius:20
        }}
        />

        <View style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:10
        }}> 

            <Text style={{
                 color: '#000000',
                 fontFamily: 'Nunito Sans',
                 fontSize: 14,
                 fontStyle: 'normal',
                 fontWeight: '400',
                 lineHeight: 16,
            }}>
            Lorem ipsum dolor{'\n'} sit amet consectetur.
            </Text>

            

            <View style={{
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10
                
            }}>
                  <View style={{
                    // backgroundColor:'blue',
                    width:150
                }}>

                <Text style={{
                       color: '#202020',
                       fontFamily: 'Raleway',
                       fontSize: 18,
                       fontStyle: 'normal',
                       fontWeight: '700',
                       lineHeight: 22,
                       letterSpacing: -0.18,
                }}>
                Rs.17.00
                </Text>
                </View>

                <View style={{flexDirection:'row',gap:15,justifyContent:'center',alignItems:'center'}}>


            
            <View style={{flexDirection:'row',gap:10,paddingLeft:10}}>


            <View style={{borderRadius:7,width:55,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                Spicy
                </Text>
            </View>


            <View style={{borderRadius:7,width:55,backgroundColor:'#E5EBFC',height:38,alignItems:'center',justifyContent:'center',}}>
                <Text style={{
                     color: '#000000',
                     fontFamily: 'Raleway',
                     fontSize: 16,
                     fontStyle: 'normal',
                     fontWeight: '500',
                     lineHeight: 20,
                     letterSpacing: -0.16,
                }}>

                M
                </Text>
            </View>

            </View>




            <TouchableOpacity>
                <Image
                source={require('../../assets/images/Add.png')}
                style={{width:30,
                    height:30,
                    resizeMode:'contain'
            }}
                />
            </TouchableOpacity>
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
    // backgroundColor:'yellow',
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
        Total Rs.{totalPrice }
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
            Checkout
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

export default Add_to_cart;
















