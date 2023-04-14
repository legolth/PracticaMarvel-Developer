import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { InfoMarvel} from '../model/infoMavel.model';
import {ServiciosMarvelService} from '../servicios/servicios-marvel.service';


const ELEMENT_DATA: InfoMarvel[]= [];

@Component({
  selector: 'app-data-table-marvel',
  templateUrl:'./data-table-marvel.component.html',
  styleUrls: ['./data-table-marvel.component.scss']
})
export class DataTableMarvelComponent implements OnInit, AfterViewInit {

  // nombre de las columnas a las que se hace referencia del modelo 
  displayedColumns: string[] = ['id','digitalId','title','issueNumber','variantDescription','modified','isbn','upc','ean','issn','pageCount','resourceURI'];
  dataSource =new MatTableDataSource<InfoMarvel>([]);  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private _servicioMarvel:ServiciosMarvelService){}

  ngOnInit(): void {
    this.recoverInfo();
  }

  //metodo responsibo para el funcionamiento del paginador 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //metodo que pide la informacion al momento de cargar la tabla 
  recoverInfo(){
    this._servicioMarvel.getAllPersonajes().subscribe(
      response =>{
       console.log(response); 
       if(response.count > 0){
        this.dataSource.data = response;
       }
       else{
        console.log("informacion no encintrada");
       }
      })
  }


}
