//requiere "date-fns": "^2.29.3",
const format = require('date-fns/format');

module.exports = {
    dateFormat :(date) => {
        //console.log(format(date , "MMM do, yyyy 'at' hh:mm aaaa"));
        return format(date , "MMM do, yyyy 'at' hh:mm aaaa");
    }

}