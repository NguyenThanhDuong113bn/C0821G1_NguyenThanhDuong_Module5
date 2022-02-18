import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((praMap: ParamMap) => {
      this.id = +praMap.get('id');
      this.getCustomer(this.id);
    });
  }


  ngOnInit(): void {
  }

  delete(id: number) {
    const customer = this.customerForm.value;
    this.customerService.delete(id).subscribe(value => {
      }
      , error => {
      },
      () => {
        this.router.navigate(['/customer/list']);
      });
  }

  private getCustomer(id: number) {
    this.customerService.findById(id).subscribe(value => {
      this.customerForm = new FormGroup({
        id: new FormControl(value.id),
        name: new FormControl(value.name),
        email: new FormControl(value.email),
        address: new FormControl(value.address),
        phone: new FormControl(value.phone),
        idCard: new FormControl(value.idCard),
        gender: new FormControl(value.gender),
        birthDay: new FormControl(value.birthDay),
        codeNumber: new FormControl(value.codeNumber),
        customerType: new FormControl(value.customerType)
      });
    });
  }

  edit(id: number) {
    const customer = this.customerForm.value;
    id = this.id;
    this.customerService.update(id, customer).subscribe(value => {
      }
      , error => {
      },
      () => {
        this.router.navigate(['/customer/list']);
      });

  }
}


