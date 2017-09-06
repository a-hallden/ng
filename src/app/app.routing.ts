import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { BackendtestComponent } from './backendtest/backendtest.component';

const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'test', component: BackendtestComponent },

    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
    // { path: '', component: HomeComponent },
    // { path: 'test', component: BackendtestComponent },
];

export const routing = RouterModule.forRoot(appRoutes);