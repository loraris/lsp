import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'lsp';
	navbarOpen = true;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
	.pipe(
		map(result => result.matches)
	);

	constructor(private breakpointObserver: BreakpointObserver) {}

	toggle() {
		this.navbarOpen = !this.navbarOpen;
	}
}

