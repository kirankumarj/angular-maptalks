import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-overlay-update-org',
  templateUrl: './overlay-update-org.component.html',
  styleUrls: ['./overlay-update-org.component.css']
})
export class OverlayUpdateOrgComponent implements OnInit {
  orgDetails;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit() {
    console.log(this.data);
    if (this.data ) {
      this.orgDetails = this.data.updateData;
      this.orgDetails.id = this.data.actualData.id;
      this.orgDetails.name = this.data.actualData.name;
      this.orgDetails.type = this.data.actualData.type;
      this.orgDetails.info = this.data.actualData.info;
      this.orgDetails.latitude = this.data.actualData.latitude;
      this.orgDetails.longitude = this.data.actualData.longitude;
      this.orgDetails.address = this.data.actualData.address;
    }
  }

}
