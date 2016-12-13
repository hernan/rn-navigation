import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet,
  DatePickerAndroid 
} from 'react-native'

class DayEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      time: null,
    }

    this.onDateChange = this.onDateChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
  }

  onDateChange(value) {
    this.setState({date: value})
  }

  onTimeChange(value) {
    this.setState({time: value})
  }

  render() { 
    return(
      <View style={styles.viewContainer}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fecha</Text>
          <TextInput value={this.state.date} 
                      onChangeText={this.onDateChange} 
                      keyboardType="numeric" 
                      style={styles.input}
                      returnKeyType="next" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hora</Text>
          <TextInput value={this.state.time} 
                      onChangeText={this.onTimeChange} 
                      keyboardType="numeric" 
                      style={styles.input}
                      returnKeyType="next" />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#ddd'
  }, 

  inputContainer: {
    flexDirection: 'row',
    marginVertical: 2
  },

  label: {
    flex: 1,
    marginRight: 10,
    paddingTop: 4
  },
 
  input: {
    flex: 2,
    padding: 4
  }
})

export default DayEntry;