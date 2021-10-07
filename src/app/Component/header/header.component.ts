import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shaired-service/data-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userForm: FormGroup;
  res:any[];

  constructor(private http: DataServiceService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      place: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      contact: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      browse: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  sendData(res) {
    console.log(res);

  }

}
