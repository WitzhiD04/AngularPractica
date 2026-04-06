import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoticon',
  standalone: true,
})
export class EmoticonPipe implements PipeTransform {
  transform(value: string): string {
    value = value + "🔥";
    return value;
  }
}
