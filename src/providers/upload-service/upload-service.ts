import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Upload } from '../../model/Upload';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireList} from 'angularfire2/database';
import { storage } from 'firebase';


@Injectable()
export class UploadServiceProvider {

  private basePath:string = '/uploads';
  //uploads: AngularFireList<Upload[]>;

  constructor(
    //public http: HttpClient,
    //public db: AngularFireDatabase
  ) {
    console.log('Hello UploadServiceProvider Provider');
  }

  pushUpload(upload: Upload) {
    /* let storageRef = storage().ref();
    let uploadTask = storageRef.child(this.basePath+'/'+upload.file.name).put(upload.file);
    this.saveFileData(upload);
    return uploadTask; */
  }

  /* private saveFileData(upload: Upload) {
    this.db.list(this.basePath+'/').push(upload.name);
  } */

}
