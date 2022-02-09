// import { render, screen } from '@testing-library/react';

import { shallow } from 'enzyme';
import App from './App';


describe("App component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  test("should render the intende text for heading", () => {
    expect(wrapper.find("h1").text()).toBe("A simple app for testing");
  })

  it("should render a button with the right text", () => {
    const link = wrapper.find("#control-btn");
    expect(link).toHaveLength(1);
  })

  it("should show controlled text before the first button click", () => {
    const controlledElement = wrapper.find(".controlled-text");
    expect(controlledElement).toHaveLength(1)
  })

  it("should hide controlled text on button click", () => {
    const btn = wrapper.find('#control-btn');
    btn.simulate('click');
    const controledElement = wrapper.find(".controlled-text");
    expect(controledElement).toHaveLength(0);
  })

  it("should show controlled text again on the second button click", () => {
    const btn = wrapper.find("#control-btn");
    btn.simulate('click');
    const controlledElement = wrapper.find(".controlled-text");
    expect(controlledElement).toHaveLength(0)
  })

  it("should display an increment button", () => {
    const btn = wrapper.find('button#increment');
    expect(btn).toHaveLength(1)
  })

  it("should display an decrement button", () => {
    const btn = wrapper.find('button#decrement');
    expect(btn).toHaveLength(1)
  })

  it("should have an element displaying the current count", () => {
    const countElement = wrapper.find('p#count');
    expect(countElement).toHaveLength(1)
  })

  it("should increment the currentCount on increment button click", () => {
    const countBeforeClick = wrapper.find('p#count').text()
    wrapper.find('button#increment').simulate('click')
    const countAfterClick = wrapper.find('p#count').text()
    expect(Number(countAfterClick)).toEqual(Number(countBeforeClick) + 1);
  })

  it("should decrement the currentCount on decrement button click", () => {
    // since the default state is 0, and there's a restriction  added to the decrement btn when the value is 0,
    // we need a way increment it away from 0 before testing
    wrapper.find('button#increment').simulate('click')
    wrapper.find('button#increment').simulate('click')
    // increenented to two
    const countBeforeDecrementClick = wrapper.find('p#count').text()
    wrapper.find('button#decrement').simulate('click')
    const countAfterClick = wrapper.find('p#count').text()
    expect(Number(countAfterClick)).toEqual(Number(countBeforeDecrementClick) - 1);
  })

  it("decrement button should not decrement the counter into a negative value", () => {
    wrapper.find('button#decrement').simulate('click')
    const countAfterClick = wrapper.find('p#count').text()
    expect(Number(countAfterClick)).toBe(0);
  })
})

