import { shallow } from 'enzyme'
import { clearfix } from '../clearfix'
import styled from 'styled-components'
import React from 'react'
import 'jest-styled-components'

describe('mixin: clearfix', () => {
  it('should match snapshot', () => {
    const Comp = styled.div`
      ${ clearfix() }
    `
    const wrapper = shallow(<Comp />)
    expect(wrapper).toMatchSnapshot()
  })
})
