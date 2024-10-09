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
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export  default function Privacy(){
    const Pchevronnav = useNavigation();
      const chevronnav = useNavigation();
      const Usernav = useNavigation();
      const Homenav = useNavigation();
      const settingsnav = useNavigation();
      const Notifnav = useNavigation();
      const profilenav = useNavigation();
      const helpnav = useNavigation();
      const privacynav = useNavigation();
    return (
      <View style={Styles.container}>
        {/* top header container in  privacy screen */}

        <View
          style={{
            height: 108,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 30, marginTop: 42 }}
            onPress={() => Pchevronnav.navigate("SettingScreen")}
          >
            <Image source={require("./chevron-left-blueish.png")} />
          </TouchableOpacity>
          <View style={{ marginLeft: 58, marginTop: 38 }}>
            <Text style={Styles.privacytext}>Privacy Policy</Text>
          </View>
        </View>

        {/* hr line under top header box */}
        <View style={{ height: 1, backgroundColor: "#D7D7D7" }}></View>

        {/* contnet box of privacy policy screen */}
        <View style={{ height: 500 }}>
          <View
            style={{
              width: 290,
              marginLeft: 33,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            <Text style={Styles.text}>
              Your privacy is important to us. It is Brainstorming's policy to
              respect your privacy regarding any information we may collect from
              you across our
              <TouchableOpacity
                onPress={() => Linking.openURL("https://www.google.com")}
                style={{alignSelf:'baseline'}}
              >
                <Text
                  style={{ color: "#18AFBA", fontSize: 17, fontWeight: "400" }}
                >
                  {" "}
                  Website{" "}
                </Text>
              </TouchableOpacity>
              , and other sites we own and operate.
            </Text>
          </View>
          <View style={{ width: 290, marginLeft: 33, marginBottom: 15 }}>
            <Text style={Styles.text}>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </Text>
          </View>
          <View style={{ width: 290, marginLeft: 33, marginBottom: 15 }}>
            <Text style={Styles.text}>
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.
            </Text>
          </View>
          <View style={{ width: 290, marginLeft: 33 }}>
            <Text style={Styles.text}>
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </Text>
          </View>
        </View>
        {/* hr line under top header box */}
        <View style={{ height: 1, backgroundColor: "#D7D7D7" }}></View>

        {/* footer box  under main content  */}
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
            onPress={() => Notifnav.navigate("NotificationScreen")}
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

const  Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    privacytext:{
        color: '#18AFBA',
        fontSize:24,
        fontWeight:'600',
        fontStyle:'normal'
    },
    text:{
        textAlign:'center',
        color: '#1E1E1E',
        fontSize:16,
        fontWeight:'400'
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

