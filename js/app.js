$(document).ready(function() {
////////////////Global Variable Initialization////////////////////////////////
  var arr = [];
  var j =0;
  var askNum;// =arr[j];
  var correctNum =0;
  var incorrectNum =0;
  var playerAnsw =[];
  var k =0;
  //var quesNum;

/////////////////////////Random Number Array//////////////////////////////////////
  var randNumFunc = function () {
    
    while(arr.length < 5){
      
      var randomnumber=Math.ceil(Math.random()*(16 - arr.length)), i;
    
        for(i=0; i < arr.length; i++) {
    
          if(arr[i] <= randomnumber) randomnumber++;
    
          else break;
        }

      arr.splice(i, 0, randomnumber);
    }

    return arr;
  };  

/////////////////////////////////////////////////////////////////////////////

    var questions = [{
        ques: "Which player has scored the most career points in the NBA?",
        opt: ["Michael Jordan", "Kareen Abdul Jabar", "Karl Malone", "Wilt Chamberlin"],
        qNum : 0,
        answ : 1,
        fact: "Kareem Abdul-Jabar scored 38,387 points in his career"
       },
       {
        ques: "Which NBA team plays its games at the AT&T Center",
        opt: ["Denver Nuggets", "Atlanta Hawks", "Washington Wizards", "San Antonio Spurs"],
        qNum : 1,
        answ : 3,
        fact: "Opened in 2002, the AT&T Center is home to the San Antonio Spurs."
       },
       {
        ques: "What number does Dallas Mavericks all-star Dirk Nowitzki wear?",
        opt: ["41", "21", "32", "25"],
        qNum : 2,
        answ : 0,
        fact: "Dirk Nowitzki was the 2007 NBA MVP and is a ten-time NBA All-Star"
       },
       {
        ques: "What is the name of the Houston Rockets mascot??",
        opt: ["Turbo", "Rocket the Rumbler", "Big Foot Bully", "Clutch the Bear"],
        qNum : 3,
        answ : 3,
        fact: "Clutch was named the 5th-most recognizable mascot in sports by USA Today, 2005"
       },
       {
        ques: "Where did Cavaliers player Kyrie Irving play college basketball?",
        opt: ["Duke", "Wisconsin", "Syracuse", "Kentucky"],
        qNum : 4,
        answ : 0,
        fact: "Irving only played in 11 games before sustaining an injury during 2010-2011 season"
       },
       {
        ques: "Who holds the NBA career record for three-pointers made?",
        opt: ["Reggie Miller", "Larry Bird", "Ray Allen", "Dale Curry"],
        qNum : 5,
        answ : 2,
        fact: "Allen passed Miller's mark of 2,560 in 2011."
       },
       {
        ques: "Who holds the NBA career record for free throw attempts?",
        opt: ["Wilt Chamberlin", "Karl Malone", "Michael Jordan", "Shaquille O'Neal"],
        qNum : 6,
        answ : 1,
        fact: "Karl Malone shot 13,188 free throws in his career."
       },
       {
        ques: "Which franchise has been in the NBA the longest without winning a championship?",
        opt: ["Charlotte Hornets", "New Jersey Nets", "Minnesota Timberwolves", "Phoenix Suns"],
        qNum : 7,
        answ : 3,
        fact: "The Suns joined the NBA in 1968-69 and have never won a championship."
       },
       {
        ques: "Which NBA team did ESPN/ABC analyst Dick Vitale coach?",
        opt: ["Detroit Pistons", "Atlanta Hawks", "Dallas Mavericks", "Portland Trailblazers"],
        qNum : 8,
        answ : 0,
        fact: "Vitale coached the Pistons for the 1978-79 season, leading them to a 30-52 record."
       },
       {
        ques: "Which franchise had a 40-1 home record during the 1985-86 season?",
        opt: ["Los Angeles Lakers", "New York Knicks", "Boston Celtics", "Philadelphia 76ers"],
        qNum : 9,
        answ : 2,
        fact: "The Celtics won 67 games, going 40-1 at home and winning the NBA Championship."
       },
       {
        ques: "Which team did Carmelo Anthony help defeat in the 2003 NCAA Tournament finals?",
        opt: ["Connecticut", "Kansas", "Syracuse", "Duke"],
        qNum : 10,
        answ : 2,
        fact: "Carmelo Anthony scored 20 points and gathered 10 rebounds in the finals game"
       },
       {
        ques: "Which year did Kobe win a gold medal at the Olympics as a member of the USA national team?",
        opt: ["2006", "2008", "2004", "2002"],
        qNum : 11,
        answ : 1,
        fact: "The USA defeated Spain 118-107, it ended an 8year drought at major international competition"
       },
       {
        ques: "Which player was the first to win back-to-back NBA Finals MVP awards?",
        opt: ["Michael Jordan", "Isaiah Thomas", "Wilt Chamberlin", "Larry Bird"],
        qNum : 12,
        answ : 0,
        fact: "Michael Jordan won three MVP Awards in a row from 1991-93."
       },
       {
        ques: "Which number was worn by point guard Steve Nash when he was drafted in 1996 by the Phoenix Suns?",
        opt: ["#15", "#11", "#9", "#13"],
        qNum : 13,
        answ : 3,
        fact: "Steve Nash, wearing #13, is a 2x MVP, who has played for 3 NBA teams"
       },
       {
        ques: "In what year was the first NBA Draft Lottery held?",
        opt: ["1978", "1980", "1975", "1985"],
        qNum : 14,
        answ : 3,
        fact: "The first NBA Draft lottery was held in 1985. Prior to this, the worst teams would flip a coin to see who would get the top pick."
       },
       {
        ques: "Which team drafted Shaquille O'Neal?",
        opt: ["Miami Heat", "Los Angeles Lakers", "Orlando Magic", "Phoenix Suns"],
        qNum : 15,
        answ : 2,
        fact: "The Orlando Magic drafted O'Neal in 1992"
       },
       {
        ques: "1Who was the first high school player to be taken #1 overall in the NBA Draft?",
        opt: ["Kevin Garnett", "Kwame Brown", "LeBron James", "Kobe Bryant"],
        qNum : 16,
        answ : 1,
        fact: "The Washington Wizards took Brown #1 in 2001."
       }];
/////////////////////////////////////////////////////////////////////////////
  

  //var newGame = function () {

    // Run randNumFunc to generate 5 random numbers that correspond to the above questions
      randNumFunc();


    $(".startBtn").click(playGame);
    
      function playGame () {
        //var j =0;
        $(".table").show();
       askNum = arr[j];
        //alert(askNum);

        //$("#question").html(questions[ask].ques); WORKING

        $("#trivaQues").html(questions[askNum].ques);
      
        $("#opt0").html(questions[askNum].opt[0]);
        //alert("option 0");
        $("#opt1").html(questions[askNum].opt[1]);
        //alert("option 1");
        $("#opt2").html(questions[askNum].opt[2]);
        //alert("option 2");
        $("#opt3").html(questions[askNum].opt[3]);
        //alert("option 3");

        j++;
        $("#correct").html(correctNum + " OF ");
        $(".total").html(j);
        $(".startBtn").hide();
        $(".nextBtn").show();
        $(".submitBtn").show();


    }

    $(".submitBtn").click(nextFunc);
          
        function nextFunc () { 
            if ($('input[type="radio"]:checked').length === 0) {
              $("#warning").html("You Must Make A Selection");
              
            } else if (($('input[type="radio"]:checked').val()) == questions[askNum].answ) {
              correctNum++;
              //proceedFunc();
              $("#fact").html(questions[askNum].fact);
                playerAnsw[k] = $('input[type="radio"]:checked').val();
             // alert("Radion Button Value = "+ $('input[name="radioBtn[]"]:checked').val() +" Anwers to Question=  "+ questions[askNum].answ + "   Array PlayerAnswer = " + playerAnsw + "   Correct # = " + correctNum + "   Incorrect # = " + incorrectNum);
            $("#correct").html(correctNum + " OF ");    

            } else {
              incorrectNum++;
              //proceedFunc();
              $("#fact").html(questions[askNum].fact);
                playerAnsw[k] = $('input[type="radio"]:checked').val();
              //alert("Radion Button Value = "+ $('input[name="radioBtn[]"]:checked').val() +" Anwers to Question=  "+ questions[askNum].answ + "   Array PlayerAnswer = " + playerAnsw + "   Correct # = " + correctNum + "   Incorrect # = " + incorrectNum);
              //$("#correct").html(incorrectNum + " OF "); 
              
            }
              $("#warning").html("");   

            
        }

    
    $(".nextBtn").click(proceedFunc);    

        function proceedFunc () {

            if ($('input[type="radio"]:checked').length === 0) {
              $("#warning").html("You Must Make A Selection");
              
            }  else if (playerAnsw[k] == null) {
               $("#warning").html("You need to SUBMIT before moving on"); 
            } else {
              //playerAnsw[k] = $('input[type="radio"]:checked').val();
                k++;
           
              //  alert("Radion Button Value = "+ $('input[name="radioBtn[]"]:checked').val() +" Anwers to Question=  "+ questions[askNum].answ + "   Array PlayerAnswer = " + playerAnsw + "   Correct # = " + correctNum + "   Incorrect # = " + incorrectNum);

           
              //$("#correct").html(correctNum);

              $('input[type="radio"]').attr('checked', false);
              $("#warning").html("");
              $("#fact").html("");


              if (j <5 ) {
                playGame();
              } else {
                gameOver();
              }
            }

        }

        function gameOver () {

          $(".overlay").fadeIn(1000);
          var percScore = ((correctNum/j)*100);
          $(".score").html("You Answered " +correctNum+ " Out of " +j+ " Correctly. For A Score Of " +percScore+ "%");


          /*--- Hide information modal box ---*/
          $("a.ovrClose").click(function(){
            $(".overlay").fadeOut(1000);

            randNumFunc();

            j=0;
            correctNum=0;
            incorrectNum=0;

                        playGame();

          });
        }

});

  
