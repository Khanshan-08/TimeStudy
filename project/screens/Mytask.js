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

export default function MyTaskScreen() {
  const backnav = useNavigation();
  const usernav = useNavigation();
  const settingnav = useNavigation();
  const  livernav = useNavigation();
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#002A52" barStyle="light-content" />

      {/* top box of mytask screen */}
      <View style={Styles.mytaskTextcontainer}>
        <View style={Styles.backtick}>
          <TouchableOpacity
            style={Styles.leftpic}
            onPress={() => backnav.navigate("Home")}
          >
            <Image source={require("./chevron-left.png")} />
          </TouchableOpacity>
        </View>
        <View style={Styles.mytasktext}>
          <Text style={Styles.tasktext}>Transplants</Text>
        </View>
      </View>

      {/* hr line under mytask text container  */}
      <View style={Styles.hr}></View>

      {/* 2nd  box  of mytask screen */}
      <View style={Styles.mytaskcontentbox}>
        <View style={Styles.textbox}>
          <Text style={Styles.textboxText}>
            <Text>Input your work hours in assigned tasks </Text>
            <Text>by your department. </Text>
          </Text>
        </View>

        <View style={Styles.mytaskcontentboxes}>
          {/* liver box  */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginLeft: 44,
              marginBottom: -20,
            }}
          >
            <TouchableOpacity style={Styles.liverbox}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => livernav.navigate("Liver")}
              >
                <Image source={require("./healthicons_liver-outline.png")} />
              </TouchableOpacity>
              <View style={{ width: 10, height: 60 }}>
                <View
                  style={{
                    width: 1,
                    height: 47,
                    backgroundColor: "#80C4D0",
                    marginTop: 7,
                  }}
                ></View>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => livernav.navigate("Liver")}
              >
                <Text style={Styles.organText}>Liver</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => livernav.navigate("Liver")}
              >
                <Image
                  source={require("./chevron-right.png")}
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {/* mic box */}
            <TouchableOpacity style={Styles.micBox}>
              <Image source={require("./mingcute_mic-line-white.png")} />
            </TouchableOpacity>
          </View>
          {/* pancreas box */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginLeft: 44,
              marginBottom: -20,
            }}
          >
            <TouchableOpacity style={Styles.liverbox}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("./healthicons_pancreas-outline.png")} />
              </TouchableOpacity>
              <View style={{ width: 10, height: 60 }}>
                <View
                  style={{
                    width: 1,
                    height: 47,
                    backgroundColor: "#80C4D0",
                    marginTop: 7,
                  }}
                ></View>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={Styles.organText}>Pancreas</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  source={require("./chevron-right.png")}
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {/* mic box */}
            <TouchableOpacity style={Styles.micBox}>
              <Image source={require("./mingcute_mic-line-white.png")} />
            </TouchableOpacity>
          </View>
          {/* lungs box */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginLeft: 44,
              marginBottom: -20,
            }}
          >
            <TouchableOpacity style={Styles.liverbox}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("./bi_lungs.png")} />
              </TouchableOpacity>
              <View style={{ width: 10, height: 60 }}>
                <View
                  style={{
                    width: 1,
                    height: 47,
                    backgroundColor: "#80C4D0",
                    marginTop: 7,
                  }}
                ></View>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={Styles.organText}>Lungs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  source={require("./chevron-right.png")}
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {/* mic box */}
            <TouchableOpacity style={Styles.micBox}>
              <Image source={require("./mingcute_mic-line-white.png")} />
            </TouchableOpacity>
          </View>
          {/* heart */}
          <View style={{ flexDirection: "row", marginTop: 40, marginLeft: 44 }}>
            <TouchableOpacity style={Styles.liverbox}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./healthicons_heart-organ-outline.png")}
                />
              </TouchableOpacity>
              <View style={{ width: 10, height: 60 }}>
                <View
                  style={{
                    width: 1,
                    height: 47,
                    backgroundColor: "#80C4D0",
                    marginTop: 7,
                  }}
                ></View>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={Styles.organText}>Heart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  source={require("./chevron-right.png")}
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {/* mic box */}
            <TouchableOpacity style={Styles.micBox}>
              <Image source={require("./mingcute_mic-line-white.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.hr}></View>
      {/* footer box of mytask screen */}
      <View>
        <View style={Styles.footer}>
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => backnav.navigate("Home")}
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
          <TouchableOpacity style={Styles.footerboxes}>
            <View>
              <Image
                source={require("./timefooter.png")}
                style={Styles.watchi}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.footerboxes}>
            <View>
              <Image source={require("./ph_bell.png")} style={Styles.bell} />
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
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002A52",
    height: 844,
  },
  mytaskTextcontainer: {
    height: 108,
    // backgroundColor: "#fff",
    flexDirection: "row",
  },
  backtick: {
    width: 135,
    // backgroundColor: "pink",
  },
  leftpic: {
    marginTop: 42,
    marginLeft: 30,
  },
  mytasktext: {
    marginTop: 42,
  },
  tasktext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
  },
  hr: {
    height: 0.6,
    backgroundColor: "#C6C6C6",
  },
  mytaskcontentbox: {
    height: 500,
    // backgroundColor: "#fff",
  },
  textbox: {
    width: 240,
    height: 44,
    // backgroundColor: "pink",
    marginLeft: 68,
    marginTop: 30,
  },
  organText: {
    color: "#80C4D0",
    fontSize:20,
    fontWeight:'600',
    letterSpacing:1.5
    },
  textboxText: {
    color: "#fff",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.408,
    textAlign: "center",
  },

  liverbox: {
    height: 60,
    width: 230,
    borderWidth: 1,
    borderColor: "#80C4D0",
    borderRadius: 4,
    flexDirection: "row",
  },
  micBox: {
    width: 50,
    height: 60,
    backgroundColor: "#1C9AB7",
    borderRadius: 4,
    marginLeft: 4,
    justifyContent:'center',
    alignItems:'center'
  },

  organbox: {
    width: 189,
    height: 60,
    // borderWidth: 1,
    // borderColor: "#80C4D0",
    borderRadius: 4,
    flexDirection: "row",
    borderStyle: "solid",
  },
  Organboxtext: {
    width: 94,
    height: 60,
    // backgroundColor:'#fff'
  },
  Organboxleft: {
    width: 94,
    height: 60,
    // backgroundColor:"#f66"
  },
  organtext: {
    color: "#80C4D0",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.408,
    marginTop: 18,
  },
  organtextP: {
    color: "#80C4D0",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.408,
    marginTop: 18,
    marginLeft: 13,
  },
  rightchev: {
    marginTop: 18,
    marginLeft: 55,
  },
  mytaskcontentboxes: {
    marginBottom: 50,
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
