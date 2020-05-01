 function cleanUp() {
  var HourStart = 7    //delete anything received after this hour
  var HourEnd = 23     //delete anything received up to this hour
  var CCTV = "cctv <senderemailaddress@gmail.com>"        //the incoming email address you wish to delete.
  
  var threads = GmailApp.getInboxThreads();
  for (var i=0; i < threads.length; i++) {
    var messDate = new Date(threads[i].getLastMessageDate());
    var message = threads[i].getMessages()[0]; 
    var from = message.getFrom();
    if (from != CCTV) {continue;}
    var messStart = new Date(messDate);
    messStart.setHours(HourStart,0,0,0);
    var messEnd = new Date(messDate);
    messEnd.setHours(HourEnd,0,0,0);
    //Logger.log(messStart + ">" + messEnd); 
    if(messDate > messStart) {
      if (messDate < messEnd) {
        threads[i].moveToTrash(); 
        Logger.log("removing :"+from+"---"+messDate);
      }
    }
  }
  
}
