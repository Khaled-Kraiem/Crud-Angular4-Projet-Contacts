import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsService } from 'src/services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts:any;
  constructor(public http: HttpClient, public contactservice:ContactsService) { }

  ngOnInit(): void {
    // console.log("Initalisation ....")
    // this.http.get("http://localhost:8080/contacts")/ soit avec méthode soit par l'injection de service
    this.contactservice.getContacts()  
    .subscribe(data=> this.pageContacts=data);
    }

  }
