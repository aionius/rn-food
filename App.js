import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const AppNavigator = createStackNavigator(
   {
      Home: {
         screen: SearchScreen
      },
      ResultsShow: {
         screen: ResultsShowScreen
      }
   },
   {
      initialRouteName: "Home",
      defaultNavigationOptions: {
         title: "Search Food"
      }
   }
);

export default createAppContainer(AppNavigator);
