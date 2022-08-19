import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '@paltrack/client/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightsApiService {
  constructor(private httpClient: HttpClient) {}

  // TODO: Req filtering & pagination
  getFlights(params: {
    icao24: string;
    begin: number;
    end: number;
  }): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(
      'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800'
    );
  }
}
