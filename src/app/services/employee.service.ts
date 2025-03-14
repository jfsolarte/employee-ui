import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);
  private toastr = inject(ToastrService);

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showError(error);
        return throwError(() => error);
      })
    );
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showError(error);
        return throwError(() => error);
      })
    );
  }

  private showError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    this.toastr.error('Ocurrió un error al obtener los datos', 'Error');
  }


}
