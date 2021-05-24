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
});