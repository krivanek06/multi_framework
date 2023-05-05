import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AnimeDetailsContainerComponent } from '../anime/anime-details-container.component';

@Component({
	selector: 'app-anime-details',
	standalone: true,
	imports: [CommonModule, AnimeDetailsContainerComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: ` <app-anime-details-container></app-anime-details-container> `,
})
export class AnimeDetailsComponent {}

export const route: Routes = [
	{
		path: '',
		component: AnimeDetailsComponent,
	},
];
