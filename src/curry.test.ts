import { curry } from "./curry";

let sum: Function;
let hof: Function;

beforeAll (() => {
    sum = (a, b, c, d, e) => a + b + c + d + e;
})

beforeEach (() => {
    hof = curry(sum);
})

describe("curry", () => {
    test("curry is a function", () => {
        expect(curry).toBeInstanceOf(Function);
    })

    test("hof(1,2,3,4,5) = 15", () => {
        expect(hof(1,2,3,4,5)).toBe(15);
    })

    test("hof(2, 3, 4)(5, 6)) = 20", () => {
        expect(hof(2, 3, 4)(5, 6)).toBe(20);
    })

    test("(hof(3, 4)(5, 6)(7) = 25", () => {
        expect(hof(3, 4)(5, 6)(7)).toBe(25);
    })

    test("hof(4, 5)(6)(7, 8) = 30", () => {
        expect(hof(4, 5)(6)(7, 8)).toBe(30);
    })

    test("hof(5)(6)(7)(8)(9) = 35", () => {
        expect(hof(5)(6)(7)(8)(9)).toBe(35);
    })
    
})