import * as React from 'react';
import App from '../src/components/App';
import {shallow, } from 'enzyme';

describe('App', () => {

  it('should render a p containing the string "App.tsx"', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('p').text())
      .toContain('App.tsx');
  });
});
