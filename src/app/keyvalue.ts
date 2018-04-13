export class Keyvalue {
    public id: number;
    public key: string;
    public value: string;
    public pattern: string;
    public maxvalue: string;

    constructor(id: number, key: string, pattern: string) {
        this.id = id;
        this.key = key;
        this.pattern = pattern;
        this.value = '';
        this.maxvalue = '';
    }
}
