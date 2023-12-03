
export function toDate(number){
    const timestamp = number;
    var myDate = new Date(timestamp);
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let date = myDate.getDate();
    return (year + '.' + month + '.'+ date)
}