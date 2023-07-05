import {
  Directive,
  Input,
  ComponentRef,
  ViewContainerRef,
  Type,
  OnChanges,
  OnInit,
  ElementRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFormControl } from './interfaces/form-control.interface';
import { IFormControlConfig } from './interfaces/form-control-config.interface';

export interface LazyLoadingInterface {
  [type: string]: (componentData: IFormControl) => Promise<void>;
}

@Directive({
  selector: '[dynamicFormControl]'
})
export class DynamicFormControlsDirective
  implements IFormControl, OnChanges, OnInit {
  @Input()
  config!: IFormControlConfig;
  @Input()
  group!: FormGroup;
  component!: ComponentRef<IFormControl>;
  components: LazyLoadingInterface = {
    text: async (data: IFormControl): Promise<void> => {
      const { InputFormControlComponent } = await import(
      /* webpackChunkName: 'input-form-control' */ `../dynamic-forms/controls/input-form-control/input-form-control.component`
      );
      this.createComponent(InputFormControlComponent, data);
    },
    email: async (data: IFormControl): Promise<void> => {
      const { InputFormControlComponent } = await import(
      /* webpackChunkName: 'input-form-control' */ `../dynamic-forms/controls/input-form-control/input-form-control.component`
      );
      this.createComponent(InputFormControlComponent, data);
    },
    password: async (data: IFormControl): Promise<void> => {
      const { InputFormControlComponent } = await import(
      /* webpackChunkName: 'input-form-control' */ `../dynamic-forms/controls/input-form-control/input-form-control.component`
      );
      this.createComponent(InputFormControlComponent, data);
    },
    checkbox: async (data: IFormControl): Promise<void> => {
      const { CheckboxFormControlComponent } = await import(
      /* webpackChunkName: 'checkbox-form-control' */ `../dynamic-forms/controls/checkbox-form-control/checkbox-form-control.component`
      );
      this.createComponent(CheckboxFormControlComponent, data);
    },
    dropdown: async (data: IFormControl): Promise<void> => {
      const { DropdownFormControlComponent } = await import(
      /* webpackChunkName: 'dropdown-form-control' */ `../dynamic-forms/controls/dropdown-form-control/dropdown-form-control.component`
      );
      this.createComponent(DropdownFormControlComponent, data);
    },
    textarea: async (data: IFormControl): Promise<void> => {
      const { TextareaFormControlComponent } = await import(
      /* webpackChunkName: 'textarea-form-control' */ `../dynamic-forms/controls/textarea-form-control/textarea-form-control.component`
      );
      this.createComponent(TextareaFormControlComponent, data);
    },
    radiobutton: async (data: IFormControl): Promise<void> => {
      const { RadioButtonFormControlComponent } = await import(
      /* webpackChunkName: 'radio-button-form-control' */ `../dynamic-forms/controls/radio-button-form-control/radio-button-form-control.component`
      );
      this.createComponent(RadioButtonFormControlComponent, data);
    },
    button: async (data: IFormControl): Promise<void> => {
      const { ButtonFormControlComponent } = await import(
      /* webpackChunkName: 'button-form-control' */ `../dynamic-forms/controls/button-form-control/button-form-control.component`
      );
      this.createComponent(ButtonFormControlComponent, data);
    }
  };

  constructor(
    private container: ViewContainerRef
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadComponents();
  }

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  createComponent(component: Type<IFormControl>, componentData: IFormControl): void {
    // Create the component and wire it up with the element
    const componentRef = this.container.createComponent(component);

    // Set config properties and form object to component
    componentRef.instance.config = componentData.config;
    componentRef.instance.group = componentData.group;
  }

  async loadComponents(): Promise<void> {
    const data = { config: this.config, group: this.group };
    try {
      if (!this.components[this.config.type]) {
        const supportedTypes = Object.keys(this.components).join(', ');
        throw new Error(
          `You are trying to use an unsupported type (${this.config.type}).
          Supported types: ${supportedTypes}`
        );
      }
      await this.components[this.config.type](data);
    } catch (error) {
      console.log(error)
    }
  }
}
