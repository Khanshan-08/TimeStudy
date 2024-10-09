import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  TextInput
} from "react-native";
import { useState } from "react";

export default function Homescreen() {
  const nav = useNavigation();
  const tasknav = useNavigation();
  const timestudynav = useNavigation();
  const profilenav = useNavigation();
  const usernav = useNavigation();
  const timestudiesnav = useNavigation();
  const helpnav = useNavigation();
  const notificationnav = useNavigation();
  const settingnav = useNavigation();
  const AIscreen =  useNavigation();
  

  const [IsModalVisible,setIsModalVisible] = useState(false);
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* first box where images exist  */}
      <View style={Styles.imagecontainer}>
        {/* user image */}
        <View style={Styles.userimage}>
          <TouchableOpacity
            style={{ width: 32, height: 32 }}
            onPress={() => profilenav.navigate("Userprofile")}
          >
            <Image source={require("./Ellipse 1.png")} />
          </TouchableOpacity>
        </View>
        {/* time study image */}
        <View style={Styles.Timeimage}>
          <Image source={require("./new home logo.png")} />
        </View>
        {/* notification image */}
        <View style={Styles.bellimage}>
          <TouchableOpacity
            style={{ width: 32, height: 32 }}
            onPress={() => notificationnav.navigate("NotificationScreen")}
          >
            <Image source={require("./ph;bell;blueish.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* creating line under top box */}
      <View style={Styles.hrline}></View>

      {/* second  box where content exist  */}

      <View style={Styles.mainbox}>
        {/* my task box in home page */}
        <View style={Styles.mytasks}>
          {/* calender */}
          <View
            style={{
              width: 60,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("./fluent_task-list-square-24-regular.png")}
              />
            </TouchableOpacity>
          </View>
          {/* vertical line */}
          <View style={Styles.tasklines}></View>
          {/* my task text */}
          <View
            style={{
              width: 140,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => tasknav.navigate("MyTask")}>
              <Text style={Styles.buttonText}>My Tasks</Text>
            </TouchableOpacity>
          </View>
          {/* microphone */}
          <View
            style={{
              width: 60,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Image source={require("./mingcute_mic-line (1).png")} />
            </TouchableOpacity>

            {/* microphone screen open when we click on microphone */}
            <Modal visible={IsModalVisible} transparent={true}>
              <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <View
                  style={{
                    width: 300,
                    height: 400,
                    backgroundColor: "#fff",
                    marginTop: 33,
                    marginLeft: 20,
                    borderRadius: 12,
                  }}
                >
                  {/* cross sign in modal screen */}
                  <View style={Styles.crossbox}>
                    <TouchableOpacity
                      onPress={() => setIsModalVisible(false)}
                      style={{ width: 40, height: 40, marginRight: 12 }}
                    >
                      <Image source={require("./carbon_close-outline.png")} />
                    </TouchableOpacity>
                  </View>
                  {/* mic image */}
                  <View style={Styles.Micimage}>
                    <TouchableOpacity>
                      <Image source={require("./Group 35.png")} />
                    </TouchableOpacity>
                  </View>
                  {/* speak now text */}
                  <View
                    style={{
                      height: 22,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "400",
                        color: "#002A52",
                      }}
                    >
                      Speak now
                    </Text>
                  </View>
                  {/* voice recognition layer */}
                  <View
                    style={{
                      height: 53,
                      width: "100%",
                      // backgroundColor: "pink",
                    }}
                  >
                    <View></View>
                  </View>
                  {/* text box */}
                  <View
                    style={{
                      height: 75,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={Styles.textContainer}>
                      <View>
                        <TextInput
                          placeholder="Post transplant 120 hours"
                          style={{ height: 57, padding: 10, paddingTop: -6 }}
                        />
                      </View>
                      <View
                        style={{
                          height: 20,
                          width: "100%",
                          justifyContent: "flex-end",
                          flexDirection: "row",
                        }}
                      >
                        <TouchableOpacity style={{}}>
                          <Image
                            source={require("./uil_redo.png")}
                            style={{ marginRight: 10, marginTop: -7 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {/* submit button */}
                  <View
                    style={{
                      height: 40,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <TouchableOpacity style={Styles.submitbox}>
                      <Text style={Styles.submittext}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        {/* time studies box */}
        <View style={Styles.timestudies}>
          <View style={Styles.watch}>
            <TouchableOpacity>
              <Image
                source={require("./mingcute_time-line.png")}
                style={Styles.watchimg}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.taskline}></View>
          <TouchableOpacity
            style={[Styles.button, Styles.timestudiesbtn]}
            onPress={() => timestudynav.navigate("timestudies")}
          >
            <Text style={Styles.buttonText}>Time Studies</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.reportslog}>
          <View style={Styles.watch}>
            <TouchableOpacity>
              <Image
                source={require("./hugeicons_ai-chat-02.png")}
                style={Styles.watchimg}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.taskline}></View>
          <TouchableOpacity
            style={[Styles.button, Styles.timestudiesbtn]}
            onPress={() => AIscreen.navigate("AIscreen")}
          >
            <Text style={Styles.buttonText}>Med Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.help}>
          <View style={Styles.watch}>
            <TouchableOpacity>
              <Image
                source={require("./material-symbols_help.png")}
                style={Styles.watchimg}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.taskline}></View>
          <TouchableOpacity
            style={[Styles.button, Styles.timestudiesbtn]}
            onPress={() => helpnav.navigate("Help")}
          >
            <Text style={Styles.buttonText}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* third   box where slider exist  */}
      <View style={Styles.footer}>
        <TouchableOpacity style={Styles.footerboxes}>
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
            <Image source={require("./timefooter.png")} style={Styles.watchi} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.footerboxes}
          onPress={() => AIscreen.navigate("AIscreen")}
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
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    // alignItem: "center",
    // justifyContent: "center",
  },
  imagecontainer: {
    height: 121,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  userimage: {
    width: 80,
    height: 121,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  Timeimage: {
    width: 200,
    height: 121,
    // backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bellimage: {
    width: 80,
    height: 121,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  hrline: {
    height: 0.6,
    backgroundColor: "#C6C6C6",
  },

  mainbox: {
    height: 450,
    // backgroundColor: "pink",
  },

  mytasks: {
    width: 290,
    height: 80,
    backgroundColor: "#002A52",
    borderRadius: 16,
    marginBottom: 16,
    marginTop: 40,
    marginLeft: 40,
    flexDirection: "row",
  },
  calender: {
    width: 32,
    height: 32,
    // backgroundColor:"#fff",
    marginLeft: 30,
    marginTop: 23,
  },
  watch: {
    width: 32,
    height: 32,
    // backgroundColor:"#fff",
    marginLeft: 30,
    marginTop: 25,
  },
  watchimg: {
    marginTop: 5,
    height: 25,
    width: 25,
  },
  tasklines: {
    width: 2,
    height: 36,
    backgroundColor: "#80C4D0",
    marginLeft: 22,
    marginTop: 20,
  },
  taskline: {
    width: 2,
    height: 36,
    backgroundColor: "#80C4D0",
    marginLeft: 87,
    marginTop: -33,
    fontSize: 20,
  },
  Mytaskbtn: {
    width: 100,
    height: 35,
    // backgroundColor:"#fff",
    marginLeft: 120,
    marginTop: -33,
  },
  button: {
    backgroundColor: "#002A52",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#80C4D0",
  },
  timestudies: {
    width: 290,
    height: 80,
    backgroundColor: "#002A52",
    borderRadius: 16,
    marginBottom: 16,
    marginLeft: 40,
  },
  timestudiesbtn: {
    width: 120,
    marginLeft: 107,
    marginTop: -33,
    // backgroundColor:'pink'
  },
  reportslog: {
    width: 290,
    height: 80,
    backgroundColor: "#002A52",
    borderRadius: 16,
    marginBottom: 16,
    marginLeft: 40,
  },
  help: {
    width: 290,
    height: 80,
    backgroundColor: "#002A52",
    borderRadius: 16,
    marginBottom: 16,
    marginLeft: 40,
  },

  crossbox: {
    height: 58,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  Micimage: {
    height: 110,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  submitbox: {
    height: 40,
    width: "75%",
    backgroundColor: "#18AFBA",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  submittext: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  textContainer: {
    width: "75%",
    height: 75,
    borderWidth: 0.5,
    borderColor: "#6C6C6C",
    backgroundColor:'#fff',
    borderRadius:6
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
