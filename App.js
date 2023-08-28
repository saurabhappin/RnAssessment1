/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

import GoogleSVG from './Assets/svgs/google.svg';
import GithubSVG from './Assets/svgs/github.svg';
import BellSVG from './Assets/svgs/bell.svg';
import ArrowSVG from './Assets/svgs/arrowLeft.svg';
import CartSVG from './Assets/svgs/cart.svg';
import EmailSVG from './Assets/svgs/icon.svg';
import NameSVG from './Assets/svgs/name.svg';
import PasswordSVG from './Assets/svgs/password.svg';

const App = () => {
  return (
    <ImageBackground
      source={require('./Assets/BG.png')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView>
        <SafeAreaView style={styles.main}>
          <NavBar />
          <Mask />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

const NavBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <ArrowSVG style={{paddingRight: 31, paddingLeft: 17}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 24,
          fontWeight: '500',
          paddingLeft: 20,
        }}>
        Create Account
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 16,
          alignItems: 'center',
        }}>
        <View style={{marginRight: 17}}>
          <BellSVG />
        </View>
        <CartSVG />
      </View>
    </View>
  );
};

const Mask = () => {
  return (
    <View style={styles.mask}>
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          backgroundColor: '#fefffe',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <Text style={styles.bodyText}>Sign up with</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <GithubSVG />
              <View
                style={{
                  justifyContent: 'flex-end',
                  paddingLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#5f73e4',
                    fontWeight: '700',
                  }}>
                  GITHUB
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <GoogleSVG />
              <View
                style={{
                  justifyContent: 'flex-end',
                  paddingLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#5f73e4',
                    fontWeight: '700',
                  }}>
                  GOOGLE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: 'flex-start',
          paddingVertical: 30,
        }}>
        <Text style={styles.bodyText}> Or sign up with credentials</Text>
        <View style={styles.inputStyle}>
          <NameSVG style={styles.svgStyle} />
          <TextInput style={styles.inputText} placeholder="Name" />
        </View>
        <View style={styles.inputStyle}>
          <EmailSVG style={styles.svgStyle} />
          <TextInput style={styles.inputText} placeholder="Email" />
        </View>
        <View style={styles.inputStyle}>
          <PasswordSVG style={styles.svgStyle} />
          <TextInput style={styles.inputText} placeholder="Password" />
        </View>
        <Text style={{color: '#8898a9', padding: 26}}>
          password strength:{' '}
          <Text style={{color: '#2ecf88', fontWeight: '700'}}>strong</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 17,
            alignItems: 'center',
          }}>
          <Text style={{color: '#535f7e', paddingLeft: 6}}>
            <CheckBox style={styles.check} />I agree with the{' '}
            <Text style={{color: '#5f73e4'}}>Privacy Policy</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.submitButton} activeOpacity={0.7}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '700',
            }}>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Functionality for checkbox
const checked = require('./Assets/checked.png');
const unChecked = require('./Assets/unchecked.png');
const checkboxImage = {true: checked, false: unChecked};
const CheckBox = () => {
  const [isChecked, setChecked] = useState(checkboxImage.false);
  const checkboxChange = () => {
    if (isChecked == checkboxImage.true) {
      setChecked(checkboxImage.false);
    } else {
      setChecked(checkboxImage.true);
    }
  };
  return (
    <TouchableOpacity activeOpacity={1} onPress={checkboxChange}>
      <Image style={styles.check} source={isChecked} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  icons: {
    height: 14,
    width: 18,
  },
  mask: {
    flex: 1,
    backgroundColor: '#f4f4f6',
    marginHorizontal: 17,
    marginTop: 130,
    marginBottom: 58,
    borderRadius: 10,
  },
  bodyText: {
    color: '#8898AA',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 24,
  },
  button: {
    width: 140,
    height: 44,
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 17,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  inputText: {
    height: 46,
    paddingHorizontal: 17,
    paddingVertical: 16,
  },
  submitButton: {
    backgroundColor: '#5f73e4',
    marginHorizontal: 86,
    marginVertical: 35,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  svgStyle: {
    tintColor: '#000000',
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    top: 4,
  },
});

export default App;
