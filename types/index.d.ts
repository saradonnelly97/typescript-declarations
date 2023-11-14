declare module 'lodash' {
    // multiplier the first number, multiplicand the second number, return a number
    function multiply(multiplier: number, multiplicand: number): number
    // reverse a number array
    function reverse(arr:number[]):number[]
    // reverse a string array
    function reverse(arr:string[]):string[]
    // drop right
    function dropRight(arr:(string|number)[], dropped: number):(string|number)[]
}