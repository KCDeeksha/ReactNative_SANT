import { Pressable, StyleSheet, Text, View, Image, Linking } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartReducer';
import { Alert } from 'react-native';
// import SendIntentAndroid from 'react-native-send-intent';

const MenuItem = ({item}) => {
    const [additems,setAddItems] = useState(0);
    const [selected,setSelected] = useState(false);
    const dispatch = useDispatch();
    const handleEnquireClick = () => {
        if (item.type === "Raw Materials") {
            const phoneNumber = item.phone;
            const message = "Hello, I'm interested in your products. Can you provide more information?";
            
            const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

            Linking.canOpenURL(whatsappUrl).then((supported) => {
                if (supported) {
                    return Linking.openURL(whatsappUrl);
                } else {
                    Alert.alert("WhatsApp is not installed on your device");
                }
            });
        }else {
            Alert.alert("I want to go home");
        }
    }
  return (
    <View>
      <Pressable style={{
        margin:10, flexDirection:"row",justifyContent:"space-between", marginVertical:15
      }}  >
        <View>
            <Text style={{
                fontSize:18,fontWeight:"600",width:220
            }}>{item?.name}</Text>
            <Text style={{
                marginTop: 5,
                borderRadius: 4,
            }}>₹{item?.price}</Text>
            <Text
             style={{
                marginTop: 5,
                borderRadius: 4,
             }}>
                {[0,0,0,0,0].map((en, i) => (
                    <FontAwesome
                    key={i}
                    style={{ paddingHorizontal: 3}}
                    name={i < Math.floor(item.rating) ? "star" : "star-o"}
                    size={15}
                    color="#ffd700" /> 
                ))}
             </Text>
             <Text style={{
                width:200, marginTop:8,color:"gray",fontSize:16
             }}>{item?.description.length > 40 ? item?.description.substr(0,37) + "..." : item?.description}</Text>
        </View>

       <Pressable style={{
            marginRight:10
       }}>
          <Image style={{
            width:120, height:120,borderRadius:8
          }}
          source={{
            uri:item?.image
          }}
          />
          {selected ? (
            <Pressable 
            style={{
                position: "absolute",
                top:95,
                left:20,
                backgroundColor:"#fd5c63",
                flexDirection: "row",
                paddingHorizontal: 10,
                alignItems: "center",
                borderRadius:5,
            }}>
                <Pressable
                onPress={()=>{
                    if (additems == 1){
                        dispatch(removeFromCart(item));
                        setAddItems(0);
                        setSelected(false);
                        return;
                    }
                    setAddItems((c) => c-1);
                    dispatch(decrementQuantity(item));
                }}>
                    <Text
                    style={{
                        fontSize: 25,
                        color: "white",
                        paddingHorizontal: 6,
                    }}>
                        -
                    </Text>
                </Pressable>
                <Pressable>
                    <Text
                    style={{
                        color:"white",
                        paddingHorizontal:6,
                        fontSize: 15,
                    }}>
                        {additems}
                    </Text>
                    </Pressable>
                    <Pressable 
                    onPress={()=>{
                        setAddItems((c) => c+1);
                        dispatch(incrementQuantity(item));
                    }}>
                        <Text
                        style={{
                            fontSize:17,
                            color:"white",
                            paddingHorizontal: 6,
                        }}>
                            +
                        </Text>
                        </Pressable>
                        </Pressable>

          ) : (
            <Pressable
                onPress={() => {
                    if(item?.type==="Recommended"){
                        setSelected(true);
                    if (additems === 0){
                        setAddItems((c) => c+1);
                    };
                    dispatch(addToCart(item)); 
                    }
                    else{
                        handleEnquireClick();
                    }
                    
                }}
                style={{
                    position:"absolute",top:95,left:20,borderColor:"#e32636",borderWidth:1,flexDirection:"row",paddingHorizontal:25,paddingVertical:5,alignItems:"center",backgroundColor:"white", borderRadius:5
                  }}>
                     <Text style={{
                fontSize:18, fontWeight:"600", color:"#fd5c63"
            }}>{item?.type==="Recommended"?"ADD":"ENQUIRE"}</Text>
          </Pressable>

          )}
          </Pressable>
      </Pressable>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({})