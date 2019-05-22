import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InfoService } from '../../info.service';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-yelp',
  templateUrl: './yelp.component.html',
  styleUrls: ['./yelp.component.css']
})
export class YelpComponent implements OnInit {

  city = new FormControl('');
  state = new FormControl('');
  pricingInfo = new FormControl('');
  ratings = ['✴', '✴', '✴✴', '✴✴', '✴✴✴', '✴✴✴', '✴✴✴✴', '✴✴✴✴'];

  constructor(private infoS: InfoService, private fb: FormBuilder) { }

  infoForm: FormGroup;
  displayInfo: any;

  ngOnInit() {

    this.infoForm = this.fb.group(
      {
        city: new FormControl(),
        state: new FormControl(),
        pricingInfo: new FormControl()
      }
    )
  }

  onSubmit() {
    this.infoS.getInfo(this.infoForm.value.city, this.infoForm.value.state, this.infoForm.value.pricingInfo).subscribe(data => {
      this.displayInfo = data.businesses;
      // console.log(this.displayInfo);
      const displayResult = this.displayInfo[Math.floor(Math.random() * this.displayInfo.length)]


      if (displayResult.is_closed === false) {
        this.displayInfo = displayResult;
        console.log(this.displayInfo)
      } else (displayResult);

    });
  }

}
