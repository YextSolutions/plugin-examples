
export function formatTime(dateUnix) {
    var formattedTime = ""
    if (dateUnix != "") {
        var date = new Date(dateUnix * 1000)
         
        var hour = date.getHours()
        if (hour < 10) {
          var convHours = "0" + hour
        } else convHours = hour
        
        
        var minutes = date.getMinutes()
        if (minutes < 10){
          var convMinutes = "0" + minutes
        } else convMinutes = minutes

        formattedTime = convHours + ":" + convMinutes
    }

    return formattedTime
}

