import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { IFormControlConfig } from './interfaces/form-control-config.interface';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  exportAs: 'dynamicForm',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
})
export class DynamicFormsComponent implements OnChanges, OnInit {
  @Input()
  config: IFormControlConfig[] = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  get controls() {
    return this.config.filter(({ type }) => type !== 'button');
  }
  get changes() {
    return this.form.valueChanges;
  }
  get valid() {
    return this.form.valid;
  }
  get value() {
    return this.form.value;
  }
  get dirty() {
    return this.form.dirty;
  }
  get formGroup() {
    return this.form;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
     this.createGroup();
  }

  ngOnChanges(): void {
   if(this.form) {
    this.addControls();
   }
  }

  createGroup(): void {
    this.form = this.fb.group({});
    this.addControls();
  }

  addControls(): void {
    this.controls.forEach((control): void => {
      this.form.addControl(control.name, this.createControl(control));
      this.setValidations(this.form, control);
    });
  }

  createControl(config: IFormControlConfig): FormControl<any> {
    const { disabled, value } = config;
    return this.fb.control({ disabled, value });
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
   console.log(this.form)
  }

  private setValidations(group: FormGroup, control: IFormControlConfig): void {
    if (control.required) {
      group.controls[control.name].setValidators(Validators.required);
    }
    if (control.type === 'email' && control.required) {
      group.controls[control.name].setValidators([Validators.required, Validators.email]);
    }
  }

  private setDisabledControl(group: FormGroup, control: IFormControlConfig): void {
    if (control.disabled) {
      group.controls[control.name].disable();
    }
  }

  private setValue(group: FormGroup, name: string, value: any): void {
    group.controls[name].setValue(value, { emitEvent: true });
  }
}
