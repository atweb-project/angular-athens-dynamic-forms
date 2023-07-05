import { FormGroup } from '@angular/forms';
import { IFormControlConfig } from './form-control-config.interface';
import { ElementRef } from '@angular/core';


export interface ComponentData {
  element: any;
  config: IFormControlConfig;
  group: FormGroup;
}
