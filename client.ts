import {secureagent} from './secureagent';
import {Transactions} from './transactions';
import {item} from './item';
//* 
//   A class to define a client for generic ERP of a enterprise.
//    This software is a SAAS (Software as a service), so the class must be generic posible.
//
export class client extends secureagent implements Transactions{
public Name:string;
private Email:string;
Lastname:string;
Age:number;
Location:string;
Numeration:number;
BankAccount:number;
public BankName:string;
public Phone:string;

/*
 * Constructor to define a Client in ERP SAAS System
 */
constructor(name:string,lastname:string,age:number,location:string,numeration:number,bankAccount:number,bankName:string,
phone:string,email:string,passwordHash:string=null,fingerHash:string=null){
/* Call to Secure Agent class initialize */
super();
/* Asign the parameters to variables */
this.Name = name;
this.Lastname = lastname;
this.Age = age;
this.Location = location;
this.Numeration = numeration;
this.BankAccount = bankAccount;
this.BankName = bankName;
this.Phone = phone;
    this.Email = email;
    // Asign the secure agents
    this.setPassword((passwordHash)?passwordHash:this.getPasswordHashDb());
    if(fingerHash){
        this.setFingerHash(fingerHash);
    }
    else
    {
        this.getFingerHashDb()
    }
}
//*
// Buy a list of items in the ERP platform
/* @param {item} items Represent the items that the client wants to buy across the ERP system
 */
public buyprocess(items:item[]):number{
                        // Todo:
                        return null;
}
/**
 * Pay a order with cash to follow the payment flow process
 * @param {number} cash Represent the amount of cash used by the client in the payment process
 */
public payWithcash(cash:number):number{
// To do:
return null;
}
//*
// Sell a list of items in the ERP platform
// @param items Represent the items that the client wants to sell across the ERP system
// @return  Return the id of sell process
//
sellProcess(items:item[]): number{
    // To do:
    return null;
}
//*
// Pay a order with credit card to follow the payment flow process
// @param {number} tc Is the credit card number used to pay
// @return {boolean} Return if the bank approve the transaction.
//
payWithcreditCard(tc:number,expDate:number,ccv:number):boolean {
        // To do:
        return null;
}
/**
 * This method apply a global discount in the buy and sell process made by the client
 * @return {void}
 */
applydiscount(discount: number): void{
            // To do
}
/**
// This method is used to generate a pdf with the order detail
// @return {void}
 */
public emmitbill(){
            // To do
}
}
