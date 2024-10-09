import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';

export default function SplashScreen(){
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("login");
        },2000);
    },[navigation])
    return(
        <View style={styles.container}>
            <Image source={require('./timestudy-splash.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002A52",
  },
});