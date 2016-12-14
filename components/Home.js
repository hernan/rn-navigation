import React from 'react'
import { 
  Button,
  View,
  Text
} from 'react-native'
import { container, textTitle, textAlignCenter } from './styles'

const route = {
  type: 'push',
  route: {
    key: 'about',
    title: 'About'
  }
}

const Home = ({_handleNavigate}) => (
  <View style={container}>
    <Text style={[textTitle, textAlignCenter]}>Home</Text>
    
    <Button 
      onPress={ () => _handleNavigate(route) }
      title="Go To About" />
  </View>
)

export default Home
