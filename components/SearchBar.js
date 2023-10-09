import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function SearchBar() {
    return (
        <View style = {{marginTop: 15, flexDirection: "row", padding:15}}>
            <GooglePlacesAutocomplete 
                placeholder='search'
                styles={{
                    textInput: {
                        backgroundColor:"#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        fontSize: 18,
                    },
                    textInputContainer: {
                        backgroundColor:"#eee",
                        borderRadius: 50,
                        flexDirection:"row",
                        alignItems: "center",
                        marginRight: 10,
                        padding:5
                    },
                }}
               renderLeftButton={() => (
                <View style={{marginLeft: 10}} >
                    <Ionicons name="location-sharp" size={24} />
                </View>
               )}
                
                />
        </View>
    )
};

