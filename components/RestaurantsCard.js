import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

const RestaurantsCard = (props) => {

    const { height, width } = useWindowDimensions();

  return (
    <View className="ww-9/12 m-1.5" style={{height : height/2}} >
      <View className={`my-1 bg-white p-2 rounded-sm shadow-lg`} >
         <View  className=" border-b-slate-100 relative" >
            <Image source={props.photo} className="py-2 rounded-xl"  style={{height : '60%', width : '100%'}} />
            <View className="absolute flex-row right-1 top-1 bg-white rounded-full h-8 w-8">
              <Ionicons   name='ios-menu' size={32} color="red" />
            </View>
            <View className="-py-1">
            {/* <Text className="text-center text-lg text-slate-600"> Lorem ipsum Quidem nostrum id vel, officiis tenetur animi ut consectetur. </Text> */}
            <Text className="text-center text-xl font-bold text-sky-600"> {props.title} </Text>
              
          </View>
          <TouchableOpacity className="w-6/12 bg-sky-600 rounded-lg px-3 py-1" style={{ alignSelf: 'center' }} >
             <Text className="text-center text-white font-medium text-xl" > See More </Text>
          </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

export default RestaurantsCard