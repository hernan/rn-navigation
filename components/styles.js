// import { StyleSheet } from 'react-native'

const baseColor = '#fff'
const toolbarColor = '#ccc' //'#3F51B5'
const toolbarColorText = '#fff'
const accentColor = '#ff4081'
const accentColorText = '#fff'
const defaultPadding = 16


export const toolbarStyle = {
  padding: defaultPadding,
  backgroundColor: toolbarColor,
  height: 56,
  elevation: 4
}

export const container = {
  flex: 1,
  padding: defaultPadding,
  backgroundColor: baseColor
}

export const textTitle = {
  fontSize: 32
}

export const textAlignCenter = {
  textAlign: 'center'
}

export const label = {
    flex: 1,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16
}

export const input = {
    flex: 2,
    fontSize: 16
}