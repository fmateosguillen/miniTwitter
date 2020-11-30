import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class LoginDto {
    email:string;
    password:string;
    constructor(email:string, password:string){
        this.email = email;
        this.password = password; 
    }
}