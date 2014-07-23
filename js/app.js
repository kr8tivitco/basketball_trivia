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
      
      var randomnumber=Math.ceil(Math.random()*(10 - arr.length)), i;
    
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
       }];
/////////////////////////////////////////////////////////////////////////////
  

  //var newGame = function () {

    // Run randNumFunc to generate 5 random numbers that correspond to the above questions
      randNumFunc();


    $(".startBtn").click(function() {
    //$("nextBtn").click(playGame);
      //alert(arr);
      //var ask = prompt("Enter Number 0-10", "");
      //alert (questions[ask].ques);
      //function playGame () {
        //var j =0;
       askNum = arr[j];
        alert(askNum);

        //$("#question").html(questions[ask].ques); WORKING

        $("#quesBox").html(questions[askNum].ques);
      
        $("#opt0").html(questions[askNum].opt[0]);
        //alert("option 0");
        $("#opt1").html(questions[askNum].opt[1]);
        //alert("option 1");
        $("#opt2").html(questions[askNum].opt[2]);
        //alert("option 2");
        $("#opt3").html(questions[askNum].opt[3]);
        //alert("option 3");

        j++;

        $("#totalNum").html(j);
    });

        $(".nextBtn").click(function () { 
          alert(askNum);
          if (($('input[type="radio"]:checked').val()) == questions[askNum].answ){
            playerAnsw[k] = $('input[type="radio"]:checked').val();
            k++;
            correctNum++;
          } else {
            incorrect++;
          }
            alert(($('input[name="radioBtn[]"]:checked').val()) +" == "+ questions[askNum].answ + "   Array PlayerAnswer = " + playerAnsw);
            

           $("#fact").html(questions[askNum].fact);
              //alert(questions[askNum].fact);
        
        });

});

  
