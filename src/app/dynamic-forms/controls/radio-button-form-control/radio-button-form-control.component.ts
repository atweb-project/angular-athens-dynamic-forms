import { Component, OnInit } from '@angular/core';
import { IFormControl } from '../../interfaces/form-control.interface';
import { IFormControlConfig } from '../../interfaces/form-control-config.interface';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button-form-control',
  templateUrl: './radio-button-form-control.component.html',
  styleUrls: ['./radio-button-form-control.component.scss']
})
export class RadioButtonFormControlComponent implements IFormControl {
  config!: IFormControlConfig;
  group!: FormGroup;
}
