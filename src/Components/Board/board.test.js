import React from "react";
import { shallow, mount } from "enzyme";
import Board from './board' 

describe("Board", () => {
it('renders without crashing', () => {
  let squares = Array(9).fill(null)
  shallow(<Board squares={squares}/>);
});

it('calls onClick event on click of a board square', () =>{
  let squares = Array(9).fill(null) 
  const onClick = jest.fn();
  let wrapper = mount(<Board squares={squares} onClick={onClick} winLine={null} />);
  wrapper.find('button.squares').first().simulate('click');
  expect(onClick).toBeCalledWith(0)
})
});
