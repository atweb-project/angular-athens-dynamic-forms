import { Component } from '@angular/core';
import { IFormControl } from '../../interfaces/form-control.interface';
import { IFormControlConfig } from '../../interfaces/form-control-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-form-control',
  templateUrl: './input-form-control.component.html',
  styleUrls: ['./input-form-control.component.scss']
})
export class InputFormControlComponent implements IFormControl {
  config!: IFormControlConfig;
  group!: FormGroup;
}
