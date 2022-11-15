import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const RestaurantsCard = (props) => {

    const { height, width } = useWindowDimensions();

  return (
    <View>
      {/* <Text>RestaurantsCard</Text> */}
      <View className="my-1 bg-slate-900 p-1.5 rounded-sm shadow-lg">
         <TouchableOpacity  className="flex-row space-x-4 border-b-slate-100" >
            <Image source={props.profile} className="py-2"  style={{height : 60, width : 60, borderRadius : height/2}} />
            <View className="-py-1">
            <Text className="text-centere text-xl font-medium text-white"> {props.title} </Text>
            <Text className="text-centere text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum id vel, officiis tenetur animi ut consectetur. </Text>
            </View>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default RestaurantsCard