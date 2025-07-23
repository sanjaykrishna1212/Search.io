# Search-io

A lightweight Angular pipe for searching values in an array of objects. Compatible with Angular 18+.

## Features
- Simple, declarative search in Angular templates
- Case-insensitive matching
- Works with any array of objects
- No external dependencies

## Installation

```sh
npm install search-io
```

## Compatibility
- Peer dependencies: @angular/core, @angular/common

## Usage

### 1. Import the Pipe

If using standalone components (Angular 14+):

```typescript
import { SearchIoPipe } from 'search-io';

@Component({
  // ...
  standalone: true,
  imports: [SearchIoPipe],
})
```

Or, if using NgModule:

```typescript
import { SearchIoPipe } from 'search-io';

@NgModule({
  declarations: [SearchIoPipe],
  exports: [SearchIoPipe],
})
export class SharedModule {}
```

### 2. Use in Template

```html
<input [(ngModel)]="searchTerm" placeholder="Search...">
<ul>
  <li *ngFor="let person of people | search:searchTerm">
    {{ person.name }} ({{ person.email }})
  </li>
</ul>
```

### 3. Example Component

```typescript
@Component({
  selector: 'app-example',
  template: `
    <input [(ngModel)]="searchTerm" placeholder="Search...">
    <ul>
      <li *ngFor="let person of people | search:searchTerm">
        {{ person.name }} ({{ person.email }})
      </li>
    </ul>
  `,
  standalone: true,
  imports: [SearchIoPipe, FormsModule],
})
export class ExampleComponent {
  searchTerm = '';
  people = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
  ];
}
```

## API

### Pipe: `search`

**Usage:**
```html
*ngFor="let item of items | search:searchTerm"
```

- `items`: Array of objects to search
- `searchTerm`: String to match (case-insensitive, matches any property value exactly)

**Returns:**
- Filtered array of objects where at least one property matches the search term (case-insensitive, exact match)

## License

MIT
  

