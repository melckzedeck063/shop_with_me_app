import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = (props) => {

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity className="mr-2 relative"
      onPress={() => navigation.navigate('Restaurant', {props})}
      >
      <Image source={props.coverImage}  className="h-24 w-24 rounded" />
      <View className='absolute inset-0 bg-black/30' ></View>
      <Text className='absolute bottom-1 left-1 font-bold text-lg text-white' > {props.title} </Text>
    </TouchableOpacity>
    </View>
  )
}

export default CategoryCard