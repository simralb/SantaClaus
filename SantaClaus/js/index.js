function makeTimer(){var a=new Date("December 25, 2016 00:00:00"),a=Date.parse(a)/1e3,b=new Date,b=Date.parse(b)/1e3,c=a-b,d=Math.floor(c/86400),e=Math.floor((c-86400*d)/3600),f=Math.floor((c-86400*d-3600*e)/60),g=Math.floor(c-86400*d-3600*e-60*f);"10">e&&(e="0"+e),"10">f&&(f="0"+f),"10">g&&(g="0"+g),$("#days").html(d+"<span>Days</span>"),$("#hours").html(e+"<span>Hours</span>"),$("#minutes").html(f+"<span>Minutes</span>"),$("#seconds").html(g+"<span>Seconds</span>")}setInterval(function(){makeTimer()},1e3);
