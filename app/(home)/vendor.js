import { Animated, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, {useRef, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Items from '../../components/Items';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";


const vendor = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    
const menu = [
    {
      id: "20",
      name: "Recommended",
      items: [
        {
          id: "101",
          name: "Shirts",
          price: 275,
          description:
            "Hand woven",
          rating: 4.1,
          ratings: 43,
          image:
            "https://i.pinimg.com/736x/cb/fa/15/cbfa1560bc336b1890b87ebffa9af2c5.jpg",
         
          bestSeller: false,
          quantity: 1,
          type:"Recommended"

        },
        {
          id: "102",
          name: "fabrics",
          price: 285,
          description:
            "Fine denim , uniform fabrics",
          rating: 4.3,
          ratings: 34,
          image:
            "https://static3.depositphotos.com/1006708/228/i/450/depositphotos_2284421-stock-photo-colorful-fabrics-on-sale.jpg",
          
          bestSeller: true,
          quantity: 1,
          type:"Recommended"

        },
        {
          id: "103",
          name: "Sarees",
          price: 250,
          description:
            "Pure silk saree",
          rating: 4.5,
          ratings: 56,
          image:
            "https://i.pinimg.com/564x/94/b7/54/94b75489086fbc3035fc647954de922f.jpg",
          
          bestSeller: false,
          quantity: 1,
          type:"Recommended"

        },
        {
          id: "104",
          name: "Collar holder",
          price: 220,
          description:
            "Transparent pvc collar holder",
          rating: 3.8,
          ratings: 22,
          image:
            "https://padmavatiplastofilm.co.in/images/products/p26.png",
          bestSeller: true,
          quantity: 1,
          type:"Recommended"

        },
        {
          id: "105",
          name: "tags",
          price: 300,
          description:
            "Tags",
          rating: 4.5,
          ratings: 45,
          image:
            "https://t4.ftcdn.net/jpg/02/50/34/69/360_F_250346969_AqtBnXJJ2wo3smi2OkwSZEMePtLmuXKv.jpg",
          
          bestSeller: true,
          quantity: 1,
          type:"Recommended"

        },
      ],
    },
    {
      id: "11",
      name: "Raw Materials",
      items: [
        {
          id: "201",
          name: "Labels",
          price: 260,
          description:
            "labels",
          rating: 0,
          ratings: 34,
          image:
            "https://unblast.com/wp-content/uploads/2019/01/Clothing-Label-Mockup.jpg",
         
          bestSeller: true,
          type:"Raw Materials",
          phone : "+918660852140"
        },
        {
          id: "202",
          name: "hooks",
          price: 220,
          description:
            "hooks",
          rating: 4.3,
          ratings: 52,
          image:
            "https://img1.exportersindia.com/final_catg_image/190461-457.jpg",
          bestSeller: false,
          type:"Raw Materials",
          phone : "+918660852140"

        },
        {
          id: "203",
          name: "zip",
          price: 190,
          description:
            "zip",
          rating: 4.6,
          ratings: 56,
          image:
            "https://mjtrends.b-cdn.net/images/product/5088/red-aluminum-teeth-non-separating-zipper_924x699.jpg",
          
          bestSeller: true,
          type:"Raw Materials",
          phone : "+918660852140"

        },
        {
          id: "204",
          name: "packing materials",
          price: 195,
          description:
            "Packing materials",
          rating: 4.5,
          ratings: 48,
          image:
            "https://c8.alamy.com/comp/F3G0EE/garments-packing-in-a-garment-industry-garment-factory-tirupur-tiruppur-F3G0EE.jpg",
          
          bestSeller: false,
          type:"Raw Materials",
          phone : "+918660852140"

        },
      ],
    },
  ];

  const scrollViewRef = useRef(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;
  const scrollToCategory = (index) => {
    const yOffset = index * ITEM_HEIGHT;
    Animated.timing(scrollAnim,{
      toValue:yOffset,
      duration:500,
      useNativeDriver:true,
    }).start();
    scrollViewRef.current.scrollTo({y:yOffset,animated:true})
  }

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>
    <ScrollView ref={scrollViewRef}
    style={{backgroundColor:"white"}}>
      <View style={{
        marginTop:5, flexDirection:"row", alignItems:"center",justifyContent:"space-between"
      }}>
      <Ionicons 
        onPress={()=>router.back()}
      style={{
        padding:5
      }} name="arrow-back" size={24} color="black" />
      <View style={{
        flexDirection:"row", alignItems:"center", paddingHorizontal:14,gap:10
      }}>
      <SimpleLineIcons name="camera" size={24} color="black" />
      <Ionicons name="bookmark-outline" size={24} color="black" />
      <MaterialCommunityIcons name="share-outline" size={24} color="black" />
      </View>
      </View>

      <View style={{justifyContent:"center",alignItems:"center",marginVertical:12}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>{params?.name}</Text>
        <Text style={{marginTop:5, color:"gray", fontWeight:"500",fontSize:15}}>All kinds of handlooms</Text>
        <View style={{
            flexDirection:"row", alignItems:"center", gap:4, marginTop:10
        }}>
            <View style={{
                flexDirection:"row", alignItems:"center",backgroundColor:"#006a4e",borderRadius:4,paddingHorizontal:4,paddingVertical:5, gap:4
            }}>
                <Text style={{color:"white", fontSize:14, fontWeight:"bold"}}>{params?.aggregate_rating}</Text>
                <Entypo name="star" size={15} color="white" />
            </View>
            <Text style={{fontSize:15, fontWeight:"500", marginLeft:5}}>3.2k Ratings</Text>
        </View>
            <View style={{
                justifyContent:"center",alignItems:"center",backgroundColor:"#d0f0c0",borderRadius:20,paddingHorizontal:10,paddingVertical:5,marginTop:12
            }}>
                <Text>30 - 40 mins • 6 km | Bangalore </Text>
            </View>
      </View>
      {menu?.map((item,index) => (
        <Items key={index} item={item}/>
      ))}
    </ScrollView>


    <View style={{
      flexDirection:"row",
      backgroundColor:"white"
    }}>

      {menu?.map((item,index) => (
        <Pressable 
          onPress={() => scrollToCategory(index)}
          style={{
            paddingHorizontal:7,
            paddingVertical:5,
            marginVertical:10,
            marginHorizontal:10,
            alignItems:"center",
            justifyContent:"center",
            borderColor:"#181818",
            borderWidth:1
          }}>
          <Text>{item?.name}  </Text>
        </Pressable>
      ))}

    </View>
    
    <Pressable 
      onPress={() => setModalVisible(!modalVisible)}
      style={{
      width:60,
      height:60,
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center",
      position:"absolute",
      right:25,
      bottom:cart?.length > 0 ? 70 : 35,
      backgroundColor:"black"
    }}>
    <Entypo style={{
      textAlign:"center"
    }} name="documents" size={24} color="white" />
    <Text style={{
      textAlign:"center",
      color:"white",
      fontWeight:"500",
      fontSize:11,
      marginTop:3
    }}>OPT</Text>
    </Pressable>

    <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={{height:190,
          width:250,
          backgroundColor:"black",
          position:"absolute",
          bottom:35,
          right:10,
          borderRadius:7
          }}>
            {menu?.map((item,index) => (
              <View style={{
                padding:10,flexDirection:"row",alignItems:"center",
                justifyContent:"space-between"
              }}>
                <Text style={{
                  color:"#D0D0D0",
                  fontWeight:"600",
                  fontSize:18
                }}>{item?.name}</Text>
                <Text style={{
                  color:"#D0D0D0",
                  fontWeight:"600",
                  fontSize:18
                 }} >{item?.items?.length}</Text>
              </View>
            ))}
            <View style={{ justifyContent: "center", alignItems: "center"}}>
              <Image
              style ={{
                width:120,
                height:70,
                resizeMode: "contain"
              }}
              source={{
                uri:"https://i.pinimg.com/originals/b3/ef/ed/b3efed4bca093e871a01181b0d84ee86.png",
              }}
              />
            </View>
          </View>
    </Modal>

    {cart?.length > 0 && (
      <Pressable 
      onPress={()=>
      router.push({
        pathname: "/cart",
        params: {
          name: params.name,
        },
      })}
      style={{
        backgroundColor:"#fd5c63",
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text style={{
          textAlign:"center",
          color:"white",
          fontSize:15,
          fontWeight:"600",
        }}>{cart.length} items added </Text>
        <Text style={{
          textAlign:"center",
          color:"white",
          marginTop:5,
          fontWeight:"600"
        }}>Add item(s) worth 240 to reduce surge fee by  Rs 35.</Text>
      </Pressable>

        

    )}

    </>
  )
}
  
export default vendor

const styles = StyleSheet.create({})