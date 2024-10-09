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
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Notification(){
    const  chevronnav = useNavigation();
     const Usernav = useNavigation();
     const Homenav = useNavigation();
     const settingsnav = useNavigation();
    return (
      <View style={Styles.container}>
        <StatusBar backgroundColor={"#fff"} />
        {/* top text bar at notification screen */}
        <View style={Styles.headercontainer}>
          <TouchableOpacity
            style={{ marginLeft: 30, marginTop: 40 }}
            onPress={() => chevronnav.navigate("Home")}
          >
            <Image source={require("./chevron-left-blueish.png")} />
          </TouchableOpacity>
          <View style={{ marginTop: 35, marginLeft: 60 }}>
            <Text style={Styles.notiText}>Notifications</Text>
          </View>
        </View>

        {/* hr line under header box */}
        <View style={{ height: 0.6, backgroundColor: "#C6C6C6" }}></View>

        {/* content of  notification box   */}
        <ScrollView style={{ height: 500, marginTop: 4 }}>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 250,
              marginLeft: 34,
              backgroundColor: "#EFF0F1",
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
          </TouchableOpacity>
          {/* hr line under every container */}
          <View
            style={{
              height: 0.6,
              width: 300,
              backgroundColor: "#EFF0F1",
              marginLeft: 34,
            }}
          ></View>
          <TouchableOpacity
            style={{
              height: 90,
              //   backgroundColor: "lightblue",
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ width: 86, height: 90 }}>
              <Image
                source={require("./images (1) 2.png")}
                style={Styles.image}
              />
            </View>
            <View style={{ width: 200 }}>
              <Text style={Styles.remaindertext}>Reminder</Text>
              <Text style={Styles.loremtext}>
                Lorem Ipsum is simply the printing and typesetting industry.
              </Text>
              <Text style={Styles.marktext}>Mark as read</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={Styles.Timetext}>23 min</Text>
            </View>
            {/* hr line under every container */}
            <View
              style={{
                height: 0.6,
                width: 300,
                backgroundColor: "#EFF0F1",
                marginLeft: 34,
              }}
            ></View>
          </TouchableOpacity>
        </ScrollView>

        {/* hr line */}
        <View style={{ height: 0.6, backgroundColor: "#C6C6C6" }}></View>
        {/* footer box  of notification screen */}
        <View style={{ height: 70 }}>
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
                  source={require("./ph_bell-N.png")}
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
        {/* end of view container */}
      </View>
    );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headercontainer: {
    height: 108,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  notiText: {
    color: "#18AFBA",
    fontSize: 24,
    fontweight: 600,
  },
  image: {
    marginLeft: 34,
    marginTop: 18,
  },
  remaindertext: {
    color: "#18AFBA",
    fontSize: 15,
    fontWeight: "600",
  },
  loremtext: {
    color: "#B2B2B2",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 1,
  },
  marktext: {
    color: "#6A6A6A",
    marginTop: 7,
    fontSize: 13,
    fontweight: "400",
  },
  Timetext: {
    color: "#002A52",
    fontSize: 11,
    fontWeight: "400",
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
    marginTop: 13,
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