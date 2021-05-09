import React from 'react';
import { shallow } from "enzyme";
import Square from './square';

it('renders without crashing', () => {
  shallow(<Square/>);
});
