import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { SearchIoPipe } from 'search-io';
// import { SearchIoComponent } from "../../projects/search-io/src/lib/search-io.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, SearchIoPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Search.io';
  public value: string = "";

    public persons: any[] = [
      {
        id: 1,
        name: "john",
        age: 23,
      },
      {
        id: 2,
        name: "David",
        age: 20,
      },
      {
        id: 3,
        name: "Dwyane",
        age: 34,
      },
      {
        id: 4,
        name: "Nolan",
        age: 15,
      },
      {
        id: 5,
        name: "patrik",
        age: 14,
      },
    ];
}
