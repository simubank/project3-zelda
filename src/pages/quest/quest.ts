/* stuff that needs implementation
- firebase, and storage
- how the results of the quest will be used/passed (how gold will be added, exp, dmg ect)
- how the milestone quest will be updated/stored, (thinking that the firebase will help as a middle man for data)
- possibly more vendors to increase the amount of quests that can be generated
- have module installed for media quests but i havent implemented it
TESTING and intergration!!!
*/



import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { CustomerProvider } from './../../providers/customer/customer'
import { TransactionProvider } from './../../providers/transaction/transaction'
import 'rxjs/add/operator/filter'
/**
 * Generated class for the QuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quest',
  templateUrl: 'quest.html',
})
export class QuestPage {

// declarations
public isFinished: boolean;
public isSuccess: boolean = false; // auto set to false
private questText: string; // populated when quest is generated
public reward: number = 50; // gold and exp base is 50
public penalty: number = 25; // half of gold
// private date = new Date(); // grabs date of when we start
private startTime: number;
private prevTime: number;
private endTime: number;
private tier: number =0; // 0: daily 1:milestone
private type: number =0; // 0: budget money quest  1: transfer quest 2: save money quest 3: article
private ammountToMove: number = 0;
private toSave: number = 0;
private averageSpending: number = 0;
private ammountSaved: number = 0;
private budgetLeft:number;
private vendor: string;
public transaction:any = null;
public tmpDate:number;
private accountId: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private customerProvider: CustomerProvider, private transactionProvider: TransactionProvider) {
      // when page is called make sure these values are passed from the prev screen as paramiters
      this.tier = this.navParams.get('tier');

      /***** THIS IS FOR TESTING IF ONLY MILESTONES ARE BEING MADE THIS IS WHY */
      this.tier =0 ; // FOR TESTING
      this.accountId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_959e9c5d-0cfb-465d-bc32-b1ebf5530866';
      this.type =1;


//      this.type= this.navParams.get('type');
     // this.startTime = this.date.getTime(); // sets start time variable
    //  this.prevTime = this.startTime;
    //  this.endTime = this.startTime + 604800000;
      this.isFinished=false;
      var sum: number = 0;
      var i: number =0;
      var vendors: any;
      vendors = ['TIM HORTONS'];

      if (this.tier == 0){
          // daily
          this.reward = 50;
          if (this.type == 0){
            // budget
              // need more vendors can use list of placed the person shops
              this.vendor = vendors[0]; // replace with random if time permits or if more vendors are needed
              //this.vendor= vendors [Math.floor(Math.random()*5);]    // if more are added
            //  var arr: any;
            // arr = this.transactionProvider.getTransactionsForAccountId(this.accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
            //   console.log(arr);
            //   console.log("this run?");
              // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction was in the past week
              var transactionsWithVendor: any;

              // transactionsWithVendor = arr.filter.subscribe(this.transaction=>{
              //       this.tmpDate = new Date(this.transaction.date);
              //     if(this.transaction.description.includes(this.vendor) && (this.startTime - this.tmpDate.getTime()) <= 604800000) {
              //       //  return true;
              //   }
              //                     console.log(this.transaction);
              //                     console.log("this run?");
              // })
/*
              transactionsWithVendor = arr.filter.subscribe(this.val => {
                  console.log('this is it: ' + val);
              });
*/

/*
              for (this.transaction of transactionsWithVendor){
                  // for each
                  sum += transaction.currencyAmount;
                  i++;
              }
              this.averageSpending = (sum / i); // this is per week,
              this.toSave = (this.averageSpending * 0.75); // spend 25 % less can be made into an array of values for more random-ness
              this.budgetLeft = this.toSave;
              */

              this.budgetLeft = 100;

              this.questText = "Spend $"+this.budgetLeft+" or less at " + this.vendor+ " this week"; // implement a budget for the user to follow

          }else if(this.type == 1){

              //transfer quest



             this.toSave = Math.floor(Math.random()*7)+3; // save a random ammount between 2 and 10
              this.ammountToMove = (this.toSave * 7);

             // this.ammountToMove = 70;
             // this.toSave = 10;

              this.questText = " To save approxamatly $" +this.ammountToMove + " move $"+ this.toSave +" or more into savings each day this week";

          }else  if (this.type ==2 ){

              // save quest
        //      let sum = 0;

        //      var vendors: string[];
              vendors = ["TIM HORTONS"]; // need more vendors can use list of placed the person shops

              this.vendor = vendors[0];

              this.accountId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_959e9c5d-0cfb-465d-bc32-b1ebf5530866';

              /* THIS API PULL KINDA WORKS*/
              /* not quite there but its a start */
              let arr = this.transactionProvider.getTransactionsForAccountId(this.accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
                console.log(arr);
              // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction was in the past week
/*              let transactionsWithVendor = arr.filter(this.transaction => {
                  if(this.transaction.description.includes(this.vendor)) {
                      return true;
                  }
              });

              for (this.transaction of transactionsWithVendor){
                  // for each
                  sum += this.transaction.currencyAmount;
                  i++;
              }
              this.averageSpending = (sum / i); // this is average per visit,
              */
              this.questText = "Dont spend money at "+ this.vendor +" Today to save approxamatly $"+ this.averageSpending;
          }else{
          // word quest
          // show hidden button
            this.questText = " Accept this quest to read an article about smart spending";
            }

      }else{
       // milestone
       this.reward = 100;
       this.toSave = 2000;
       this.questText = "Save $" + this.toSave+ " to put towards travel";
      }
  }


