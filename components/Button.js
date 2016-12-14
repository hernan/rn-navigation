import React from 'react'
import { Text, TouchableNativeFeedback, StyleSheet, View } from 'react-native'

export default ({label, onPress}) => (
  <TouchableNativeFeedback onPress={onPress} useForeground={true}>
    <View style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 4
  },
  label: {
    color: 'white'
  }
})
