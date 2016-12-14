import React, { Component } from 'react'
import {
  DatePickerAndroid,
  Text,
  TextInput,
  TimePickerAndroid,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native'
import * as style from './styles'

class DayEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      time: null,
      carbs: null,
      note: null
    }

    this._onCarbsChange = this._onCarbsChange.bind(this)
    this._onNoteChange = this._onNoteChange.bind(this)
  }

  _onDateFocus = async (stateKey, options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);

      if (action === DatePickerAndroid.dismissedAction) {
        return
      }

      let date = new Date(year, month, day);
      this.setState({date: date.getTime()})

    } catch({code, message}) {
      console.warn(`Error in DayEntry.DateTimePicker ${stateKey}`, message)
    }
  }

  _onTimeFocus = async (stateKey, options) => {
    try {
      let options = Object.assign({}, options, {is24Hour: true})
      const {action, minute, hour} = await TimePickerAndroid.open(options);

      if (action === TimePickerAndroid.dismissedAction) {
        return
      }

      this.setState({time: `${hour}:${minute}`});

    }
    catch ({code, message}) {
      console.warn(`Error in DayEntry.TimePicker ${stateKey}`, message);
    }
  }

  _onCarbsChange(text) {
    this.setState({carbs: text})
  }

  _onNoteChange(text) {
    this.setState({note: text})
  }

  render() {
    let currDate
    if (this.state.date) {
      let cdate = new Date(this.state.date)
      currDate = `${cdate.getDate()}/${cdate.getMonth() + 1}/${cdate.getFullYear()}`
    }

    return(
      <View style={style.container}>

        <TouchableHighlight onPress={this._onDateFocus}>
          <View collapsable={false} style={styles.inputContainer}>
            <Text style={style.label}>Fecha:</Text>
            <Text style={style.input}>{currDate}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onTimeFocus}>
          <View collapsable={false} style={styles.inputContainer}>
            <Text style={style.label}>Hora:</Text>
            <Text style={style.input}>{this.state.time}</Text>
          </View>
        </TouchableHighlight>
        
        <View style={styles.inputContainer}>
          <Text style={style.label}>Carbs:</Text>
          <TextInput
            style={style.input}
            keyboardType="numeric"
            value={this.state.carbs}
            onChangeText={this._onCarbsChange}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={style.label}>Nota:</Text>
          <TextInput
            style={style.input}
            keyboardType="default"
            multiline={true}
            value={this.state.note}
            onChangeText={this._onNoteChange}
            numberOfLines={4}></TextInput>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    minHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3
  }
})

export default DayEntry;
