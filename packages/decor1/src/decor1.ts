import {format, getFormat} from 'lib';

export class TestDecorator {
    constructor(name: string) {
        this.name = name;
    }

    @format("My name is, %s")
    name: string;

    greet(): string {
        let formatString = getFormat(this, "name");
        return formatString.replace("%s", this.name);
    }
}
