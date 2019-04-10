import * as React from 'react'

import { shallow, mount } from 'enzyme'
import { TinyTouch } from './TinyTouch'

describe('TinyTouch', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <TinyTouch>
        <div />
      </TinyTouch>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders children if hasTouch is detected', () => {
    const window = {}
    Object.defineProperty(window, 'ontouchstart', {
      value: true
    })
    const wrapper = mount(
      <TinyTouch>
        <div />
      </TinyTouch>
    )
    expect(wrapper.find('div'))
  })

  it('renders the correct element(s) if hasTouch is detected', () => {
    const window = {}
    Object.defineProperty(window, 'ontouchstart', {
      value: true
    })

    const wrapper = mount(
      <TinyTouch>{hasTouch => (hasTouch ? <div /> : <span />)}</TinyTouch>
    )
    expect(wrapper.find('div'))
  })

  it('renders the correct element(s) if hasTouch is not detected', () => {
    const window = {}
    Object.defineProperty(window, 'ontouchstart', {
      value: false
    })

    const wrapper = mount(
      <TinyTouch>{hasTouch => (hasTouch ? <div /> : <span />)}</TinyTouch>
    )
    expect(wrapper.find('span'))
  })
})
