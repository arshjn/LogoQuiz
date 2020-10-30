var imgArray = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1024px-Domino%27s_pizza_logo.svg.png", "https://www.logotaglines.com/wp-content/uploads/2016/11/Bank-Of-America-Logo.png", "https://logodix.com/logo/20228.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1200px-Playstation_logo_colour.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png", "https://lh3.googleusercontent.com/proxy/eNiONUe-NIlFlpOmUw1uwfy7hT2K49owBxMo_ShwmtiehrNzIPEOhZH5l3SWg0q-mov6Ft7rxa8wKwOIk839jGXeP6AU4NFhRFpoeuq5xcLeb-DIC62P-d5QxUQ", "https://lh3.googleusercontent.com/proxy/oPjJt1E1cGHz31jg-UliS4sVbaKRklvozalVKcYaao_pPxGfdFxK7HfF6Ls_D2_F645TvwPyIjCqFHy17CpmPzeBDl9vycgMcpFdgTO3ch7SR89jpr-CYo3i9QLX", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/240px-General_Electric_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg", "https://purepng.com/public/uploads/medium/purepng.com-renault-logorenaultgroupe-renaultautomobile-manufacturerrenault-automobilesrenault-logo-1701527610699mb9ol.png", "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png", "https://lh3.googleusercontent.com/proxy/yaQB2-el6FeeOJ_M8UDXK8bKb1mBZCPxOSfIvsb0He3aa8kyPSJZ62WIppHpu8Ja9ddxSipcQsqx15mgH687NpqLGU7-cgMSiV7eObqkOYGmlCfblmX_RYL_1QY", "https://www.jetpunk.com/img/user-photo-library/a9/a9adb4cf11-450.png", "https://www.car-brand-names.com/wp-content/uploads/2016/03/Suzuki-logo.png", "https://1000logos.net/wp-content/uploads/2019/05/Sprint-emblem.jpg", "https://dwglogo.com/wp-content/uploads/2019/03/2200px-lufthansa_logo.png", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", "https://previews.us-east-1.widencdn.net/preview/39977711/assets/asset-view/75cd02dd-912e-48a5-abe2-44ea6b452fba/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?Expires=1604113200&Signature=Iuy2c2jeiVtsi~I9zVM8cm22s6pF47x5yZKNhxljWPRxi~XZYlmFDQnz33IwPZ~04ptgkIE7eyMC1L51Zg8YdZXzS~FZ36ySCEuGkQLaX1LAAtGrUD4prP3TuI8HbCmKngACbHGIoBER4710ITMBW5q7WxstUKbskP33ngPmqEdg5YQ8sdTM86uOglI5Oh97tbjxiyizx82eXrdDUbuAJI9vnZF4B0xsCDw33XDVGvQpGl2X1uJTgmpZVSK52GH1tNmHf7uxZiI~7QjkMwtCH9O7ukCFI4dNpsHDeDNQRTy7RQgEuoSGonoVvKfB-I2GJIIisQxQ3kK2nVfAXaeVXw__&Key-Pair-Id=APKAJM7FVRD2EPOYUXBQ", "https://www.pngkit.com/png/full/244-2445923_international-cricket-council-logo-icc-cricket-logo-png.png" ];
var answerArray = ["McDonalds", "Dominos", "Bank of America", "X-box", "Play Station", "Instagram", "Expedia", "Maserati", "General Electric", "Vodafone", "Renault", "Twitter", "Lucky-Goldstar Electronics", "Beats", "Suzuki", "Sprint", "Lufthansa", "Starbucks", "Nova Southeastern University", "ICC" ];
var correctAnswers = 0;
var total = 0;
var currentCorrectOption = 0;
var tempArray = [""];
var currentQuestionIndex = 0;

function start() {
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
    message.innerHTML = "Correct Answer was option " + (currentCorrectOption+1) + ": " + answerArray[currentQuestionIndex];
    updateScoreTable();
}

function nextQuestion() {
    var message = document.getElementById("message");
    message.innerHTML = " ";
    console.log("Total = "+ total);
    if (total == 20){
        finished();
        return;
    }
    resetOptions();
    console.log("Cleared Message");
    setQuestion(getCorrectOption());
    console.log("Set new question");
    checkAction();
    console.log("Checking for Action");
}

function finished(){
    document.getElementById("mainDiv").innerHTML = " ";
    document.getElementById("Form").innerHTML = " ";
    FinishScoreTable();
}

function FinishScoreTable(){
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
        console.log("Updated Score Table");
    }
}

function resetOptions(){
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

function getQuestion() {
    currentQuestionIndex = total++;
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
    var index = Math.floor(Math.random() * 20);
    return answerArray[index];
}

window.addEventListener("load", start, false);

