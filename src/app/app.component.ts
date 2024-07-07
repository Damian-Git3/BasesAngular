import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './components/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FontAwesomeModule, SharedModule],
})
export class AppComponent implements OnInit {
  title = 'Bases de angular';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
