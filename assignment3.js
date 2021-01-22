//1.kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter=kilometer*1000;
    return meter;
 }
 var result = kilometerToMeter(8);
 console.log(result);
 
 //budgetCalculator
 function budgetCalculator(watch,mobile,laptop) {
     var priceWatch = watch*50;
     var priceMobile = mobile*100;
     var priceLaptop = laptop*500;
     var total = priceWatch + priceMobile + priceLaptop;
     return total;
 }
 var result = budgetCalculator(10,5,3);
 console.log(result);
 
 //hotelCost
 function hotelCost(days) {
     var cost =0;
     if (days <=10) {
         cost = days *100;
     }
     else if(days<=20) {
         var firstDays=10*100;
         var remainingDays= days-10;
         var lastDays= remainingDays*80;
         cost=firstDays+lastDays;
     }
     else{
         var firstDays=10*100;
         var secondDays=10*80;
         var remainingDays= days-20;
         var lastDays= remainingDays*50;
         cost=firstDays+secondDays+lastDays;
     }
     return cost;
 }
 var result = hotelCost(66);
 console.log(result);
 
 //megaFriend
 var names="amar akbar enthony tony minku minky nivedita nachiket ragini";
 function megaFriend(msg) {
     msg=msg.split(' ');
     var longest =msg.reduce((current,previous)=>{
         return current.length > previous.length ? current : previous;
     }, "");
     return longest;
 }
 var largestName = megaFriend(names);
 console.log(largestName);