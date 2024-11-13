import { StyleSheet, Text, View, Alert, ScrollView, Pressable, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location"
import * as LocationGeocoding from "expo-location"
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import { Ionicons } from '@expo/vector-icons';
import Vendor from '../../components/Vendor';
import { supabase } from '../../supabase';

const index = () => {
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
    const [displayCurrentAddress,setDisplayCurrentAddress] = useState("fetching your location ...");
    const [data,setData] = useState([]);

    useEffect(()=> {
      CheckIfLocationEnabled();
      GetCurrentLocation();
    },[]);

    const CheckIfLocationEnabled = async () => {
      let enabled = await Location.hasServicesEnabledAsync();

      if(!enabled){
        Alert.alert("Location Services not enabled", "Please enable your location services to continue", 
        [{text: "OK"}],
        {cancelable: false}
        );
      }else{
        setLocationServicesEnabled(true);
      }
    };

    const GetCurrentLocation = async () => {
      let {status} =await Location.requestForegroundPermissionsAsync();

      if(status !== "granted"){
        Alert.alert("Permission not granted", "Allow the app to use the location service",
        [{text: "OK"}],
        {cancelable: false}
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy:Location.Accuracy.High,
      })
      console.log(location);

  let { coords } = location;
  if (coords) {
    const { latitude, longitude } = coords;

    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const address = await LocationGeocoding.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const streetAddress = address[0].name;
    for (let item of response) {
      let address = `${item.name}, ${item?.postalCode}, ${item?.city}`;

      setDisplayCurrentAddress(address);
    }
  }
};
    console.log("my address", displayCurrentAddress);
    const recommended = [
      {
        id: 0,
        name: "ABC mnufacturer",
        image: "https://media.istockphoto.com/id/585525382/photo/embroidery-machine-at-a-clothing-factory.jpg?s=612x612&w=0&k=20&c=O2DiaPUPznBOYIf0HwvpmfcF6L2W4DTv5SmVms4CrdA=",
        time: "35 - 45",
        type: " Fabrics",
      },
      {
        id: 0,
        name: "Vijayalakshmi Silks",
        image: "https://i.pinimg.com/736x/c9/48/60/c948607dbc3901715c704378435707bb.jpg",
        time: "10 - 35",
        type: "pure silk",
      },
      {
        id: 0,
        name: "krishna handloomers",
        image: "https://t3.ftcdn.net/jpg/06/09/68/18/360_F_609681838_tST47KXKoqp7ZF8Vex81ERRfsijUP0SM.jpg",
        time: "20 - 25",
        type: "Handloomers",
      },
      {
        id: 0,  
        name: "Sri sai labels",
        image: "https://c8.alamy.com/comp/PK3F5H/a-label-being-stitched-in-to-a-t-shirt-inside-a-garment-factory-in-bangladesh-PK3F5H.jpg",
        time: "25 - 30",
        type: "labels manufacturers",
      },
      {
        id: 0,
        name: "Prince Threads Makers",
        image: "https://media.istockphoto.com/id/522421403/photo/nylon-thread-manufacturing-unit.jpg?s=1024x1024&w=is&k=20&c=Lj5XyyfCnUk1CS9mHyx8f6UaPFnhYDwB-cC2uylHWHg=",
        time: "25 - 30",
        type: "Threads manufacturers",
      },

    ];
    const items = [
      {
        id: "0",
        name: "Offers",
        description: "Upto 50% off",
        image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
      },
      {
        id: "1",
        name: "Legends",
        description: "Across India",
        image: "https://cdn-icons-png.flaticon.com/512/925/925072.png",
      },
      {
        id: "2",
        name: "Gourmet",
        description: "Selections",
        image: "https://cdn-icons-png.flaticon.com/512/6683/6683937.png",
      },
      {
        id: "3",
        name: "Healthy",
        description: "Curated dishes",
        image: "https://cdn-icons-png.flaticon.com/512/6165/6165574.png",
      },
    ];
    const vendors = [
        {
          id: "0",
          featured_image:
            "https://thumbs.dreamstime.com/b/knitting-machine-12473877.jpg",
          images: [
            {
              id: "0",
              image:
                "https://i.pinimg.com/736x/a5/f2/bc/a5f2bc84c27b1111c14d2b2767af7457.jpg",
              description: "Knitted Women Tshirt • Rs249",
            },
            {
              id: "0",
              image:
                "https://www.anniescatalog.com/img/main/product/super_closeup/161327.jpg",
              description: "Knitted Women Tshirt • Rs149",
            },
          ],
          name: "Lotus Knits",
          Products: " • Knits• Women • Men • Kids ",
          Minimum_Quantity: "1",
       Maximum_Quantity: 1500,
          average_cost: 1600,
          aggregate_rating: 4.3,
          address: "2/27 B, Notchipalyam Road, Veerapandi(po), Tirpur- 641605,India",
          smalladdress: "Lotus Knits, Tirpur",
          offer: "₹80 OFF",
              latitude: 12.9916,
          longitude: 77.5712,
      phone: "9965524236"
        },
    
        {
          id: "1",
          featured_image:
            "https://monarchgraphics.in/cms/uploads/gallery/1630758346Size_Stripe_Labels_01.jpg",
          name: "Avery Dennison",
          Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          Products: "All Kinds Of Labels",
          average_cost: 1500,
          aggregate_rating: 4.5,
          address:
            "11th floor, spaze platinum tower, sector - 47, sohna road, gurgaon, haryana",
          smalladdress: "Gurgaon, Haryana",
          offer: "₹80 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9871100270",
        },
    
        {
          id: "2",
          featured_image:
            "https://5.imimg.com/data5/SELLER/Default/2021/4/DC/UR/LC/127520854/custom-printed-round-neck-t-shirt-now-.jpg",
          name: "Vichis",
         Products: "T-Shirts, Hoodies, Jackets",
          average_cost: 850,
        Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.3,
          address:
            "Jekegram, pokharan road, Tane",
          smalladdress: "Thane, Mumbai",
          offer: "₹60 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9900614470",
        },
    
        {
          id: "3",
          featured_image:
            "https://c8.alamy.com/comp/KP803M/silk-manufacturing-looms-and-equipment-in-whitchurch-silk-mill-whitchurch-KP803M.jpg",
          name: "Arkaat Pure Silk Products Of Handloom",
          Products: "All silk products",
          average_cost: 1850,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.1,
          address:
            "#42, 3rd cross, mudaliar compound, azadnagar, Bangalore",
          smalladdress: "Azadnagar, Bangalore",
          offer: "₹50 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9342779451",
        },
    
        {
          id: "4",
          featured_image:
            "https://c8.alamy.com/comp/CR4AGR/saiei-orimono-silk-production-factory-in-kawamata-fukushima-prefecture-CR4AGR.jpg",
          name: "Mahima Tex. Corp.",
          products: "Importers of all kinds of interlinings",
          average_cost: 1600,
    Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.4,
          address: "Arya Samaj Road, Dev Nagar, Karol Bagh, New Delhi",
          smalladdress: "Karol Bagh, New Delhi",
          offer: "₹70 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9811034438",
        },
        {
          id: "5",
          featured_image:
            "https://deepwear.info/wp-content/uploads/WhatsApp-Image-2022-12-07-at-14.39.15.jpeg",
          name: "MaxFlyer",
          products: "Jeans & Casual",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 3.5,
          address: "Shyam Gali, Gandhi nagar, Delhi",
          smalladdress: "Galaxy garments industries, Delhi",
          offer: "₹55 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9953714925",
        },
        {
          id: "6",
          featured_image:
            "https://c8.alamy.com/comp/D4MEKR/dormagen-germany-dralon-gmbh-acrylic-fiber-production-in-spinning-D4MEKR.jpg",
          name: "Paras Ram Textiles Pvt. Ltd.",
          products: "Mfrs. & suppliers of All kinds of Acrylic Fabric, Knitted Fabric, Blankets, stoles & Garmments",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.2,
          address: "Focal point, phase-VIII, Ludhiana",
          smalladress: "Focal point, phase-VIII, Ludhiana",
          offer: "₹90 OFF",
          
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9876903034",
        },
        {
          id: "7",
          featured_image:
            "https://www.bandhej.com/pub/media/83681355_2998767893480944_2374120598239444992_n.jpg",
          name: "Vizion Silks",
         products: "Mulberry Silks and madeups",
         average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.5,
          address:
            "17th main, Sahakarnagar, Bangalore",
          smalladress: "Sahakarnagar, Banagalore",
          offer: "₹55 OFF",
          no_of_Delivery: 1500,
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9901972006",
        },
        {
          id: "8",
          featured_image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b8/Material_Non-Woven_Fabric.jpg",
          name: "Han International",
          products: "Non Woven, Microdot interlining, Coat Interlining, Stretch interlining,Shoulder Pads, Bra cups, Color Felt, Mobilon tape & Cold Water Soluble Film",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.1,
          address:
            "Tuglakabad Extn.,New Delhi",
          smalladdress: "Tuglakabad Extn.,New Delhi",
          offer: "₹75 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9312419626",
        },
        {
          id: "9",
          featured_image:
            "https://island.lk/wp-content/uploads/2023/05/124071746_3-1.jpg",
          name: "Tropical Exim International Pvt.Ltd.",
          products: "Linings, Interlinings",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 3.9,
          address:
            "Pankha road, opp. C2 block, janak puri, new delhi",
          smalladdress: "janak puri, new delhi",
          offer: "₹70 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "7042104379",
        },
        {
          id: "10",
          featured_image:
            "https://c8.alamy.com/comp/MB99JW/machine-and-equipment-in-the-weaving-shop-interior-of-industrial-textile-factory-loom-MB99JW.jpg",
          name: "Anithaa Weaving mill p ltd",
          products: "baby beddings",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.5,
          address:
            "Dr.TGN Complex, West Car Street, Tiruchengode, TN",
          smalladdress: "Tiruchengode, TN",
          offer: "₹60 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9787840376",
        },
        {
          id: "11",
          featured_image:
            "https://t4.ftcdn.net/jpg/04/18/29/35/360_F_418293575_9UgIOn9Tn2lxv0jZgobU1KptJfMqp62p.jpg",
          name: "Fashion Focus",
          products: "Mfrs. & Traders of readymade garments & all related accessories",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.5,
          address:
            "F-439, sector-63, noida",
          smalladdress: "F-439, sector-63, noida",
          offer: "₹55 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9310201019",
        },
        {
          id: "12",
          featured_image:
            "https://t3.ftcdn.net/jpg/01/90/01/48/360_F_190014835_PQrtqMwT1NgS4OdZpEldCJNqmAbm89gO.jpg",
          name: "Meenaxi Fashion",
          Products: "Suppliers of export quality fabrics",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 3.6,
          address: "206, maharaja chambers, near maharaja cinema, salabatpura, surat-3095002",
          smalladdress: "salabatpura, surat-3095002",
          offer: "₹70 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9924587822",
        },
        {
          id: "13",
          featured_image:
            "https://c8.alamy.com/comp/ENG99J/workers-inside-an-rmg-readymade-garments-factory-in-savar-garments-ENG99J.jpg",
          name: "Garuda fashions",
          Products: "Ready made garments",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.3,
          address:
            "No.10,MMMP Towers, Sukadakatte, Bangalore",
          smalladdress: "Sukadakatte, Bangalore",
          offer: "₹80 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9986000006",
        },
        {
          id: "14",
          featured_image:
            "https://c8.alamy.com/comp/2R74AMP/automatic-fabrics-printing-machine-at-a-textile-dyeing-plant-at-fatullah-in-narayanganj-bangladesh-2R74AMP.jpg",
          name: "Pallava Groups",
          products: "all dying",
    average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.6,
          address:
            "24, sankari main road, pallipalayam, erode, tamil nadu",
          smalladdress: "pallipalayam, erode, tamil nadu",
          offer: "₹65 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9952605965",
        },
        {
          id: "15",
          featured_image:
            "https://i.pinimg.com/564x/39/64/ba/3964ba15d340a902003001f3b99525bc.jpg",
          name: "Princy",
          products: "Salwar kameez and anarkalis",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.6,
          address:
            "Near jain hospital, next to mhada office, motilal nagar, goregaon, west mumbai",
          smalladdress: "goregaon, west mumbai",
          offer: "₹45 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9892564277",
        },
        {
          id: "16",
          featured_image:
            "https://www.osertech.eu/wp-content/uploads/2021/04/IMG_5703.jpeg",
          name: "Label solutions",
          products: "Labels",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.4,
          address:
            "B-1 Apartment no.6 1st floor, vivek vihar, phase II, Delhi",
          smalladdress: "vivek vihar, phase II, Delhi",
          offer: "₹80 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9899360600",
        },
        {
          id: "17",
          featured_image:
            "https://c8.alamy.com/comp/2A8TEND/sewing-tools-scissors-buttons-and-threads-on-wooden-table-2A8TEND.jpg",
          name: "Meenakshi buttons",
          products: "all kinds of buttons",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.2,
          address: "no.4, avenue road, ok road, bangalore",
          smalladdress: "avenue road, ok road, bangalore",
          offer: "₹40 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "9844217216",
        },
        {
          id: "18",
          featured_image:
            "https://i.pinimg.com/736x/48/0b/29/480b2921469e30e4a3ba04b012f10934.jpg",
          name: "Vijaya Lakshmi Textiles",
          products: "All kinds of wedding and fancy sarees",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 4.6,
          address: "#8, 15th cross, cubbonpet, bengaluru",
          smalladdress: " cubbonpet, bengaluru",
          offer: "₹40 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "8746955556",
        },
        {
          id: "19",
          featured_image:
            "https://i.pinimg.com/736x/cb/fa/15/cbfa1560bc336b1890b87ebffa9af2c5.jpg",
          name: "RG Merchandisers pvt ltd",
          products: "all wrap knit & circular knit fabrics",
      average_cost: 1600,
      Minimum_Quantity: "100",
          Maximum_Quantity: 1500,
          aggregate_rating: 3.5,
          address: "plot c-134, phase-5, focal point, ludhiana, India",
          smalladdress: "focal point, ludhiana, India",
          offer: "₹80 OFF",
          latitude: 12.9716,
          longitude: 77.5946,
          phone: "8054815800",
        },
    ];
    
    useEffect(()=>{
      async function fetchData(){
        try{
          const {data,error} = await supabse.from("vendors").select("*");
          if(error){
            console.log("error fetching data",error)
          }else{
            setData(data)
          }
        } catch(error){
          console.log("error",error)
        }
      }

      fetchData();
    },[]);

    console.log("data",data)


  
  return (
    <ScrollView style= {{flex: 1, backgroundColor: "#f8f8f8"}}>
      <View style={{flexDirection:"row", alignItems:"center", gap:12, padding:10}}>
      <Octicons name="location" size={24} color="#e52850" />
      <View style={{flex:1}}>
        <Text style={{fontSize:15, fontWeight:"500"}}>Deliver To</Text>
        <Text style={{color:"gray", fontSize:16,marginTop:3}}>{displayCurrentAddress}</Text>
      </View>
      <Pressable style={{backgroundColor:"#6cb4ee", width:40, height:40, borderRadius:20, justifyContent:"center", alignItems:"center"}}>
        <Text>D</Text>
      </Pressable>
      </View>

      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#c0c0c0",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 11,
        marginTop: 10,
        marginHorizontal: 10
      }}>
        <TextInput placeholder='Search for styles, vendors, handloomers.....' />
        <AntDesign name="search1" size={24} color="#e52b50" />
      </View>

      <Carousel />

      <Categories />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {recommended?.map((item, index) => (
          <View style={{backgroundColor:"white", flexDirection:"row", margin:10,borderRadius:8}}>
            <View>
              <Image style={{width:100,height:100,resizeMode:"cover",borderTopLeftRadius:8,borderBottomLeftRadius:7}} source={{uri:item?.image}} />
            </View>
            <View style={{padding:10,flexDirection:"column"}}>
              <Text style={{fontSize: 15, fontWeight: "500"}}>{item?.name}</Text>
              <Text style={{flex:1, marginTop: 3, color: "gray", fontweight: "500"}}>{item?.type}</Text>
              <View style={{flexDirection:"row",alignItems:"center",gap:3}}>
              <Ionicons name="time-sharp" size={24} color="green" />
              <Text>{item?.time} mins</Text>
              </View>
            </View>
          </View>
         ))}
      </ScrollView>

      <Text style={{textAlign:"center", marginTop:7,letterSpacing:4,marginBottom:5,color:"gray"}}>EXPLORE</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item,index)=>(
          <View 
          key={index}
          style={{
            width: 90,
            borderColor: "#e0e0e0",
            broderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 1,
            borderRadius: 5,
            marginLeft:10,
            marginVertical:10,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"white"
          }}>
            <Image style={{width:50,height:50}} source={{uri:item?.image}}/>
            <Text style={{fontSize:13,fontWeight:"500",marginTop:6}}>{item?.name}</Text>
            <Text style={{fontSize:12,color:"gray",marginTop:3}}>{item?.description}</Text>
          </View>
        ))}
      </ScrollView>
       <Text style={{textAlign:"center", marginTop:7,letterSpacing:4,marginBottom:5,color:"gray"}}>ALL VENDORS</Text>
       <View style={{marginHorizontal:8}} >
          {vendors?.map((item,index) =>(
            <Vendor key={index} item={item} showAddButton={item.type === "Fabrics" || item.type === "pure silk"}/>
          ))}
       </View>
       
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})