import { Injectable } from '@angular/core';
// @ts-ignore
import {IWord} from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [{
    word: 'name',
    mean: 'tên'
  },
    {
      word: 'dictionary',
      mean: 'từ điển'
    },
    {
      word: 'phone',
      mean: 'điện thoại'
    },
    {
      word: 'computer',
      mean: 'máy tính'
    }
  ];
  constructor() { }

  dictionary: IWord;
  getAll() {
    return this.dictionaries;
  }
}
