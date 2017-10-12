import constants from '../../constants.json'
import { shallow } from 'enzyme'
import * as grid from '../grid'
import styled from 'styled-components'
import React from 'react'
import 'jest-styled-components'

describe('mixin: grid', () => {

  describe('container_fixed', () => {
    it('should set padding left and right to 15px by default', () => {
      const Comp = styled.div`
      ${ grid.container_fixed() }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '15px')
      expect(wrapper).toHaveStyleRule('padding-right', '15px')
    })

    it('should set padding left and right half of the gutter', () => {
      const Comp = styled.div`
      ${ grid.container_fixed('11px') }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '5px')
      expect(wrapper).toHaveStyleRule('padding-right', '6px')
    })
  })

  describe('make_row', () => {
    it('should set margin left and right to -15px by default', () => {
      const Comp = styled.div`
      ${ grid.make_row() }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '-15px')
      expect(wrapper).toHaveStyleRule('margin-right', '-15px')
    })

    it('should set margin left and right -half of the gutter', () => {
      const Comp = styled.div`
      ${ grid.make_row('11px') }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '-5px')
      expect(wrapper).toHaveStyleRule('margin-right', '-6px')
    })
  })

  describe('make_xs_column', () => {
    it('should set padding left and right to 15px by default', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column() }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '15px')
      expect(wrapper).toHaveStyleRule('padding-right', '15px')
    })

    it('should set padding left and right half of the gutter', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column(0, '11px') }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '5.5px')
      expect(wrapper).toHaveStyleRule('padding-right', '5.5px')
    })

    it('should set width to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '0%')
    })

    it('should set width to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '100%')
    })
  })

  describe('make_xs_column_offset', () => {
    it('should set margin-left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column_offset(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '0%')
    })

    it('should set margin-left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column_offset(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '100%')
    })
  })

  describe('make_xs_column_push', () => {
    it('should set left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column_push(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '0%')
    })

    it('should set left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column_push(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '100%')
    })
  })

  describe('make_xs_column_pull', () => {
    it('should set right to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column_pull(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '0%')
    })

    it('should set right to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_xs_column_pull(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '100%')
    })
  })

  describe('make_sm_column', () => {
    it('should set padding left and right to 15px by default', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '15px')
      expect(wrapper).toHaveStyleRule('padding-right', '15px')
    })

    it(`should set width to ${ constants['$screen-sm-min'] } if 0 columns`, () => {
      const Comp = styled.div`
      ${ grid.make_sm_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '0%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })

    it(`should set width to ${ constants['$screen-sm-min'] } if 12 columns`, () => {
      const Comp = styled.div`
      ${ grid.make_sm_column(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '100%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })
  })

  describe('make_sm_column_offset', () => {
    it('should set margin-left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column_offset(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '0%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })

    it('should set margin-left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column_offset(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '100%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })
  })

  describe('make_sm_column_push', () => {
    it('should set left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column_push(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '0%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })

    it('should set left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column_push(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '100%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })
  })

  describe('make_sm_column_pull', () => {
    it('should set right to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column_pull(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '0%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })

    it('should set right to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_sm_column_pull(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '100%', {
        media: `(min-width:${ constants['$screen-sm-min'] })`
      })
    })
  })

  describe('make_md_column', () => {
    it('should set padding left and right to 15px by default', () => {
      const Comp = styled.div`
      ${ grid.make_md_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '15px')
      expect(wrapper).toHaveStyleRule('padding-right', '15px')
    })

    it(`should set width to ${ constants['$screen-md-min'] } if 0 columns`, () => {
      const Comp = styled.div`
      ${ grid.make_md_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '0%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })

    it(`should set width to ${ constants['$screen-md-min'] } if 12 columns`, () => {
      const Comp = styled.div`
      ${ grid.make_md_column(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '100%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })
  })

  describe('make_md_column_offset', () => {
    it('should set margin-left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_md_column_offset(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '0%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })

    it('should set margin-left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_md_column_offset(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '100%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })
  })

  describe('make_md_column_push', () => {
    it('should set left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_md_column_push(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '0%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })

    it('should set left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_md_column_push(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '100%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })
  })

  describe('make_md_column_pull', () => {
    it('should set right to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_md_column_pull(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '0%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })

    it('should set right to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_md_column_pull(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '100%', {
        media: `(min-width:${ constants['$screen-md-min'] })`
      })
    })
  })

  describe('make_lg_column', () => {
    it('should set padding left and right to 15px by default', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('padding-left', '15px')
      expect(wrapper).toHaveStyleRule('padding-right', '15px')
    })

    it(`should set width to ${ constants['$screen-lg-min'] } if 0 columns`, () => {
      const Comp = styled.div`
      ${ grid.make_lg_column(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '0%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })

    it(`should set width to ${ constants['$screen-lg-min'] } if 12 columns`, () => {
      const Comp = styled.div`
      ${ grid.make_lg_column(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('width', '100%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })
  })

  describe('make_lg_column_offset', () => {
    it('should set margin-left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column_offset(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '0%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })

    it('should set margin-left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column_offset(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('margin-left', '100%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })
  })

  describe('make_lg_column_push', () => {
    it('should set left to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column_push(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '0%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })

    it('should set left to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column_push(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('left', '100%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })
  })

  describe('make_lg_column_pull', () => {
    it('should set right to 0% if 0 columns', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column_pull(0) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '0%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })

    it('should set right to 100% if 12 columns', () => {
      const Comp = styled.div`
      ${ grid.make_lg_column_pull(12) }
      `
      const wrapper = shallow(<Comp />)
      expect(wrapper).toHaveStyleRule('right', '100%', {
        media: `(min-width:${ constants['$screen-lg-min'] })`
      })
    })
  })
})
