/*READY STATES

0 - request is not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/ 

window.onload=function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET","../data/brand-info.json", true);
    ourRequest.send();
    console.log(ourRequest);
};
