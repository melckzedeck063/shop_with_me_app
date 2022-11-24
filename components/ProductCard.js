import { View, Text, useWindowDimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const ProductCard = (props) => {

  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={style.card} className={`rounded-md  py-1 m-1.5 ${width < 380 ? 'w-4/12' : 'w-full'} `}
     >
      <View className="relative">
        <Image source={props.photo} className="h-40 rounded-xl" style={{width : width < 380 ? 160 : 200, alignSelf : 'center'}} />
        <View className="absolute bg-white h-9 rounded-full w-9 top-2 right-2" >
           <Text className="text-center mt-0.5">
           <Ionicons name='heart' size={32} color="red" />
           </Text>
        </View>
      </View>
          <View className="p-2">
          <Text className="text-slate-600 text-center font-medium text-lg" >ProductCard</Text>
          <Text className="text-xl font-bold text-center"> {props.title} </Text>
          <Text className="text-xl font-bold text-center text-red-400"> $ 4.35 </Text>
          </View>

          <TouchableOpacity className="bg-red-400 rounded-xl px-2 py-1.5 my-1 w-7/12" style={{alignSelf : 'center'}} 
            onPress={() => navigation.navigate('Product', {props})}
          >
              <Text className="text-white font-medium text-lg text-center" >Add to Cart </Text>
          </TouchableOpacity>
    </View>
  )
}

export default ProductCard

const style = StyleSheet.create({
  card: {
    elevation : 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset :{width : 0, height : 2} ,
    shadowOpacity: 0.25,
    shadowRadius : 8
   }
})