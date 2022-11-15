import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <View>
       <TouchableOpacity className="mr-2 relative">
      <Image source={props.coverImage}  className="h-24 w-24 rounded" />
      <View className='absolute inset-0 bg-black/30' ></View>
      <Text className='absolute bottom-1 left-1 font-bold text-lg text-white' > {props.title} </Text>
    </TouchableOpacity>
    </View>
  )
}

export default CategoryCard