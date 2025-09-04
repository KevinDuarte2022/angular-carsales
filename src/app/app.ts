import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from './button-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Bem vindo');
}
