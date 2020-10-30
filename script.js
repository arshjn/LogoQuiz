var imgArray = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1024px-Domino%27s_pizza_logo.svg.png"];
var answerArray = ["McDonalds", "Dominos", "Bank of America", "Wendys"];
var correctAnswers = 0;
var total = 0;
var currentCorrectOption = 0;
var tempArray = [""];

function start() {
    setQuestion(getQuestion(), getCorrectOption());
    checkAction();
}

function checkAction() {
    var submitButton = document.getElementById("SubmitButton");
    submitButton.addEventListener("click", submit, false);
}

function nextQuestion(){
    var message = document.getElementById("message");
    message.innerHTML = ""
    setQuestion(getQuestion(), getCorrectOption());
    checkAction();
}

function submit() {
    var selection = checkResponse();
    var message = document.getElementById("message");
    if (selection == -1) {
        message.innerHTML = "No Option Selected"
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
        nextQuestion();
    }
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
    return total++;
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
        formatPercent(correctAnswers / total) + "</td> </tr>" + " </tbody> </table>";
}

function formatPercent(value) {
    value *= 100;
    return value.toFixed(2);
}

function setQuestion(index, answerChoice) {
    var QImg = document.getElementById("QuestionImage");
    QImg.setAttribute("src", imgArray[index]);
    var label = document.getElementsByTagName("label")[answerChoice];
    label.innerHTML = answerArray[index];
    tempArray.push(answerArray[index]);
    setOtherOptions(answerChoice);
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
}

function randomAnswerChoice() {
    var index = Math.floor(Math.random() * 4);
    return answerArray[index];
}

window.addEventListener("load", start, false);

