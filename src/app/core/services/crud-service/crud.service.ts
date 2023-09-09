import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class CrudService {
  protected readonly _baseUrl: string=environment.baseUrl;

  constructor(protected _httpClient: HttpClient) {}

  public getAll(requestString: string): Observable<any[]> {
    return this._httpClient.get<any[]>(this._baseUrl+requestString);
  }

  public get(id: string,requestString: string): Observable<any> {
    return this._httpClient.get<any>(`${this._baseUrl+requestString}/${id}`);
  }

  public gett(data: any,requestString: string): Observable<any> {
    return this._httpClient.post<any>(this._baseUrl+requestString, data);
  }

  public add(data: any,requestString: string): Observable<any> {
    return this._httpClient.post<any>(this._baseUrl+requestString, data);
  }

  public update(data: any,requestString: string): Observable<any> {
    return this._httpClient.put<any>(this._baseUrl+requestString, data);
  }

  public delete(requestString: string,httpOption: any): Observable<any> {

    return this._httpClient.delete<any>(this._baseUrl+requestString,httpOption);
  }
}
