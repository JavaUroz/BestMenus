import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { RecipeModel } from '@core/models/recipe.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = environment.api
  private readonly token: string = ''
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
  }
  getRecipes$(): Observable<RecipeModel[]> {
    console.log(`${this.apiUrl}/recipes/get?auth=${this.token}`)
    return this.http.get<RecipeModel[]>(`${this.apiUrl}/recipes/get?auth=${this.token}`);
  }
  

}