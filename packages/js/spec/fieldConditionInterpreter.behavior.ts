import { FieldCondition as Field } from '@ucast/core'
import { expect, spy } from './specHelper'
import { createJsInterpreter, allInterpreters, compare as defaultCompare } from '../src'

type Operators = keyof typeof allInterpreters

export function includeExamplesForFieldCondition(name: Operators, defaultValue: unknown = 1) {
  const operators = { [name]: allInterpreters[name] }

  it('uses "get" function from context to retrieve object value', () => {
    const condition = new Field(name, 'value', defaultValue)
    const object = { value: condition.value }
    const get = spy((item: Record<string, any>, field: string) => item[field])
    const customInterpret = createJsInterpreter(operators, { get })
    customInterpret(condition, object)

    expect(get).to.have.been.called.with(object, condition.field)
  })
}

export function includeExamplesForEqualityInterpreter(name: Operators, defaultValue: unknown = []) {
  const operators = { [name]: allInterpreters[name] }

  it('uses "compare" function from context to check equality of values', () => {
    const condition = new Field(name, 'value', defaultValue)
    const compare = spy(defaultCompare)
    const object = { value: condition.value }
    const interpret = createJsInterpreter(operators, { compare })
    interpret(condition, object)

    expect(compare).to.have.been.called.with(condition.value, object.value)
  })
}
