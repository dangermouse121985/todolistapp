function newItem() {
    //I was getting a little confused between the difference of the li value and the li tag. Switched the li value to listItem
    let listItem = $('<li></li>')
    let inputValue = $('input').val();
    listItem.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!')
    } else {
        $('#list').append(listItem);
    }

    //Toogle Strike Class to allow user to strike a task or ustrike it, if more work needs to be done.
    function crossOut() {
        $('li:hover').toggleClass('strike');
    }

    $(listItem).on("dblclick", crossOut);

    //3(i). Adding the delete button "X": 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode('X'));
    $(listItem).append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        $('li:hover').addClass("delete");
    }

    // 4. Reordering the items: 
    $('#list').sortable();
}