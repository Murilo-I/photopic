import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { GlobalErrorCompnent } from './global-error-page/global-error.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NotFoundComponent, GlobalErrorCompnent],
  
  providers: [{
  provide: ErrorHandler,
  useClass: GlobalErrorHandler
  }]
  
})
export class ErrorsModule { }
