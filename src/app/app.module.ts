import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { BrowserModule } from '@angular/platform-browser'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { ProgressBarModule } from 'angular-progress-bar'
import { ChartsModule } from 'ng2-charts';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { HeaderPage } from '../pages/header/header';
import { StorePage } from '../pages/store/store';
import { TdExperiencePage } from '../pages/td-experience/td-experience';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { CompanionsPage } from '../pages/companions/companions';
import { ConfirmPopPage } from '../pages/confirm-pop/confirm-pop';
import { QuestPage } from '../pages/quest/quest';
import { DashboardPage } from './../pages/dashboard/dashboard'

import { StartPage } from '../pages/start/start'
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'
import { QuestionPage } from '../pages/question/question'
import { QuestchoicePage } from '../pages/questchoice/questchoice'
import { TransactionListPage } from '../pages/transaction-list/transaction-list'
import { AccountProvider } from '../providers/account/account'
import { BranchProvider } from '../providers/branch/branch'
import { CustomerProvider } from '../providers/customer/customer'
import { TransactionProvider } from '../providers/transaction/transaction'
import { BranchDetailPage } from './../pages/branch-detail/branch-detail'
import { BranchListPage } from './../pages/branch-list/branch-list'
import { CustomerDetailPage } from './../pages/customer-detail/customer-detail'
import { CustomerListPage } from './../pages/customer-list/customer-list'
import { TransactionDetailPage } from './../pages/transaction-detail/transaction-detail'
import { KeysPipe } from './../pipes/KeysPipe'
import { MyApp } from './app.component'
import { FIREBASE_CONFIG } from './app.firebase.config'

import { profileSetupService } from './../services/profile-setup/profile-setup.service'
import { questsService } from './../services/quests/quests.service'
import { questionsService } from './../services/questions/questions.service'

@NgModule({
  declarations: [
    MyApp,
    TransactionListPage,
    BranchListPage,
    CustomerListPage,
    TransactionDetailPage,
    BranchDetailPage,
    KeysPipe,
    CustomerDetailPage,
    StartPage,
    RegisterPage,
    LoginPage,
    QuestionPage,
    QuestchoicePage,
    HeaderPage,
    DashboardPage,
    HeaderPage,
    StorePage,
    TdExperiencePage,
    AnalyticsPage,
    CompanionsPage,
    ConfirmPopPage,
    QuestPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ProgressBarModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionListPage,
    BranchListPage,
    CustomerListPage,
    TransactionDetailPage,
    BranchDetailPage,
    CustomerDetailPage,
    StartPage,
    RegisterPage,
    LoginPage,
    QuestionPage,
    QuestchoicePage,
    HeaderPage,
    DashboardPage,
    HeaderPage,
    StorePage,
    TdExperiencePage,
    CompanionsPage,
    AnalyticsPage,
    ConfirmPopPage,
    QuestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider,
    AccountProvider,
    TransactionProvider,
    BranchProvider,
    profileSetupService,
    questsService,
    questionsService
  ]
})
export class AppModule {}
