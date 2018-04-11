import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SorteringenComponent} from './sorteringen.component';

describe('SorteringenComponent', () => {
    let component: SorteringenComponent;
    let fixture: ComponentFixture<SorteringenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SorteringenComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SorteringenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
