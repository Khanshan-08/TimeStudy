import React from "react";
import {View,Text,StyleSheet,StatusBar} from 'react-native';

export default function AddnoteScreen(){
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor='#fff'/>
            <Text>hello world</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",

    }
});