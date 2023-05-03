import { ChangeDetectorRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterContext {
	public get $implicit() {
		return this.hideAfter;
	}
	public hideAfter = 0;
	public counter = 0;
}

@Directive({
	selector: '[hideAfter]',
	standalone: true,
})
export class HideAfterDirective implements OnInit {
	@Input('hideAfter') delay!: number;
	private context = new HideAfterContext();

	constructor(
		private viewContainerRef: ViewContainerRef,
		private template: TemplateRef<HideAfterContext>,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.viewContainerRef.createEmbeddedView(this.template, this.context);
		this.context.counter = this.delay;

		const intervalId = setInterval(() => {
			this.context.counter--;

			console.log(this.context.counter);
			this.cd.detectChanges();

			if (this.context.counter === 0) {
				console.log('stop');
				// hide element
				this.viewContainerRef.clear();
				clearInterval(intervalId);
			}
		}, 1000);
	}

	static ngTemplateContextGuard(dir: HideAfterDirective, ctx: unknown): ctx is HideAfterContext {
		return true;
	}
}
