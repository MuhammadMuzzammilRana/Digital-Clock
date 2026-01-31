function getCurrentTime(){
    var hourSpan = document.getElementById('hour')
    var minSpan = document.getElementById('min');
    var secSpan = document.getElementById('sec');
    var AmPmSpan = document.getElementById('AM-PM');
    var daySpan = document.getElementById('day')
    var dateSpan = document.getElementById('date')
    var monSpan = document.getElementById('month')
    var yearSpan = document.getElementById('year')
    var currentTime = new Date();
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    var hours = currentTime.getHours()
    var days = currentTime.getDay()
    var Numdate = currentTime.getDate()
    var mon = currentTime.getMonth()
    var year = currentTime.getFullYear()
    if(minutes < 10){
        minSpan.innerText = '0' + minutes;
    } else{
        minSpan.innerText = minutes;
    }

    if(seconds < 10){
        secSpan.innerText = '0' + seconds;
    } else{
        secSpan.innerHTML = seconds;
    }

    if(hours === 0){
        hourSpan.innerText = '12'
    }
    else if(hours <= 11){
        if(hours <= 9){
            hourSpan.innerText = '0' + hours
        } else{
            hourSpan.innerText = hours
        }
    }
    else if(hours === 12){
        hourSpan.innerText = hours
    }
    else{
        hours -= 12
        if(hours <= 9){
            hourSpan.innerText = '0' + hours
        } else{
            hourSpan.innerText = hours
        }
    }

    if(currentTime.getHours() < 12){
        AmPmSpan.innerText = 'AM'
    } else{
        AmPmSpan.innerText = 'PM'
    }

    var daysArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    daySpan.innerText = daysArray[days]
    var monArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    monSpan.innerText = monArray[mon]
    dateSpan.innerText = Numdate
    yearSpan.innerText = year
}

setInterval(getCurrentTime, 1000)
