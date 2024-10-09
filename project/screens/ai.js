import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AiScreen() {
   const homenav = useNavigation();
   const profilenav = useNavigation();
   const usernav = useNavigation();
   const timestudiesnav = useNavigation();
   const settingnav = useNavigation();
  return (
    <KeyboardAvoidingView behavior="paddingBottom" style={Styles.container}>
      <StatusBar
        backgroundColor="#002A52"
        color="#fff"
        barStyle="light-content"
      />
      {/* top header text box   */}
      <View style={Styles.headerbox}>
        {/* chevron box */}
        <View style={Styles.chevron}>
          <TouchableOpacity style={{}} onPress={() => homenav.navigate("Home")}>
            <Image source={require("./chevron-left-white.png")} />
          </TouchableOpacity>
        </View>
        {/* medchat text box */}
        <View style={Styles.medchatText}>
          <Text style={Styles.textMed}>Med Chat</Text>
        </View>
      </View>
      {/* hr line under med chat box */}
      <View
        style={{ width: "100%", height: 0.6, backgroundColor: "#C6C6C6" }}
      ></View>
      {/* Add KeyboardAwareScrollView here */}

      {/* content box */}
      <View style={Styles.contentBox}>
        {/* message pic in content box */}
        <View style={Styles.ImgBox}>
          <Image source={require("./message.png")} />
        </View>
        {/* text box 1 */}
        <View style={Styles.TimestudyText}>
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "400" }}>
            TimeStudy Chat
          </Text>
        </View>
        {/* text box 2 */}
        <View style={Styles.Boxtext}>
          <View style={{ width: "70%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              I'm here to help you with whatever you need, from answering
              questions to providing recommendations. Let's chat!
            </Text>
          </View>
        </View>
        {/* text box 3 */}
        <View style={Styles.BoxtextS}>
          <View style={{ width: "70%" }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontStyle: "italic",
                fontWeight: "400",
                fontSize: 17,
              }}
            >
              Example: Some text example goes in here
            </Text>
          </View>
        </View>
        {/* input bar  */}
        <View style={Styles.inputBar}>
          <View style={{ width: "80%", height: 65 }}>
            <TextInput
              style={{
                width: "89%",
                height: 40,
                backgroundColor: "#fff",
                marginTop: 13,
                marginLeft: 30,
                fontSize: 15,
                fontWeight: "400",
                padding: 12,
              }}
              placeholder="Ask me anything..."
            />
          </View>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 15 }}
          >
            <Image source={require("./send fast.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* hr line  */}
      <View
        style={{ width: "100%", height: 0.6, backgroundColor: "#C6C6C6" }}
      ></View>
      {/* footer box */}
      <View>
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
          <TouchableOpacity style={Styles.footerboxes}>
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
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002A52",
  },
  headerbox: {
    height: 108,
    width: "100%",
    flexDirection: "row",
  },
  chevron: {
    width: "30%",
    height: 108,
    justifyContent: "center",
    alignItems: "center",
  },
  medchatText: {
    width: "70%",
    height: 108,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
  },
  textMed: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
  contentBox: {
    height: 500,
    width: "100%",
  },
  ImgBox: {
    width: "100%",
    height: 35,
    // backgroundColor:'lightgreen',
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  TimestudyText: {
    width: "100%",
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Boxtext: {
    height: 66,
    width: "100%",
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  BoxtextS: {
    width: "100%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBar: {
    width: "90%",
    height: 65,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginTop: 110,
    flexDirection: "row",
    borderRadius: 12,
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
