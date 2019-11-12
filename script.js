$(document).ready(function () {
    /*check if jquery is reji*/
    console.log('ready');

    $('form').on('submit', function (e) {
        /*submit is the event, form is where the event happens*/
        /*preventdefault  does not accept any arguments.*/
        e.preventDefault(); /*by default form refreshes page, remove default*/
        console.log('submmited!');

        /*The .val() method is primarily used to get the values of form elements such as input, select and textarea. When called on an empty collection, it returns undefined.*/
        const toDoItem = $('input').val(); /*This method does not accept any arguments.*/
        /*val() is a getter and setter*/
        console.log(toDoItem);


        /*or can do if(toDoItem) the truthy value */
        if (toDoItem !== '') {
            /*if to do isnt empty*/
            /*This method is used to set a string of text, a number, an array of strings corresponding to the value of each matched element. This method facilitates you to set the value by passing in the function. */
            $('input').val(''); /*set value to blank*/
            /*The .append() method inserts the specified content as the last child of each element in the jQuery collection (To insert it as the first child, use .prepend()).*/
            $('ul').append(`<li><span class="fa fa-square-o"></span>${toDoItem}</li>`);
        }

            /* select ul not li due to event delegation / bubbling */
        $('ul').on('click', 'li', function(){ 
            $('ul').html(`<li><span class="fa-check-square-o"></span>${toDoItem}</li>`);
        });

    });

});