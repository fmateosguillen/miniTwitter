import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/dto/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser: Register;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.newUser = new Register("", "", "");
  }
  
  register(){
    this.authService.register(this.newUser).subscribe(respuesta =>{
      console.log(this.newUser);
      this.router.navigate(["/"]);
    });
  }

  goLogin(){
    this.router.navigate(["/"]);
  }
}
