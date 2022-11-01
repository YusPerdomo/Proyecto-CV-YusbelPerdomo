import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-aprograma',
  templateUrl: './logo-aprograma.component.html',
  styleUrls: ['./logo-aprograma.component.css']
})
export class LogoAProgramaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this.router.navigate(["/login"])
    
  }

}
