import * as i0 from '@angular/core';
import { Pipe } from '@angular/core';

class SearchIoPipe {
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

/*
 * Public API Surface of search-io
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SearchIoPipe };
//# sourceMappingURL=search-io.mjs.map
