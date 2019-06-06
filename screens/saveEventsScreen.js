import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SaveEventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Save an Event'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Save an Event</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
