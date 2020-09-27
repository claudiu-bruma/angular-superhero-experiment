import { Component, OnInit,Inject } from '@angular/core'; 
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-superhero-details-dialog',
  templateUrl: './superhero-details-dialog.component.html',
  styleUrls: ['./superhero-details-dialog.component.css']
})
export class SuperheroDetailsDialogComponent implements OnInit {

 
  constructor(@Inject(MAT_DIALOG_DATA) public superHeroDetails: SuperheroDetails) {
    console.log(superHeroDetails);
  }

  ngOnInit(): void {
  }

}

export interface SuperheroDetails {
  id:number,
  name:string,
  fulname: string;
  occupation: string;
  affiliation : string;
  image : string;
  placeOfBirth : string;
  alignment : string;
}