import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import * as Toast from "nativescript-toast";
import { Dialogs } from '@nativescript/core';

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  doLater(fn){setTimeout(fn, 1000);}

  ngOnInit(): void {
    /*
    this.doLater(() => 
      Dialogs.action("Mensaje", "Cancelar", ["Opcion1", "Opcion2"]).then((result) => {
        console.log("resultado: " + result);
        if(result === "Opcion1"){
          this.doLater(() => Dialogs.alert({
            title : "Titulo 1 ",
            message : "Mensaje 1",
            okButtonText : "btn 1"
          }).then(() => console.log("Cerrado 1!")));
        }
        else if( result === "Opcion2"){
          this.doLater(() => Dialogs.alert({
            title : "Titulo 2 ",
            message : "Mensaje 2",
            okButtonText : "btn 2"
          }).then(() => console.log("Cerrado 2!")));
        }
      })
    );
    */
    const toast = Toast.makeText("Hello world", "short");
    this.doLater(() => toast.show());
  

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
