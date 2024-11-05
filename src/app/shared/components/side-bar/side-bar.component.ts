import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  mainMenu: Array<any> = []

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void{
    this.mainMenu = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: '/'
      },      
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Favorites',
        icon: 'uil-chart',
        router: ['/', 'favorites']
      }
    ]

   

  }

  goTo($event: any): void {    
    this.router.navigate(['/', 'favorites'], {
      queryParams:{
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
