import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';  
import {MatTableModule} from '@angular/material/table';
import { MaterialLayoutModule } from 'app/layout/layouts/horizontal/material/material.module';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatTabsModule,
        MatIconModule,
        CommonModule,
        MaterialLayoutModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatPaginatorModule
    ]
})
export class ExampleModule
{
}
