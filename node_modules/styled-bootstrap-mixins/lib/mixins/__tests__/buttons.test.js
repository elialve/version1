import { shallow } from 'enzyme'
import * as buttons from '../buttons'
import styled from 'styled-components'
import React from 'react'
import 'jest-styled-components'

describe('mixin: buttons', () => {

  describe('button_variant', () => {
    it('should match snapshot', () => {
      const Comp = styled.div`
      ${ buttons.button_variant('red', '#ff0000', 'rgb(255,0,0)') }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('button_size', () => {
    it('should match snapshot', () => {
      const Comp = styled.div`
      ${ buttons.button_size('10px', '10px', '10px', '1.5', '10px') }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
