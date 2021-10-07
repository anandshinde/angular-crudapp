import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { MustMatch } from 'src/app/_helpers/must-match.validators';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  registerForm : FormGroup;
  submitted: boolean;
  constructor(private fb:FormBuilder) { }  

  ngOnInit() {
    this.registerForm = this.fb.group({
    title:['',[Validators.required]],
    firstName: ['',[Validators.required, Validators.minLength(6)]],
    lastName : ['',[Validators.required,Validators.minLength(6)]],
    email: ['',[Validators.required ,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword:  ['',[Validators.required]],
    acceptTerms: ['',Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')

  })
  }
  onRegister(data){
    console.log(data);
  }
  onReset(value){
    console.log(value)
  }
  // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(data) {
        this.submitted = true;
        console.log(data)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}
  


