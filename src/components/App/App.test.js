import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { App } from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  });
})


