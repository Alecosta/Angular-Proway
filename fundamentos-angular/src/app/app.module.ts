import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
import { QuintoComponenteComponent } from './quinto-componente/quinto-componente.component';
import { SextoComponentComponent } from './sexto-componente/sexto-compoenente.component';
import { SetimoComponenteComponent } from './setimo-componente/setimo-componente.component';
import { OitavoComponenteComponents } from './oitavo-componente/oitavo-componente.component';
import { NonoComponenteComponenets } from './nono-componente/nono_componente.component';
import { DecimoComponenteCompoenets } from './decimo-componente/decimo-componente.component';
import { DecimoPrimeiroComponent } from './decimo-primeiro/decimo-primeiro.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    TerceiroComponenteComponent,
    QuartoComponenteComponent,
    QuintoComponenteComponent,
    SextoComponentComponent,
    SetimoComponenteComponent,
    OitavoComponenteComponents,
    NonoComponenteComponenets,
    DecimoComponenteCompoenets,
    DecimoPrimeiroComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
