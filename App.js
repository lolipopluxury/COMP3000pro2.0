import React from 'react';
import { Provider } from 'mobx-react';
import Index from './pages/Index';

import deviceStore from './store/deviceStore';

const storeSet = {
  deviceStore
}

export default class App extends React.Component {  
  render(){  
    return (
      <Provider store={storeSet}>
        <Index/>
      </Provider>
    );
  }  
}
