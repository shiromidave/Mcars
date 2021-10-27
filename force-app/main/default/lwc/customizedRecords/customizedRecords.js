import { LightningElement, track } from 'lwc';
import submitCarAction from '@salesforce/apex/SalesAppPageClass.createrecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CustomizedRecords extends LightningElement {
    @track carMN;
    @track carP;
    @track carex;
    @track carin;
  
   
   CarHandler(event){
        if(event.target.name == 'carMN'){
        this.carmodelname = event.target.value;  
        
        }
    
      if(event.target.name == 'carP'){
        this.carprice = event.target.value;  
      }
      if(event.target.name == 'carex'){
        this.carexterior = event.target.value; 
        console.log(this.carexterior); 
      }
      if(event.target.name == 'carin'){
        this.carinterior = event.target.value;  
      }
     


 }

 submitAction(){
    submitCarAction({carModelName :this.carmodelname,incolor:this.carinterior,excolor:this.carexterior,carPrice:this.carprice})
    .then(result=>{
        this.carModelRecordId = result.Id;
        
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record created successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);

          

    })
    .catch(error =>{
       this.errorMsg=error.message;
        console.log(this.errorMsg);
       
    });

 }
}

