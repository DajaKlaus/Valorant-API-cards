import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'gekko', component: GekkoComponent},
    { path: 'killjoy', component: KilljoyComponent},
    { path: 'viper', component: ViperComponent},
    { path: 'jett', component: JettComponent},
    { path: 'reyna', component: ReynaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
