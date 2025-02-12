import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorteningDescription'
})
export class ShorteningDescriptionPipe implements PipeTransform {

  transform(description: string, threshold: number): string {
    return description.length > threshold ?  description.slice(0,100) : description;
  }

}
