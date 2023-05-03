import { Pipe, PipeTransform } from '@angular/core';
import { hardMathEquation } from '../models/api-anime-data.model';

@Pipe({
	name: 'hardMathEquation',
	standalone: true,
})
export class HardMathEquationPipe implements PipeTransform {
	transform(value?: number): number {
		if (!value) {
			return 0;
		}
		return hardMathEquation(value);
	}
}
