import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor() {

  }


  like(liked: boolean) {
    return !liked;
  }
}
