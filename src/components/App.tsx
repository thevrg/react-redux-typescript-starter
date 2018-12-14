import './../assets/scss/App.scss';
import * as React from 'React';
import {Counter} from './Counter';
import {User, UserList} from './UserList';
import {Layout} from './Layout';

const reactLogo = require('./../assets/img/react_logo.svg');

export interface AppProps {
}

export interface AppState {
  userList: User[];
}

export default class App extends React.PureComponent<AppProps, AppState> {

  constructor(props) {
    super(props);
    this.state = { userList: [
        {id: 'a1', firstName: 'Jozsi'},
        {id: 'a2', firstName: 'Feri'},
        {id: 'a3', firstName: 'Bela'}]};
  }

  render() {
    return (
      <Layout title={this.renderHeader()}>
        <Counter value={3 + 2} title="My Counter"/>
        <UserList  users={this.state.userList}/>
      </Layout>
    );
  }

  handleUserListUpdate(userList: User[]) {
    this.setState(state => ({ ...state, userList }));
  }

  renderHeader() {
    return <img src={reactLogo} className="App-logo" alt="logo"/>;
  }
}
