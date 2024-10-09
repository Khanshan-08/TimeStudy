import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginscreen from "./project/screens/login";
import Homescreen from "./project/screens/Home";
import MyTaskScreen from "./project/screens/Mytask";
import TimeStudiesScreen from "./project/screens/timestudies";
import Profile from "./project/screens/profile";
import Notification from "./project/screens/notification";
import Setting from "./project/screens/setting";
import Help from "./project/screens/Help";
import Privacy from "./project/screens/privacy";
import AboutScreen from "./project/screens/about";
import OtpScreen from "./project/screens/Otp";
import AiScreen from "./project/screens/ai";
import LiverScreen from "./project/screens/liver";
import AddnoteScreen from "./project/screens/addnote";
import SplashScreen from "./project/screens/SplashScreen";
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Loginscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OtpScreen}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#002A52",
            },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 18,
              fontWeight: "500",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTask"
          component={MyTaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Liver"
          component={LiverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="timestudies"
          component={TimeStudiesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AIscreen"
          component={AiScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Userprofile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={Privacy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Note"
          component={AddnoteScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
