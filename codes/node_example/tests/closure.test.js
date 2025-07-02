const { memoize } = require('../src/closure');

let count = 0;
const math = {
    fibanocci: function fibanocci(no) {
        console.log("called :", count++)
        if (no == 0 || no == 1) {
            return no;
        } else {
            return this.fibanocci(no - 1) + this.fibanocci(no - 2);
        }
    }
}


describe("memoization testing ", () => {
    let memfib;
    let spyOn;
    beforeEach(() => {
        memfib = memoize(math.fibanocci.bind(math));
        spyOn = jest.spyOn(math, 'fibanocci');
    })

    it("should return correct fibanocci", () => {
        // expect(math.fibanocci(40)).toBe(102334155);
        // expect(memfib(40)).toBe(102334155);
    })

    it("should cache results ", () => {
        math.fibanocci(2);
        expect(spyOn).toHaveBeenCalledTimes(3);
        // memfib(6);
        // expect(spyOn).toHaveBeenCalledTimes(7);
        // memfib(6); // get from cache
        // expect(spyOn).toHaveBeenCalledTimes(0);
        // memfib(5);
        // expect(spyOn).toHaveBeenCalledTimes(0);
    })
});