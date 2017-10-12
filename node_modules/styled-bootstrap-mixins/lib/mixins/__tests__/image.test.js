import * as image from '../image'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import styled from 'styled-components'
import React from 'react'

// TODO test on media queries
describe('mixins: image', () => {

  describe('img_responsive', () => {
    it('should have display:block by default', () => {
      const Comp = styled.div`
        ${image.img_responsive()}
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('display', 'block')
    })

    it('should be able to set display prop', () => {
      const Comp = styled.div`
        ${image.img_responsive('something')}
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('display', 'something')
    })
  })

  describe('img_retina', () => {
    it('should set arguments to their expected props', () => {
      const Comp = styled.div`
        ${image.img_retina('foo', 'bar', '1em', '20px')}
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('background-image', 'url(foo)')
    })

    it('should match snapshot', () => {
      const Comp = styled.div`
        ${image.img_retina('/foo', '/bar', '1em', '20px')}
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
