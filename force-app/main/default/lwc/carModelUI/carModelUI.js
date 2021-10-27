import { api, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class CarModelUI extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    objectName;
   
    connectedCallback(){
        this.objectName = this.objectApiName; //set properties value
    }

    showFields = false;
    
    toggleFields(){
        this. showFields = !this.showFields;
    }
    navHandler(event){
     
        
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
               
               url : 'https://d5g00000crftqea5-dev-ed.lightning.force.com/lightning/n/Thankyou'
            }
        });
    }
}
