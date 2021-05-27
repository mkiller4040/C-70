import React from 'react';
import { StyleSheet, Text, View, TextInput, Header, TouchableOpacity } from 'react-native';


export default class WriteStoryScreen extends React.Component
{
  render()
  {
    return(
        <View>
          <Header centerComponent = {{ text : 'Story Hub' }}></Header>
          <TextInput placeholder = "Story Title" style = {{padding : 10}}></TextInput>
          <TextInput placeholder = "Author" style = {{padding : 10}}></TextInput>
          <TextInput placeholder = "Write Story" multiline = {true} style = {{padding : 10}}></TextInput>
          <TouchableOpacity><Text>Submit</Text></TouchableOpacity>
        </View>
    )
  }
}