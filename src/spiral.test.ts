import { spiral } from "./spiral";

describe("spiral", () => {
    it("spiral is a function",()=> {
        expect(spiral).toBeInstanceOf(Function);
    })
    it("matrix spiral reverse", () => {
        expect(spiral([
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19]
            ])).toStrictEqual( [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11])
    })
})