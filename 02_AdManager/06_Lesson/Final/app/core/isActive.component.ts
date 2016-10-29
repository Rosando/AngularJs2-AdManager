import {Component,Input} from '@angular/core';

@Component({
    selector:'ct-activeRecord',
    templateUrl:'app/shared/isActive.component.html'
})

export class IsActiveComponent{
    imageWidth:number=16;
    imageMargin:number=2;

    @Input()
    isActiveRecord:boolean;
   
}