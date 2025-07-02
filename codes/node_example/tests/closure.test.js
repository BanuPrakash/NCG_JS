const { memoize } = require('../src/closure');


global.fibanocci = function fibanocci(no) {
    if (no == 0 || no == 1) {
        return no;
    } else {
        return this.fibanocci(no - 1) + this.fibanocci(no - 2);
    }
};



describe("memoization testing ", () => {
    let memfib;
    let spyOn;
    beforeEach(() => {
        memfib = memoize(global.fibanocci.bind(global));
        spyOn = jest.spyOn(global, 'fibanocci');
    })

    it("should return correct fibanocci", () => {
      //  expect(global.fibanocci(40)).toBe(102334155);
       // expect(memfib(40)).toBe(102334155);
    })

    it("should cache results ", () => {
        memfib(2);
        expect(spyOn).toHaveBeenCalledTimes(3);
        memfib(2);
        expect(spyOn).toHaveBeenCalledTimes(0);
    })
});