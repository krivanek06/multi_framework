import { CommonModule } from '@angular/common';
import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-general-card',
	standalone: true,
	imports: [CommonModule, MatButtonModule, MatIconModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="p-4 bg-white rounded-lg shadow-md">
			<div class="flex items-center justify-between">
				<!-- header -->
				<h3 class="text-lg">{{ title }}</h3>
				<div class="flex items-center gap-2">
					<button *ngIf="showEditButton" mat-icon-button (click)="editClicked.emit()" type="button">
						<mat-icon class="w-8 h-8">edit</mat-icon>
					</button>

					<button
						*ngIf="showButtonDetails"
						type="button"
						class="text-white bg-blue-600 general"
						(click)="detailsClicked.emit()"
					>
						Details
					</button>

					<button
						*ngIf="showButtonDelete"
						type="button"
						class="text-white bg-red-600 general"
						(click)="deleteClicked.emit()"
					>
						Remove
					</button>
				</div>
			</div>

			<!-- divider -->
			<div class="w-full h-[2px] bg-slate-400 my-2"></div>

			<!-- body -->
			<div class="p-2">
				<ng-content></ng-content>
			</div>
		</div>
	`,
})
export class GeneralCardComponent
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterViewInit,
		AfterViewChecked,
		AfterContentInit,
		AfterContentChecked,
		OnDestroy
{
	@Output() deleteClicked = new EventEmitter<void>();
	@Output() detailsClicked = new EventEmitter<void>();
	@Output() editClicked = new EventEmitter<void>();

	@Input() title!: string;
	@Input() displayLifeCycleHooks: boolean = false;
	@Input() showButtonDetails: boolean = false;
	@Input() showButtonDelete: boolean = false;
	@Input() showEditButton: boolean = false;

	constructor() {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - constructor');
		}
	}

	ngOnInit(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngOnInit');
		}
	}
	ngOnChanges(changes: SimpleChanges): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngOnChanges', changes);
		}
	}
	ngDoCheck(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngDoCheck');
		}
	}
	ngAfterViewInit(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngAfterViewInit');
		}
	}
	ngAfterViewChecked(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngAfterViewChecked');
		}
	}
	ngAfterContentInit(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngAfterContentInit');
		}
	}
	ngAfterContentChecked(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngAfterContentChecked');
		}
	}
	ngOnDestroy(): void {
		if (this.displayLifeCycleHooks) {
			console.log('GeneralCardComponent - ngOnDestroy');
		}
	}
}
