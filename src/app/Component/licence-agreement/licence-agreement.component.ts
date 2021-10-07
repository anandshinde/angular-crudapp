import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shaired-service/data-service.service';

@Component({
  selector: 'app-licence-agreement',
  templateUrl: './licence-agreement.component.html',
  styleUrls: ['./licence-agreement.component.css']
})
export class LicenceAgreementComponent implements OnInit {
  fakedata: any=[];

  constructor(private fake:DataServiceService) { }

  ngOnInit() {
    this.fake.fun().subscribe(data => {
      this.fakedata = data
    console.log(this.fakedata);
  })
  }
}
