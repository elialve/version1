# styled-bootstrap-mixins [![Build Status](https://travis-ci.org/makemek/styled-bootstrap.svg?branch=master)](https://travis-ci.org/makemek/styled-bootstrap)

Call bootstrap mixin from javascript to use with [styled-components](https://github.com/styled-components/styled-components).
All mixins are based on [bootstrap-sass](https://github.com/twbs/bootstrap-sass).

**This project is currently under development.**
Only these mixins are available:

- buttons
- clearfix
- grid
- image
- labels

## Installation
```
npm install styled-bootstrap-mixins styled-components --save
```

## Usage
### Mixins
Because bootstrap sass mixins are written in snake-case, it is not a valid syntax in javascript.
You have replace dash `-` with underscore `_` to call the mixin.

```javascript
import { make_lg_column } from 'styled-bootstrap-mixins'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  background-color: papayawhip;
  ${ make_lg_column('8') }
`

const Component = () => <Container>Content</Container>

export default Component
```

### Constants
Constants are bootstrap's predefined values located in [\_variables.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss).
They are compiled using [scss-to-json](https://github.com/ryanbahniuk/scss-to-json) to convert from scss to json.

To get a minimum medium screen breakpoint
```javascript
import { CONSTANTS }  from 'styled-bootstrap-mixins'
CONSTANTS['$screen-md-min'] // 992px
```
Please note that all returned constants are string.

## Testing
Using [jest](https://github.com/facebook/jest) test runner
```
npm test
```
