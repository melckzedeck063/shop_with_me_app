import { View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import image1 from '../assets/images/pexels-ella-olsson-1640777.jpg'
import image2 from '../assets/images/pexels-jonathan-borba-2983101.jpg'

import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    navigation.setOptions({
        headerShown : false
    })

  return (
    <View className="bg-slate-100 w-full h-full" style={{flex : 1}}>
      <ImageBackground source={image1} resizeMode='cover' style={{
        flex: 1, justifyContent
       : 'center'}} >

        <View className="bg-whitee" style={{height : height < 400 ? 50 : 120}} ></View>
      {/* <Text>WelcomeScreen</Text> */}
      <View className="relative">
        {/* <View className="pt-2">
        <Image source={image1} className={`h-[8rem] w-10/12 mx-auto border-2-slate-300`}
             style={{ height : height < 400 ? height/3 : height/3, alignSelf: 'center', borderRadius : width < 400 ? height/2 : height/2, width: width< 300 ? width/2 : width/1.5 }}
        />
        </View> */}
        
        <View className="py-4 bg-blue-600 shadow-md px-2 rounded-xl absolute top-10 w-10/12" style={{alignSelf : 'center'}}>
           <Text className="text-xl font-medium text-sky-100 my-2 text-center" >We Bring The Best Products For You as an Enthusiat </Text>
           <Text className="my-2 text-sm text-center text-gray-100 px-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore ad similique esse ut vitae </Text>
           
        {/* <View className="mt-2 py-2" >
             <TouchableOpacity style={{alignSelf: 'center'}} className="rounded-md px-2 py-1 bg-sky-600 hover:text-sky-300 w-9/12 mx-auto"
             onPress={() => navigation.navigate('SignUp') }
             >
                <Text className="text-xl font-medium text-sky-100 text-center" >Sign Up</Text>
             </TouchableOpacity>
        </View> */}
        
        <View className="mt-2 py-2" >
             <TouchableOpacity style={{alignSelf: 'center'}} className="rounded-lg px-2 py-1 bg-sky-100 hover:text-sky-300 w-9/12 mx-auto"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className="text-xl font-medium text-blue-600 text-center" >Get Started</Text>
             </TouchableOpacity>
        </View>
        
        </View>
        
            
      </View>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen