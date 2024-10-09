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
  Alert,
 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from 'react-native-phone-number-input';
// import RadioForm from "react-native-simple-radio-button";




export default function Profile() {
    const [phonenumber, setphonenumber] = useState('');
    const [value, setvalue] = useState('');
  const chevronnav = useNavigation();
  const Usernav = useNavigation();
  const Homenav = useNavigation();
  const  settingsnav = useNavigation();
  const  N0tnav = useNavigation();
  const items =[
    { label : "Male" , value : 0},
    { label : "Female" , value : 1}
  ]
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#fff" />
      {/* top profile text container */}
      <View style={Styles.titlecontainer}>
        <View style={Styles.chevron}>
          <TouchableOpacity
            style={Styles.chevronimage}
            onPress={() => chevronnav.navigate("Home")}
          >
            <Image source={require("./chevron-left-blueish.png")} />
          </TouchableOpacity>
        </View>

        <View style={Styles.profileText}>
          <Text style={Styles.Ptext}>Profile</Text>
        </View>
      </View>

      {/* image container of  profile screen */}

      <View style={Styles.imagecontainer}>
        <View style={Styles.imgbox}>
          <Image source={require("./user pic.png")} />
          <TouchableOpacity style={{ marginLeft: 55, marginTop: -19 }}>
            <Image source={require("./plus-circle.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* inputtext box  in the profile screen */}

      <View style={Styles.Inputemailbox}>
        {/* name input box */}
        <View
          style={{
            width: 310,
            // backgroundColor: "pink",
            height: 50,
            flexDirection: "row",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 80,
              height: 50,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#18AFBA",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 17,
              }}
            >
              Name:
            </Text>
          </View>
          <View style={{ width: 230, height: 50 }}>
            <TextInput
              style={{ width: 230, height: 70, padding: 20 }}
              placeholder="John Michael"
            />
          </View>
        </View>
        {/* hr line under name container */}
        <View
          style={{
            width: 290,
            height: 0.5,
            backgroundColor: "#BFBEBE",
            marginLeft: 35,
          }}
        ></View>
        {/* email containner */}
        <View
          style={{
            width: 310,
            // backgroundColor: "pink",
            height: 50,
            flexDirection: "row",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 80,
              height: 50,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#18AFBA",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 17,
              }}
            >
              Email:
            </Text>
          </View>
          <View style={{ width: 230, height: 50 }}>
            <TextInput
              style={{ width: 230, height: 70, padding: 20 }}
              placeholder="johnmichael02@gmail.com"
            />
          </View>
        </View>
        {/* hr line under name container */}
        <View
          style={{
            width: 290,
            height: 0.5,
            backgroundColor: "#BFBEBE",
            marginLeft: 35,
          }}
        ></View>
        {/* email containner */}
        <View
          style={{
            width: 310,
            // backgroundColor: "pink",
            height: 50,
            flexDirection: "row",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 80,
              height: 50,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#18AFBA",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 17,
              }}
            >
              Phone:
            </Text>
          </View>
          <View style={{ width: 230, height: 50 }}>
            <TextInput
              style={{ width: 230, height: 70, padding: 20 }}
              placeholder="+880 2384 272 272"
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* hr line under name container */}
        <View
          style={{
            width: 290,
            height: 0.5,
            backgroundColor: "#BFBEBE",
            marginLeft: 35,
          }}
        ></View>
        {/* email containner */}
        <View
          style={{
            width: 310,
            // backgroundColor: "pink",
            height: 50,
            flexDirection: "row",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 80,
              height: 50,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#18AFBA",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 17,
              }}
            >
              Gender:
            </Text>
          </View>
          <View style={{ width: 230, height: 50 }}>
            <TextInput
              style={{ width: 230, height: 70, padding: 20 }}
              placeholder="Male"
            />
          </View>
        </View>
        {/* hr line under name container */}
        <View
          style={{
            width: 290,
            height: 0.5,
            backgroundColor: "#BFBEBE",
            marginLeft: 35,
          }}
        ></View>
        {/* email containner */}
        <View
          style={{
            width: 310,
            // backgroundColor: "pink",
            height: 50,
            flexDirection: "row",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 80,
              height: 50,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#18AFBA",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 17,
              }}
            >
              Workflow :
            </Text>
          </View>
          <View style={{ width: 230, height: 50 }}>
            <TextInput
              style={{ width: 230, height: 70, padding: 20 }}
              placeholder="Khyber Hospital"
            />
          </View>
        </View>
        {/* hr line under name container */}
        <View
          style={{
            width: 290,
            height: 0.5,
            backgroundColor: "#BFBEBE",
            marginLeft: 35,
          }}
        ></View>
        {/* email containner */}
        <View
          style={{
            width: 310,
            // backgroundColor: "pink",
            height: 50,
            flexDirection: "row",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 80,
              height: 50,
              // backgroundColor: "lightgreen",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#18AFBA",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 17,
              }}
            >
              Speciality:
            </Text>
          </View>
          <View style={{ width: 230, height: 50 }}>
            <TextInput
              style={{ width: 230, height: 70, padding: 20 }}
              placeholder="Nephrology"
            />
          </View>
        </View>

        {/* okay button */}
        <View>
          <TouchableOpacity
            style={Styles.okaybtn}
            onPress={() => Alert.alert('Profile updated succefully')}
          >
            <Text style={Styles.okayText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* hr line under content box or input box */}
      <View style={Styles.hr}></View>

      {/* footer box of profile screen */}
      <View style={Styles.footer}>
        <TouchableOpacity
          style={Styles.footerboxes}
          onPress={() => Homenav.navigate("Home")}
        >
          <View>
            <Image
              source={require("./akar-icons_home-profile.png")}
              style={Styles.homie}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.footerboxes}
          onPress={() => Usernav.navigate("Userprofile")}
        >
          <View>
            <Image
              source={require("./ant-design_user-outlined-pr.png")}
              style={Styles.person}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.footerboxes}>
          <View>
            <Image
              source={require("./mingcute_time-line (1)-pr.png")}
              style={Styles.watchi}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.footerboxes}
          onPress={() => N0tnav.navigate("NotificationScreen")}
        >
          <View>
            <Image source={require("./ph_bell-pr.png")} style={Styles.bell} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.footerboxes}
          onPress={() => settingsnav.navigate("SettingScreen")}
        >
          <View>
            <Image
              source={require("./solar_settings-linear-pr.png")}
              style={Styles.setting}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titlecontainer: {
    height: 100,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  chevron: {
    height: 100,
    width: 100,
    // backgroundColor: "lightblue",
  },
  chevronimage: {
    marginTop: 30,
    marginLeft: 30,
  },
  profileText: {
    marginTop: 29,
    marginLeft: 50,
  },
  Ptext: {
    color: "#18AFBA",
    fontSize: 24,
    fontstyle: "normal",
    fontweight: 600,
    letterSpacing: -0.408,
  },
  imagecontainer: {
    height: 80,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  imgbox: {
    width: 72,
    height: 72,
    // backgroundColor: "lightblue",
    borderRadius: 72,
  },
  emailbox: {
    height: 65,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  emailtextbox: {
    marginTop: 0,
  },
  emailtextcont: {
    marginBottom: 6,
    marginLeft: 25,
  },
  nameText: {
    color: "#555",
    fontSize: 13,
    fontWeight: "400",
  },
  emailtext: {
    color: "#18AFBA",
    fontSize: 16,
    fontWeight: "700",
  },
  Inputemailbox: {
    height: 430,
    // backgroundColor: "lightblue",
  },
  emailcont: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#C6C6C6",
    marginLeft: 25,
    borderRadius: 8,
    paddingLeft: 10,
  },

  lastnamebox: {
    marginTop: 6,
  },
  numberbox: {
    width: 300,
    height: 80,
    // backgroundColor: "pink",
    marginTop: 16,
    marginLeft: 25,
  },
  Lastbox: {
    height: 132,
    // backgroundColor: "pink",
  },
  genderbox: {
    height: 50,
    // backgroundColor: "#f5f",
    flexDirection: "row",
  },
  radioForm: {
    paddingLeft: 10,
  },
  updateprofilebox: {
    height: 81,
    // backgroundColor: "yellow",
  },
  okaybtn: {
    width: 290,
    height: 35,
    backgroundColor: "#18AFBA",
    marginLeft: 35,
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  okayText: {
    color:'#fff',
    fontSize:15,
    fontWeight:'600'
  },
  hr: {
    height: 0.6,
    backgroundColor: "#C6C6C6",
  },
  footer: {
    height: 100,
    // backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerboxes: {
    flexDirection: "row",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginLeft: 55,
    marginRight: 10,
  },
  homie: {
    marginRight: 30,
  },
  person: {
    marginRight: 40,
  },
  watchi: {
    marginRight: 35,
  },
  bell: {
    marginRight: 30,
  },
  setting: {
    marginRight: 35,
  },
});
