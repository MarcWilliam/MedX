import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MedXProvider } from '../../providers/medx';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  //https://api.qrserver.com/v1/create-qr-code/?data=0x627306090abaB3A6e1400e9345bC60c78a8BEf57&size=220x220&margin=0
  user = {
    name: "Dr. John Smith",
    telecom: {
      phone: "123 456 7890",
      email: "john.smith@amail.com"
    },
    address: "",
    gender: "",
    birthDate: "",
    photo: "https://www.happy.ae/Frontend-Assembly/Telerik.Sitefinity.Frontend.Navigation/assets/dist/images/happiness_logo1.png?package=Bootstrap",
    qualification: {
      title: "",
      issuer: "",
      period: {
        from: "",
        to: ""
      },
    },
    communication: {
      language: ""
    },

    /**organization additional data*/
    type: "",
    services: "",
    /**organization additional data*/

    /**Not covered Data Yet*/
    backgroundImg: "https://www.happy.ae/images/default-source/home/why-image.jpg?Status=Temp&sfvrsn=2",
    country: "Dubai",
    website: "https://www.happy.ae",
    publicKey: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
    specialization: "Cardiologist",
    PCL: "Dubai International Hospital"
    /**Not covered Data Yet*/
  };

  /*
  {
  
    "resourceType": "Practitioner",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    "identifier": "0x627306090abaB3A6e1400e9345bC60c78a8BEf57", // A identifier for the person as this agent
    "active": true, // Whether this practitioner's record is in active use
    "name": "John Smith", // The name(s) associated with the practitioner
    "telecom": "0123456789", // A contact detail for the practitioner (that apply to all roles)
    "address": [{
      "resourceType": "Address",
      "use": "<code>", // home | work | temp | old - purpose of this address
      "text": "<string>", // Text representation of the address
      "city": "<string>", // Name of city, town etc.
      "district": "<string>", // District name (aka county)
      "state": "<string>", // Sub-unit of country (abbreviations ok)
      "postalCode": "<string>", // Postal code for area
      "country": "<string>", // Country (e.g. can be ISO 3166 2 or 3 letter code)
    }], // Address(es) of the practitioner that are not role specific (typically home address)
    "gender": "male", // male | female | other | unknown
    "birthDate": new Date(), // The date  on which the practitioner was born
    "photo": ["https://www.happy.ae/Frontend-Assembly/Telerik.Sitefinity.Frontend.Navigation/assets/dist/images/happiness_logo1.png?package=Bootstrap"], // Image of the person
    "qualification": ["Cardiologist"],
    "communication": ["English", "French", "Arabic"] // A language the practitioner is able to use in patient communication
  
  }
   */

  constructor(public navCtrl: NavController, private medXProvider: MedXProvider) { }

  getCredentials() {
    console.log("getCredentials method"); // fill u-port here
  }

  requestCredentials() {
    console.log("requestCredentials method"); //fill u-port here
  }

  async ionViewWillLoad() {
    let medX = await this.medXProvider.getInstance();
    let keystore = await medX.KeystoreFactory.getKeyStore();
    let profile = (await keystore.getAttribs()).profile;
    if (profile) {
      Object.assign(this.user, profile);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
}
