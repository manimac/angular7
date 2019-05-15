import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name  :'addten'
})

export class customFilter implements PipeTransform{
    private location;
    constructor(){
        this.location = 'Europe';
    }
    transform(item){
        if(this.location == 'India'){
            return item*10;
        }
        else if(this.location == 'US'){
            return item * 70;
        }
        else{
            return item;
        }
        
    }
}

@Pipe({
    name  :'toupper'
})

export class uppercaseFilter implements PipeTransform{
    transform(item){
        if(item){
            return item.toUpperCase();
        }
        return item;
        
    }
}