import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subimt = () => {};

  return (
    <SafeAreaView className="bg-primary h-full pt-20">
      <ScrollView>
        <View className="justify-center h-full w-full p-5  ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl mt-10 font-psemibold ">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={email}
            handleChange={(e) => setEmail(e)}
            otherStyle="mt-7"
            keyboardType="email-address"
            placeholder="Email "
          />
          <FormField
            title="Password"
            value={password}
            handleChange={(e) => setPassword(e)}
            otherStyle="mt-7"
          />
          <CustomButton
            title="Sign in"
            handlePress={subimt}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center mt-10 items-center flex-row gap-2">
            <Text className="text-gray-100 font-pregular text-lg">
              D'ont have account?
            </Text>
            <Link
              href={"/sign-up"}
              className="text-secondary text-lg font-semibold "
            >
              SignUp
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
