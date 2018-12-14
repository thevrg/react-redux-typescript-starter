import * as React from 'react';
import {ReactNode} from 'react';

export interface LayoutProps {
  title: React.ReactElement<any> | React.Component;
  children: React.ReactNode;
}

interface RenderNumber {
  (num: number): ReactNode;
}

export const Layout = (props: LayoutProps) =>
  <div className="App">
    <header className="App-header">{props.title}</header>
    <article>{props.children}</article>
  </div>;