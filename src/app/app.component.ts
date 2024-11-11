import { Component } from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading: Boolean = false
  title = 'BestMenus';

  constructor(private loadingService: LoadingService) {
    this.loadingService.loading$.subscribe(isLoading => this.isLoading = isLoading)
  }
}
