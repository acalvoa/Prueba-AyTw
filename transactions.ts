import { Item } from './item';
export interface Transactions{
    buyprocess(items:Item[]):number;
payWithcash(cash:number):number;
sellProcess(items:Item[]):number;
payWithcreditCard(tc:number,expDate:number,ccv:number):boolean;
applydiscount(discount:number):void;
emmitbill():void;
}