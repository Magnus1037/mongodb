import { Injectable } from '@angular/core';
import { Editora } from './editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Alta Books' },
  { codEditora: 2, nome: 'Pearson' },
  { codEditora: 3, nome: 'Addison Wesley' },
];

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  constructor() { }

  public getEditoras(): Array<Editora> {
    return editoras;
  }

  public getNomeEditora(codEditora: number): string {
    const editora = editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora?.nome || '';
  }
}
