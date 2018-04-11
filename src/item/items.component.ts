import {Component, Input} from '@angular/core';
import {Item} from './item.component';

@Component({
    selector: 'itemslist-root',
    templateUrl: './itemslist.component.html'
})

export class ItemslistComponent {

    @Input() fieldNames: string[];

    public fieldList: Item[] = null;

    public fillFieldList() {
        console.log('Loading fieldList');
        for (var i = 0; i < this.fieldList.length; i++) {
            this.fieldList[i] = new Item(i, this.fieldNames[i], '');
        }
    }
}

