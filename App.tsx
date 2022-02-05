
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/app/store';

import PokemonList from './src/components/PokemonList';
import TrainerForm from './src/components/TrainerForm';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
 

  return (
    <Provider store={store}>
    <View>
      <PokemonList/>
    </View>
    </Provider>
  );
};



export default App;
