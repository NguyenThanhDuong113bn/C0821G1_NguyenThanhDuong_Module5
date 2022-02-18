import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
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
    id = this.id;
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
}
