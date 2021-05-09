import React from "react";
import { shallow, mount } from "enzyme";
import Game from './game'

describe("Game", () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('renders game status correctly', () => {
    const wrapper = mount(<Game />) 

    // First Player   
    const firstPlayer = wrapper.find('h3.player-info').text()
    expect(firstPlayer).toEqual('Next player: X')

    const button = wrapper.find('button.squares').first()
    button.simulate('click')

    // Second Player
    const secondPlayer = wrapper.find('h3.player-info').text()
    expect(secondPlayer).toEqual('Next player: Y')

    //player 2
    const turn2 = wrapper.find('button.squares').at(1)
    turn2.simulate('click')
    //player 1
    const turn3 = wrapper.find('button.squares').at(4)
    turn3.simulate('click')
    //player 2
    const turn4 = wrapper.find('button.squares').at(5)
    turn4.simulate('click')
    //player 1
    const turn5 = wrapper.find('button.squares').at(8)
    turn5.simulate('click')

    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Game Over! Winner is: X')
  });
});