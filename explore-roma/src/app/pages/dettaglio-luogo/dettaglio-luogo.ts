import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LuoghiService } from '../../services/luoghi-service';

@Component({
  selector: 'app-dettaglio-luogo',
  imports: [RouterLink],
  templateUrl: './dettaglio-luogo.html',
  styleUrl: './dettaglio-luogo.css'
})
export class DettaglioLuogo {
  luogo: any;

  constructor(private route: ActivatedRoute, private router: Router, private luoghiService: LuoghiService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.luogo = this.luoghiService.getLuogoById(id);

    if (!this.luogo) {
      this.router.navigate(['/luoghi']);
    }
  }
}
