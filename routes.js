import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GridScreen from './screens/GridScreen';
import MovieScreen from './screens/MovieScreen';

const AppStack = createStackNavigator({
  
  // Initial Screen.
  GridScreen: { screen: GridScreen },
  // Detail view.
  MovieScreen: { screen: MovieScreen },

}, {

  initialRouteName: 'GridScreen',
  // This app doesn't implement a conventional navigation bar, it only has a back (or close) button in the Detail view (MovieScreen), so we are hidding the navbar globally.
  defaultNavigationOptions: {
    header: null,
  },
});

const Routes = createAppContainer(AppStack);
export default Routes;