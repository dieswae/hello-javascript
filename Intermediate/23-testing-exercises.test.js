const isEven = require('./23-testing-exercises')

test("isEven devuelve true para números pares", () => {
    expect(isEven(4)).toBe(true)
})

test("isEven devuelve false para números impares", () => {
    expect(isEven(5)).toBe(true)
})