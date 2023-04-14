import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalListMarvelComponent } from '../modal-list-marvel/modal-list-marvel.component';


@Component({
  selector: 'app-iniciador-marvel',
  templateUrl: './iniciador-marvel.component.html',
  styleUrls: ['./iniciador-marvel.component.scss']
})
export class IniciadorMarvelComponent {
  constructor(public dialog: MatDialog) {}

  // metodo para abrir y cerarel modal 
  openModal(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalListMarvelComponent, {
      width: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}


