import {TestDecorator} from "../src/decor1";


describe('decor1', () => {
    it('needs tests', () => {
        let name = 'Beeeeen';
        const f = new TestDecorator(name);

        expect(f.greet()).toEqual(`My name is, ${name}`);
    });
});
