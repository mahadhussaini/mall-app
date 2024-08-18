import React, { ReactNode, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { baseurl } from '../../BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Products {
  product_name: ReactNode;
  product_image: string | undefined;
  product_brand_image: string | undefined;
}

const FirstInner = ({ navigation }: any) => {
  const windowHeight = Dimensions.get('window').height; // Get the height of the window
  const { width, height } = Dimensions.get('window');
  const imageWidth = width * 0.9; // 90% of the device width
  const imageHeight = (imageWidth / 345) * 435;

  const [products, setproducts] = useState<Products[]>([]);

  const goToSplashScreen = () => {
    navigation.navigate('FirstInner');
  };

  useEffect(() => {
    get_products();
  }, []);

  const get_products = async () => {
    try {
      const response = await fetch(`${baseurl}/get_products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success: Products', data);

        setproducts(data.data);
      } else {
        console.error('Error TS:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleProductClick = async (product: any) => {
    try {
      console.log(product, 'PRODUCTS ASYNC');

      const jsonValue = await AsyncStorage.getItem('cart');
      const currentCart = jsonValue != null ? JSON.parse(jsonValue) : [];
      currentCart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(currentCart));
    } catch (e) {
      console.error('Error adding product to cart:', e);
    }
  };

  const [name, setname] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const NAME = await AsyncStorage.getItem('Name');

        setname(NAME);
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/loginbackground.png')}
        style={styles.background}>
        {/* <View style={[styles.container, { height: windowHeight }]}> */}

        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.activityButton}>My Activity</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://epicnap.appssols.com/images/scan.png',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://epicnap.appssols.com/images/Messages.png',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://epicnap.appssols.com/images/Settings.png',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.greeting}>Hello, {name}!</Text>

          <View style={styles.announcement}>
            <Image
              source={{ uri: 'https://epicnap.appssols.com/images/banner.png' }}
              style={styles.announcementImage}
            />
          </View>

          <Text style={styles.sectionTitle}>Live Discounts On!</Text>
          <ScrollView horizontal style={styles.discounts}>
            {products.map((brand, index) => (
              <Image
                key={index}
                source={{ uri: brand.product_brand_image }}
                style={styles.discountIcon}
              />
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>My Orders</Text>
          <View style={styles.orderStatus}>
            <Text style={styles.orderStatusButton}>To Pay</Text>
            <Text style={styles.orderStatusButton}>To Receive</Text>
            <Text style={styles.orderStatusButton}>To Review</Text>
          </View>

          <View style={styles.lines}>
            <Text style={styles.sectionTitle}>Limited Time Offer</Text>
            <View style={styles.timer}>
              <View style={styles.announcementImages}>
                <Image
                  source={{
                    uri: 'https://epicnap.appssols.com/images/clock.png',
                  }}
                  style={styles.announcementImagess}
                />
              </View>

              <Text style={styles.timerText}>00</Text>
              <Text style={styles.timerText}>36</Text>
              <Text style={styles.timerText}>58</Text>
            </View>
          </View>
          <View style={styles.offerList}>
            {products.map((_, index) => (
              <Image
                key={index}
                source={{ uri: _.product_image }}
                style={styles.offerImage}
              />
            ))}
          </View>

          <View style={styles.vouchers}>
            <Image
              source={{
                uri: 'https://epicnap.appssols.com/images/banner2.png',
              }}
              style={styles.voucherImage}
            />
          </View>

          <View style={styles.lines}>
            <Text style={styles.sectionTitle}>Explore Menu</Text>
            <View style={styles.timer}>
              <Text style={styles.explore}>See All</Text>
              <View style={styles.arrow}>
                <Image
                  source={{
                    uri: 'https://epicnap.appssols.com/images/Button.png',
                  }}
                  style={styles.clockimages}
                />
              </View>
            </View>
          </View>

          <View style={styles.containers}>
            <ScrollView horizontal={true} style={styles.offerLists}>
              {products.map((value, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleProductClick(value)}>
                  <View key={index}>
                    <Image
                      source={{ uri: value.product_image }}
                      style={styles.offerImages}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginLeft: 15,
                      }}>
                      {value.product_name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.voucher}>
            <Image
              source={{ uri: 'https://epicnap.appssols.com/images/Frame.png' }}
              style={styles.frameImage}
            />
          </View>
        </ScrollView>
      </ImageBackground>

      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 30,
  },

  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  lines: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  activityButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  announcement: {
    marginVertical: 20,
  },
  announcementImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
  },

  announcementImages: {
    width: 25,
    height: 30,
    marginTop: 10,
  },

  arrow: {
    width: 40,
    height: 40,
    marginTop: 10,
  },

  announcementImagess: {
    width: '70%',
    height: '70%',
  },

  clockimages: {
    width: '70%',
    height: '70%',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },

  explore: {
    fontSize: 14,
    fontWeight: 'bold',

    marginHorizontal: 10,
    marginTop: 10,
    color: 'black',
  },
  discounts: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  discountIcon: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  orderStatusButton: {
    backgroundColor: '#FFE4B5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    color: '#F47E34',
  },
  timer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    marginVertical: 10,

    justifyContent: 'space-between',
  },
  timerText: {
    backgroundColor: '#FFA07A',
    padding: 10,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  offerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  offerLists: {
    flexDirection: 'row',
  },
  offerImage: {
    width: '33%',
    height: 100,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 0,
  },

  offerImages: {
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  vouchers: {
    marginVertical: 20,
  },

  voucher: {
    marginVertical: 60,
  },
  voucherImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
  },

  frameImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  voucherText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#3DB9EA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 345,
    height: 290,
    flexShrink: 0,
    resizeMode: 'contain',
  },
  logo1: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
    flexShrink: 0,
    marginTop: -20,
    marginLeft: 20,
    // backgroundColor:'yellow'
  },
  input: {
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
  icon1: {
    height: 20,
    width: 20,
  },
});

export default FirstInner;
