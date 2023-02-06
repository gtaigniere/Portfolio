import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpecialGradientButtonComponent} from './special-gradient-button/special-gradient-button.component';

@NgModule({
  declarations: [
    SpecialGradientButtonComponent
  ],
  exports: [
    SpecialGradientButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
