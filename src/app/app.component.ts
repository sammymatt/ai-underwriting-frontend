import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { '[class.dark]': 'isDarkMode' }
})
export class AppComponent {
  isDarkMode = false;
  selectedFile: File | null = null;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  handleFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.selectedFile = file ?? null;
  }

  requestUpload(): void {
    if (!this.selectedFile) {
      alert('Choose a broker submission pack before uploading.');
      return;
    }

    // Placeholder for backend integration
    // This will call the API to store and process the submission pack
    alert(`Ready to send ${this.selectedFile.name} to the backend (not wired yet).`);
  }
}
