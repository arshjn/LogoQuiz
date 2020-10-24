var imgArray = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"];
var answerArray = ["McDonalds", "KFC", "Pizza Hut", "Dominos"];
var correct = 0;
var total = 0;
var A = document.getElementById("option1");
var B = document.getElementById("option2");
var C = document.getElementById("option3");
var D = document.getElementById("option4");
var currentCorrectOption = 0;
var tempArray = [""];

function start() {
    setQuestion(getQuestion(), getCorrectOption())
    var button = document.getElementById("TossButton");
    button.addEventListener("click", flipCoin, false);
}

function getQuestion() {
    return total;
}
function getCorrectOption() {
    currentCorrectOption = Math.floor(Math.random() * 4);
    return currentCorrectOption;
}

function updateScoreTable() {
    var tableDiv = document.getElementById("frequencyTableDiv");
    tableDiv.innerHTML = "<table>" +
        "<caption> Current Score </caption>" +
        "<thead><th> Questions Answered</th> <th> Correct Answers </th>" +
        "<th> Score </th> </thead>" +
        "<tbody> <tr> <td> " + total + "/20 </td> <td>" + correct + "</td> <td>" +
        formatPercent(correct / total) + "</td> </tr>" + " </tbody> </table>";
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
            var temp = randomAnswer();
            if (tempArray.includes(temp)) {
                continue;
            }
            else {
                label[i].innerHTML = temp;
                tempArray.push(temp);
                flag = false;
                console.log("temp = "+ temp);
                console.log("label["+i+"] = " + label[i]);
            }
        }
    }
}

function randomAnswer() {
    var index = Math.floor(Math.random() * 4);
    return answerArray[index];
}

window.addEventListener("load", start, false);

