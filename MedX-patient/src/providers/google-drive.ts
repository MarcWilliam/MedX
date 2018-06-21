import { Injectable } from '@angular/core';

declare var cordova;

/*
  Generated class for the GoogleDriveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleDriveProvider {

  private googleDrive;

  constructor() {
    this.googleDrive = cordova.plugins.googleDrive;
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
