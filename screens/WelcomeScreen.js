import { View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import image1 from '../assets/images/pexels-ella-olsson-1640777.jpg'
import image2 from '../assets/images/pexels-jonathan-borba-2983101.jpg'

import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const WelcomeScreen = () => {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown : false
    })
   })

  return (
    <LinearGradient colors={['transparent', '#F54749']} className="bg-slate-100 w-full h-full" style={{flex : 1}}>
      <View className="bg-slatee-100 w-full h-full" style={{flex : 1}}>
        <ImageBackground source={image1} resizeMode='cover'
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
          imageStyle={{ opacity : 0.15}}
        >

       
      <View className="relative">
        
          <View className={`selection:this.first = this.first.bind(this)py-2 bg-blue-100 shadow-md px-2 rounded-xl absolute ${height < 450 ? 'top-4' : 'top-7'} ${width < 380 ? 'w-10/12' : 'w-8/12'}`}  style={{alignSelf : 'center'}}>
           <Text className="text-xl font-medium text-slate-700 my-2 text-center" >We Bring The Best Products For You as an Enthusiat </Text>
           <Text className="my-2 text-sm text-center text-slate-700 px-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore ad similique esse ut vitae </Text>
           
        
        <View className="mt-2 py-2" >
             <TouchableOpacity style={{alignSelf: 'center'}} className="rounded-lg px-2 py-1 bg-red-400 hover:text-sky-300 w-9/12 mx-auto"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className="text-xl font-medium text-blue-100 text-center" >Get Started</Text>
             </TouchableOpacity>
        </View>
        
        </View>
        
            
      </View>
       {/* <Text className="text-blue-600 text-center" > Developed and maintained bt @Cotton </Text> */}
      </ImageBackground>
    </View>
    </LinearGradient>
  )
}

export default WelcomeScreen