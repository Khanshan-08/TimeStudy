import React, { useState } from 'react';
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Setting(){
    const chevronnav = useNavigation();
     const Usernav = useNavigation();
     const Homenav = useNavigation();
     const settingsnav = useNavigation();
     const Notifnav = useNavigation();
     const profilenav = useNavigation();
     const  helpnav = useNavigation();
     const  privacynav = useNavigation();
     const  Aboutnav = useNavigation();
    return (
      <View style={Styles.container}>
      <StatusBar backgroundColor="#fff"/>
        {/* header box  of setting screen */}
        <View style={Styles.headerbox}>
          <View style={Styles.chevronback}>
            <TouchableOpacity
              style={{ marginTop: 35, marginLeft: 30 }}
              onPress={() => chevronnav.navigate("Home")}
            >
              <Image source={require("./chevron-left-blueish.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 29, marginLeft: 90 }}>
            <Text style={Styles.settingtext}>Settings</Text>
          </View>
        </View>

        {/* setting screeen content  boxes  */}
        <View style={{ height: 500 }}>
          {/* profile box */}
          <View style={{ height: 65 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => profilenav.navigate("Userprofile")}
              >
                <Image
                  source={require("./ant-design_user-outlined-bl.png")}
                  style={{ marginLeft: 55 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => profilenav.navigate("Userprofile")}
              >
                <Text
                  style={{
                    marginLeft: 22,
                    color: "#1E1E1E",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => profilenav.navigate("Userprofile")}
              >
                <Image
                  source={require("./chevron-right-bl.png")}
                  style={{ marginLeft: 157 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/* hr under box */}
          <View
            style={{
              height: 0.5,
              width: 270,
              backgroundColor: "#C5C5C5",
              marginLeft: 52,
              marginTop: -17,
            }}
          ></View>
          {/* Notifications box */}
          <View style={{ height: 65, marginTop: 17 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => Notifnav.navigate("NotificationScreen")}
              >
                <Image
                  source={require("./ph_bell-bl.png")}
                  style={{ marginLeft: 55 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Notifnav.navigate("NotificationScreen")}
              >
                <Text
                  style={{
                    marginLeft: 22,
                    color: "#1E1E1E",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Notifications
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Notifnav.navigate("NotificationScreen")}
              >
                <Image
                  source={require("./chevron-right-bl.png")}
                  style={{ marginLeft: 112 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/* hr under box */}
          <View
            style={{
              height: 0.5,
              width: 270,
              backgroundColor: "#C5C5C5",
              marginLeft: 52,
              marginTop: -17,
            }}
          ></View>
          {/* Privacy Policy box */}
          <View style={{ height: 65, marginTop: 17 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => privacynav.navigate("PrivacyPolicy")}
              >
                <Image
                  source={require("./lock-bl.png")}
                  style={{ marginLeft: 55 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => privacynav.navigate("PrivacyPolicy")}
              >
                <Text
                  style={{
                    marginLeft: 22,
                    color: "#1E1E1E",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => privacynav.navigate("PrivacyPolicy")}
              >
                <Image
                  source={require("./chevron-right-bl.png")}
                  style={{ marginLeft: 109 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/* hr under box */}
          <View
            style={{
              height: 0.5,
              width: 270,
              backgroundColor: "#C5C5C5",
              marginLeft: 52,
              marginTop: -17,
            }}
          ></View>
          {/* Help & Support box */}
          <View style={{ height: 65, marginTop: 17 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => helpnav.navigate("Help")}>
                <Image
                  source={require("./help-circle-bl.png")}
                  style={{ marginLeft: 55 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => helpnav.navigate("Help")}>
                <Text
                  style={{
                    marginLeft: 22,
                    color: "#1E1E1E",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Help & Support
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => helpnav.navigate("Help")}>
                <Image
                  source={require("./chevron-right-bl.png")}
                  style={{ marginLeft: 97 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/* hr under box */}
          <View
            style={{
              height: 0.5,
              width: 270,
              backgroundColor: "#C5C5C5",
              marginLeft: 52,
              marginTop: -17,
            }}
          ></View>
          {/* About box */}
          <View style={{ height: 65, marginTop: 17 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => Aboutnav.navigate("About")}>
                <Image
                  source={require("./alert-circle-bl.png")}
                  style={{ marginLeft: 55 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Aboutnav.navigate("About")}>
                <Text
                  style={{
                    marginLeft: 22,
                    color: "#1E1E1E",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Aboutnav.navigate("About")}>
                <Image
                  source={require("./chevron-right-bl.png")}
                  style={{ marginLeft: 160 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {/* hr under box */}
          <View
            style={{
              height: 0.5,
              width: 270,
              backgroundColor: "#C5C5C5",
              marginLeft: 52,
              marginTop: -17,
            }}
          ></View>
          {/* Logout box */}
          <View style={{ height: 65, marginTop: 17 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  source={require("./log-out-bl.png")}
                  style={{ marginLeft: 55 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 22,
                    color: "#1E1E1E",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

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

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerbox: {
    height: 108,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  settingtext: {
    color: "#18AFBA",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
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