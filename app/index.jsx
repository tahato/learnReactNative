import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { ScrollView } from "react-native";
import { Resirect,router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
const index = () => {
 
  
  return (
    <SafeAreaView className="h-full bg-black ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center h-full w-full px-7">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className=" mt-5">
            <Text className="text-white text-3xl text-center font-bold">
              Discover Endless {"         "} Possibilities With{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[120px] h-[15px] -bottom-2 -right-8 absolute"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-sm mt-7 font-pregular text-center">
            where creativity meets innovation: embark on a journy of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('./home')}
            containerStyle="mt-7 w-full"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default index;

