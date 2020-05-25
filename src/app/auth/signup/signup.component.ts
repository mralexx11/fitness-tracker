import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  constructor() { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 16);
    this.minDate = new Date(currentYear - 100, 0, 1);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
