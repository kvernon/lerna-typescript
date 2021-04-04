import * as lib from "../src/index";
import {Greeter} from "../src";

describe('lib', () => {
    it('index should be false', () => {
        expect(lib.index()).toEqual(false);
    });
    it('F should be false', () => {
        expect(new Greeter("young man!").greet()).toEqual("Hello, young man!");
    });
});
