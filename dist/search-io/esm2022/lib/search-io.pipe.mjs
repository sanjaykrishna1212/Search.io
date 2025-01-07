import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchIoPipe {
    constructor() {
        this.persons = [];
    }
    transform(value, searchTerm) {
        if (!value) {
            return;
        }
        this.persons = value;
        if (searchTerm) {
            this.persons = value.filter((person) => {
                return Object.values(person).some(val => String(val).toLowerCase() === searchTerm.toLowerCase());
            });
        }
        return this.persons;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SearchIoPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: SearchIoPipe, isStandalone: true, name: "search" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SearchIoPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'search',
                    standalone: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlvLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWFyY2gtaW8vc3JjL2xpYi9zZWFyY2gtaW8ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLFlBQVk7SUFKekI7UUFLUyxZQUFPLEdBQVEsRUFBRSxDQUFBO0tBZ0J6QjtJQWZDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsVUFBaUI7UUFFckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQUMsT0FBTTtRQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDcEIsSUFBSSxVQUFVLEVBQ2QsQ0FBQztZQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQ3pELENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzsrR0FmVSxZQUFZOzZHQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBSnhCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaElvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyBwZXJzb25zOiBhbnkgPSBbXVxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBzZWFyY2hUZXJtOnN0cmluZyk6IGFueVxyXG4gIHtcclxuICAgIGlmICghdmFsdWUpIHsgcmV0dXJuIH1cclxuICAgIHRoaXMucGVyc29ucyA9IHZhbHVlXHJcbiAgICBpZiAoc2VhcmNoVGVybSlcclxuICAgIHtcclxuICAgICAgdGhpcy5wZXJzb25zID0gdmFsdWUuZmlsdGVyKChwZXJzb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocGVyc29uKS5zb21lKHZhbCA9PlxyXG4gICAgICAgICAgICAgIFN0cmluZyh2YWwpLnRvTG93ZXJDYXNlKCkgPT09IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5wZXJzb25zO1xyXG4gIH1cclxuXHJcbn1cclxuIl19