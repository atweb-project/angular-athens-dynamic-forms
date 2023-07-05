import { Component, OnInit } from '@angular/core';
import { IFormControl } from '../../interfaces/form-control.interface';
import { IFormControlConfig } from '../../interfaces/form-control-config.interface';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-form-control',
  templateUrl: './textarea-form-control.component.html',
  styleUrls: ['./textarea-form-control.component.scss']
})
export class TextareaFormControlComponent implements IFormControl {
  config!: IFormControlConfig;
  group!: FormGroup;
}
