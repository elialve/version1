import * as util from '../util'

describe('floor', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.floor('')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.floor('px')).toEqual('')
    expect(util.floor(' px ')).toEqual('')
    expect(util.floor('foo')).toEqual('')
    expect(util.floor(' foo ')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.floor(0)).toEqual('0')
    expect(util.floor(0.5)).toEqual('0')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.floor('0')).toEqual('0')
    expect(util.floor(' 0 ')).toEqual('0')
    expect(util.floor('0.5')).toEqual('0')
    expect(util.floor(' 0.5 ')).toEqual('0')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.floor('0px')).toEqual('0px')
    expect(util.floor(' 0px ')).toEqual('0px')
    expect(util.floor('0.5px')).toEqual('0px')
    expect(util.floor(' 0.5px ')).toEqual('0px')
  })
})

describe('ceil', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.ceil('')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.ceil('px')).toEqual('')
    expect(util.ceil(' px ')).toEqual('')
    expect(util.ceil('foo')).toEqual('')
    expect(util.ceil(' foo ')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.ceil(0)).toEqual('0')
    expect(util.ceil(0.5)).toEqual('1')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.ceil('0')).toEqual('0')
    expect(util.ceil(' 0 ')).toEqual('0')
    expect(util.ceil('0.5')).toEqual('1')
    expect(util.ceil(' 0.5 ')).toEqual('1')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.ceil('0px')).toEqual('0px')
    expect(util.ceil(' 0px ')).toEqual('0px')
    expect(util.ceil('0.5px')).toEqual('1px')
    expect(util.ceil(' 0.5px ')).toEqual('1px')
  })
})

describe('percentage', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.percentage('')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.percentage('px')).toEqual('')
    expect(util.percentage(' px ')).toEqual('')
    expect(util.percentage('foo')).toEqual('')
    expect(util.percentage(' foo ')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.percentage(0)).toEqual('0%')
    expect(util.percentage(0.5)).toEqual('50%')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.percentage('0')).toEqual('0%')
    expect(util.percentage(' 0 ')).toEqual('0%')
    expect(util.percentage('0.5')).toEqual('50%')
    expect(util.percentage(' 0.5 ')).toEqual('50%')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.percentage('0px')).toEqual('0%')
    expect(util.percentage(' 0px ')).toEqual('0%')
    expect(util.percentage('0.5px')).toEqual('50%')
    expect(util.percentage(' 0.5px ')).toEqual('50%')
  })
})

describe('add', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.add('', '')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.add('px', 'px')).toEqual('')
    expect(util.add(' px ', ' px ')).toEqual('')
    expect(util.add('foo', 'foo')).toEqual('')
    expect(util.add(' foo ', ' foo ')).toEqual('')
    expect(util.add('', 'foo')).toEqual('')
    expect(util.add('foo', '')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.add(0, 0)).toEqual('0')
    expect(util.add(0, -1)).toEqual('-1')
    expect(util.add(0, 1)).toEqual('1')
    expect(util.add(0.5, 0.5)).toEqual('1')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.add(' 0 ', ' 0 ')).toEqual('0')
    expect(util.add(' 0 ', ' -0 ')).toEqual('0')
    expect(util.add(' 0 ', ' -1 ')).toEqual('-1')
    expect(util.add(' 0.5 ', ' -0.5 ')).toEqual('0')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.add(' 0px ', ' 0 ')).toEqual('0px')
    expect(util.add(' 0 ', ' -0px ')).toEqual('0px')
    expect(util.add(' 0px ', ' -1px ')).toEqual('-1px')
    expect(util.add(' 0.5px ', ' -0.5px ')).toEqual('0px')
  })
})

