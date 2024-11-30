import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { emp } from 'src/Models/Employee';
import {HttpClient} from '@angular/common/http'
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({

  selector: 'app-root',
   
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UserManagement';
http = inject(HttpClient)


employeesss$ = this.GetAllEmployee();

  private GetAllEmployee() : Observable<emp[]>
  {
  return this.http.get<emp[]>("https://localhost:7227/api/Employee");

  }
}
