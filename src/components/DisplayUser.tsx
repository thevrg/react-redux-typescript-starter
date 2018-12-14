import {User} from './UserList';
import * as React from 'react';

interface DisplayUserProps {
  user: User;
}

export const DisplayUser = (props: DisplayUserProps) => (
  <li>F: {props.user.firstName}</li>
);