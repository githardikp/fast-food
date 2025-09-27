import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const signin = () => {
  return (
    <View>
      <TouchableOpacity onPress={()=>(router.push('/signup'))}> 
        <Text>
          Go to Sign Up  
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default signin