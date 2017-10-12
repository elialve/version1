import { css } from 'styled-components'

export const img_responsive = (display = 'block') => css`
  display: ${display};
  max-width: 100%;
  height: auto;
`

export const img_retina = (file_1x, file_2x, width_1x, height_1x) => css`
  background-image: url(${file_1x});

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    background-image: url(${file_2x});
    background-size: ${width_1x} ${height_1x};
  }
`
