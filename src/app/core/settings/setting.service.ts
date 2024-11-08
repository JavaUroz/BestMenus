import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { RecipeModel } from '@core/models/recipe.model';
import { environment } from 'src/environments/environment.prod';
import { SkipLoading } from '@core/interceptors/loading.interceptor';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private readonly apiUrl = environment.api

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getRecipes(): Observable<RecipeModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<RecipeModel[]>(`${this.apiUrl}/recipes/get?auth=${token}`, {
      context: new HttpContext().set(SkipLoading, true),
    });
  }
  
  createRecipe(recipe: RecipeModel): Observable<RecipeModel> {
    const token = this.cookieService.get('token');
    return this.http.post<RecipeModel>(`${this.apiUrl}/recipes/add?auth=${token}`, recipe, {
      context: new HttpContext().set(SkipLoading, true),
    });
  }
  
  editRecipe(recipe: RecipeModel, id: string): Observable<RecipeModel> {
    const token = this.cookieService.get('token');
    return this.http.put<RecipeModel>(`${this.apiUrl}/recipes/edit/${id}?auth=${token}`, recipe, {
      context: new HttpContext().set(SkipLoading, true),
    });
  }
  
  deleteRecipe(id: string): Observable<RecipeModel> {
    const token = this.cookieService.get('token');
    return this.http.delete<RecipeModel>(`${this.apiUrl}/recipes/delete/${id}?auth=${token}`, {
      context: new HttpContext().set(SkipLoading, true),
    });
  }
}