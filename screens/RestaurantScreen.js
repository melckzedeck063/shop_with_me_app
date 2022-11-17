import { View, Text , SafeAreaView, Image, TouchableOpacity, FlatList, useWindowDimensions} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'


import image from '../assets/images/pexels-jonathan-borba-2983101.jpg'
import image1 from '../assets/images/pexels-roman-odintsov-4958945.jpg'
import image2 from '../assets/images/pexels-chan-walrus-958545.jpg'
import RestaurantsCard from '../components/RestaurantsCard'

const Cards = [
    { product: "Pizza", photo: image , id:1},
    { product: "Burger", photo: image1, id:2 },
    { product: "Birian", photo: image2, id:3 },
    { product: "Pizza", photo: image, id:4 },
    { product: "Burger", photo: image1, id:5 },
    {product : "Birian", photo : image2, id:6}
  ]

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const { params: { props } } = useRoute();
    // console.log(props)

    const { height, width } = useWindowDimensions();

    return (
      <SafeAreaView>
         <View className="bg-gray-200" >
           {/* <Text>RestaurantScreen</Text> */}
           <View className="relative">
             <View style={{alignSelf : 'center'}} className="rounded-fulll h-72 w-full border-4 shadow-xl borrder-blue-800 mx-auto absolutee">
                <Image source={props.coverImage} className="h-full w-full rounded-fulll overflow-hidden" />
             </View>
             
             <View className="my-4" style={{ height : height/2 }} >
                <Text className="text-xl font-bold text-sky-600"> Affordable Bites </Text>
                <FlatList 
                   data={Cards}
                   style={{
                       paddingHorizontal: 10,
                       paddingTop: 10,
                       paddingBottom : 20
                   }}
                   className="rounded-xl bg-white"
                   renderItem={(itemData) => {
                       return (
                        <>
                        <RestaurantsCard photo={itemData.item.photo} title={itemData.item.product} />
                        </>
                    )
                   }}
                />
             </View>
           </View>
         </View>
      </SafeAreaView>
  )
}

export default RestaurantScreen