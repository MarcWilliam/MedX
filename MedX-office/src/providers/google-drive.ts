import { Injectable } from '@angular/core';

declare let cordova;

/*
  Generated class for the GoogleDriveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleDriveProvider {

  private googleDrive = {
    signIn: function (isFileScoped, isAppFolderScoped, errorCallBack, SuccessCallBack) { console.error("cordova is not available") },
    createFile: function (title, contents, mimeType, inAppFolder, errorCallBack, SuccessCallBack) { console.error("cordova is not available") },
    retrieveFileContentsByTitle: function (title, inAppFolder, errorCallBack, SuccessCallBack) { console.error("cordova is not available") }
  };

  constructor() {
    if (typeof cordova !== 'undefined') {
      this.googleDrive = (cordova.plugins && cordova.plugins.googleDrive) ? cordova.plugins.googleDrive : this.googleDrive;
    }
  }

  signIn(isFileScoped, isAppFolderScoped): Promise<any> {
    return new Promise((resolve, reject) => {
      this.googleDrive.signIn(isFileScoped, isAppFolderScoped,
        function (response) {
          resolve(response);
        },
        function (error) {
          reject(error);
        })
    });
  }

  createFile(title, contents, mimeType, inAppFolder): Promise<any> {
    return new Promise((resolve, reject) => {
      this.googleDrive.createFile(title, contents, mimeType, inAppFolder,
        function (response) {
          resolve(response);
        },
        function (error) {
          reject(error);
        })
    });
  }

  retrieveFileContentsByTitle(title, inAppFolder): Promise<any> {
    return new Promise((resolve, reject) => {
      this.googleDrive.retrieveFileContentsByTitle(title, inAppFolder,
        function (response) {
          resolve(response);
        },
        function (error) {
          reject(error);
        })
    });
  }

}
