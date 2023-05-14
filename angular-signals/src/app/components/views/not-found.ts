import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routerAnimation } from '../../animations/router-default';
import { StickyDirective } from '../../directives/sticky.directive';
import { BannerComponent } from '../shared/banner.component';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [CommonModule, RouterModule, BannerComponent, StickyDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [routerAnimation],
	template: `
		<div class="mt-[200px]">
			<div class="grid gap-10 place-content-center">
				<h1 class="text-3xl text-center text-red-400">Error page</h1>
				You can display the error locally here
				<button class="bg-gray-300 general" (click)="handleError()">This will clear the error.</button>
			</div>
		</div>
	`,
})
export class NotFoundComponent {
	router = inject(Router);

	handleError() {
		this.router.navigate(['/anime']);
	}
}
