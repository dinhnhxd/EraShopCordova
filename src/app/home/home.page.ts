import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private inAppBrowser:InAppBrowser
  ) {}

  ngOnInit() {
    this.openBrowser()
  }
  async openBrowser() {
    console.log('show browser')
    this.inAppBrowser.create('http://erashop.vn/', '_self', {
      location: 'no', hideurlbar: 'yes',
      closebuttoncaption: 'Đóng',
      hidenavigationbuttons: 'yes',
    })
  }

}
