import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, FormProvider, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

const schema = Yup.object({
    firstName: Yup
        .string()
        .required()
        .trim(),
    lastName: Yup
        .string()
        .required()
        .trim(),
    username: Yup
        .string()
        .required()
        .email()
        .trim(),
    
})

const SignUpScreen = () => {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    navigation.setOptions({
        headerShown : false
    })

    const { register, reset, control, handleSubmit, formState: { errors, isDirty, isValid, isSubmitSuccessful } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver : yupResolver(schema)
    })
    
    const onSubmit = data => {
        console.log(data);
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                username: '',
                password : ''
            })
        }
    })

  return (
    <View>
        <KeyboardAvoidingView behavior='position' >
        <View className="w-full h-full bg-slate-700">
        <Text className={`text-2xl font-bold text-white text-center ${height < 400 ? 'mt-6' : 'mt-10'} `}>SignUpScreen</Text>
           <View style={{alignSelf : 'center'}} className="bg-sky-100 shadow-md rounded px-4 py-5 w-10/12 my-3">
           <Text className="text-2xl font-medium text-sky-600 text-center" >Sign Up</Text>
      <View className="my-2">
       <Text className="text-xl text-sky-600" >FirstName</Text>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Enter firstName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      </View>
      <View className="my-2">
      <Text className="text-xl text-sky-600" >LastName</Text>
    <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Enter lastName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      </View>
      <View className="my-2">
      <Text className="text-xl text-sky-600" >Username or Email</Text>
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
      </View>
                  <View className="my-2">
                  <Text className="text-xl text-sky-600" >Telephone</Text>
                  <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Enter telephone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="telephone"
      />
            </View>
      <View className="my-2">
       <Text className="text-xl text-sky-600" >Password</Text>
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
                  </View>
                  <View className="my-2">
                  <Text className="text-xl text-sky-600" >Confirm Password</Text>
                  <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-white px-4 py-1.5`}
          placeholder="Confirm Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
                  </View>
                  <View>
             <TouchableOpacity className="bg-sky-600 rounded-md px-2 py-1 my-3"
               onPress={handleSubmit(onSubmit)}
             >
                <Text className="text-2xl font-medium text-white text-center" >Submit</Text>
             </TouchableOpacity>
        </View>
            <View className="mt-1" >
            {/* <Text className="font-medium text-sky-600 text-center" >Don't have an account ? </Text> */}
             <TouchableOpacity className="rounded-md px-2 py-1 hover:text-sky-300"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className="text-xl font-medium text-sky-600 text-center" >Sign In</Text>
             </TouchableOpacity>
            </View>
         </View> 
        </View>
        </KeyboardAvoidingView>
        
    </View>
  )
}

export default SignUpScreen