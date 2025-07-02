const { memoize } = require('../src/closure');

const math = {
    fibanocci: function fibanocci(no) {
        if (no == 0 || no == 1) {
            return no;
        } else {
            return fibanocci(no - 1) + fibanocci(no - 2);
        }
    }
}


describe("memoization testing ", () => {
    let memfib;
    let spyOn;
    beforeEach(() => {
        memfib = memoize(math.fibanocci);
        spyOn = jest.spyOn(math, 'fibanocci');
    })

    it("should return correct fibanocci", () => {
        expect(math.fibanocci(40)).toBe(102334155);
        expect(memfib(40)).toBe(102334155);
    })

    it("should cache results ", () => {
        memfib(6);
        expect(spyOn).toHaveBeenCalledTimes(7);
        // memfib(6); // get from cache
        // expect(spyOn).toHaveBeenCalledTimes(0);
        // memfib(5);
        // expect(spyOn).toHaveBeenCalledTimes(0);
    })
});