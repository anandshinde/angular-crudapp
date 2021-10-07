import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userForm: FormGroup;
  name;
  phone;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.minLength(4)]),
      phone : new FormControl('',[Validators.required,Validators.minLength(10)])
    })
  }
  fun(data:any) {
    console.log(data);
  }

}
