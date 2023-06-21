const formatDate = () => {
    let month = (today.getMonth() + 1).toString();
    const year = today.getFullYear().toString();
    const day = today.getDate().toString();
    if(month.length === 1) {
        month = "0" +  month;
    }
    const formatedDate = year + "-" + month + "-" + day
    return formatedDate; 
}

module.exports = formatDate;