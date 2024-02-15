import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import React from "react";

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={["#040306", "#131624"]}
      style={{ flex: 1 }}
    >
      <ScrollView style={{marginTop: 50}}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 30 }}>Home Screen</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
