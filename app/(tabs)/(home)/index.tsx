import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-mutedForeground ">
      <Pressable className="p-20 bg-secondary">

      <Text className=' text-xl font-custom-bold text-primary'>Home Page</Text>
      </Pressable>
    </View>
  )
}

export default Home