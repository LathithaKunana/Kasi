import React, { Component } from 'react'
import { Text, View } from 'react-native'

const items = [
    {
      image: require("./../assets/assets/images/shopping-bag"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

export default function Catergories() {
    return (
      <View>
        <Text> Catergories </Text>
      </View>
    )
}
