import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SearchIoPipe implements PipeTransform {
    persons: any;
    transform(value: any, searchTerm: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchIoPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SearchIoPipe, "search", true>;
}
