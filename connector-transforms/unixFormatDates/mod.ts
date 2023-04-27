export function formatDate(dateUnix: string) {
    var formattedDate = ""
    if (dateUnix != "") {
        var date = new Date(dateUnix*1000)
         
        var year = date.getFullYear()
        
        var numMonth = date.getMonth() + 1
        var month = String(numMonth)
        if (numMonth < 10) month = '0' + month
  
        var numDay = date.getDate()
        var day = String(numDay)
        if (numDay < 10) day = '0' + day
  
        formattedDate = year + "-" + month + "-" + day
  
        console.log(formattedDate)
    }
  
    return formattedDate
  }