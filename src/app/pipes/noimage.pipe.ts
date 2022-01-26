import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any): String {
    if (!images) {
      return "date.picture";
    }
    if (images) {
      return images;
    } else {
      return "date.picture";
    }
  }

}
