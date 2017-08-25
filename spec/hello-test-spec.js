const hello = require("../src/hello");

describe("hello test", () => {
    it("should return hello world", () => {
        expect(hello()).toEqual('hello world');
    });
});