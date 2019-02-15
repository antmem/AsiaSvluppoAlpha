/*import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { CommunityPageModule } from '../community/community.module';
import { AsiaPageModule } from '../asia/asia.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{ path: 'asia', loadChildren: '../asia/asia.module#AsiaPageModule' },
			{ path: 'community', loadChildren: '../community/community.module#CommunityPageModule' },
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
		]
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageModule {}*/

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { CommunityPageModule } from '../community/community.module';
import { AsiaPageModule } from '../asia/asia.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AsiaPageModule,
    CommunityPageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

