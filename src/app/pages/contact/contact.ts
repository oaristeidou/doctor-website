import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  private map: any;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.5200, 13.4050], // Berlin coordinates as placeholder
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([52.5200, 13.4050]);
    marker.addTo(this.map);
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      alert('Message Sent! (Console log)');
      this.contactForm.reset();
    }
  }
}
