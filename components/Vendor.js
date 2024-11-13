import { StyleSheet, Text, View,Pressable, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useRouter} from "expo-router"

const Vendor = ({item}) => {
    const router = useRouter();
  return (
    <Pressable
    onPress={()=> router.push({
        pathname:"/vendor",
        params:{
            id: item.id,
            name: item.name,
            address: item.address,
            smalladdress: item.smalladdress,
            products: item.products,
            aggregate_rating: item.aggregate_rating,
            Minimum_Quantity: item.Minimum_Quantity,
            Maximum_Quantity: item.Maximum_Quantity,
        }
    })}
        style={{
            marginHorizontal: 6,
            marginVertical: 12,
            borderRadius: 20,
            backgroundColor: "white",
        }}
    >
      <Image 
        style={{
            width: "100%",
            aspectRatio: 6 / 4,
            borderTopLeftRadius:6,
            borderTopRightRadius:6,
         }}
      source={{uri:item?.featured_image}}/>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      }}>
        <View style={{
            
        }}>
            <Text
                style={{
                    paddingHorizontal: 10,
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight:"600"
                }}>
                    {item?.name}</Text>
            <Text
            style={{
                paddingHorizontal: 10,
                marginTop: 3,
                fontSize: 15,
                fontWeight:"500",
                color:"gray"
            }}>
                All Kinds of handlooms</Text>
            <Text
            style={{
                paddingHorizontal: 10,
                marginTop: 3,
                fontSize: 14,
                fontWeight:"500",
                color:"#505050"
            }}>
                {item?.phone}</Text>
        </View>

        <View style={{
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"#006a4e",
            borderRadius:4,
            paddingHorizontal:4,
            paddingVertical:5,
            marginRight:10,
            gap:3
        }}>
            <Text style={{
                textAlign:"center",
                color:"white"
            }}>{item?.aggregate_rating}</Text>
            <MaterialIcons name="star" size={15} color="white" />
        </View>
      </View>
      <View
        style={{
            borderWidth: 0.5,
            borderColor: "#c8c8c8",
            marginHorizontal: 10,
            marginVertical: 4,
        }}
      />
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        gap:4,
        marginHorizontal:8,
        marginVertical:5
      }}>
      <MaterialCommunityIcons name="brightness-percent" size={24} color="#1F75FE" />
      <Text style={{
        marginLeft:2,
        color:"#1F75FE",
        fontWeight:"500"
      }}>20% OFF upto Rs.100</Text>
      </View>
    </Pressable>
  );
};

export default Vendor

const styles = StyleSheet.create({})