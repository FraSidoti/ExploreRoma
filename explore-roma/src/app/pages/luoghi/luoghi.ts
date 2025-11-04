import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LuoghiService } from '../../services/luoghi-service';
import { CardLuogo } from '../../components/card-luogo/card-luogo';

@Component({
  selector: 'app-luoghi',
  imports: [CommonModule, RouterLink, CardLuogo],
  templateUrl: './luoghi.html',
  styleUrl: './luoghi.css'
})
export class Luoghi {
  luoghi: any[] = [];

  constructor(private luoghiService: LuoghiService) {}

  ngOnInit() {
    this.luoghi = this.luoghiService.getLuoghi();
  }
}