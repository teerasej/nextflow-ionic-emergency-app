import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactArray = [
    { name:'แจ้งเหตุด่วนเหตุร้าย', phone:'191' }
    ,{ name:'แจ้งเหตุเพลิงไหม้', phone:'199' }
    ,{ name:'หน่วยแพทย์กู้ชีพ กทม.', phone:'1554' }
    ,{ name:'ร่วมด้วยช่วยกัน', phone:'1677' }
    ,{ name:'จส. 100', phone:'1137' }
  ]


  constructor(public navCtrl: NavController) {

  }

  call(contact){
    // alert(contact.name + ' ' + contact.phone);
    window.open('tel:' + contact.phone);
  }

}
