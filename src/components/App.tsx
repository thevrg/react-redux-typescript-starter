import './../assets/scss/App.scss';
import * as React from 'React';
import {Counter} from './Counter';

const reactLogo = require('./../assets/img/react_logo.svg');

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo"/>
          <Counter value={3 + 2} title="My Counter"/>
        </header>
      </div>
    );
  }
}
