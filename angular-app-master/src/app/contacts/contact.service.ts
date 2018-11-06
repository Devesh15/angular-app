import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService{
	constructor(private http: Http){
		
	}
	getContacts() : Observable<any[]>{
		// return this.http.get('http://localhost:4200/assets/employee.json')
		return this.http.get('./assets/contacts.json')
		.pipe(map((resp: Response) => resp.json()));
	}
}
