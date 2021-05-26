$(document).ready(function (){
    $(".aim").click(function (){
            $.ajax({
            url: 'resp',
            type: 'get',
            data: {
                button_text: $(this).text()
            },
            success: function (response){
                $(".aim").text(response.info)
            }
        });
    });

    $("#submit").click(
            function(){
                sendAjaxForm('result_form', 'ajax_form', 'resp');
                return false;
            }
        );
    });

    function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	//result = $.parseJSON(response);
        	console.log("2112");
        	// $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
    	},
    	error: function(response) { // Данные не отправлены
            console.log("ERROR");
            // $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
};