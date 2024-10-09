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
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function LiverScreen() {
  const mytasknav = useNavigation();
  const backnav = useNavigation();
  const usernav = useNavigation();
  const settingnav = useNavigation();
  const notificationnav = useNavigation();
  const [Selecttask, setSelecttask] = useState("- Select task -");
  const [Isclicked, setIsclicked] = useState(false);

   
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#002A52" barStyle="light-content" />
      {/* header liver text in liver screen  */}
      <View style={Styles.headerBox}>
        {/* chevron left  */}
        <View style={Styles.chevronbox}>
          <TouchableOpacity onPress={() => mytasknav.navigate("MyTask")}>
            <Image source={require("./chevron-left-white.png")} />
          </TouchableOpacity>
        </View>
        {/* header text */}
        <View style={Styles.textBox}>
          <View>
            <Text style={Styles.livertext}>Liver</Text>
          </View>
        </View>
      </View>
      {/* hr line under header box */}
      <View
        style={{ width: "100%", height: 0.6, backgroundColor: "#C6C6C6" }}
      ></View>
      {/* Content box in liver screen  */}
      <View style={{ height: 510, width: "100%" }}>
        {/* first container in content box */}
        <View style={Styles.firstcontentbox}>
          <View
            style={{
              width: "90%",
              height: 75,
              flexDirection: "row",
            }}
          >
            {/* chevron */}
            <View
              style={{
                width: "7%",
                height: 75,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Image source={require("./chevron-left-liver.png")} />
              </TouchableOpacity>
            </View>
            {/* button */}
            <View
              style={{
                height: 75,
                width: 135,
                marginLeft: 4,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 135,
                  height: 24,
                  backgroundColor: "#18AFBA",
                  borderRadius: 24,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: "500",
                    textAlign: "center",
                    top: 2,
                  }}
                >
                  Pre-Tansplant Time
                </Text>
              </TouchableOpacity>
            </View>
            {/* hr line vertical */}
            <View
              style={{
                height: 30,
                width: 0.5,
                backgroundColor: "#fff",
                marginTop: 23,
                marginLeft: 7,
              }}
            ></View>
            {/* button */}
            <View
              style={{
                width: 110,
                height: 22,
                top: 25,
                left: 5,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#87ABCC",
                    fontSize: 15,
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Post-Tansplant Time
                </Text>
              </TouchableOpacity>
            </View>
            {/* chevron */}
            <View
              style={{
                width: "7%",
                height: 75,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Image source={require("./chevron-right-liver.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* second  container in content box */}
        <View style={Styles.secondBox}>
          {/* dropdown + export container */}
          <View
            style={{
              width: "100%",
              height: 55,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* dropdown box */}

            <TouchableOpacity
              style={Styles.dropdown}
              onPress={() => {
                setIsclicked(!Isclicked);
              }}
            >
              <Text>{Selecttask}</Text>
              {Isclicked ? (
                <Image source={require("./dropdown.png")} />
              ) : (
                <Image source={require("./dropdown.png")} />
              )}
            </TouchableOpacity>

            {/* export button */}
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <TouchableOpacity style={{ marginLeft: -10 }}>
                <Image source={require("./uil_file-export.png")} />
              </TouchableOpacity>
              <View style={{ marginLeft: 5 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: "#002A52",
                  }}
                >
                  Export
                </Text>
              </View>
            </View>
          </View>
          {/* dropdown box when i clicked on dropdown */}
          {Isclicked ? <View style={Styles.dropdownbox}>
              <FlatList />
            </View> : null }
          
          {/* time container + weekly data */}
          <View style={Styles.weeklyBox}>
            <ScrollView>
              <View style={Styles.contentcontainer}>
                {/* day1 data  */}
                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        S
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#002A52",
                        }}
                      >
                        May 13
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        02:00 hrs - 30 mins
                      </Text>
                    </View>
                    {/* rewrite image */}
                    <View>
                      <TouchableOpacity>
                        <Image source={require("./mynaui_edit-one.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        M
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#002A52",
                        }}
                      >
                        May 13
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        02:00 hrs - 30 mins
                      </Text>
                    </View>
                    {/* rewrite image */}
                    <View>
                      <TouchableOpacity>
                        <Image source={require("./mynaui_edit-one.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        T
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#002A52",
                        }}
                      >
                        May 13
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        02:00 hrs - 30 mins
                      </Text>
                    </View>
                    {/* rewrite image */}
                    <View>
                      <TouchableOpacity>
                        <Image source={require("./mynaui_edit-one.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        W
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#002A52",
                        }}
                      >
                        May 13
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        02:00 hrs - 30 mins
                      </Text>
                    </View>
                    {/* rewrite image */}
                    <View>
                      <TouchableOpacity>
                        <Image source={require("./mynaui_edit-one.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        T
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#002A52",
                        }}
                      >
                        May 13
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        02:00 hrs - 30 mins
                      </Text>
                    </View>
                    {/* rewrite image */}
                    <View>
                      <TouchableOpacity>
                        <Image source={require("./mynaui_edit-one.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        F
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#002A52",
                        }}
                      >
                        May 13
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        02:00 hrs - 30 mins
                      </Text>
                    </View>
                    {/* rewrite image */}
                    <View>
                      <TouchableOpacity>
                        <Image source={require("./mynaui_edit-one.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={Styles.dayBox}>
                  {/* day name box */}
                  <View style={Styles.daynamebox}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#002A52",
                        }}
                      >
                        TOTAL
                      </Text>
                    </View>
                  </View>
                  {/* time container */}
                  <View style={Styles.timeBox}>
                    {/* time box */}
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "500",
                          color: "#002A52",
                        }}
                      >
                        12 hours
                      </Text>
                    </View>
                    {/* hr vertical line */}
                    <View
                      style={{
                        width: 0.8,
                        height: 34,
                        backgroundColor: "#CDD1E0",
                      }}
                    ></View>
                    {/* save & hold box container */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: 55,
                          height: 22.5,
                          backgroundColor: "#18AFBA",
                          borderRadius: 48,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: "500",
                          }}
                        >
                          Save
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          width: 55,
                          height: 22.5,
                          backgroundColor: "#18AFBA",
                          borderRadius: 48,
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: "500",
                          }}
                        >
                          Hold
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* footer box in liver  screen */}
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
          <TouchableOpacity
            style={Styles.footerboxes}
            onPress={() => notificationnav.navigate("NotificationScreen")}
          >
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
  },
  headerBox: {
    height: 108,
    width: "100%",
    flexDirection: "row",
  },
  chevronbox: {
    height: 108,
    width: "30%",
    // backgroundColor:'lightgreen',
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    height: 108,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  livertext: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginLeft: -70,
    letterSpacing: -0.4,
  },
  firstcontentbox: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  secondBox: {
    width: "100%",
    height: 430,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdown: {
    height: 30,
    width: 230,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    
  },
  dropdownbox: {
    height: 300,
    width: 320,
    marginTop: 10,
    borderWidth: 1,
    borderBottomColor: "#C6C6C6",
    marginLeft:19
  },
  weeklyBox: {
    height: 370,
    justifyContent: "center",
    alignItems: "center",
  },
  contentcontainer: {
    width: 320,
    height: 420,
    borderWidth: 0.6,
    borderColor: "#C6C6C6",
  },
  dayBox: {
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  daynamebox: {
    width: 90,
    height: 60,
    borderWidth: 0.6,
    borderColor: "#C6C6C6",
    justifyContent: "center",
    alignItems: "center",
  },
  timeBox: {
    width: 230,
    height: 60,
    borderWidth: 0.6,
    borderColor: "#C6C6C6",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
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
