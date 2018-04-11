import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Service } from "../service";

import { RootComponent } from '../component/root/root';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule
    ],
    declarations: [
        RootComponent
    ],
    providers: [
        Service
    ],
    bootstrap: [RootComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);