import './../assets/scss/App.scss';
import * as React from 'React';
import {Counter} from './Counter';
import {UserList} from './UserList';
import {Layout} from './Layout';

const reactLogo = require('./../assets/img/react_logo.svg');

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <Layout title={this.renderHeader()}>
        <Counter value={3 + 2} title="My Counter"/>
        <UserList users={[
          {id: 'a1', firstName: 'Jozsi'},
          {id: 'a2', firstName: 'Feri'},
          {id: 'a3', firstName: 'Bela'}]}/>
      </Layout>
    );
  }

  renderHeader() {
    return <img src={reactLogo} className="App-logo" alt="logo"/>;
  }
}
