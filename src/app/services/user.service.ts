import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL= 'https://fakestoreapi.com/users';
  constructor(private http: HttpClient) { }

  //Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL)
      .pipe(
        map(users => users.map(this.transformUser))
      );
  }

  private transformUser(user: any): any {
    return {
      id: user.id,
      name: `${user.name.firstname} ${user.name.lastname}`,
      address: `${user.address.city}, ${user.address.street}`
    }
  }
}