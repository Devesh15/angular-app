import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'employee',
  templateUrl: './contact.component.html',
  providers: [ContactService],
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	
	contacts: any[] = null;
	constructor(private conService: ContactService){
		
	}
	ngOnInit(){
		this.conService.getContacts().subscribe((conData) => this.contacts = conData);
	}
	
	submitted: boolean = false;
	edit : boolean = false;
	selectedContact: string = "";
	
	setSelectedContact = function(contact){
		this.selectedContact = contact;
	} 
	submit = function(contact){
		this.edit = false;
		this.submitted = false;
	}
	
	myFunction() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("Search");
		filter = input.value.toUpperCase();
		ul = document.getElementById("Menu");
		li = ul.getElementsByTagName("li");

		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}
	}
}
