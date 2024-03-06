window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
})

const functionAPI = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(Response => {
        return Response.json()
    }).then(Response => {
        console.log("Website called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(Error){
        console.log(Error);
    });
    return count;
}