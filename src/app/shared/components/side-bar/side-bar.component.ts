import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  mainMenu: Array<any> = []
  customOptions: Array<any> = []

  constructor(private router: Router, private cookie: CookieService) { }

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
        icon: 'uil-favorite',
        router: ['/', 'favorites']
      }
    ]
  }

  logout(): void {
    this.cookie.delete('token')
    this.router.navigate(['/auth/login'])
  }
}
