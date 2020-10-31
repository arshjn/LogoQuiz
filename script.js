var imgArray = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1024px-Domino%27s_pizza_logo.svg.png", "https://www.logotaglines.com/wp-content/uploads/2016/11/Bank-Of-America-Logo.png", "https://logodix.com/logo/20228.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1200px-Playstation_logo_colour.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png", "https://i.pinimg.com/originals/75/77/5c/75775c07ea72016422854d0564405a5d.png", "http://logok.org/wp-content/uploads/2014/06/Maserati-logo-Trident.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/240px-General_Electric_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg", "https://purepng.com/public/uploads/medium/purepng.com-renault-logorenaultgroupe-renaultautomobile-manufacturerrenault-automobilesrenault-logo-1701527610699mb9ol.png", "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png", "https://dwglogo.com/wp-content/uploads/2020/05/lg_electronics_logo_1000x709.png", "https://www.jetpunk.com/img/user-photo-library/a9/a9adb4cf11-450.png", "https://www.car-brand-names.com/wp-content/uploads/2016/03/Suzuki-logo.png", "https://1000logos.net/wp-content/uploads/2019/05/Sprint-emblem.jpg", "https://dwglogo.com/wp-content/uploads/2019/03/2200px-lufthansa_logo.png", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", "https://previews.us-east-1.widencdn.net/preview/39977711/assets/asset-view/75cd02dd-912e-48a5-abe2-44ea6b452fba/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?Expires=1604113200&Signature=Iuy2c2jeiVtsi~I9zVM8cm22s6pF47x5yZKNhxljWPRxi~XZYlmFDQnz33IwPZ~04ptgkIE7eyMC1L51Zg8YdZXzS~FZ36ySCEuGkQLaX1LAAtGrUD4prP3TuI8HbCmKngACbHGIoBER4710ITMBW5q7WxstUKbskP33ngPmqEdg5YQ8sdTM86uOglI5Oh97tbjxiyizx82eXrdDUbuAJI9vnZF4B0xsCDw33XDVGvQpGl2X1uJTgmpZVSK52GH1tNmHf7uxZiI~7QjkMwtCH9O7ukCFI4dNpsHDeDNQRTy7RQgEuoSGonoVvKfB-I2GJIIisQxQ3kK2nVfAXaeVXw__&Key-Pair-Id=APKAJM7FVRD2EPOYUXBQ", "https://www.pngkit.com/png/full/244-2445923_international-cricket-council-logo-icc-cricket-logo-png.png","https://www.pngkit.com/png/full/908-9086884_barclays-investment-bank-logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/CBS_Eyemark.svg/900px-CBS_Eyemark.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1200px-Walmart_Spark.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png", "https://www.jetpunk.com/img/user-photo-library/c7/c7b009065e-450.png", "https://www.jetpunk.com/img/user-photo-library/20/20b289e5ff-450.png", "https://www.jetpunk.com/img/user-photo-library/3b/3b25859771-235.png", "https://dwglogo.com/wp-content/uploads/2016/04/Marriott_Vector_logo.png", "https://media-exp1.licdn.com/dms/image/C4D0BAQF6Hjd0EnXeMw/company-logo_200_200/0?e=1612396800&v=beta&t=u0Rzm1ntHzG3TndJKssZ90q9f99KhjXclPd19v3fhSs", "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Reddit-512.png", "https://www.itouchapps.net/images/whats-that-logo/ikea.png", "https://i1.wp.com/files.polldaddy.com/dfea28885bbae3f0325d7a040163386e-59f353d6a751d.png", "https://www.pngkit.com/png/full/116-1161077_cvs-logo-heart.png","https://assets.stickpng.com/images/5842905ca6515b1e0ad75ab9.png", "https://www.gettinghired.com/images/609/default/Fannie-Mae-Logo.png","https://www.pngkit.com/png/full/136-1362719_metlife-logo-logo-metlife.png", "https://dwglogo.com/wp-content/uploads/2015/12/Lockheed-Martin-Symbol.png", "https://cdn-images-1.medium.com/max/1200/1*d7fYAnWUS9rDntWGdABxPw.png", "https://media-exp1.licdn.com/dms/image/C4E0BAQGBxYL28x8h9g/company-logo_200_200/0?e=2159024400&v=beta&t=9od88FB3kOyyMQYi7qI5GO5W2iY9dEIcxEyeMJJHE4o", "https://png2.cleanpng.com/sh/ab63584c5a8ca4cd840d848702159ed6/L0KzQYm3VcI5N6hwjpH0aYP2gLBuTfxwb5Cyiedyej3vf7j2TgF2casye9H2cHHxiX78jvl1bZUyiAZqdHX2Pb3wjvUufJZogND4bHBqiX68gsBjbGg6StZvOETmRXA4WcE2Pmg4SKMAMke4QIO9V8Q6OWY7RuJ3Zx==/kisspng-logo-quiz-logo-quiz-company-united-states-line-technology-5b0bd752df84c5.1915673015275026749156.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" ];
var answerArray = ["McDonalds", "Dominos", "Bank of America", "X-box", "Play Station", "Instagram", "Expedia", "Maserati", "General Electric", "Vodafone", "Renault", "Twitter", "Lucky-Goldstar Electronics", "Beats", "Suzuki", "Sprint", "Lufthansa", "Starbucks", "Nova Southeastern University", "ICC", "Barclays", "Columbia Broadcasting System", "Walmart", "Android", "Pizza Hut", "Pringles", "Miami Dolphins", "Marriott", "Palantir Technologies", "Reddit", "Ikea", "Doritos", "Consumer Value Store", "American Telephone and Telegraph", "Fannie Mae", "Metlife", "Lockheed Martin", "Robinhood Markets", "Prudential Financial", "Cisco Systems", "Linux"];
var correctAnswers = 0;
var total = 0;
var currentCorrectOption = 0;
var tempArray = [""];
var askedQuestions = [];
var currentQuestionIndex = 0;

