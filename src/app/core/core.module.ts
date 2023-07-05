import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '../core/utils/module-import-guard';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [ConfigService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
