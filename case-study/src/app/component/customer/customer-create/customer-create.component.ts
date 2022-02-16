import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  customerForm = new FormGroup({
    // id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    idCard: new FormControl(),
    gender: new FormControl(),
    birthDay: new FormControl(),
    codeNumber: new FormControl(),
    customerType: new FormControl()
  });

  ngOnInit(): void {
  }

  create() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(value => {
      }
      , error => {
      },
      () => {
        this.router.navigate(['/customer/list']);
      });
  }
}
