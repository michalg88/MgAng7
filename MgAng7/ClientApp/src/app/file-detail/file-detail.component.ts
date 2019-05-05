import { Component, OnInit, Input } from '@angular/core';
import { File } from '../entities/file';

@Component({
    selector: 'app-file-detail',
    templateUrl: './file-detail.component.html',
    styleUrls: ['./file-detail.component.css']
})
export class FileDetailComponent implements OnInit {

    @Input() file: File;

    constructor() { }

    ngOnInit() {
        this.file = {
            id: 41,
            fileName: 'test.jpg',
            description: 'desc',
            title: 'obrazek',
            type: 'jpg'
        };
    }

}
