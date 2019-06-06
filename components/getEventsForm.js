import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import GetEventsForm from '../components/getEventsForm.js';


export default class GetEventsScreen extends React.Component {
  storeEvents = (data) => {
    this.props.navigation.navigate('DeleteEvent', { events: data });
  }

  static navigationOptions = {
    title: 'Search Events'
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.large_info}>
            Fill out the fields below to retrieve events for a given time frame...
          </Text>
          <Text style={styles.small_info}>***Year is required***</Text>

          <GetEventsForm storeEvents={this.storeEvents} />

        </ScrollView>

        <View style={styles.schedule_btn}>
          <Button
            title="Go to Schedule Events"
            onPress={() => this.props.navigation.navigate('SaveEvent')}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },

  large_info: {
    fontSize: 20,
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'center'
  },

  small_info: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  schedule_btn: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});
