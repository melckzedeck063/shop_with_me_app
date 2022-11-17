import { View, Text , SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductScreen = () => {

    const navigation = useNavigation();
    const {params : {props}} =  useRoute()

  return (
    <SafeAreaView>
         <View className="bg-gray-200" >
           <Text>RestaurantScreen</Text>
           <View className="relative">
             <View className="my-1" style={{alignSelf: 'center'}}>
                <Text className="text-center font-bold text-xl"> {props.title} </Text>
                <View className="flex-row text-xl font-bold">
                <Text className="text-center font-bold text-amber-500 text-2xl"> $ </Text>
                <Text className="text-center font-bold text-2xl"> 3.40 </Text>
                </View>
             </View>
             <View style={{alignSelf : 'center'}} className="rounded-full my-3 h-64 w-64 border-4 shadow-xl border-blue-800 mx-auto absolutee top-2">
                <Image source={props.coverImage} className="h-full w-full rounded-full overflow-hidden" />
             </View>
             <View className="my-3 flex-row space-x-4" style={{alignSelf : 'center'}}>
                <TouchableOpacity className="bg-blue-600 rounded-md px-2 py-1" >
                    <Text className="text-white text-lg font-bold"> + </Text>
                </TouchableOpacity>
                <View className="">
                    <Text className="text-xl font-bold"> 3 </Text>
                </View>
                <TouchableOpacity className="bg-blue-600 rounded-md px-2 py-1" >
                    <Text className="text-white text-lg font-bold"> - </Text>
                </TouchableOpacity>
             </View>
           </View>
         </View>
      </SafeAreaView>
  )
}

export default ProductScreen