import './../assets/scss/App.scss';
import * as React from 'React';

const reactLogo = require('./../assets/img/react_logo.svg');

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/components/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://www.typescriptlang.org/docs/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Typescript
          </a>
        </header>
      </div>
    );
  }
}
