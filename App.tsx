import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, SafeAreaViewBase } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function Aspp(){
  const [text, setText] = React.useState('');
  return(
    <SafeAreaView style={styles.container2}>
      <PaperProvider>

      <Card>
    <Card.Title title="Plače, nadomestilo plače"  />
    <Card.Content>
    <TextInput style={}
      label="Dohodek54565sss64"
      value={text}
      onChangeText={text => setText(text)}
    />
    </Card.Content>
  </Card>

        <Text>dsssaddddddddddasdsddddddddasdsad</Text>

        
   
      </PaperProvider>
    
    </SafeAreaView>
  );
}



 


const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "dodgerblue",
    paddingTop:StatusBar.currentHeight
    
    //alignItems: 'center',

  },

});
