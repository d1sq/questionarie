import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { QuestionsTableComponent } from './questions-table/questions-table.component';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { NetworkQuestionsComponent } from './network-questions/network-questions.component';
import { OtherQuestionsComponent } from './other-questions/other-questions.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { NzResultModule } from 'ng-zorro-antd/result';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    QuestionsTableComponent,
    SecurityQuestionsComponent,
    NetworkQuestionsComponent,
    OtherQuestionsComponent,
    HomeComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzRadioModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzResultModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {}
