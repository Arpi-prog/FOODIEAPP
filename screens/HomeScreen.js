import React, { useState, useEffect } from "react";
import { Image, KeyboardAvoidingView, Pressable, ScrollView, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import * as Location from 'expo-location';
import Hotels from '../components/Hotels';
import hotels from "../data/hotels";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync(coords);
      if (reverseGeocode.length > 0) {
        const { city, region, country } = reverseGeocode[0];
        setAddress(`${city}, ${region}, ${country}`);
      }
    })();
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1, marginTop: 25 }}>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          <View style={styles.locationContainer}>
            <EvilIcons name="location" size={28} color="#cb202d" />
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.deliverToText}>Deliver To</Text>
              <Text style={styles.locationText}>
                {errorMsg ? errorMsg : address ? address : 'Fetching location...'}
              </Text>
            </View>
          </View>

          <View style={styles.container}>
            <EvilIcons
              style={{ marginRight: 10 }}
              name="search"
              size={28}
              color="#cb202d"
            />
            <TextInput
              style={{ fontSize: 18 }}
              placeholder="Restaurant name, cuisine,Dish"
            />
          </View>
          <Categories />
          <Pressable style={{ marginLeft: 5 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.image}
                source={{
                  uri: "https://cdn.dribbble.com/users/4987860/screenshots/15665665/foodie.jpg",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://cdn.dribbble.com/users/10789689/screenshots/20033207/simple_and_modern_3d_logo_mockup.png",
                }}
              />
            </View>
          </Pressable>
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              fontWeight: "700",
              paddingLeft: 6,
            }}
          >
            Eat what makes you happy
          </Text>
          <Pressable>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 11,
              }}
            >
              <View style={{ margin: 6 }}>
                <Image
                  style={styles.MiddleImage}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "gray",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Thalis
                </Text>
              </View>

              <View style={{ margin: 8 }}>
                <Image
                  style={styles.MiddleImage}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "gray",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Pizzas
                </Text>
              </View>

              <View style={{ margin: 8 }}>
                <Image
                  style={styles.MiddleImage}
                  source={{
                    uri: "https://simplehomeedit.com/wp-content/uploads/2024/03/Homemade-Beef-Burgers-4.webp",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "gray",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Burger
                </Text>
              </View>

              <View style={{ margin: 8 }}>
                <Image
                  style={styles.MiddleImage}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "gray",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Dosas
                </Text>
              </View>
            </View>
          </Pressable>
          <FlatList
            data={hotels}
            renderItem={({ item }) => <Hotels restaurent={item} />}
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
    marginLeft: 9,
    marginTop: 10,
    marginRight: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#A0A0A0",
  },
  deliverToText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 16,
    color: "gray",
  },
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
    marginLeft: 9,
    marginTop: 10,
    marginRight: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#A0A0A0",
  },
  swipeable: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  swipeableText: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 7,
    padding: 7,
    margin: 5,
  },
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: "cover",
  },
  MiddleImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: "cover",
  }
});



