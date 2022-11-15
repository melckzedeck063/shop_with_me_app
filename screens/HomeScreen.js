import { View, Text, FlatList, TouchableOpacity, useWindowDimensions, TextInput, Image } from 'react-native'
import React from 'react'

import image from '../assets/images/pexels-jonathan-borba-2983101.jpg'
import image1 from '../assets/images/pexels-roman-odintsov-4958945.jpg'
import image2 from '../assets/images/pexels-chan-walrus-958545.jpg'
import { useNavigation } from '@react-navigation/native'
import CategoryCard from '../components/card_component'
import ComponentCard from '../components/ComponentCard'
import RestaurantsCard from '../components/RestaurantsCard'
import { useForm, Controller } from 'react-hook-form'

import {Ionicons, FontAwesome5} from '@expo/vector-icons'

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

  const { handleSubmit, reset, control, formState: { errors, isDirty, isValid } } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  
  return (
    <View className='bg-gray-200 w-full h-full'>
      <View className={`${height < 400 ? 'mt-8' : 'mt-12'}`} >
        <View className="flex-row justify-between mx-auto px-4">
          <View>
             <Ionicons className="font-bold text-xl" name='ios-menu' size={32} color="blue" />
          </View>
          <View>
            <FontAwesome5 className="font-bold" name='user-circle' size={24} color="blue" />
          </View>
        </View>
        <View className="my-2 flex-row space-x-3 w-11/12" style={{ alignSelf: 'center' }}>
        <View className="my-1 w-9/12">
         <Controller
        control={control}
        rules={{
          required: true,
          min : 8
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Search"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="product"
      />
      {/* {errors.password && <Text className="text-red-500">This is required.</Text>} */}
       </View>
       <View className="mt-2">
       <TouchableOpacity disabled={!isDirty || !isValid} className="rounded-md px-2 bg-blue-600 py-1 hover:text-sky-300"
       onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-xl font-medium text-sky-100 text-center" >Search</Text>
        </TouchableOpacity>
       </View>
       
        </View>

        <View className="px-1 my-1.5">
          <Text className="font-medium text-sky-600 text-lg ml-4" >Hi (username) 👋 </Text>
          <Text className="font-bold text-2xl ml-4" > Find Your Food </Text>
          <View className="bg-blue-600 rounded-lg shadow-lg w-11/12 flex-row space-x-6" style={{alignSelf : 'center'}} >
            <View className="">
              <Image source={image}  style={{height : 100, width : 150}} className="rounded overflow-hidden" />
            </View>
            <View className="">
              <Text className="mt-1 font-medium text-sky-100 text-xl" >Quick Delivery </Text>
              <Text className="mt-1 font-medium text-sky-100 text-sm" >8:00 Am -  10:00 Pm </Text>
              <View className="mt-1">
              <TouchableOpacity className="rounded-md px-1 bg-blue-100 py-0.5 hover:text-sky-300"
              // onPress={handleSubmit(onSubmit)}
               >
          <Text className="text-lg text-sky-600 text-center" >Order Now</Text>
        </TouchableOpacity>
       </View>
            </View>
           </View>
        </View>
        
      <View className="flex-row justify-between mx-auto">       
      <Text className='text-sky-600 font-medium text-xl mt-2 px-2'>Top Restaurants</Text>
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
        <Text className="text-sky-700 font-medium text-xl mt-1 px-2" > Most Popular Products </Text>
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
      
      {/* <View className="h-64 w-full">
        <Text className="text-sky-700 font-medium text-xl mt-2 px-2" > Most Popular Restaurants </Text>
        <FlatList
          style={{
            flexGrow: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            paddingTop : 5
          }}

          data={Cards}
          renderItem={(itemData) => {
            return (
              <>
                 <RestaurantsCard profile={itemData.item.photo} title={itemData.item.product} />
              </>
            )
          }}
          keyExtractor ={(item) => item.id}
        />
      </View> */}
    </View>
  )
}

export default HomeScreen