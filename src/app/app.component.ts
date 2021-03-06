import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component'

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{ pageTitle }}</h1>
        </div>
         <pm-products></pm-products>   
    `
    
    
})
export class AppComponent { 
    pageTitle: string = "Acme Product Management";
}
