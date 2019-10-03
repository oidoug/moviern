import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GridScreen from './screens/GridScreen';
import MovieScreen from './screens/MovieScreen';

const AppStack = createStackNavigator({
  GridScreen: { screen: GridScreen },
  MovieScreen: { screen: MovieScreen },
}, {
  initialRouteName: 'GridScreen',
});

const Routes = createAppContainer(AppStack);
export default Routes;