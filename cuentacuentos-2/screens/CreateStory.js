import React, {Component} from "react";
import {Text, View, StyleSheet,SafeAreaView,
StatusBar,Platform,Image} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    if(!this.state.fontsLoaded){
      return <AppLoading/>
    }else{
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image source={require("../assets/logo.png")}
             style={styles.iconImage}></Image> 
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}> Crear Historias </Text>
          </View>
        </View>
      </View>
    )
    }
  }
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle:{
    flex:0.07,
    flexDirection: "row"
  },
  appIcon:{
    flex:0.3,
    justifyContent:"center",
    alignItems: "center"
  },
  iconImage:{
    width:"200%",
    height:"200%",
    resizeMode:"contain"
  },
  appTitleTextContainer:{
    flex:0.7,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  }
})
