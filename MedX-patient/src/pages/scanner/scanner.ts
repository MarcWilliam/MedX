import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  qrScannerStatus: QRScannerStatus;
  scanSub: any;
  light: boolean = false;
  frontCamera: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public qrScanner: QRScanner,
  ) {
    this.qrScanner.getStatus().then(status => this.qrScannerStatus = status);
  }


  prepareScanner() {
    return new Promise<QRScannerStatus>((resolve, reject) => {
      // Optionally request the permission early
      this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
          this.qrScannerStatus = status;
          resolve(this.qrScannerStatus);
        })
        .catch((err: any) => { console.log('QR SCANNER Error: ', err); reject(err); });
    });
  }

  setupScanner() {
    if (this.qrScannerStatus.authorized) {
      // camera permission was granted

      // Start scanning
      this.scanSub = this.qrScanner.scan().subscribe((content: string) => {
        // Wait for user to scan something, then the observable callback will be called
        this.dismiss(content);
      });
    }
  }

  toggleCamera() {
    (this.frontCamera = !this.frontCamera) ? this.qrScanner.useFrontCamera() : this.qrScanner.useBackCamera();
  }

  toggleLight() {
    if (this.qrScannerStatus.canEnableLight) {
      (this.light = !this.light) ? this.qrScanner.enableLight() : this.qrScanner.disableLight();
    }
  }

  dismiss(content?: string) {
    this.viewCtrl.dismiss(content);
  }

  async ionViewWillEnter() {
    try {
      this.qrScannerStatus = await this.prepareScanner();
      this.setupScanner();
      window.document.querySelector('ion-app > .app-root').classList.add('hide');
      this.qrScanner.show().then(status => this.qrScannerStatus = status);
    }
    catch (err) {
      this.qrScannerStatus = await this.qrScanner.getStatus();
      if (this.qrScannerStatus.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
        if (this.qrScannerStatus.canOpenSettings) {
          if (confirm("Would you like to enable QR code scanning? You can allow camera access in your permission settings.")) {
            this.qrScanner.openSettings();
          }
        }
      }
      this.dismiss();
    }

  }

  ionViewWillLeave() {
    window.document.querySelector('ion-app > .app-root').classList.remove('hide');
    // Cleaing up 
    this.qrScanner.pausePreview();
    this.qrScanner.hide();
    // Stop scanning
    if (this.scanSub !== undefined) {
      this.scanSub.unsubscribe();
    }
    this.qrScanner.destroy();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

}
