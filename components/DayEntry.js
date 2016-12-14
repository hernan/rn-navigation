import React, { Component } from 'react'
import {
  DatePickerAndroid,
  Text,
  TimePickerAndroid,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native'

class DayEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      time: null,
    }

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


  render() {
    let currDate
    if (this.state.date) {
      let cdate = new Date(this.state.date)
      currDate = `${cdate.getDate()}/${cdate.getMonth() + 1}/${cdate.getFullYear()}`
    }

    return(
      <View style={styles.viewContainer}>

        <TouchableHighlight onPress={this._onDateFocus}>
          <View collapsable={false} style={styles.inputContainer}>
            <Text style={styles.label}>Fecha</Text>
            <Text style={styles.input}>{currDate}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onTimeFocus}>
          <View collapsable={false} style={styles.inputContainer}>
            <Text style={styles.label}>Hora</Text>
            <Text style={styles.input}>{this.state.time}</Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    padding: 16,
    backgroundColor: '#aaa',
  },

  inputContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    height: 40,
    paddingLeft: 10
  },

  label: {
    flex: 1,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16
  },

  input: {
    flex: 2,
    fontSize: 16
  }
})

export default DayEntry;
