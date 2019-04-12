import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';
import { FxComponent } from './fx/fx.component';
import { ProjectsComponent } from './projects/projects.component';

import { WaterShaderComponent } from './water-shader/water-shader.component';
import { ResourceShaderComponent } from './resource-shader/resource-shader.component';
import { RubiksCubeShaderComponent } from './rubiks-cube-shader/rubiks-cube-shader.component';
import { MegaToolComponent } from './mega-tool/mega-tool.component';
import { DuckyToolComponent } from './ducky-tool/ducky-tool.component';
import { DdsConverterToolComponent } from './dds-converter-tool/dds-converter-tool.component';
import { GameCounterComponent } from './game-counter/game-counter.component';
import { SwarmComponent } from './swarm/swarm.component';
import { SpiteComponent } from './spite/spite.component';
import { DeathAndDecayComponent } from './death-and-decay/death-and-decay.component';
import { IceComponent } from './ice/ice.component';

export const router: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full'},
    { path: 'tools', component: ToolsComponent},
    { path: 'portfolio', component: FxComponent},
    { path: 'games', component: ProjectsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'water', component: WaterShaderComponent},
    { path: 'resource', component: ResourceShaderComponent},
    { path: 'rubikscube', component: RubiksCubeShaderComponent},
    { path: 'megatool', component: MegaToolComponent},
    { path: 'ducky', component: DuckyToolComponent},
    { path: 'ddsconverter', component: DdsConverterToolComponent},
    { path: 'gamecounter', component: GameCounterComponent},
    { path: 'swarm', component: SwarmComponent},
    { path: 'spite', component: SpiteComponent},
    { path: 'deathanddecay', component: DeathAndDecayComponent},
    { path: 'ice', component: IceComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);