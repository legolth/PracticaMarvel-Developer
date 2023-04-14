import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-list-marvel',
  templateUrl: './modal-list-marvel.component.html',
  styleUrls: ['./modal-list-marvel.component.scss']
})
export class ModalListMarvelComponent {
  //referencia para abrir y cerrar el modal 
  constructor(public dialogRef: MatDialogRef<ModalListMarvelComponent>) {}

}
