import {Injectable} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private $gaService: GoogleAnalyticsService
  ) {
  }

}