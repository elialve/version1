import * as label from '../labels'
import { shallow } from 'enzyme'
import styled from 'styled-components'
import 'jest-styled-components'
import React from 'react'

// TODO assert style rule in pseudo selectors
// wait until 'jest-styled-components' to support this feature
describe('mixin: label', () => {
  describe('label_variant', () => {
    it('should accept named color', () => {
      const Comp = styled.span`
        ${label.label_variant('white')}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toHaveStyleRule('background-color', 'white')
    })

    it('should accept web color', () => {
      const Comp = styled.span`
        ${label.label_variant('#fff')}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toHaveStyleRule('background-color', '#fff')
    })

    it('should accept hsl color', () => {
      const hsl = 'hsl(0,0%,100%)'
      const Comp = styled.span`
        ${label.label_variant(hsl)}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toHaveStyleRule('background-color', hsl)
    })

    // use snapshot to inspect pseudo selectors for now
    it('should match snapshot', () => {
      const Comp = styled.span`
        ${label.label_variant('white')}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
