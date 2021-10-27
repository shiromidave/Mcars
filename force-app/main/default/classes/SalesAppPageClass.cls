public with sharing class SalesAppPageClass {
    @AuraEnabled
    public static Car_Model__c createrecord(string carModelName,string incolor,string excolor,Decimal carPrice){
        Car_Model__c cm = new Car_Model__c ();
        cm.Name = carModelName;
      
        cm.Interior_Color__c=incolor;
        cm.Exterior_Color__c=excolor;
        cm.Car_Price__c  = carPrice;
      

        insert cm;
        return cm;
    }
}
