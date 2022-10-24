import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, MenuComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