function start() {
    console.log("Len of imgArray: "+ imgArray.length);
    console.log("Len of answerArray: "+ answerArray.length);
    setQuestion(getCorrectOption());
    checkAction();
}

function checkAction() {
    var submitButton = document.getElementById("SubmitButton");
    submitButton.disabled = false;
    submitButton.addEventListener("click", submit, false);
    var skipButton = document.getElementById("SkipButton");
    skipButton.disabled = false;
    skipButton.addEventListener("click", skip, false);
    var nextButton = document.getElementById("NextButton");
    nextButton.addEventListener("click", nextQuestion, false);

}

function skip() {
    var submitButton = document.getElementById("SubmitButton");
    submitButton.disabled = true;
    var NextButton = document.getElementById("NextButton");
    NextButton.disabled = false;
    var message = document.getElementById("message");
    message.innerHTML = "Correct Answer was option " + (currentCorrectOption + 1) + ": " + answerArray[currentQuestionIndex];
    selectCorrect();
    updateScoreTable();
}

function selectCorrect(){
    var o1 = document.getElementById("option1");
    var o2 = document.getElementById("option2");
    var o3 = document.getElementById("option3");
    var o4 = document.getElementById("option4");
    if (currentCorrectOption == 0){
        o1.checked = true;
    }
    else if (currentCorrectOption == 1){
        o2.checked = true;
    }
    else if (currentCorrectOption == 2){
        o3.checked = true;
    }
    else if (currentCorrectOption == 3){
        o4.checked = true;
    }

}

function nextQuestion() {
    var message = document.getElementById("message");
    message.innerHTML = " ";
    console.log("Total = " + total);
    if (total == 20) {
        finished();
        return;
    }
    resetOptions();
    setQuestion(getCorrectOption());
    checkAction();
}


function getQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * imgArray.length);
    while (askedQuestions.includes(currentQuestionIndex)) {
        currentQuestionIndex = Math.floor(Math.random() * 20);
    }
    askedQuestions.push(currentQuestionIndex);
    total++;
}


function finished() {
    document.getElementById("mainDiv").innerHTML = " ";
    document.getElementById("Form").innerHTML = " ";
    FinishScoreTable();
}

function FinishScoreTable() {
    var finish = document.getElementById("finish");
    finish.innerHTML = "Thank you for taking the Logo Quiz."
    var tableDiv = document.getElementById("ScoreTableDiv");
    tableDiv.innerHTML = "<table>" +
        "<caption> Final Score </caption>" +
        "<thead><th> Questions Answered</th> <th> Correct Answers </th>" +
        "<th> Score </th> </thead>" +
        "<tbody> <tr> <td> " + total + "/20 </td> <td>" + correctAnswers + "</td> <td>" +
        formatPercent(correctAnswers / total) + "%</td> </tr>" + " </tbody> </table>";
}

function submit() {
    var submitButton = document.getElementById("SubmitButton");
    submitButton.disabled = true;
    var NextButton = document.getElementById("NextButton");
    NextButton.disabled = false;
    var selection = checkResponse();
    var message = document.getElementById("message");
    if (selection == -1) {
        message.innerHTML = "No Option Selected";
        checkAction();
    }
    else {
        if (selection == currentCorrectOption) {
            correctAnswers++;
            message.innerHTML = "Correct Answer !";
        }
        else {
            message.innerHTML = "Wrong Answer !";
        }
        updateScoreTable();
    }
}

function resetOptions() {
    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;
}

function checkResponse() {
    if (document.getElementById("option1").checked) {
        return 0;
    }
    else if (document.getElementById("option2").checked) {
        return 1;
    }
    else if (document.getElementById("option3").checked) {
        return 2;
    }
    else if (document.getElementById("option4").checked) {
        return 3;
    }
    else {
        return -1;
    }
}

function getCorrectOption() {
    currentCorrectOption = Math.floor(Math.random() * 4);
    return currentCorrectOption;
}

function updateScoreTable() {
    var tableDiv = document.getElementById("ScoreTableDiv");
    tableDiv.innerHTML = "<table>" +
        "<caption> Current Score </caption>" +
        "<thead><th> Questions Answered</th> <th> Correct Answers </th>" +
        "<th> Score </th> </thead>" +
        "<tbody> <tr> <td> " + total + "/20 </td> <td>" + correctAnswers + "</td> <td>" +
        formatPercent(correctAnswers / total) + "%</td> </tr>" + " </tbody> </table>";
}

function formatPercent(value) {
    value *= 100;
    return value.toFixed(2);
}

function setQuestion(answerChoice) {
    getQuestion();
    var QImg = document.getElementById("QuestionImage");
    QImg.setAttribute("src", imgArray[currentQuestionIndex]);
    var label = document.getElementsByTagName("label")[answerChoice];
    label.innerHTML = answerArray[currentQuestionIndex];
    tempArray.push(answerArray[currentQuestionIndex]);
    setOtherOptions(answerChoice);

    var NextButton = document.getElementById("NextButton");
    NextButton.disabled = true;
}

function setOtherOptions(answerChoice) {
    var label = document.getElementsByTagName("label");
    for (var i = 0; i < 4; ++i) {
        var flag = true;
        while (i != answerChoice && flag) {
            var temp = randomAnswerChoice();
            if (tempArray.includes(temp)) {
                continue;
            }
            else {
                label[i].innerHTML = temp;
                tempArray.push(temp);
                flag = false;
            }
        }
    }
    tempArray = [""];
}

function randomAnswerChoice() {
    var index = Math.floor(Math.random() * answerArray.length);
    return answerArray[index];
}

window.addEventListener("load", start, false);

