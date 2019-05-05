import { Component, OnInit } from '@angular/core';
import { File } from '../entities/file';

@Component({
    selector: 'app-files-list',
    templateUrl: './files-list.component.html',
    styleUrls: ['./files-list.component.css']
})

export class FilesListComponent implements OnInit {

    constructor() { }

    selectedFile: File;
    files: File[] = [{
        id: 41,
        fileName: 'test1.jpg',
        description: 'dedfsdsc',
        title: 'obrazek4656',
        type: 'jpg'
    },
    {
        id: 34,
        fileName: 'test2.jpg',
        description: 'des2342342c',
        title: 'obrazek123',
        type: 'jpg'
    },
    {
        id: 80,
        fileName: 'test3.jpg',
        description: 'desc123123',
        title: 'obrazek56556522',
        type: 'jpg'
    }];

    ngOnInit() {
        this.selectedFile = this.files[0];
    }

    onSelect(file: File): void {
        this.selectedFile = file;
    }

}
