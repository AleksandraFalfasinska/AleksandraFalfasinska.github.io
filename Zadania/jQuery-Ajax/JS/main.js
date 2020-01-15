$(document).ready(() => {

    $('#download').click(() => {
        const newDiv = $('<div/>').attr({ 'id': 'dane-programisty' });
        $('#download').after(newDiv);

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {


            newDiv.text(data.imie + ' ' + data.nazwisko + ' ' + data.zawod + ' ' + data.firma);

            // newDiv.text(data);

            // for (i = 0; i < data.length; i++) {
            //     newDiv.text(data[i] + ' ' + data[i + 1]);
            // };
        });
    });
});