import { animate, query, style, transition, trigger } from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
	transition('* => *', [
		query(':enter', [style({ opacity: 0 })], { optional: true }),
		query(
			':leave',
			[
				style({ opacity: 1, transform: 'translateY(0)' }),
				animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(60px)' })),
			],
			{
				optional: true,
			}
		),
		query(':enter', [style({ opacity: 0 }), animate('0.5s ease-out', style({ opacity: 1 }))], { optional: true }),
	]),
]);