// runs when quest is accepted or started
  storeQuest(){
    this.updateProgress();
    // will call updateProgress function
    // this function will store the values in the data base, will be called when the add button is pressed

  }

  // finished quest
  questFinished(){
  console.log("finished");

/* FOR DAILY QUESTS MILESTONES FINISHING HAVE NOT BEEN updated */
  if (this.isSuccess){
      // add to exp, and gold in firebase
  }else{
      // minus gold and such in firebase
  }

      // store values to firebase
      // need to return the ammount saved to update the values in the milestone quest
      // also need to return reward / punishment or update stored values in the firebase
      // cant do it with pop's. cant pass paramiters back through views
      // pass to fire base and pop back to prev screen
      // use firebase vars from prev screen

  }

// method to update the progress
  updateProgress() {
     // var d = new Date(); // assigns today to today's date
     // var today = d.getTime();
     // var sum :number;
     // sum = 0;
      if (this.tier == 0){
          //daily quests
        /*  if (today >= this.endTime){
            this.isFinished = true;
            this.isSuccess = true; // assume to be true
            today = this.endTime; // so we only get the correct dates and no future dates
          }
         */

          if (this.type == 0){
              // budget quest
              // grab all transactions from
        //      let arr = this.transactionProvider.getTransactionsForAccountId(accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now

              // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction is after the prevTime and before today
    /*          let transactionsWithVendor = arr.filter(this.transaction => {
                (this.tmpDate = new Date(this.transaction.date));
                  if(transaction.description.includes(this.vendor) && (this.prevTime < this.tmpDate.getTime() <= today )) {
                      return true;
                  }
              });
              for (this.transaction of transactionsWithVendor){
                  // for each
                  sum += this.transaction.currencyAmount;
              }
              this.budgetLeft = this.budgetLeft - sum; // calculates how much is left in the budget
*/

              // runs if the quest failed
              this.budgetLeft = this.budgetLeft - 10;
              if (this.budgetLeft<0){
                this.isFinished = true;
                this.isSuccess = false;
            }else{
                this.questText = "Spend $"+this.budgetLeft+" or less at " + this.vendor+ " for the remainder of the week"; // implement a budget for the user to follow
                 // update the quest text field
            }

          }else if (this.type ==1){
                // transfer quest
                // check if correct $ was deposited this week
                // yes update val's
                // no quest failed
                //          var sum :number =0;
//                let arr = this.transactionProvider.getTransactionsForAccountId(accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now

                // this loop takes the list of all transactions and filters it based on the merchantName and if the transaction is after the prevTime and before today
/*                let transactionsWithVendor = arr.filter(transaction => {
                    (this.tmpDate = new Date(this.transaction.date));
                    if(transaction.merchantName === "Microsavings" && (this.prevTime < this.tmpDate.getTime() <= today )) {
                        return true;
                    }
                });
                for (this.transaction of transactionsWithVendor){
                    // for each
                    this.ammountSaved += this.transaction.currencyAmount;
                }
*/              //calculate ammount left to save

             // This if block will run if the date is past the end date in the condition before the update,
             // assumes false and will switch the success variable below if the quest is passed

             // quest will only be finished if the time limit is over. then the ammount is checked to see if
             this.ammountSaved = this.ammountSaved * 2 +1;
             if (this.ammountSaved >= this.ammountToMove){
                 this.isSuccess = true;
                 this.isFinished= true;
            }else{
                 this.isSuccess = false;
            }
             this.questText = " you are $"+ this.ammountSaved+"/"+this.ammountSaved+" away from your savings goal of $" +this.ammountToMove;

           //   if (this.isFinished == true){
           //      if (this.ammountSaved >= this.ammountToMove){
           //          this.isSuccess = true;
           //     }else{
           //          this.isSuccess = false;
           //     }
           // }else{
           //         this.questText = " you are $"+ this.ammountSaved+"/"+this.ammountSaved+" away from your savings goal of $" +this.ammountToMove;
           //         // update text field with new val
           // }


          } else if (this.type ==2){
              //save quest
              // get all transactions for --- vendor for Today
              // if none then good
    //          var sum :number =0;
        /*      let arr = this.transactionProvider.getTransactionsForAccountId(accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now

              // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction is after the prevTime and before today
              let transactionsWithVendor:  any;
              transactionsWithVendor = arr.filter(transaction => {
                  (this.tmpDate = new Date(this.transaction.date));
                  if(this.transaction.description.includes(this.vendor) && this.tmpDate.getTime() == today) {
                      return true;
                  }
              });
              if (transactionsWithVendor.length == 0){
                  this.isSuccess = true;
                  this.isFinished = true;
              }
              else{
                  this.isSuccess = false;
                  this.isFinished = true;
              }
              //  run finished function
*/
          } else{
//              var article = {
//                  title: string,
//                  content: string,
//              };

              var rand =  Math.floor(Math.random());
              var chosen: any;

              let articles=[
                  {"title": "Mutual Funds:", "content": "A mutual fund is an investment vehicle that is made up of a pool \
                   of funds collected from many investors for the purpose of investing in securities such as stocks, \
                   bonds, money market instruments and similar assets. Mutual funds are operated by money managers who \
                   invest the fund's capital and attempt to produce capital gains and income for the fund's investors." },
                   {"title": "What are \'Savings\':", "content": "Savings, according to Keynesian economics, are what a person has left over when the cost of his or her consumer expenditure \
                   is subtracted from the amount of disposable income earned in a given period of time. For those who are financially prudent, \
                   the amount of money left over after personal expenses have been met can be positive; for those who tend to rely on credit \
                   and loans to make ends meet, there is no money left for savings. Savings can be used to increase income through investing \
                   in different investment vehicles."}
              ];

              // have 2 for know
              // dont know how to do the popup thing for viewing articles
              chosen= articles[rand];

          }
      }else{

          //milestone
          // need to know how the firebase is setup. to track completed quests
          // when a quest is completed return ammunt saved.
      }
      // sets the prev update time
//      this.prevTime = today;

      // if the quest is finished run the is finished function
      if (this.isFinished){

          this.questFinished();
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestPage');
  }

}
