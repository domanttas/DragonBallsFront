import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatTabsModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class MaterialModule {
}
