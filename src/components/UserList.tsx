import * as React from 'react';
import {DisplayUser} from './DisplayUser';

export interface User {
  firstName?: string;
  lastName?: string;
  id?: string;
}


export interface UserListUpdateCallback {
  (updatedList: User[]): void;
}

interface UserListProps {
  users: User[];
  onUserListUpdate?: UserListUpdateCallback;
}

interface UserListState {
  users: User[];
  counter: number;
}

export class UserList extends React.PureComponent<UserListProps, UserListState> {
  constructor(prop) {
    super(prop);
    this.state = {...prop, counter: 0};
  }

  render() {
    return <div>
      <h1>UserList</h1>
      <button type="button" onClick={() => this.addUserToBeginningOfList()}>ADD</button>
      <ul>
        {this.state.users.map((user) => <DisplayUser user={user} key={user.id}/>)}
      </ul>
    </div>;
  }

  addUserToBeginningOfList() {
    this.setState(state => {
      const newId = state.counter + 1;
      const newUser: User = {firstName: `Uj ${newId}`, id: `id_new${newId}`};
      const newUserList = [newUser, ...state.users];
      this.notifyAboutUserListChange(newUserList);
      return {...state, users: newUserList, counter: newId};
    });
  }

  private notifyAboutUserListChange(newUserList: User[]) {
    if (this.props.onUserListUpdate) {
      this.props.onUserListUpdate(newUserList);
    }
  }

  // shouldComponentUpdate(nextProps: UserListProps, nextState: UserListState) {
  //   return this.props.users !== nextProps.users;
  // }
}