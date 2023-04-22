$(document).ready(function(){

    $("#carousel-images").slick({
        autoplay: true
    })

    $(".menu-hamburger").click(function(){
        $("nav").slideToggle()
    })

    $("#phone").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000"
    })

    $("form").validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            carInterest: {
                required: false
            },
            message: {
                required: true
            }
        },
        messages: {
            name: "Por favor, insira o seu nome",
            phone: "Por favor, insira seu telefone",
            email: "Por favor, insira seu e-mail",
            message: "Por favor, digite uma mensagem"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids()
            console.log(incorrectFields)
            if(incorrectFields){
                alert(`Existem ${incorrectFields} campos que você precisa preencher.`)
            }
        }
    }) 
    
    $(".car-list button").click(function() {
        const destiny = $("#contact")
        const carName = $(this).parent().find("h3").text()

        $("#car-interest").val(carName)

        
        $("html").animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })
})