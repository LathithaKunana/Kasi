import React, { Component } from 'react'
import { Text, View , ScrollView,Image} from 'react-native'

const items = [
    {
      View: <View></View>,
      text: "All",
    },
    {
      View: <View></View>,
      text: "Resturant",
    },
    {
      View: <View></View>,
      text: "Art",
    },
    {
      View: <View></View>,
      text: "Clothing",
    },
    {
      View: <View></View>,
      text: "Tshisa Nyama",
    },
    {
      View: <View></View>,
      text: "Clubs",
    },
    {
      View: <View></View>,
      text: "Internet Cafe",
    },
    {
      View: <View></View>,
      text: "Tavens",
    },
  ];

export default function Catergories() {
    return (
        <View style={{backgroundColor: 'white',marginTop: 5, paddingVertical: 12, paddingHorizontal: 24}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {/*loop start here*/}
            {items.map((item,index) => (
              <View key = {index}style={{alignItems: "center", marginRight: 0, marginLeft: 15}}>
                <View style = {{ borderColor: '#eee', borderWidth: 2,padding: 10, borderRadius: 8}} >
                  {item.View}
                  <Text style={{fontSize: 15, fontWeight: 900}}>{item.text}</Text>
                </View>    
                </View>
            
            ))}
              {/*loop end here*/}
          </ScrollView>
        </View>
      
    )
}
