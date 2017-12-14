import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModuleShared } from './app-routing.shared.module';

// Components
import { AppComponent } from './components/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

// Component - shared
import { TableComponent } from './components/shared/table/table.component';
import { PageSelectComponent } from './components/shared/page-select/page-select.component';
import { PageSizeComponent } from './components/shared/page-size/page-size.component';

// Services
import { LogDataService } from './services/log.data.service';
import { LogMockService } from './services/log.mock.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        SearchComponent,
        TableComponent,
        PageSelectComponent,
        PageSizeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModuleShared      // Routing module
    ],
    providers: [
        LogDataService,
        LogMockService
    ]
})

export class AppModuleShared {
}
