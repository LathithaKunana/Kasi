import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function HeaderTabs() {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'center',}}>
        <HeaderButton text= 'Delivery'/>
        <HeaderButton text= 'Pickup'/>
      </View>
    )
}

const HeaderButton = (props) => (

    <TouchableOpacity style={{
      backgroundColor: '#000',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30
    }}>
      <Text style = {{color: '#fff'}} >{props.text}</Text>
    </TouchableOpacity>

);
