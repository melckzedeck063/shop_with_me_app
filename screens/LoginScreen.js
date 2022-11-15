import { View, Text, Form, TextInput, useWindowDimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object({
    username : Yup
        .string()
        .required()
        .email()
        .trim(),
    password: Yup
        .string()
        .required()
        .trim()
})

const LoginScreen = () => {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    useLayoutEffect(() => {
        navigation.setOptions({
             headerShown : false
         })
    })
  

    const {  handleSubmit,setValue, control, reset, formState: { errors, isValid, isDirty } } = useForm()


    const onSubmit = data => {
      console.log(data)
      setTimeout(() => {
        navigation.navigate('Home')
      }, 2000);
    }

  return (
    <View className = 'bg-slate-600 w-full h-full py-6'>
          <KeyboardAvoidingView>
          <Text className={`text-white text-center font-medium text-3xl ${height < 400 ? 'mt-24' : 'mt-36'} `}>Login Screen</Text>
      <View  className="w-10/12 mx-auto shadow-md bg-slate-100 rounded-md py-4 mt-4 px-6" style={{alignSelf : 'center'}} >
      <Text className="text-2xl font-medium text-sky-600 text-center" >Sign In</Text>
          <View className="my-2">
           <Text className="text-sky-600 text-xl" > Username</Text>
            {/* <TextInput className={`rounded-md bg-white px-4 py-1.5`}
                      placeholder="Enter username"
                      textContentType='emailAddress'
                  name="username"
                  control={control}
                  value={field.value}
                  onChangeText={field.onChange}
             /> */}
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Enter username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && <Text className="text-red-500" >This is required.</Text>}
          </View>
       <View className="my-2">
         <Text className="text-sky-600 text-xl" > Password</Text>
         <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Enter password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text className="text-red-500">This is required.</Text>}
       </View>
        <View>
             <TouchableOpacity className="bg-sky-600 rounded-md px-2 py-1 my-3"
               onPress={handleSubmit(onSubmit)}
             >
                <Text className="text-2xl font-medium text-white text-center" >Login</Text>
             </TouchableOpacity>
        </View>
        <View>
            <View className="" >
            <Text className="font-medium text-sky-600 text-center" >Don't have an account ? </Text>
             <TouchableOpacity className="rounded-md px-2 py-1 hover:text-sky-300"
             onPress={() => navigation.navigate('SignUp') }
             >
                <Text className="text-xl font-medium text-sky-600 text-center" >Sign Up</Text>
             </TouchableOpacity>
            </View>
        </View>
      </View>
          </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen