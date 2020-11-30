import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDto } from 'src/app/dto/login.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginDto;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new LoginDto("", "");
  }

  doLogin(){
    this.authService.login(this.usuario).subscribe(respuesta => {
      localStorage.setItem('usuarioActual', JSON.stringify({'token': respuesta.token}))
      this.router.navigate(["/inicio"]);
    }); 
  }

  goRegister(){
    this.router.navigate(["/register"]);
  }
}
