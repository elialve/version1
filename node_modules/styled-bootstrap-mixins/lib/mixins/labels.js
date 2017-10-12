import { css } from 'styled-components'
import { darken } from 'polished'

export const label_variant = color => css`
  background-color: ${color};

  &[href] {
    &:hover,
    &:focus {
      background-color: ${darken(0.1, color)};
    }
  }
`
