import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit:EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

//this line only shows  initial routename
const App = createAppContainer(navigator);

// we need to create a blog post provider
// which in turn binds the all the other components including react navigation stack navigator.
// initially an empty component. it's a custom component.

export default () => {
    return (
      <Provider>
        <App />
      </Provider>
    );
};
//  {/* //children in blogprovider is app, i.e navigator. */}
// we have assigned navigator to a variable App
//and then bind it within this^^
