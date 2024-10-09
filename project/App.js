import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View } from "react-native";
import Pokemonlist from './data.json'

export default function App(){
    return(
        <View style={Styles.container}>
        <Text>hello world</Text>
        <StatusBar style="auto"/>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
    }
}) 