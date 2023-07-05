import { Component } from '@angular/core';
import { IFormControlConfig } from './dynamic-forms/interfaces/form-control-config.interface';
import { ConfigService } from './core/config/config.service';

@Component({
  selector: 'webform-builder',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-athens-dynamic-forms';
  config: IFormControlConfig[] = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
   // this.loadForm();
   }

  loadForm(): void {
    this.configService.getConfigData()
    .subscribe((data: IFormControlConfig[]) => this.config = data);
  }
}
