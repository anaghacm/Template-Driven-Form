import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerDetails(details: any) {
    let name = details['name'].value;
    alert('Thank you ' + name + ' for registering your details!');
    window.location.reload();
  }

}
