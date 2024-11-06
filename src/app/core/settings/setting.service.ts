import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { RecipeModel } from '@core/models/recipe.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private readonly apiUrl = environment.api

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.cookieService.get('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getRecipeById(id: number): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  createRecipe(recipe: RecipeModel): Observable<RecipeModel> {
    console.log(recipe)
    const token = this.cookieService.get('token');
    return this.http.post<RecipeModel>(`${this.apiUrl}/recipes/add?auth=${token}`, recipe)
  }

  editRecipe(recipe: RecipeModel, id: string): Observable<RecipeModel> {
    console.log(id)
    const token = this.cookieService.get('token');
    return this.http.put<RecipeModel>(`${this.apiUrl}/recipes/edit/${id}?auth=${token}`, recipe) 
  }

  deleteRecipe(id: string): Observable<RecipeModel> {
    const token = this.cookieService.get('token');
    return this.http.delete<RecipeModel>(`${this.apiUrl}/recipes/delete/${id}?auth=${token}`)
  }
}