import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signUp = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

}
