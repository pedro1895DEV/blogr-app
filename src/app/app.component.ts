import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeDropdown: string | null = null;

  toggleDropdown(dropdown: string) {
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdown;
    }

    const dropdownButton = document.getElementById(`b${dropdown === 'products' ? 1 : dropdown === 'company' ? 2 : 3}`);

    if (dropdownButton) {
      dropdownButton.classList.toggle('active', this.activeDropdown === dropdown);
    }
  }
  title = 'blogr-app';
}
