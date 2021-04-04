import "reflect-metadata";
const formatMetadataKey = Symbol("format");
export function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
export function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

export function index(): boolean {
    return false;
}

export class Greeter {
    @format("Hello, %s")
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
