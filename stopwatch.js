 let timerDisplay=document.querySelector(".timerDisplay");
        let startBtn=document.getElementById("startBtn");
        let stopBtn=document.getElementById("stopBtn");
        let resetBtn=document.getElementById("resetBtn");

        let msec= 0;
        let sec= 0;
        let min=0;

        let timerId= null;

        startBtn.addEventListener("click" , function(){
            if(timerId !== null){
                clearInterval(timerId);
            }
            timerId= setInterval(startTimer ,1);

            // console.log("watch time is started");
            
        });

         stopBtn.addEventListener("click" , function(){
                clearInterval(timerId);
            });

          resetBtn.addEventListener("click" , function(){
                clearInterval(timerId);
                timerDisplay.innerHTML=`00 : 00 : 00`;
                msec = sec = min =0;      // multiple assignments , where multiple vlues are equal to one value
            });   

        function startTimer(){
            msec++;
            if(msec==1000){
                msec=0;
                sec++;
                if(sec==60){
                    sec=0;
                    min++;
                }
            }

            let msecString= msec < 10 ? `0${msec}` : msec;
            let secString= sec < 10 ? `0${sec}` : sec;
            let minString= min < 10 ? `0${min}` : min;

            timerDisplay.innerHTML=`${minString} : ${secString} : ${msecString}`;
        }
   
        let themeBtn = document.querySelector(".theme");
        themeBtn.addEventListener("click", function () {
    
        let body = document.querySelector("body");
        let currentColor = body.style.backgroundColor;

        if (currentColor === "black") {
        body.style.backgroundColor = "beige";
        themeBtn.style.backgroundColor = "black";
        body.style.color = "black";
        } else {
        body.style.backgroundColor = "black";
        themeBtn.style.backgroundColor = "beige";
        body.style.color = "white";
    }
});
