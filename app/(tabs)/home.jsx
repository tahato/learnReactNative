import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import axios from "axios";

const Home = () => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        setRes(resp.data); // Set data into state
        setLoading(false); // Set loading to false when data is fetched
    
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setRes([]); // Optionally reset data if there's an error
        setLoading(false); // Stop loading even if there was an error
      });
  }, []);


  return (
    <>
      <SafeAreaView>
        {loading ? (
          <Text>is loading ...</Text>
        ) : (
          <FlatList
            data={res}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => (
              <Text className="text-3xl ">{item.title}</Text>
            )}
            ListHeaderComponent={() => (
              <View className="my-6 px-4 space-y-2">
                <View className="justify-between items-start flex-row mb-6">
                  <View className="mb-6">
                    <Text>Welcom Back</Text>
                    <Text>JSMastery</Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
