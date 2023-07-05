import { Component, OnInit } from '@angular/core';
import { IFormControl } from '../../interfaces/form-control.interface';
import { IFormControlConfig } from '../../interfaces/form-control-config.interface';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-form-control',
  templateUrl: './dropdown-form-control.component.html',
  styleUrls: ['./dropdown-form-control.component.scss']
})
export class DropdownFormControlComponent implements IFormControl {
  config!: IFormControlConfig;
  group!: FormGroup;
}
