import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';
import { FxComponent } from './fx/fx.component';

import { routes } from './app.router';
import { ResourceShaderComponent } from './resource-shader/resource-shader.component';
import { MegaToolComponent } from './mega-tool/mega-tool.component';
import { DuckyToolComponent } from './ducky-tool/ducky-tool.component';
import { DdsConverterToolComponent } from './dds-converter-tool/dds-converter-tool.component';
import { WaterShaderComponent } from './water-shader/water-shader.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SwarmComponent } from './swarm/swarm.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RubiksCubeShaderComponent } from './rubiks-cube-shader/rubiks-cube-shader.component';
import { GameCounterComponent } from './game-counter/game-counter.component';
import { DeathAndDecayComponent } from './death-and-decay/death-and-decay.component';
import { IceComponent } from './ice/ice.component';
import { SpiteComponent } from './spite/spite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ToolsComponent,
    FxComponent,
    ResourceShaderComponent,
    MegaToolComponent,
    DuckyToolComponent,
    DdsConverterToolComponent,
    WaterShaderComponent,
    FooterComponent,
    ProjectsComponent,
    SwarmComponent,
    RubiksCubeShaderComponent,
    GameCounterComponent,
    DeathAndDecayComponent,
    IceComponent,
    SpiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