describe('sub', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.sub('', '')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.sub('px', 'px')).toEqual('')
    expect(util.sub(' px ', ' px ')).toEqual('')
    expect(util.sub('foo', 'foo')).toEqual('')
    expect(util.sub(' foo ', ' foo ')).toEqual('')
    expect(util.sub('', 'foo')).toEqual('')
    expect(util.sub('foo', '')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.sub(0, 0)).toEqual('0')
    expect(util.sub(0, -1)).toEqual('1')
    expect(util.sub(0, 1)).toEqual('-1')
    expect(util.sub(0.5, 0.5)).toEqual('0')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.sub(' 0 ', ' 0 ')).toEqual('0')
    expect(util.sub(' 0 ', ' -0 ')).toEqual('0')
    expect(util.sub(' 0 ', ' -1 ')).toEqual('1')
    expect(util.sub(' 0.5 ', ' -0.5 ')).toEqual('1')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.sub(' 0px ', ' 0 ')).toEqual('0px')
    expect(util.sub(' 0 ', ' -0px ')).toEqual('0px')
    expect(util.sub(' 0px ', ' -1px ')).toEqual('1px')
    expect(util.sub(' 0.5px ', ' -0.5px ')).toEqual('1px')
  })
})

describe('mul', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.mul('', '')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.mul('px', 'px')).toEqual('')
    expect(util.mul(' px ', ' px ')).toEqual('')
    expect(util.mul('foo', 'foo')).toEqual('')
    expect(util.mul(' foo ', ' foo ')).toEqual('')
    expect(util.mul('', 'foo')).toEqual('')
    expect(util.mul('foo', '')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.mul(0, 0)).toEqual('0')
    expect(util.mul(0, -1)).toEqual('0')
    expect(util.mul(0, 1)).toEqual('0')
    expect(util.mul(0.5, 0.5)).toEqual('0.25')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.mul(' 0 ', ' 0 ')).toEqual('0')
    expect(util.mul(' 0 ', ' -0 ')).toEqual('0')
    expect(util.mul(' 0 ', ' -1 ')).toEqual('0')
    expect(util.mul(' 0.5 ', ' -0.5 ')).toEqual('-0.25')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.mul(' 0px ', ' 0 ')).toEqual('0px')
    expect(util.mul(' 0 ', ' -0px ')).toEqual('0px')
    expect(util.mul(' 0px ', ' -1px ')).toEqual('0px')
    expect(util.mul(' 0.5px ', ' -0.5px ')).toEqual('-0.25px')
  })
})

describe('div', () => {
  it('should return empty string if parameter is an empty string', () => {
    expect(util.div('', '')).toEqual('')
  })

  it('should return empty string if divide by zero', () => {
    expect(util.div(0, 0)).toEqual('')
    expect(util.div(' 0 ', ' 0 ')).toEqual('')
    expect(util.div(' 0 ', ' -0 ')).toEqual('')
    expect(util.div(' 0px ', ' 0 ')).toEqual('')
    expect(util.div(' 0 ', ' -0px ')).toEqual('')
  })

  it('should return empty string if parameter has only unit but not no number', () => {
    expect(util.div('px', 'px')).toEqual('')
    expect(util.div(' px ', ' px ')).toEqual('')
    expect(util.div('foo', 'foo')).toEqual('')
    expect(util.div(' foo ', ' foo ')).toEqual('')
    expect(util.div('', 'foo')).toEqual('')
    expect(util.div('foo', '')).toEqual('')
  })

  it('should return expected number if parameter is number', () => {
    expect(util.div(0, -1)).toEqual('0')
    expect(util.div(0, 1)).toEqual('0')
    expect(util.div(0.5, 0.5)).toEqual('1')
  })

  it('should return expected number if parameter is number string', () => {
    expect(util.div(' 0 ', ' -1 ')).toEqual('0')
    expect(util.div(' 0.5 ', ' -0.5 ')).toEqual('-1')
  })

  it('should return expected number with unit if parameter is number and unit', () => {
    expect(util.div(' 0px ', ' -1px ')).toEqual('0px')
    expect(util.div(' 0.5px ', ' -0.5px ')).toEqual('-1px')
  })
})
