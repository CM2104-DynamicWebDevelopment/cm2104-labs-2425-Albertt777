$(function(){

    //document ready
    alert("document ready");

    $(`#searchform`).submit(fuction (){
        //get current value and add to items list
        var searchterms = $("#searchterms").val();
        //call our saerch youtube function
        getResultsFromOMDB(searchterms);
        addItermsToList("serachterms");
        return false;
    });
});

function addItermsToList(item)