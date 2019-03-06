import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
