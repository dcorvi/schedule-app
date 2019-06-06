import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class GetEventsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      day: '',
      month: '',
      year: '',
      events: []
    }
  }

  getEvents = () => {
    let URL = `https://event-sched-backend.herokuapp.com/api/retrieve`;

    fetch(URL, {
      headers: {
            'Content-Type': 'application/json',
            'year': this.state.year,
            'day': this.state.day,
            'month': this.state.month
        }
    }).then(response => response.json())
      .then(data => this.props.storeEvents(data));
  }

  render() {
    console.log(this.state.events);

    return (
      <View style={styles.container}>

        <Text style={styles.label_text}>Day</Text>
        <TextInput
          style={styles.num_input}
          onChangeText={(text) => this.setState({ day: text })}
          value={this.state.day}
        />

        <Text style={styles.label_text}>Month</Text>
        <TextInput
          style={styles.num_input}
          onChangeText={(text) => this.setState({ month: text })}
          value={this.state.month}
        />

        <Text style={styles.label_text}>Year</Text>
        <TextInput
          style={styles.num_input}
          onChangeText={(text) => this.setState({ year: text })}
          value={this.state.year}
        />

        <View style={{ paddingTop: 30 }}>
          <Button
            title="Get Events"
            onPress={this.getEvents}
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
    padding: '10%',
  },

  num_input: {
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 5,
  },

  label_text: {
    paddingTop: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
  }
});
