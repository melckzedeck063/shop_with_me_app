import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ComponentCard = (props) => {

    const navigation = useNavigation();
    const {width, height} =  useWindowDimensions()

  return (
    <View className="rounded-md">
      <TouchableOpacity className="mr-2 relative bg-white  shadow-md h-72">
      <Image source={props.photo}  className="h-24 overflow-hidden  rounded" style={{height : height < 400 ? '100%' : '100%', width : width < 400 ? 200 : 250}} />
      <View className='absolute inset-0 bg-black/30' ></View>
      <Text className='absolute bottom-1 left-1 font-bold text-lg text-white' > {props.title} </Text>
    </TouchableOpacity>
    </View>
  )
}

export default ComponentCard