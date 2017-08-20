// create variables for results data
var correctAnswers = 0;
var wrongAnswers = 0;

//create function that hides and displays divs upon button click/
//set timer div inside this function
$(function(){
	$("#start").click(function(){
		$(this).hide();
		$(".container").show();
		$("#timer").show();
		$("#picTriv").hide();
		$("#results").hide();
	var counter = 80;
	var interval = setInterval(function() {
    counter--;
    	$("#timerText").html(counter);
    if (counter === 0) {
        clearInterval(interval);
        $("#timer").hide();
        $(".container").hide();
        $("#results").show();
   	}
   	else $("#submit").click(function(){
   		$("#timer").hide();
        $(".container").hide();
        $("#results").show();
   	});
   
	}, 1000);
});
});


//create series of functions that pull data from the radio buttons and add to counters
$(document).ready(function(){
    $("button[type='button']").click(function(){
    	var radioOne = $("input[value='correctOne']:checked").val();
        var radioOneWrong = $("input[value='wrongOne']:checked").val();

        if(radioOne){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioOneWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioTwo = $("input[value='correctTwo']:checked").val();
        var radioTwoWrong = $("input[value='wrongTwo']:checked").val();
        
        if(radioTwo){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioTwoWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioThree = $("input[value='correctThree']:checked").val();
        var radioThreeWrong = $("input[value='wrongThree']:checked").val();
        
        if(radioThree){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioThreeWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioFour = $("input[value='correctFour']:checked").val();
        var radioFourWrong = $("input[value='wrongFour']:checked").val();
        
        if(radioFour){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioFourWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioFive = $("input[value='correctFive']:checked").val();
        var radioFiveWrong = $("input[value='wrongFive']:checked").val();
        
        if(radioFive){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioFiveWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioSix = $("input[value='correctSix']:checked").val();
        var radioSixWrong = $("input[value='wrongSix']:checked").val();
        
        if(radioSix){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioSixWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioSeven = $("input[value='correctSeven']:checked").val();
        var radioSevenWrong = $("input[value='wrongSeven']:checked").val();
        
        if(radioSeven){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioSevenWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioEight = $("input[value='correctEight']:checked").val();
        var radioEightWrong = $("input[value='wrongEight']:checked").val();
        
        if(radioEight){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioEightWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioNine = $("input[value='correctNine']:checked").val();
        var radioNineWrong = $("input[value='wrongNine']:checked").val();
        
        if(radioNine){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioNineWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});

$(document).ready(function(){
    $("button[type='button']").click(function(){
        var radioTen = $("input[value='correctTen']:checked").val();
        var radioTenWrong = $("input[value='wrongTen']:checked").val();
        
        if(radioTen){
            correctAnswers++
            $("#correct").html(correctAnswers);
        }
        else if(radioTenWrong){
            wrongAnswers++
            $("#wrong").html(wrongAnswers);
        }
    });
    
});



