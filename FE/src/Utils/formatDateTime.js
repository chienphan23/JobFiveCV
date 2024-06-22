export const formatDateTime = (dateTimeString) => {
    const year = dateTimeString.slice(0, 4);
    const month = dateTimeString.slice(4, 6);
    const day = dateTimeString.slice(6, 8);
    const hours = dateTimeString.slice(8, 10);
    const minutes = dateTimeString.slice(10, 12);
    const seconds = dateTimeString.slice(12, 14);

    const formattedDateTime = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

    return formattedDateTime;
};
export const formatDate = (date, numDayAdd) => {
    console.log(date)
    if(numDayAdd) {
        date.setDate(date.getDate() + numDayAdd);
    }
    let day = date.getDate();
        let month = date.getMonth() + 1; 
        let year = date.getFullYear();
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        let formattedDate = day + '-' + month + '-' + year;
        return formattedDate;
}
