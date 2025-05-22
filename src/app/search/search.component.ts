import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core'
import { NoticiasService } from "../domain/noticias.service"

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  //providers: [NoticiasService]
})
export class SearchComponent implements OnInit {
  resultados: Array<string>;
  @ViewChild("layout") layout: ElementRef;

  constructor(private noticias: NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.noticias.agregar("hola!");
    this.noticias.agregar("hola2!");
    this.noticias.agregar("hola3!");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(x): void{
    console.dir(x);
  }

  buscarAhora(s: string){
    this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

    const layout = <View>this.layout.nativeElement;
    layout.animate({
      backgroundColor : new Color("blue"),
      duration: 3000,
      delay:1500
  }).then(() => layout.animate({
    backgroundColor: new Color("white"),
    duration: 3000,
    delay: 1500
  }));

  }
}