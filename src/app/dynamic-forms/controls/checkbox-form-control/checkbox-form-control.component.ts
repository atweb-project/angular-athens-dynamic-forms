import { Component } from '@angular/core';
import { IFormControl } from '../../interfaces/form-control.interface';
import { IFormControlConfig } from '../../interfaces/form-control-config.interface';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-form-control',
  templateUrl: './checkbox-form-control.component.html',
  styleUrls: ['./checkbox-form-control.component.scss']
})
export class CheckboxFormControlComponent implements IFormControl {
  config!: IFormControlConfig;
  group!: FormGroup;
}
