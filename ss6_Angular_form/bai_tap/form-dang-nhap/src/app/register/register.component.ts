import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "./country";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  countryList = new Array();


  getCountryList() {
    return [
      this.countryList.push(new Country(1, 'VN')),
      this.countryList.push(new Country(2, 'America')),
      this.countryList.push(new Country(3, 'England'))
    ];
  }

  constructor() {

    this.getCountryList();
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      country: new FormControl(),
      age: new FormControl("", Validators.min(18)),
      gender: new FormControl("", Validators.required),
      phone: new FormControl("", [Validators.pattern('^\\+84\\d{9,10}$'), Validators.required]),
      pwPassword: new FormGroup({
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
      },this.onClick)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

  }



  private onClick(abstractControl:AbstractControl):any {
    const a = abstractControl.value.password;
    const b = abstractControl.value.confirmPassword;
    return a === b ? null :{abc : true}

  }

}
