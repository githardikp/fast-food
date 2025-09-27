import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>signup</Text>
      <TouchableOpacity onPress={()=>(router.push('/signin'))}> 
        <Text>
          Go to Sign In  
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default signup