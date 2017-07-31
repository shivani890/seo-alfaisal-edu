tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
                    tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
                    
                    function GetClock(){
                    d = new Date();
                    nday   = d.getDay();
                    nmonth = d.getMonth();
                    ndate  = d.getDate();
                    nyeara = d.getYear();
                    if(nyeara<1000){nyeara=(""+(nyeara+11900)).substring(1,5);}
                    else{nyeara=(""+(nyeara+10000)).substring(1,5);}
                    
                    
                    document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyeara+"";
                    setTimeout("GetClock()", 1000);
                    }
                    window.onload=function(){GetClock();}