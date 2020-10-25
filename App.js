import React from 'react';
import { Provider } from 'mobx-react';
import Index from './pages/Index';
import { configure } from "mobx"

import deviceStore from './store/deviceStore';

const storeSet = {
  deviceStore
}

configure({
  enforceActions: "never",
})

export default class App extends React.Component {  
  render(){  
    return (
      <Provider store={storeSet}>
        <Index/>
      </Provider>
    );
  }  
}
