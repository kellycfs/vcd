import { FileUploadService } from './../../../services/file-upload.service';
import { FileUpload } from './../../../model/file-upload';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map,  } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  fileUploads: any[];

  constructor(private uploadService: FileUploadService) { }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

}
