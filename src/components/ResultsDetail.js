import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
   return (
      <View style={sytles.container}>
         <Image style={sytles.image} source={{ uri: result.image_url }} />
         <Text style={sytles.name}>{result.name}</Text>
         <Text>
            {result.rating} Stars, {result.review_count} Reviews
         </Text>
      </View>
   );
};

const sytles = StyleSheet.create({
   container: {
      marginLeft: 15
   },
   image: {
      width: 250,
      height: 120,
      borderRadius: 5,
      marginBottom: 5
   },
   name: {
      fontWeight: "bold"
   }
});

export default ResultsDetail;
