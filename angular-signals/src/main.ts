import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
	ActivatedRouteSnapshot,
	PreloadAllModules,
	Router,
	Routes,
	provideRouter,
	withPreloading,
} from '@angular/router';
import { RequestInterceptorService } from './app/api';
import { AppComponent } from './app/app.component';
import { LoginViewComponent } from './app/components/views/login-view.component';
import { MainComponent } from './app/components/views/main.component';
import { AuthService } from './app/services/auth.service';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: '',
				title: 'App Name - ',
				component: MainComponent,
				children: [
					{ path: '', redirectTo: '/anime', pathMatch: 'full' },
					{
						path: 'anime',
						title: 'Anime',
						loadChildren: () => import('./app/components/views/anime-view.component').then((m) => m.route),
						canActivate: [
							(route: ActivatedRouteSnapshot) => {
								const authenticationFacadeService = inject(AuthService);
								const router = inject(Router);

								if (!authenticationFacadeService.getUser()) {
									router.navigate(['/login']);
								}

								return true;
							},
						],
					},
					{
						path: 'anime/:id',
						title: 'Anime Details',
						loadChildren: () => import('./app/components/views/anime-details.component').then((m) => m.route),
					},
				],
			},
			{
				path: 'login',
				title: 'Login',
				loadChildren: () =>
					import('./app/components/views/login-view.component').then((m) => [
						{ path: '', component: LoginViewComponent },
					]),
			},
		],
	},
];

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(HttpClientModule),
		provideRouter(routes, withPreloading(PreloadAllModules)),
		provideAnimations(),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptorService,
			multi: true,
		},
	],
});
