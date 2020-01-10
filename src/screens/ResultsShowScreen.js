import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import yelp from "../api/Yelp";
import { FlatList } from "react-native-gesture-handler";

const ResultsShowScreen = ({ navigation }) => {
   const [result, setResult] = useState(null);

   const getResult = id => {
      yelp
         .get(`${id}`)
         .then(response => {
            setResult(response.data);
         })
         .catch(err => console.log(err));
   };

   const id = navigation.getParam("id");
   useEffect(() => {
      getResult(id);
   }, []);

   if (!result) {
      return null;
   }

   return (
      <View>
         <Image style={styles.image} source={{ uri: result.image_url }} />
         <Text>Name: {result.name}</Text>
         <Text>Price: {result.price}</Text>
         <Text>
            Location: {result.location.display_address[0]}{" "}
            {result.location.display_address[1]}
         </Text>
         <Text>Phone: {result.display_phone}</Text>
         <Text>Rating: {result.rating}</Text>
         <Text>Review: {result.review_count}</Text>
         <Text>Photos:</Text>
         <FlatList
            horizontal
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
               return <Image style={styles.image} source={{ uri: item }} />;
            }}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   image: {
      width: 250,
      height: 120,
      borderRadius: 5,
      marginLeft: 5,
      marginRight: 5
   }
});

export default ResultsShowScreen;
