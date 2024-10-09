import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { useRef } from "react";


export default function OtpScreen(){
  const homenav = useNavigation();

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  
    return (
      <View style={Styles.container}>
        {/* otp verification text box */}
        <View style={Styles.OTPtextbox}>
          <View style={{ width: 190, height: 34 }}>
            <Text style={Styles.OTPtext}>OTP Verification</Text>
          </View>
          <View
            style={{
              width: 270,
              height: 45,

              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text style={Styles.VerificationnText}>
              <Text>
                Enter the code we have sent to your email
                <View>
                  <Text style={Styles.mailText}>{} david22@gmail.com</Text>
                </View>
              </Text>
            </Text>
          </View>
        </View>

        {/* input  boxes of otp */}
        <View style={Styles.Otpcodebox}>
          {/* time box */}
          <View
            style={{
              width: 290,
              height: 19,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={Styles.time}>02:32</Text>
          </View>
          {/* input otp box */}
          <View
            style={{
              width: 290,
              height: 50,
              // backgroundColor: "lightgreen",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 24.3,
            }}
          >
            <View style={Styles.inputBox}>
              <TextInput
                keyboardType="numeric"
                ref={et1}
                style={Styles.OTPnumb}
                
                maxLength={1}
                onChangeText={(txt) => {
                 
                  if (txt.length >= 1) {
                    et2.current.focus();
                  }
                }}
              />
            </View>
            <View style={Styles.inputBox}>
              <TextInput
                keyboardType="numeric"
                style={Styles.OTPnumb}
                maxLength={1}
                ref={et2}
                onChangeText={(txt) => {
                  if (txt.length >= 1) {
                    et3.current.focus();
                  } else if (txt.length < 1) {
                    et1.current.focus();
                  }
                }}
              />
            </View>
            <View style={Styles.inputBox}>
              <TextInput
                keyboardType="numeric"
                style={Styles.OTPnumb}
                maxLength={1}
                ref={et3}
                onChangeText={(txt) => {
                  if (txt.length >= 1) {
                    et4.current.focus();
                  } else if (txt.length < 1) {
                    et2.current.focus();
                  }
                }}
              />
            </View>
            <View style={Styles.inputBox}>
              <TextInput
                keyboardType="numeric"
                style={Styles.OTPnumb}
                maxLength={1}
                ref={et4}
                onChangeText={(txt) => {
                  if (txt.length >= 1) {
                    et4.current.focus();
                  }
                  else if(txt.length < 1){
                    et3.current.focus();
                  }
                }}
              />
            </View>
          </View>
          {/* resend box */}
          <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 15 }}>
            <View>
              <Text
                style={{
                  color: "#606268",
                  fontSize: 14,
                  fontWeight: "400",
                  letterSpacing: 2,
                }}
              >
                I didn't receive any code.
              </Text>
            </View>

            <TouchableOpacity>
              <Text
                style={{ color: "#18AFBA", fontSize: 14, fontWeight: "500" }}
              >
                {" "}
                RESEND
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* submit  buttton */}
        <TouchableOpacity
          style={{
            width: 300,
            height: 40,
            backgroundColor: "#18AFBA",
            borderRadius: 5,
            justifyContent: "center",
            marginLeft: 30,
            marginTop: 200,
          }}
          onPress={() => homenav.navigate("Home")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "500s",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  OTPtextbox: {
    width: 275,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 75,
    textAlign: "center",
    marginLeft: 50,
  },
  VerificationText: {
    VerificationText: {
      color: "#606268",
      fontSize: 16,
      fontWeight: "400",
      textAlign: "center", // Center the text horizontally within the box
      width: 270, // Set the width to control text wrapping
      marginTop: 10, // Add margin top for spacing
    },
  },
  OTPtext: {
    color: "#18AFBA",
    fontSize: 25,
    fontWeight: "700",
  },
  mailText: {
    color: "black",
    fontWeight: "bold",
  },
  Otpcodebox: {
    width: 290,
    height: 150,
    // backgroundColor: "pink",
    marginLeft: 35,
    marginTop: 40,
  },
  inputBox: {
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#18AFBA",
    
  },
  time: {
    color: "#18AFBA",
    fontSize:16,
    fontWeight:'500'
  },
  OTPnumb: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 22,
    fontWeight: "400",
    color: "#252525",
  },
});