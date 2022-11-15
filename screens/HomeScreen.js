import { View, Text, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'

import image from '../assets/images/pexels-jonathan-borba-2983101.jpg'
import image1 from '../assets/images/pexels-roman-odintsov-4958945.jpg'
import image2 from '../assets/images/pexels-chan-walrus-958545.jpg'
import { useNavigation } from '@react-navigation/native'
import CategoryCard from '../components/card_component'
import ComponentCard from '../components/ComponentCard'
import RestaurantsCard from '../components/RestaurantsCard'

const Cards = [
  { product: "Pizza", photo: image , id:1},
  { product: "Burger", photo: image1, id:2 },
  { product: "Birian", photo: image2, id:3 },
  { product: "Pizza", photo: image, id:4 },
  { product: "Burger", photo: image1, id:5 },
  {product : "Birian", photo : image2, id:6}
]

const HomeScreen = () => {

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  navigation.setOptions({
    headerShown : false
  })
  return (
    <View className='bg-slate-700 w-full h-full'>
      <View className={`${height < 400? 'mt-8' : 'mt-12'}`} >
      <View className="flex-row justify-between mx-auto">       
      <Text className='text-white font-medium text-xl mt-2 px-2'>Top Categories</Text>
      <TouchableOpacity>
      <Text className='text-amber-500 font-medium text-xl mt-2 px-2'>More</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
          paddingHorizontal: 6,
          paddingTop : 6
        }}
         
        data={Cards}
        renderItem={(itemData) => {
          return (
            <CategoryCard coverImage={itemData.item.photo} title={itemData.item.product}  />
          )
        }}
        keyExtractor={(item) => item.id}
      />
      </View>
     
     <View className="my-2">
        <Text className="text-white font-medium text-xl mt-2 px-2" > Most Popular Products </Text>
        <FlatList
          horizontal 
          showsHorizontalScrollIndicator={true}
          style={{
            paddingHorizontal: 10,
            paddingVertical : 5
          }}
          data={Cards}
          renderItem={(itemData) => {
            return (
              <>
               <ComponentCard photo={itemData.item.photo} title={itemData.item.product} />
               
              </>
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      <View className="">
        <Text className="text-white font-medium text-xl mt-2 px-2" > Most Popular Restaurants </Text>
        <FlatList
          horizontal={false}
          style={{
            flexGrow: 1,
            paddingHorizontal: 10,
            paddingVertical : 10
          }}

          data={Cards}
          renderItem={(itemData) => {
            return (
              // <RestaurantsCard profile={itemData.item.photo} title={itemData.item.product} />
              <>
                <Text className="bg-sky-500 text-white p-1 rounded-md my-2"> Home sweet home </Text>
                <Text className="bg-sky-500 text-white p-1 rounded-md my-2"> Home sweet home </Text>
              </>
            )
          }}
          keyExtractor ={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default HomeScreen