import React from 'react';
import RootNavigation from '@Navigation';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './src/redux';


export const reduxPersistStore = persistStore(reduxStore);

const App = () => {
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App;

