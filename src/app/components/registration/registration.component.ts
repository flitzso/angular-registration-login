import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  mostrarSenha: boolean = false;

  onSubmit(): void {
    // Adicione a lógica para lidar com o envio do formulário aqui
    console.log('Nome:', this.nome);
    console.log('Sobrenome:', this.sobrenome);
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
    console.log('Confirmar Senha:', this.confirmarSenha);
    console.log('Mostrar Senha:', this.mostrarSenha);
    // Você pode enviar os dados para um serviço ou executar a lógica de registro aqui
  }
}