import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Dashboard } from './views/dashboard/dashboard';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'dashboard',
        loadComponent:() => import('./views/dashboard/dashboard').then(
            (m) => m.Dashboard
        )
    }
];
