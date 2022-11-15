import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
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
    <View className="bg-slate-300 w-full h-full">
        <View className="bg-whitee" style={{height : height < 400 ? 50 : 120}} ></View>
      {/* <Text>WelcomeScreen</Text> */}
      <View className="">
        <View className="pt-2">
        <Image source={image1} className={`h-[8rem] w-10/12 mx-auto border-2-slate-300`}
             style={{ height : height < 400 ? height/3 : height/3, alignSelf: 'center', borderRadius : width < 400 ? height/2 : height/2, width: width< 300 ? width/2 : width/1.5 }}
        />
        </View>
        <View className="py-4 bg-slatee-100 rounded shadow-md px-2 rounded-t-xl">
           <Text className="text-xl font-medium text-sky-600 my-2 text-center" >We Bring The Best Products For You as an Enthusiat </Text>
           <Text className="my-2 text-sky-6003 text-center px-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore ad similique esse ut vitae </Text>
           
        <View className="mt-2 py-2" >
             <TouchableOpacity style={{alignSelf: 'center'}} className="rounded-md px-2 py-1 bg-sky-600 hover:text-sky-300 w-9/12 mx-auto"
             onPress={() => navigation.navigate('SignUp') }
             >
                <Text className="text-xl font-medium text-sky-100 text-center" >Sign Up</Text>
             </TouchableOpacity>
        </View>
        
        <View className="mt-2 py-2" >
             <TouchableOpacity style={{alignSelf: 'center'}} className="rounded-md px-2 py-1 bg-skyr-100 hover:text-sky-300 w-9/12 mx-auto"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className="text-xl font-medium text-sky-500 text-center" >Login</Text>
             </TouchableOpacity>
        </View>
        
        </View>
        
            
      </View>
    </View>
  )
}

export default WelcomeScreen