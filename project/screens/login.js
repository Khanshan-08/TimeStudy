import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Loginscreen() {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [checked,setchecked] = useState(false);
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [Errors,setErrors] = useState("");

  const validateform = () =>{
    let Errors={};

    if(!username) Errors.username="username is required";
     if (!password) Errors.username = "username is required";
    setErrors(Errors);

    return Object.keys(Errors).length === 0;
  }

  const handlesubmit=()=>{
    if(validateform()){
      console.log("Submitted",username,password);
      setusername("");
      setpassword("");
      setErrors({});
    }
  }
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#002A52" />

      {/* login page image  */}
      <View style={Styles.imagemaincontainer}>
        <View style={Styles.imgcontainer}>
          <Image source={require("./timestudy-final 1.png")} />
        </View>
      </View>
      <View>
        {/* input bars in login page  */}
        <View>
          {/* email container */}
          <View style={Styles.inputContainer}>
            <View style={Styles.iconContainer}>
              <Image source={require("./mail.png")} style={Styles.icon} />
            </View>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#B8B8B8"
              style={Styles.inputText}
              value={username}
              onChangeText={setusername}
            />
            {Errors.username ? (
              <Text style={{ color: "#002A52", marginBottom: 10 }}>
                Errors.username{" "}
              </Text>
            ) : null}
          </View>
          {/* hr line under email bar */}
          <View style={Styles.hrLine}></View>
          {/* password Container */}
          <View>
            <View style={[Styles.inputContainer, { marginTop: 30 }]}>
              <View style={Styles.iconContainer}>
                <Image source={require("./lock.png")} style={Styles.icon} />
              </View>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#B8B8B8"
                keyboardType="numeric"
                secureTextEntry
                style={Styles.inputTextP}
              />
              {Errors.password ? (
                <Text
                  style={{
                    color: "#002A52",
                    marginBottom: 10,
                    marginLeft: -100,
                  }}
                >
                  Errors.password{" "}
                </Text>
              ) : null}
              <TouchableOpacity style={Styles.eyeBtn}>
                <Image source={require("./solar_eye-broken.png")} />
              </TouchableOpacity>
            </View>
            {/* hr line under password bar */}
            <View style={Styles.hrLine}></View>
          </View>
        </View>
        <View style={Styles.checkboxContainer}>
          <Checkbox
            value={checked}
            onValueChange={setchecked}
            color={checked ? "#18AFBA" : null}
          />
          <Text style={Styles.rememberText}>Remember Me</Text>
        </View>
      </View>

      <View style={Styles.buttonContainer}>
        <Button
          title="Login"
          color="#18AFBA"
          onPress={() => {
            handlesubmit();
            navigation.navigate("OTP");
          }}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002A52",
  },
  imagemaincontainer: {
    height: 277,
  },
  imgcontainer: {
    width: 180,
    height: 28.927,
    marginTop: 151,
    marginLeft: 85,
  },
  inputContainer: {
    width: 310,
    height: 39,
    flexDirection: "row",
    marginLeft: 27,
  },
  iconContainer: {
    width: 48,
    height: 39,
  },
  icon: {
    marginTop: 9,
    alignItems: "center",
  },
  inputText: {
    width: 260,
    height: 40,
    alignItems: "center",
    color: "#fff", // Ensure the text color is set to white
  },
  inputTextP: {
    width: 215,
    height: 40,
    alignItems: "center",
    color: "#fff", // Ensure the text color is set to white
  },
  hrLine: {
    height: 1,
    width: 310,
    backgroundColor: "#fff",
    marginLeft: 27,
  },
  checkboxContainer: {
    marginTop: 27,
    marginLeft: 27,
    width: 100,
    height: 25,
    flexDirection:'row'
  },
  rememberText: {
    color: "#fff",
    marginLeft:8
  },
  buttonContainer: {
    width: 315,
    height: 41,
    marginLeft: 27,
    marginTop: 40,
  },
  eyeBtn: {
    marginTop: 10,
    marginLeft: 17,
  },
});
