import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const HomeScreen = () => {
  const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip-Hop"];

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        {/* Header  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: "cover",
              }}
              source={require("../assets/user.jpeg")}
            ></Image>
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Good Morning
            </Text>
          </View>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="white"
          />
        </View>
        {/* Genres */}
        <View>
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Genres
          </Text>
          <View
            style={{
              marginVertical: 5,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {genres.map((genre, index) => {
              return (
                <Pressable
                  key={index}
                  style={{
                    backgroundColor: "#282828",
                    padding: 10,
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>{genre}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
        {/* Favourite Songs  */}
        <View>
          
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
