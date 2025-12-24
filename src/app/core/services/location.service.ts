import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IpApiResponse {
    country_code: string;
    country_name: string;
    // ... other fields if needed
}

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    private apiUrl = 'https://ipapi.co/json/';

    constructor(private http: HttpClient) { }

    getCountryCode(): Observable<string> {
        return this.http.get<IpApiResponse>(this.apiUrl).pipe(
            map(response => response.country_code)
        );
    }
}
