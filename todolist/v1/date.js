//jshint esversion:6
exports.getdate = getdate;
function getdate(){
    let today = new Date();
    let options = {
        weekday : "long",
        day:"numeric",
        month:"long",
        year:"numeric",
    }
    return today.toLocaleDateString("en-US",options);
}
exports.getday = function (){
    let today = new Date();
    let options = {
        weekday : "long",
    }
    return today.toLocaleDateString("en-US",options);
}


