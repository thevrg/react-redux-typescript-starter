import * as React from 'react';
import {DisplayUser} from './DisplayUser';

export interface User {
  firstName?: string;
  lastName?: string;
  id?: string;
}

interface UserListProps {
  users: User[];
}

interface UserListState extends UserListProps {
  counter: number;
}

export class UserList extends React.Component<UserListProps, UserListState> {
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
      return {...state, users: [{firstName: `Uj ${newId}`, id: `id_new${newId}`}, ...state.users], counter: newId};
    });
  }
}