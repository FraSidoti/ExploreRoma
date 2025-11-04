import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-luogo',
  imports: [RouterLink],
  templateUrl: './card-luogo.html',
  styleUrl: './card-luogo.css'
})
export class CardLuogo {
  @Input() luogo: any;
}
