import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Button from './Button'
import { container, textTitle, textAlignCenter } from './styles'

const About = ({_goBack}) => (
  <View style={container}>
    <Text style={[textTitle, textAlignCenter]}>About</Text>
    <Button onPress={_goBack} label='Go Back' />
  </View>
)

export default About