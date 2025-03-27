let text1 = "daospid";
let text2 = "asodpsospd";
text1 && text2 ? console.log("Обидва поля заповнені") : console.log("Не всі поля заповнені");

let number1 = 3;
let number2 = 4;
(number1 + number2) > 10 ? console.log("Сума більша за 10") : console.log("Сума менша або дорівнює 10");

let textJavaScript = "PythonJavaCSharpRubyPHPJavaScriptGoSwiftKotlinHtmlCssTypeScriptPerlScalaDartHaskell"
if (textJavaScript.includes("JavaScript")){
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

let numberEx4 = 4;
numberEx4 > 10 && numberEx4 < 20 ? console.log("Число входить в діапазон від 10 до 20") : console.log("Число не входить в діапазон від 10 до 20");

let userName = "wyft";
let email = "sdfkl@dhfjfhs.";
let password = "4985725";
userName.length >= 3 && email.includes("@") && email.lastIndexOf(".") > email.indexOf("@") + 1 && password.length >= 6 ? console.log("Перенаправлення на іншу сторінку") : console.log("Помилка: неправильне заповнення");