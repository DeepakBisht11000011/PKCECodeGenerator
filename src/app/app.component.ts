import { Component, Input, OnInit } from '@angular/core';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  codeChallenge = '';
  codeVerifier = '';

  ngOnInit(): void {
  }

  generateCodeChallenge(): void {
    if (this.codeVerifier === '') {
      this.codeVerifier = this.generateId(48);
    }
    this.codeChallenge = Base64.stringify(sha256(this.codeVerifier));
  }

  clearData(): void {
    this.codeChallenge = '';
    this.codeVerifier = '';
  }

  generateId(length): string {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }
}
