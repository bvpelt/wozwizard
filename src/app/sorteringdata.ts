import {Sortering} from './sortering';
import {Checkbox} from './checkbox';

export class SorteringData {
    public id: number;
    public data: Sortering[];
    public options: Checkbox[];

    constructor(id: number, data: Sortering [], options: Checkbox[]) {
        this.id = id;
        this.data = data;
        this.options = options;
    }
}
