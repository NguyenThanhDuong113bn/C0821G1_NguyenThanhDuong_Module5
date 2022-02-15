import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {DictionaryService} from '../../../service/dictionary.service';
// @ts-ignore
import {IWord} from '../../../model/i-word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dictionaries: IWord[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionaries = this.dictionaryService.getAll();
  }
}
