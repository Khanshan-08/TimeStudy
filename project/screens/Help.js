import React, { useState } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Help(){
    const homenav = useNavigation();
    const Usernav = useNavigation();
    const Homenav = useNavigation();
    const settingsnav = useNavigation();
    const  addnotenav = useNavigation();
    const profilenav = useNavigation();
    return (
      <View style={Styles.container}>
        {/* header container at help screen */}
        <View style={{ height: 108, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => homenav.navigate("Home")}
            style={{ marginLeft: 30, marginTop: 30 }}
          >
            <Image source={require("./chevron-left-blueish.png")} />
          </TouchableOpacity>
          <View style={{ marginLeft: 58, marginTop: 25 }}>
            <Text style={Styles.helptext}>Help & Support</Text>
          </View>
        </View>

        {/* hr line under top header box */}
        <View style={{ height: 1, backgroundColor: "#D7D7D7" }}></View>

        {/* main content   */}
        <View style={{ height: 490 }}>
          <View style={{ height: 40 }}>
            <Text style={Styles.hiText}>Hi, how can we help you?</Text>
          </View>

          <View style={{ height: 35,  }}>
              <TextInput placeholder="" style={Styles.searchbar} />
          </View>
          <View style={{ height: 30, marginTop: 20 }}>
            <Text style={Styles.topicText}>Pick a topic</Text>
          </View>
          <View style={{ height: 22, marginTop: 24 }}>
            <TouchableOpacity onPress={() => addnotenav.navigate('Note')}>
              <Text style={Styles.noteText}>How to add a note?</Text>
            </TouchableOpacity>
          </View>
          {/* hr line under top header box */}
          <View
            style={{ height: 1, backgroundColor: "#D7D7D7", marginTop: 14 }}
          ></View>
          <View>
            <View style={{ height: 22, marginTop: 24 }}>
              <TouchableOpacity>
                <Text style={Styles.noteText}>Logging in your hours.</Text>
              </TouchableOpacity>
            </View>
            {/* hr line under top header box */}
            <View
              style={{ height: 1, backgroundColor: "#D7D7D7", marginTop: 14 }}
            ></View>
          </View>
          <View>
            <View style={{ height: 22, marginTop: 24 }}>
              <TouchableOpacity>
                <Text style={Styles.noteText}>Editing your profile.</Text>
              </TouchableOpacity>
            </View>
            {/* hr line under top header box */}
            <View
              style={{ height: 1, backgroundColor: "#D7D7D7", marginTop: 14 }}
            ></View>
          </View>
          <View>
            <View style={{ height: 22, marginTop: 24 }}>
              <TouchableOpacity>
                <Text style={Styles.noteText}>Viewing Reports</Text>
              </TouchableOpacity>
            </View>
            {/* hr line under top header box */}
            <View
              style={{ height: 1, backgroundColor: "#D7D7D7", marginTop: 14 }}
            ></View>
          </View>
        </View>
        {/* hr line */}
        <View style={{ height: 0.6, backgroundColor: "#C6C6C6" }}></View>
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
  helptext: {
    color: "#18AFBA",
    fontSize: 24,
    fontWeight: "600",
  },
  hiText: {
    color: "#002A52",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 39,
  },
  searchbar: {
    width: 250,
    height: 35,
    backgroundColor: "#fff",
    marginLeft: 39,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#BABABA",
    paddingLeft:15
  },
  topicText: {
    color: "#18AFBA",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 39,
  },
  noteText: {
    color: "#002A52",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 39,
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