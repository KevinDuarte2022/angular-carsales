import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Dashboard } from './views/dashboard/dashboard';
import { AuthGardianService } from './resources/services/auth-gardian-service';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'dashboard',
        canActivate: [AuthGardianService],
        loadComponent:() => import('./views/dashboard/dashboard').then(
            (m) => m.Dashboard
        )
    },
    {path: '**', redirectTo: ''}
];
