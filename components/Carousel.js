import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from "react-native-image-slider-box"

const Carousel = () => {
    const images = [
        "https://i.pinimg.com/originals/9e/c5/cd/9ec5cdfe4d18f004394209d1fb0ddebb.jpg",
        "https://png.pngtree.com/thumb_back/fw800/background/20231023/pngtree-artisanal-handloomed-fabric-embracing-the-textures-of-traditional-craftsmanship-image_13694443.png",
        "https://handloom.odisha.gov.in/sites/default/files/styles/slider/public/2020-06/handloom-banner-4_0.jpg?itok=zQvx6cY2"
    ]
  return (
    <View>
       <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274f"  
        inactiveDotColor="#90a4ae"  
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
          marginTop: 10
        }}
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})