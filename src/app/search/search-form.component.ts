import {Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "SearchForm",
    template: '<TextField [(ngModel)]="textFieldValue" hint="Ingresar texto..."></TextField><Button text="Buscar" (tap)="onButtonTap()"></Button>'
})
export class SearchFormComponent implements OnInit{
    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() inicial: string;

    ngOnInit(): void{
        this.textFieldValue = this.inicial;
    }

    onButtonTap(): void{
        console.log(this.textFieldValue);
        if(this.textFieldValue.length > 2){
            this.search.emit(this.textFieldValue);
        }
    }
}