import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default class DeleteEventsScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.setState({ events: this.props.navigation.getParam('events', []) });
  }

  static navigationOptions = {
    title: 'Delete an Event'
  }

  removeEvent = (id) => {
    console.log(id);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={( {item} ) =>
            <View style={{ paddingTop: 25 }}>
              <Text>{item.title} - {item.month}/{item.day}/{item.year}</Text>
              <Button title="Remove" onPress={() => this.removeEvent(item.id)} />
            </View>
          }
        />
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
