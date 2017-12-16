import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { storage ,initializeApp } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Firebas_Config } from '../../app/confic_firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  picture:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera,
    public toastCtrl: ToastController

  ) {
    initializeApp(Firebas_Config);    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.loadPhoto();
  }

  async loadPhoto(){
    let file =  storage().ref().child('images/image01.jpg');
    await file.getDownloadURL().then(url=>{
      this.picture = url;
      console.log('Url :',url);
      
    });
  }



  async takePhoto(){
    try {
      const options: CameraOptions = {
        quality:50,
        targetHeight:600,
        targetWidth:600,
        destinationType:this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
  
      const result = await this.camera.getPicture(options);
      //this.picture = atob(result);
      const image = 'data:image/jpeg;base64,'+result;
      const picture = storage().ref().child('images/image01.jpg');
      picture.putString(image,'data_url').then(data=>{
        this.presentToast('up :');
      }).catch(e=>{
        this.presentToast('e :'+e);
      });
      
      
      
    } catch (error) {
      console.log('Error',error);
      this.presentToast(error); 
      
    }
    this.loadPhoto();

  }

  presentToast(messages) {
    let toast = this.toastCtrl.create({
      message: messages,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
