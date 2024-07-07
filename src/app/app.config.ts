import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideAnimations,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// Importa los estilos globales de Bootstrap

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    BrowserModule,
    BrowserAnimationsModule,
    provideAnimations(),
    provideHttpClient(),
  ],
};
