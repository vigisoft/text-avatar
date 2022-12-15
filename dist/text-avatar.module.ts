import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TextAvatarDirective } from './text-avatar';
import { ColorGenerator } from './color-generator';

@NgModule({
  imports: [CommonModule],
  declarations: [TextAvatarDirective],
  exports: [TextAvatarDirective],
  providers: [ColorGenerator]
})
export class TextAvatarModule {}
