import { api, LightningElement } from 'lwc';

export default class SalesEditRecord extends LightningElement {
    @api recordId;
    @api objectApiName;

    objname;
    //myfields = [name,locatn,phone,salary];
    connectedCallback(){
        this.objname = this.objectApiName;
    }
    showFields = false;
    
    toggleFields(){
        this. showFields = !this.showFields;
    }

}