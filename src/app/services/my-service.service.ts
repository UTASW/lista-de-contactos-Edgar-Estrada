import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  arrPersonas: Array<any> = [] as Array<JSON>; // Array que contiene any tipos
  blnNext: boolean;
  strMessage: string;
  Sexo: string;
  blnColorear: boolean;
  blnNotas: boolean;
  blnContacto: boolean;
  htmlNombre: string;
  htmlTelefono: string;
  htmlCorreo: string;
  htmlNotas: string;
  htmlFecha: Date;
  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  regexpTelefono = new RegExp(/^([0-9])*$/);


  constructor(public alertController: AlertController) { }



  addPerson(strNombre: string, strTelefono: string, strCorreo: string, strNotas: string, dteFecha: Date) {
    this.strMessage = '';
    this.blnNext = false;
    (strNombre) ? this.fnError() : this.fnError('Error: Llenar campo nombre');
    // tslint:disable-next-line: max-line-length
    (strCorreo) ? (this.regexp.test(strCorreo)) ? this.fnError(): this.fnError('Error: Correo no valido') : this.fnError('Error: Llenar campo correo');
    // tslint:disable-next-line: max-line-length
    (strTelefono) ? (this.regexpTelefono.test(strTelefono)) ? this.fnError() : this.fnError('Error: El telefono debe contener solo valores numericos') : this.fnError('Error: Llenar el campo telefono');

    if (!this.blnNext) {
      let strSexo: string;
      strSexo = this.Sexo;
      const jsnPersona: any = {
        strNombre,
        strTelefono,
        strCorreo,
        strNotas,
        strSexo,
        dteFecha : this.htmlFecha
      }
      this.arrPersonas.push(jsnPersona);
      this.presentAlert();
      console.log(jsnPersona);
      this.htmlNombre = '';
      this.htmlTelefono = '';
      this.htmlCorreo = '';
      this.htmlNotas = '';
    } else {
      this.presentAlertError();
    }
  }
  cambioSexo(event) {
    this.Sexo = event.target.value;
  }

  showNote(){
    this.blnNotas = !this.blnNotas;
  }
  fnError(msg?: string) {
    if (msg) {
      this.strMessage += '<br>' + msg + '<br>';
      this.blnNext = true;
    } else if (this.blnNext) {
      this.blnNext = true;
    } else {
      this.blnNext = false;
    }
  }
  contactos() {
    if (this.arrPersonas.length == 0) {
      this.blnContacto = false;
    } else {
      this.blnContacto = true;
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: '¡Contacto agregado exitosamente!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Nel',
      message: this.strMessage,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertConfirm(item, nombre) {
    const alert = await this.alertController.create({
      header: '¿Seguro que quiere eliminarlo?',
      message: '¿Desea eliminar a <br><strong> ' + nombre +'</strong> ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            let a = this.arrPersonas.indexOf(item);
            this.arrPersonas.splice(a,1);
            this.contactos();
          }
        }
      ]
    });
    await alert.present();
  }
}
