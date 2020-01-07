import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lsp';
  navbarOpen = false;

	toggle() {
		this.navbarOpen = !this.navbarOpen;
	}
}

