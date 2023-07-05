import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { InputFormControlComponent } from "./input-form-control/input-form-control.component";
import { CheckboxFormControlComponent } from "./checkbox-form-control/checkbox-form-control.component";
import { DropdownFormControlComponent } from "./dropdown-form-control/dropdown-form-control.component";
import { RadioButtonFormControlComponent } from "./radio-button-form-control/radio-button-form-control.component";
import { TextareaFormControlComponent } from "./textarea-form-control/textarea-form-control.component";
import { ButtonFormControlComponent } from "./button-form-control/button-form-control.component";

@NgModule({
  declarations: [
    InputFormControlComponent,
    DropdownFormControlComponent,
    RadioButtonFormControlComponent,
    TextareaFormControlComponent,
    CheckboxFormControlComponent,
    ButtonFormControlComponent
  ],
  imports: [ReactiveFormsModule, SharedModule],
  exports: []
})
export class FormControlsModule {}
