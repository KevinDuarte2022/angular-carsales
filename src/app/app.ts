import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Login } from './views/login/login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Bem vindo');
}
