// import { Component } from '@angular/core';
// import { SearchIoPipe } from './search-io.pipe';
// import { FormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'search-io',
//   standalone: true,
//   imports: [ SearchIoPipe, SearchIoComponent, FormsModule, NgFor ],
//   template: `
//    <div>
//       <input type="text" [(ngModel)]="value">
//         <table>
//           <thead>
//             <tr>
//               <th>S.no</th>
//               <th>Name</th>
//               <th>Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             @for(item of persons|search: value; track $index)
//               {
//                 <tr>
//                  <td>{{item.id}}</td>
//                  <td>{{item.name}}</td>
//                  <td>{{item.age}}</td>
//                 </tr>
//                }
//           </tbody>
//         </table>
//     </div>
//   `,
//   styles: ``
// })
// export class SearchIoComponent {
//   public value: string = "";

//   public persons: any[] = [
//     {
//       id: 1,
//       name: "sanjay",
//       age: 23,
//     },
//     {
//       id: 2,
//       name: "vaishnav",
//       age: 20,
//     },
//     {
//       id: 3,
//       name: "mathan",
//       age: 34,
//     },
//     {
//       id: 4,
//       name: "krish",
//       age: 15,
//     },
//     {
//       id: 5,
//       name: "harish",
//       age: 14,
//     },
//   ];
//   getName(e:any)
//   {
//     this.value = e.target.value
//     console.log(e.target.value);
//   }
// }
