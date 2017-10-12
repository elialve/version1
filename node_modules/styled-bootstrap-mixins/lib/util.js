import defaultTo from 'lodash.defaultto'

const valueOf = numUnit => parseFloat(numUnit)
const unitOf = numUnit => {
  const hasDigit = /\d+/.test(numUnit)
  const output = /[a-z]+/.exec(numUnit)
  if(!output || !hasDigit) {
    return null
  }
  return output[0]
}

export const floor = number => `${ defaultTo(Math.floor(valueOf(number)), '') }${ defaultTo(unitOf(number), '') }`
export const ceil = number => `${ defaultTo(Math.ceil(valueOf(number)), '') }${ defaultTo(unitOf(number), '') }`
export const percentage = number => {
  const output = valueOf(number) * 100
  if(isNaN(output)) {
    return ''
  }
  return `${output}%`
}
export const add = (n1, n2) => `${ defaultTo(valueOf(n1) + valueOf(n2), '') }${ defaultTo(unitOf(n1) || unitOf(n2), '') }`
export const sub = (n1, n2) => `${ defaultTo(valueOf(n1) - valueOf(n2), '') }${ defaultTo(unitOf(n1) || unitOf(n2), '') }`
export const mul = (n1, n2) => `${ defaultTo(valueOf(n1) * valueOf(n2), '') }${ defaultTo(unitOf(n1) || unitOf(n2), '') }`
export const div = (n1, n2) => {
  const _n1 = valueOf(n1)
  const _n2 = valueOf(n2)

  if(_n1 === 0 && _n2 === 0) {
    return ''
  }
  return `${ defaultTo(valueOf(n1) / valueOf(n2), '') }${ defaultTo(unitOf(n1) || unitOf(n2), '') }`
}
