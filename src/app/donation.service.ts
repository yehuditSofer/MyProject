import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { 
  }
  private serviceUrl  = environment.urlService +'bank';
  service(MyController: string){
    return this.http.get(this.serviceUrl + MyController);
  }
}

