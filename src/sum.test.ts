/**
 * @jest-environment jsdom
 */

import { sum } from "./sum";

beforeEach(() => {
    jest.clearAllMocks();
    const alertSpy = jest.spyOn(global, 'alert');
})


describe("sum", () => {
    window.alert = jest.fn().mockImplementation((f) => {
        return f.toString();
    });
    it("sum is a function", () => {
        expect(sum).toBeInstanceOf(Function);
    });

    it("alert(sum()) // 0", () => {
        expect(alert(sum())).toBe(0);
    })

    it("alert(s(1)) //1", () => {
        const s = sum();
        expect(alert(s(1))).toBe(1);
        expect(alert(s(1)(2))).toBe(3);
        expect(alert(s(3)(4)(5))).toBe(12);
    })
    
    it("const s3 = sum(3)", () => {
        const s3 = sum(3);
        expect(alert(s3(5))).toBe(8);
        expect(alert(s3(6))).toBe(9);
    })


})