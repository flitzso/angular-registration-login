import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  onSubmit(): void {
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    console.log('Usuário:', this.usuario);
    console.log('Senha:', this.senha);
    // Exemplo de como você pode fazer uma chamada a um serviço ou API para autenticação
  }
}
