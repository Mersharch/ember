import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'


const StyledPressable = styled(Pressable)

const Index = () => {

  const router = useRouter()
  return (
    <View className="flex-1 items-center justify-center bg-mutedForeground ">
      <StyledPressable onPress={() => router.push("home")} className="hover:bg-blue-300 p-20 bg-primary">

      <Text className=' text-xl font-customNormal'>Index Page</Text>
      </StyledPressable>
    </View>
  )
}

export default Index