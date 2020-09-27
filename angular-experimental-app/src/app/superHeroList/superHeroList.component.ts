import { Component, OnInit,Inject } from '@angular/core';
import {SuperheroApiServiceService, SuperheroImage} from '../superhero-api-service.service'; 
import {SuperheroDetailsDialogComponent} from '../superhero-details-dialog/superhero-details-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-super-hero-list',
  templateUrl: './superHeroList.component.html',
  styleUrls: ['./superHeroList.component.css']
})

export class SuperHeroListComponent implements OnInit {
   
  superheroes :  Array<SuperheroImage>;
  superHeroIds : Array<number>;
  constructor(private apiService : SuperheroApiServiceService,public dialog: MatDialog) {
    this.superHeroIds = new Array<number>(); 
   }

  ngOnInit(): void {
    if (!this.superheroes)
    {
      this.superheroes  = new Array<SuperheroImage>();
    }
    
  }

  openDialog(id:number) {
    this.apiService.getSuperHeroDetails(id).subscribe(response=>{
      console.log(response);
       
      if( response && response.image  )
      { 
        var name = response.name; 
        var fulname = response.biography["full-name"];
        var occupation  = response.work.occupation;
        var affiliation = response.connections["group-affiliation"];
        var image = response.image.url; 
        var placeOfBirth = response.biography["place-of-birth"];
        var allignment = response.biography["alignment"];
 
    this.dialog.open(SuperheroDetailsDialogComponent, {
      data: {
        name: name, 
        fulname : fulname, 
        occupation : occupation, 
        affiliation :affiliation,
        image : image, 
        placeOfBirth :placeOfBirth, 
        allignment : allignment
      }
    });
  }
  });
}
  searchSuperHeros(superHeroSerachTerm : string) :void{ 
    if (superHeroSerachTerm.trim() == '')
    {
        return this.loadInitialSuperheroes();
    }
    this.apiService.getSuperHeroByName(superHeroSerachTerm).subscribe(response=>{
           console.log(response);
           this.superheroes=  new Array<SuperheroImage>();
           if( response && response.results)
           {
              response.results.forEach(element => {
                console.log("---------------------") 
                console.log(element);
                 this.superheroes.push ( {
                   id : element.id ,
                   response:"" ,
                   name:element.name ,
                   url: element.image.url
                                 
                  }
                  );
             });
           }
    });
  }

  loadSuperheroById(superHeroId : number) : void {
        this.apiService
      .getSuperHeroId(superHeroId)
      .subscribe(
        hero=>{
          console.log(hero);
          this.superheroes.push(hero);
        }
          );
  }

  loadInitialSuperheroes():void{
    this.superheroes=  new Array<SuperheroImage>();
    for (let i = 1; i < 20; i++) {
      this.loadSuperheroById(i);
    }
  }

}


 

 