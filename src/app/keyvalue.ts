export class Keyvalue {
    public id: number;
    public key: string;
    public value: string;
    public maxvalue: string;

    constructor(id: number, key: string) {
        this.id = id;
        this.key = key;
        this.value = '';
        this.maxvalue = '';
    }
}
