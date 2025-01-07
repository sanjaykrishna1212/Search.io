import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchIoPipe implements PipeTransform {
  public persons: any = []
  transform(value: any, searchTerm:string): any
  {
    if (!value) { return }
    this.persons = value
    if (searchTerm)
    {
      this.persons = value.filter((person: any) => {
          return Object.values(person).some(val =>
              String(val).toLowerCase() === searchTerm.toLowerCase()
          );
      });
    }
    return this.persons;
  }

}
