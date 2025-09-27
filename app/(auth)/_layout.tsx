import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Slot } from 'expo-router'

const _layout = () => {
  return (
    <View>
      <Slot/>
    </View>
  )
}

export default _layout