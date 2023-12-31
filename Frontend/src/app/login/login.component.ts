import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  iserror: any = false;

  constructor(private api: ApiService, private router: Router) {}
  loginc(val: any) {
    var fd = new FormData();
    fd.append("email", val.email);
    fd.append("pass", val.pass);

    this.api.login(fd).subscribe((data: any) => {
      console.log(data);

      if (data.msg == "invalid login") {
        this.iserror = true;
      } else {
        localStorage.setItem("token", data.token);
        this.router.navigate(['dashboard']);
      }
    });
  }
}
