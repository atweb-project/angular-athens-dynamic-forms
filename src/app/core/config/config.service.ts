import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFormControlConfig } from 'src/app/dynamic-forms/interfaces/form-control-config.interface';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {}

  configUrl = 'assets/webform-builder-config.json';

  getConfigData() {
    return this.http.get<IFormControlConfig[]>(this.configUrl);
  }
}
