import constants from '../constants.json'
import { clearfix } from './clearfix'
import { css } from 'styled-components'
import {
  percentage,
  floor,
  ceil,
  div,
} from '../util'

const $GRID_GUTTER_WIDTH = constants['$grid-gutter-width']
const $GRID_COLUMNS = constants['$grid-columns']
const $SCREEN_SM_MIN = constants['$screen-sm-min']
const $SCREEN_MD_MIN = constants['$screen-md-min']
const $SCREEN_LG_MIN = constants['$screen-lg-min']

export const container_fixed = (gutter = $GRID_GUTTER_WIDTH) => css`
  margin-right: auto;
  margin-left: auto;
  padding-left:  ${ floor(div(gutter, 2)) };
  padding-right: ${ ceil(div(gutter, 2)) };
  ${ clearfix() }
`

export const make_row = (gutter = $GRID_GUTTER_WIDTH) => css`
  margin-left:  ${ ceil(div(gutter, -2)) };
  margin-right: ${ floor(div(gutter, -2)) };
  ${ clearfix() }
`

export const make_xs_column = (columns, gutter = $GRID_GUTTER_WIDTH) => css`
  position: relative;
  float: left;
  width: ${ percentage(div(columns, $GRID_COLUMNS)) };
  min-height: 1px;
  padding-left:  ${ div(gutter, 2) };
  padding-right: ${ div(gutter, 2) };
`

export const make_xs_column_offset = columns => css`
  margin-left: ${ percentage(div(columns, $GRID_COLUMNS)) };
`

export const make_xs_column_push = columns => css`
  left: ${ percentage(div(columns, $GRID_COLUMNS)) };
`

export const make_xs_column_pull = columns => css`
  right: ${ percentage(div(columns, $GRID_COLUMNS)) };
`

export const make_sm_column = (columns, gutter = $GRID_GUTTER_WIDTH) => css`
  position: relative;
  min-height: 1px;
  padding-left:  ${ div(gutter, 2) };
  padding-right: ${ div(gutter, 2) };

  @media (min-width: ${ $SCREEN_SM_MIN }) {
    float: left;
    width: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_sm_column_offset = columns => css`
  @media (min-width: ${ $SCREEN_SM_MIN }) {
    margin-left: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_sm_column_push = columns => css`
  @media (min-width: ${ $SCREEN_SM_MIN }) {
    left: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_sm_column_pull = columns => css`
  @media (min-width: ${ $SCREEN_SM_MIN }) {
    right: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_md_column = (columns, gutter = $GRID_GUTTER_WIDTH) => css`
  position: relative;
  min-height: 1px;
  padding-left:  ${ div(gutter, 2) };
  padding-right: ${ div(gutter, 2) };

  @media (min-width: ${ $SCREEN_MD_MIN }) {
    float: left;
    width: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_md_column_offset = columns => css`
  @media (min-width: ${ $SCREEN_MD_MIN }) {
    margin-left: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_md_column_push = columns => css`
  @media (min-width: ${ $SCREEN_MD_MIN }) {
    left: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_md_column_pull = columns => css`
  @media (min-width: ${ $SCREEN_MD_MIN }) {
    right: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_lg_column = (columns, gutter = $GRID_GUTTER_WIDTH) => css`
  position: relative;
  min-height: 1px;
  padding-left:  ${ div(gutter, 2) };
  padding-right: ${ div(gutter, 2) };

  @media (min-width: ${ $SCREEN_LG_MIN }) {
    float: left;
    width: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_lg_column_offset = columns => css`
  @media (min-width: ${ $SCREEN_LG_MIN }) {
    margin-left: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_lg_column_push = columns => css`
  @media (min-width: ${ $SCREEN_LG_MIN }) {
    left: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`

export const make_lg_column_pull = columns => css`
  @media (min-width: ${ $SCREEN_LG_MIN }) {
    right: ${ percentage(div(columns, $GRID_COLUMNS)) };
  }
`
