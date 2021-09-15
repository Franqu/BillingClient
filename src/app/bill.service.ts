import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BillService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getBills(): Observable<Bill[]>{
        return this.http.get<Bill[]>(`${this.apiServerUrl}/api/v1/billing`)
    }

    public getBillsSortedByCallTime(): Observable<Bill[]>{
        return this.http.get<Bill[]>(`${this.apiServerUrl}/api/v1/billing/sort/callTime`)
    }

    public getBillsSortedByPhoneNumberCaller(): Observable<Bill[]>{
        return this.http.get<Bill[]>(`${this.apiServerUrl}/api/v1/billing/sort/phoneNumberCaller`)
    }

    public getBillsSortedByPhoneNumberReceiver(): Observable<Bill[]>{
        return this.http.get<Bill[]>(`${this.apiServerUrl}/api/v1/billing/sort/phoneNumberReceiver`)
    }

    public getBillsSortedById(): Observable<Bill[]>{
        return this.http.get<Bill[]>(`${this.apiServerUrl}/api/v1/billing/sort/id`)
    }

    public addBill(bill: Bill): Observable<Bill>{
        return this.http.post<Bill>(`${this.apiServerUrl}/api/v1/billing`, bill)
    }

    public updateBill(bill: Bill): Observable<Bill>{
        return this.http.put<Bill>(`${this.apiServerUrl}/api/v1/billing`, bill)
    }

}