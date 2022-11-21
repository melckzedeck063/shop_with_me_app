import { View, Text , SafeAreaView, Image, TouchableOpacity, FlatList, useWindowDimensions, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'


import image from '../assets/images/pexels-jonathan-borba-2983101.jpg'
import image1 from '../assets/images/pexels-roman-odintsov-4958945.jpg'
import image2 from '../assets/images/pexels-chan-walrus-958545.jpg'
import RestaurantsCard from '../components/RestaurantsCard'
import ProductCard from '../components/ProductCard'

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
  navigation.setOptions({
    headerShown : false
  })

    const { height, width } = useWindowDimensions();

    return (
      <SafeAreaView>
        <ScrollView>
        <View className="bg-gray-200" >
           <View className="relative">
             <View style={{alignSelf : 'center', height : height/2.5}} className="w-full border-4 shadow-xl borrder-blue-800 mx-auto absolutee">
                <Image source={props.coverImage} className="h-full w-full overflow-hidden" />
             </View>
           <Text className="py-3 text-lg" >RestaurantScreen</Text>
              
            <View className="bg-gray-300 py-2 w-fulll px-2">
              <View className="py-2 px-2" >
                <Text className="text-lg font-medium text-slate-700">Available Products</Text>
              </View>
            <ScrollView className="space-x-4 w-full"
             horizontal={true}
            >
              {
                    Cards && Cards.map((item) => (
                      <View key={item.id} >
                        <ProductCard photo={item.photo} title={item.product} className="w-full" />
                      </View>
                ))
              }
              
            </ScrollView>
            </View>


            
           </View>
         </View>
         </ScrollView>
      </SafeAreaView>
  )
}

export default RestaurantScreen