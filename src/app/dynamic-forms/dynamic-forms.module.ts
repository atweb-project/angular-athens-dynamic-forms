import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlsDirective } from './dynamic-form-controls.directive';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { SharedModule } from '../shared/shared.module';

import { FormControlsModule } from './controls/form-controls.module';

@NgModule({
  declarations: [
    DynamicFormsComponent,
    DynamicFormControlsDirective
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [DynamicFormsComponent, DynamicFormControlsDirective]
})
export class DynamicFormsModule {}
