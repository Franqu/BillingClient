import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bill } from './bill';
import { BillService } from './bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 public bills: Bill[];

 constructor(private billService: BillService) {}
  ngOnInit(){
    this.getBills();
  }

  public getBillsSortedByCallTime(): void {
    this.billService.getBillsSortedByCallTime().subscribe(
      (response: Bill[]) => {
        this.bills = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
   }

   public getBillsSortedById(): void {
    this.billService.getBillsSortedById().subscribe(
      (response: Bill[]) => {
        this.bills = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
   }

   public getBillsSortedByPhoneNumberCaller(): void {
    this.billService.getBillsSortedByPhoneNumberCaller().subscribe(
      (response: Bill[]) => {
        this.bills = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
   }

   public getBillsSortedByPhoneNumberReceiver(): void {
    this.billService.getBillsSortedByPhoneNumberReceiver().subscribe(
      (response: Bill[]) => {
        this.bills = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
     );
   }

 public getBills(): void {
   this.billService.getBills().subscribe(
     (response: Bill[]) => {
       this.bills = response;
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
    );
  }
  


}
