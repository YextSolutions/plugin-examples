// This function converts seconds to minutes and seconds (i.e. taking 200 seconds and converting it to 3:20, 3 minutes and 20 seconds)
export function secToMin(duration: string) {

    var sec = Number(duration) % 60

    if (sec < 10)
    {
        var sec_time = ":0" + String(sec)
    }
    else
    {
        var sec_time = ":" + String(sec)
    }

    var hr = Math.floor(Number(duration) / 3600)
    

    if (hr < 10)
    {
        var hr_time = "0" + String(hr)
    }
    else 
    {
        var hr_time = String(hr)
    }

    var min = (Math.floor(Number(duration) / 60) - (Number(hr)*60))

    if (min < 10)
    {
        var total_time = String(hr_time) + ":0" + String(min) + String(sec_time)
    }
    else 
    {
        var total_time = String(hr_time) + ":" + String(min) + String(sec_time)
    }

    return total_time
}