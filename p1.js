const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var playername = "";
var score = 0;
var total = 0;

const questions = () => {
    
    // Question 1...

    console.log("1.Which star is at the center of our Solar System?");
    console.log("A.Galaxy");
    console.log("B.Alpha Centauri Bb");
    console.log("C.Sun");
    console.log("A.Proxima Centauri");

    rl.question("Answer : " , (ans) => {
        if(ans == "C" || ans == "c")
        {
            console.log("Correct Answer...");
            score = score + 5;
            console.log("Score = " , score);
        }
        else
        {
            console.log("Wrong Answer...");
            if(score === 0)
            {
                score = 0;
            }
            else
            {
                score = score - 2;
            }
        }

        // Question 2...

        console.log("2.What is the diameter of Sun?");
        console.log("A.1,392,684 km");
        console.log("B.1,092,684 km");
        console.log("C.1,592,684 km");
        console.log("D.2,092,684 km");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 3...

        console.log("3.How much time does sun lights take to reach earth?");
        console.log("A.12 minutes");
        console.log("B.8 minutes");
        console.log("C.10 minutes");
        console.log("D.18 minutes");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 4...

        console.log("4.Which planet is nearest to the earth?");
        console.log("A.MERCURY");
        console.log("B.JUPITER");
        console.log("C.MARS");
        console.log("D.PLUTO");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 5...

        console.log("5.Which planet is known as the Morning Star or the Evening Star?");
        console.log("A. MERCURY");
        console.log("B. MARS");
        console.log("C. VENUS");
        console.log("D. NEPTUNE");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 6...

        console.log("6.What is the diameter of EARTH?");
        console.log("A. 10,742 km approx");
        console.log("B. 12,742 km approx");
        console.log("C. 15,742 km approx");
        console.log("D. 20,742 km approx");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 7...

        console.log("7. Which is the largest planet in our solar system?");
        console.log("A. MERCURY");
        console.log("B. JUPITER");
        console.log("C. MARS");
        console.log("D. NEPTUNE");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 8...

        console.log("8.Which Planet has the most natural satellite?");
        console.log("A. SATURN");
        console.log("B. JUPITER");
        console.log("C. URANUS");
        console.log("D. NEPTUNE");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 9...

        console.log("9.Which Is the Hottest Planet in the solar system?");
        console.log("A. MERCURY");
        console.log("B. JUPITER");
        console.log("C. VENUS");
        console.log("D. MARS");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 10...

        console.log("10. Which is the coldest planet in our solar system?");
        console.log("A. PLUTO");
        console.log("B. JUPITER");
        console.log("C. URANUS");
        console.log("D. NEPTUNE");

        rl.question("Answer : " , (ans) => {
            if(ans == "D" || ans == "d")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
    


            });
            });
            });
            });
            });
            });
            });
            });
        });
    });

};

const startgame = () => {

    console.log("1. Start");
    console.log("2. Exit");

    rl.question("Enter Your Choice = " , (ans) => {
        if(ans == 1) 
        {
            rl.question("Enter Your name = " , (uname) => {
                playername = uname;
                if(playername.length > 0)
                {
                    console.log(playername);
                    questions();
                }
                else
                {
                    console.log("Enter Valid Name...");
                    startgame();
                }
            });
        }
        else if(ans == 2)
        {
            rl.close();
        }
        else
        {
            console.log("Enter Valid Name...");
            startgame();
        }
    });

   
};

startgame();

