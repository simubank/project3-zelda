import { Component } from '@angular/core';
import { AccountProvider } from './../../providers/account/account';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionProvider } from './../../providers/transaction/transaction'
import { ENV } from '@app/env'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ENV.authorization
  })
};


/**
 * Generated class for the AnalyticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html',
})
export class AnalyticsPage {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Last Week' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'This Week' }
  ];

  public creditCardAaccounts = [];
  public bankAaccounts = [];
  accountId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_959e9c5d-0cfb-465d-bc32-b1ebf5530866';
  otherId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_8f5b52dc-ddff-4eee-87ee-47393d9d218e';
  public visaTransactions = []
  public otherTransactions = []
  public utility = []
  public micro = []
  public insurance = []

  public doughnutChartLabels: string[] = ['Microsavings', 'Utility', 'Insurance'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  constructor(private accountProvider: AccountProvider, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private transactionProvider: TransactionProvider) {
  }

  ngOnInit() {


    this.transactionProvider.getTransactionsForAccountId(this.accountId).subscribe(data => {
      this.visaTransactions = (data as any).result

    })
    this.transactionProvider.getTransactionsForAccountId(this.otherId).subscribe(data => {
      this.otherTransactions = (data as any).result
      this.otherTransactions.forEach(item => {
        console.log(JSON.stringify(item));
        if (item.categoryTags[0] === "Utility bill") {
          this.utility.push(item.currencyAmount)
        } else if (item.categoryTags[0] === 'Microsavings'){
          this.micro.push(item.currencyAmount)
        } else if (item.categoryTags[0] === 'Insurance'){
          this.insurance.push(item.currencyAmount)
        }
      });
    })
  }
  populateDonught() {
    for (var x = 0; x < this.otherTransactions.length; x++)
      this.otherTransactions.forEach(transaction => {
        console.log(transaction);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalyticsPage');
  }

}
