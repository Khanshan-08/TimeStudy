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

export default function AboutScreen(){
    const chevronnav = useNavigation();
     const homenav = useNavigation();
     const Usernav = useNavigation();
     const Homenav = useNavigation();
     const settingsnav = useNavigation();
     const profilenav = useNavigation();
    return (
      <View style={Styles.container}>
        <View style={Styles.headercontainer}>
          <TouchableOpacity
            style={{ marginLeft: 30, marginTop: 40 }}
            onPress={() => chevronnav.navigate("SettingScreen")}
          >
            <Image source={require("./chevron-left-blueish.png")} />
          </TouchableOpacity>
          <View style={{ marginTop: 35, marginLeft: 60 }}>
            <Text style={Styles.notiText}>About Us</Text>
          </View>
        </View>

        {/* hr line under header box */}
        <View
          style={{ height: 1, backgroundColor: "#D7D7D7", marginTop: 30 }}
        ></View>

        {/* text box of about screen */}
        <View style={{ height: 480 }}>
          <View
            style={{
              height: 160,
              width: 300,
              // backgroundColor: "lightblue",
              marginTop: 34,
              marginLeft: 33,
            }}
          >
            <Text style={Styles.text}>
              Welcome to Chronos, your reliable companion for managing your work
              hours effortlessly. Whether you're a freelancer, consultant, or
              simply want to keep track of your time spent on various tasks,
              Chronos is here to streamline your productivity.
            </Text>
          </View>
          <View
            style={{
              height: 150,
              width: 300,
              // backgroundColor: "lightgreen",
              marginLeft: 33,
              marginTop: 10,
            }}
          >
            <Text style={Styles.text}>
              At Chronos, we understand the value of time and the importance of
              efficiently managing it. Our mission is to empower individuals and
              teams to maximize their productivity by providing a user-friendly
              platform for logging and monitoring work hours accurately.
            </Text>
          </View>
        </View>

        {/* hr line */}
        <View
          style={{ height: 1, backgroundColor: "#D7D7D7", marginTop: 30 }}
        ></View>

        {/* footer box */}
        <View style={{ height: 100 }}>
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
            <TouchableOpacity style={Styles.footerboxes}>
              <View>
                <Image
                  source={require("./ph_bell-pr.png")}
                  style={Styles.bell}
                />
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
      </View>
    );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headercontainer: {
    flexDirection: "row",
  },
  notiText: {
    color: "#18AFBA",
    fontSize: 24,
    fontWeight: "600",
  },
  text: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 22,
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