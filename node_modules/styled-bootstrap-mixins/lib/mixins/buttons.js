import { css } from 'styled-components'
import { darken } from 'polished'

export const button_variant = (color, background, border) => css`
  color: ${color};
  background-color: ${background};
  border-color: ${border};

  &:focus,
  &.focus {
    color: ${color};
    background-color: ${darken(.10, background)};
        border-color: ${darken(.25, border)};
  }
  &:hover {
    color: ${color};
    background-color: ${darken(.10, background)};
        border-color: ${darken(.12, border)};
  }
  &:active,
  &.active,
  .open > &.dropdown-toggle {
    color: ${color};
    background-color: ${darken(.10, background)};
        border-color: ${darken(.12, border)};

    &:hover,
    &:focus,
    &.focus {
      color: ${color};
      background-color: ${darken(.17, background)};
          border-color: ${darken(.25, border)};
    }
  }
  &:active,
  &.active,
  .open > &.dropdown-toggle {
    background-image: none;
  }
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    &:hover,
    &:focus,
    &.focus {
      background-color: ${background};
          border-color: ${border};
    }
  }

  .badge {
    color: ${background};
    background-color: ${color};
  }
`

export const button_size = (padding_vertical, padding_horizontal, font_size, line_height, border_radius) => css`
  padding: ${padding_vertical} ${padding_horizontal};
  font-size: ${font_size};
  line-height: ${line_height};
  border-radius: ${border_radius};
`
