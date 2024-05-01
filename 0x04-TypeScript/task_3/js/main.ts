// Include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
export {};

export interface RowID {
    id: number;
}

export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}
