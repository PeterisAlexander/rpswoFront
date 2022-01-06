import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserEntity } from '../entities/user.entity';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  getAll(s?: string): Observable<UserEntity[]> {
    console.log(
      environment.backendUri + 'user' + (s == undefined ? '' : '?search=' + s)
    );

    return this.http.get<UserEntity[]>(
      environment.backendUri + 'user' + (s == undefined ? '' : '?search=' + s) , this.config.httpOptions
    );
  }

  delete(id?: number): Observable<any> {
    return this.http.delete(environment.backendUri + 'user/' + id, this.config.httpOptions);
  }

  getById(id?: number): Observable<UserEntity> {
    return this.http.get<UserEntity>(environment.backendUri + 'user/' + id, this.config.httpOptions);
  }

  add(u: UserEntity): Observable<any> {
    return this.http.post(environment.backendUri + 'user', u, this.config.httpOptions);
  }

  update(u: UserEntity): Observable<any> {
    return this.http.put(environment.backendUri + 'user/' + u.id, u, this.config.httpOptions);
  }
}
