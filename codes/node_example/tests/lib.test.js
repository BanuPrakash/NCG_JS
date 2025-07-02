const { add, filter, map } = require('../src/lib');

// AAA ==> Assemble Action Assert

// Assemble --> Test Suite
describe("testing libraries", () => {
    // test spec
    it("testing add()", () => {
        let result = add(4, 5); // Action
        expect(result).toBe(9); // Assertion
    });

    //test spec
    test("filtering numbers filter()", () => {
        // filter has a depenedency of predicate
        // unit testing is testing in isloation

        // mock predicate
        const predicate = jest.fn(data => data % 2 === 0);
        let res = filter([6, 2, 11, 62, 46, 31, 9, 4], predicate);
        expect(res.length).toBe(5);
        expect(res[0]).toBe(6);
        expect(res[2]).toBe(62);
    });

    it("filtering products filter()", () => {

    });

    it("map to get names map()", () => {
        // task to complete
    });
});