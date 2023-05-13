import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GekkoComponent } from './gekko/gekko.component';
import { GenericComponent } from './generic/generic.component';
import { JettComponent } from './jett/jett.component';
import { KilljoyComponent } from './killjoy/killjoy.component';
import { ReynaComponent } from './reyna/reyna.component';
import { ViperComponent } from './viper/viper.component';

const routes: Routes = [
    { path: 'gekko', component: GekkoComponent},
    { path: 'killjoy', component: KilljoyComponent},
    { path: 'viper', component: ViperComponent},
    { path: 'jett', component: JettComponent},
    { path: 'reyna', component: ReynaComponent},
    { path: 'generic/:id', component: GenericComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
