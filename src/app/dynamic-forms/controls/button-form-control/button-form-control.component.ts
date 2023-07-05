import { Component } from '@angular/core';
import { IFormControl } from '../../interfaces/form-control.interface';
import { IFormControlConfig } from '../../interfaces/form-control-config.interface';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-form-control',
  templateUrl: './button-form-control.component.html',
  styleUrls: ['./button-form-control.component.scss']
})
export class ButtonFormControlComponent implements IFormControl {
  config!: IFormControlConfig;
  group!: FormGroup;
}
