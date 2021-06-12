import { NgModule } from '@angular/core';

import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  exports: [IconsProviderModule, NzLayoutModule, NzMenuModule],
})
export class NgZorroModule {}
