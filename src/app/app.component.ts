import { CustomerListPage } from './../pages/customer-list/customer-list';
import { BranchListPage } from './../pages/branch-list/branch-list';
import { StartPage } from './../pages/start/start';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { DashboardPage } from './../pages/dashboard/dashboard'

import { StorePage } from '../pages/store/store';
import { TdExperiencePage } from '../pages/td-experience/td-experience';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { CompanionsPage } from '../pages/companions/companions';


import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = StartPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      //{ title: 'Customers', component: CustomerListPage },
      //{ title: 'Branches', component: BranchListPage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Store', component: StorePage},
      { title: 'Companions', component: CompanionsPage},
      { title: 'Analytics', component: AnalyticsPage},
      { title: 'TD Experience', component: TdExperiencePage}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
