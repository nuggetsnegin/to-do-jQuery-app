$(document).ready(function () {

    const dbRef = firebase.database().ref(); /*set up db to variable*/
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
            $('.error').hide();
            /*if to do isnt empty*/
            /*This method is used to set a string of text, a number, an array of strings corresponding to the value of each matched element. This method facilitates you to set the value by passing in the function. */
            $('input').val(''); /*set value to blank*/

            /*allow the removal of items*/
            let removalLink = " <a href='#'><span class='fa fa-trash'></span></a>";
            /*The .append() method inserts the specified content as the last child of each element in the jQuery collection (To insert it as the first child, use .prepend()).*/
            $('ul').append(`<li><span class="fa fa-square-o"></span>${toDoItem}${removalLink}</li>`);

            /*creata an object that contains the info about our toDoItems and push the new object to db*/
            const toDoItemInfo = {
                description: toDoItem, /*w.e our todo item is*/
                completed: false
            }
            dbRef.push(toDoItemInfo);
            

        } else {
            // show error if input is empty
            $('.error').show();
        }

        /* select ul not li due to event delegation / bubbling */
        $('ul').on('click', 'li', function () {
            let checkBox = $(this).find('.fa'); /*using find to ..find font awesome icon*/
            checkBox.toggleClass('fa-square-o fa-check-square-o');
            $(this).toggleClass('text-muted');
        });

    });


    /*removal of items*/
    $('ul').on('click', 'a', function () {
        let toDoListItem = $(this).parent();
        toDoListItem.remove();
    });

    dbRef.on('value', (data) => { /*call back function*/
      /*  console.log(data.val()); checking our database*/
      const toDoData = data.val();

    })


});