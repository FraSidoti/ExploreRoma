import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LuoghiService {
  luoghi = [
    { id: 1, nome: 'Colosseo', zona: 'Centro Storico', descrizione: 'Antico anfiteatro romano.' },
    { id: 2, nome: 'Piazza Navona', zona: 'Centro Storico', descrizione: 'Famosa piazza barocca.' },
    { id: 3, nome: 'Villa Borghese', zona: 'Pinciano', descrizione: 'Grande parco nel cuore di Roma.' },
  ];

  getLuoghi() {
    return this.luoghi;
  }

  getLuogoById(id: number) {
    return this.luoghi.find(l => l.id === id);
  }
}
