import { View, Text , SafeAreaView, TouchableOpacity, Image, useWindowDimensions, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo, FontAwesome, Ionicons, FontAwesome5 }  from '@expo/vector-icons'

const ProductScreen = () => {

    const navigation = useNavigation();
  const { params: { props } } = useRoute()
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView>
         <ScrollView>
         <View className="bg-gray-200 p-1" >
           <View className="">
             <View style={{alignSelf : 'center', height : height < 400 ? height/1.8 : height/2.8}} className="bg-gray-300 pxx-1 pb-2 rounded-md w-full relative shadow-xl mx-auto  topp-2">
                <Image source={props.photo} className="h-full w-full overflow-hidden rounded-lg" />
                
                  <TouchableOpacity className="bg-white h-8 w-8 rounded-full absolute top-2 left-2">
                  <Ionicons name="arrow-back" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-white h-8 w-8 rounded-full absolute top-2 right-2">
                     <Ionicons name='heart' size={32} color='red'  />
                </TouchableOpacity>
                
             </View>
             <View className="bg-white rounded-t-md p-2 my-3 w-full">
                <Text className="text-left font-medium text-gray-700 text-lg"> Product </Text>
             <View className="my-1 flex-row justify-between mx-auto">
                <View className="text-xl font-bold">
                <Text className="text-center font-bold text-xl"> {props.title} humberger </Text>
                </View>
                <View className="flex-row bg-slate-200 space-x-4 px-3 py-1 rounded-lg" >
                  <TouchableOpacity className="bg-white rounded-full h-8 w-8">
                    <Text className="text-center mt-1" > <FontAwesome name='minus' size={24} color="black" className="mt-0.5 text-center" /> </Text>
                  </TouchableOpacity>
                  <Text className="text-slate-700 font-medium text-2xl" > 4 </Text>
                  <TouchableOpacity className="bg-white rounded-full h-8 w-8">
                  <Text className="text-center font-bold mt-1" > <Entypo name='plus' size={24} color="orange" className="mt-0.5 text-center" /> </Text>
                  </TouchableOpacity>
                </View>
             </View>
                <View className="flex-row justify-between mx-auto my-3">
                  <View className="p-2">
                    <Text className="text-slate-700 text-lg text-center"> Ratings </Text>
                    <View className="flex-row space-x-1">
                    <FontAwesome name='star' size={24} color="orange" />
                      <Text className="font-bold text-lg" >4.6</Text>
                    </View>
                  </View>
                  <View className="p-2">
                    <Text className="text-slate-700 text-lg text-center"> Calories </Text>
                    <View className="flex-row space-x-1">
                      <FontAwesome5 name='fire' size={24} color="orange" />
                      <Text className="font-bold text-lg" >4.6</Text>
                    </View>
                  </View>
                  <View className="p-2">
                    <Text className="text-slate-700 text-lg text-center"> Time </Text>
                    <View className="flex-row space-x-1">
                      <Entypo name='stopwatch' size={24} color="orange" />
                      <Text className="font-bold text-lg" > 15 Mins </Text>
                    </View>
                  </View>
                </View>
              
             </View>
             <View className="bg-gray-100 py-3" >
              <Text className=" text-slate-800 text-lg px-3" >A humberger  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe error officiis amet quis maxime consectetur adipisicing elit.</Text>
             </View>
            <View className='bg-white py-3 px-2'>
              <View className="flex-row justify-between mx-auto">
                <View className="">
                  <Text className="text-slate-600 text-lg font-medium">2 items</Text>
                  <Text className="text-slate-800 font-bold text-lg">$ 7.21</Text>
                </View>
                <View className="">
                  <TouchableOpacity className="bg-blue-600 rounded-lg px-4 py-2" >
                     <Text className="flex row space-x-2" >
                      <Ionicons name='ios-cart' size={32} color="white" className="mt-0.5" />
                     <Text className="font-bold text-white text-lg" > Add to Cart </Text>
                     </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
           </View>
         </View>
         </ScrollView>
      </SafeAreaView>
  )
}

export default ProductScreen