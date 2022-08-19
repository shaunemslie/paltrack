import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { FlightsState } from '@paltrack/client/flights/feature/flights';
import { HomeState } from '@paltrack/client/home/feature/home';
import { AuthState } from '@paltrack/client/shared/data-access/auth';
import {
  LayoutComponentModule,
  LayoutState,
} from '@paltrack/client/shared/ui/layout';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    LayoutComponentModule,
    NgxsModule.forRoot([LayoutState, AuthState, HomeState, FlightsState], {
      developmentMode: !environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: [AuthState],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
