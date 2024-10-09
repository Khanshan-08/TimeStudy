import React from "react";
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

export default function TimeStudiesScreen(){
    const backnav = useNavigation();
    const  homenav = useNavigation();
     const profilenav = useNavigation();
     const usernav = useNavigation();
     const timestudiesnav = useNavigation();
     const settingnav = useNavigation();
     const AInav = useNavigation();
    return (
      <View style={Styles.container}>
        <StatusBar backgroundColor={"#002A52"} barStyle="light-content" />
        {/* first box of timestudies screen */}

        <View style={Styles.Timestudies}>
          <View style={Styles.backtick}>
            <TouchableOpacity
              style={Styles.bluetick}
              onPress={() => backnav.navigate("Home")}
            >
              <Image source={require("./chevron-left-white.png")} />
            </TouchableOpacity>
          </View>
          <View style={Styles.Timestudytext}>
            <Text style={Styles.TimeStudiesText}>Time Studies</Text>
          </View>
        </View>

        {/* hr view box under top header */}
        <View style={Styles.hr}></View>
        {/* second box of timestudies screen */}

        <View style={Styles.timestudiescontent}>
          <View
            style={{
              width: "100%",
              height: 400,
              marginTop: 70,
            }}
          >
            <TouchableOpacity style={Styles.Cbox}>
              <View style={Styles.boxText}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "#80C4D0",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Recent Records
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.chevron}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Image source={require("./chevron-left-blue.png")} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Cbox}>
              <View style={Styles.boxText}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "#80C4D0",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Completed Records
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.chevron}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Image source={require("./chevron-left-blue.png")} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Cbox}>
              <View style={Styles.boxText}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "#80C4D0",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Upcoming Records
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.chevron}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Image source={require("./chevron-left-blue.png")} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Cbox}>
              <View style={Styles.boxText}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "#80C4D0",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Rejected Records
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.chevron}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Image source={require("./chevron-left-blue.png")} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.CboxLast}>
              <View style={Styles.boxText}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Rejected Records
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.chevron}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 15,
                  }}
                >
                  <Image source={require("./chevron-left-whitish.png")} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* hr view box under content box */}
        <View style={Styles.hr}></View>
        {/* third box of timestudies footer screen */}

        <View style={Styles.footer}>
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => homenav.navigate("Home")}
          >
            <View>
              <Image
                source={require("./akar-icons_home.png")}
                style={Styles.homie}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => usernav.navigate("Userprofile")}
          >
            <View>
              <Image
                source={require("./ant-design_user-outlined.png")}
                style={Styles.person}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => timestudiesnav.navigate("timestudies")}
          >
            <View>
              <Image
                source={require("./timefooter.png")}
                style={Styles.watchi}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => AInav.navigate("AIscreen")}
          >
            <View>
              <Image
                source={require("./hugeicons_ai-chat-02-white.png")}
                style={Styles.bell}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => settingnav.navigate("SettingScreen")}
          >
            <View>
              <Image
                source={require("./solar_settings-linear.png")}
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
    backgroundColor: "#002A52",
  },
  Timestudies: {
    height: 108,
    // backgroundColor: "#f5f",
    flexDirection: "row",
  },
  backtick: {
    width: 100,
    // backgroundColor: "lightblue",
  },
  Timestudytext: {
    width: 290,
  },
  bluetick: {
    marginLeft: 30,
    marginTop: 35,
  },
  TimeStudiesText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.408,
    marginTop: 30,
    marginRight: 100,
  },
  hr: {
    backgroundColor: "#C6C6C6",
    height: 0.6,
  },
  timestudiescontent: {
    height: 500,
    // backgroundColor: "lightblue",
  },
  outstandingText: {
    color: "#002A52",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  Cbox: {
    height: 60,
    width: 280,
    // backgroundColor: "lightblue",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#80C4D0",
    marginBottom: 15,
    marginLeft: 40,
    flexDirection:'row'
  },
  CboxLast: {
    height: 60,
    width: 280,
    backgroundColor: "#18AFBA",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#80C4D0",
    marginBottom: 15,
    marginLeft: 40,
    flexDirection:'row'
  },
  boxText:{
    width:220,
    height:58,
  },
  chevron:{
    width:60,
    height:58,
  },
  quarterText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  facialText: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.40)",
    marginLeft: 30,
  },

  inputBox: {
    justifyContent: "center",
    padding: 10,
  },
  footer: {
    height: 100,
    backgroundColor: "#002A52",
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
