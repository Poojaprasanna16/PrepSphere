import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private backendBaseUrl = environment.backendBaseUrl;

  constructor(private httpClient: HttpClient) { }

  userRegistration(requestBody: any): Observable<any>{
    return this.httpClient.post<any>(this.backendBaseUrl + '/user/registration', requestBody, {
      responseType: 'text' as 'json'
    });
  }

  userLogin(requestBody: any): Observable<any>{
    return this.httpClient.post<any>(this.backendBaseUrl + '/user/login', requestBody, {
      responseType: 'text' as 'json'
    });
  }

  getUserDetails(email: any): Observable<any>{
    return this.httpClient.get<any>(this.backendBaseUrl + `/user/details?email=${email}`)
  }

  updateUser(requestBody: any): Observable<any>{
    return this.httpClient.put<any>(this.backendBaseUrl + '/user/update', requestBody);
  }
}
