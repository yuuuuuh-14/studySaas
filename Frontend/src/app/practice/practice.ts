import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css'
})
export class Practice {
  backendStatus: string = 'Offline';
  isLoading: boolean = false;
  healthData: any = null;

  constructor(private http: HttpClient) { }

  checkHealth() {
    this.isLoading = true;
    this.backendStatus = 'Checking...';
    this.healthData = null;

    // Use the api base URL from environment
    this.http.get(`${environment.apiUrl}/health`).subscribe({
      next: (response) => {
        this.backendStatus = 'Online';
        this.healthData = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.backendStatus = 'Offline';
        this.isLoading = false;
        console.error('API Error:', err);
      }
    });
  }
}
