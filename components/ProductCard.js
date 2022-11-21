import { View, Text, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const ProductCard = (props) => {

  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View className={`rounded-md bg-white py-1 m-1.5 ${width < 380 ? 'w-4/12' : 'w-full'} `}
    style={{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,}} >
      <View className="relative">
        <Image source={props.photo} className="h-48 rounded-xl" style={{width : width < 380 ? 250 : 280, alignSelf : 'center'}} />
        <View className="absolute bg-white h-9 rounded-full w-9 top-2 right-2" >
           <Text className="text-center mt-0.5">
           <Ionicons name='heart' size={32} color="red" />
           </Text>
        </View>
      </View>
          <View className="p-2">
          <Text className="text-slate-600 text-center font-medium text-lg" >ProductCard</Text>
          <Text className="text-xl font-bold text-center"> {props.title} </Text>
          <Text className="text-xl font-bold text-center text-blue-600"> $ 4.35 </Text>
          </View>

          <TouchableOpacity className="bg-blue-500 rounded-xl px-2 py-1.5 my-1 w-7/12" style={{alignSelf : 'center'}} 
            onPress={() => navigation.navigate('Product', {props})}
          >
              <Text className="text-white font-medium text-lg text-center" >Add to Cart </Text>
          </TouchableOpacity>
    </View>
  )
}

export default ProductCard