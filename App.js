import { createStackNavigator, createAppContainer } from 'react-navigation';
import GetEventsScreen from './screens/getEventsScreen.js';
import SaveEventsScreen from './screens/saveEventsScreen.js';
import DeleteEventsScreen from './screens/deleteEventsScreen.js';

const MainNavigator = createStackNavigator({
  Home: { screen: GetEventsScreen },
  SaveEvent: { screen: SaveEventsScreen },
  DeleteEvent: { screen: DeleteEventsScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
