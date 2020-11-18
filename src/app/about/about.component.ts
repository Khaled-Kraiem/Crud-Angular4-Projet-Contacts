import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos={
    name:"hedi",
    email:"hedi@yahoo.fr"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
