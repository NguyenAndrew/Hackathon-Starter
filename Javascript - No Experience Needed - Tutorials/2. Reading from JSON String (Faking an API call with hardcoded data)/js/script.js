// Note: Multiline Strings use `backticks` instead of 'single quotes'
const JSON_TEXT = `
{
    "month": "September",
    "day": 15,
    "year": 1995
} 
`;

const DIV_BODY = document.getElementById("birthday-program");

const DATE = JSON.parse(JSON_TEXT);

DIV_BODY.innerHTML += "<b>" + "My Birthdate" + "</b>";
DIV_BODY.innerHTML += "<p>" + "The year I was born: " + DATE.year + "</p>";
DIV_BODY.innerHTML += "<p>" + "The month I was born: " + DATE.month + "</p>";
DIV_BODY.innerHTML += "<p>" + "The day I was born: " + DATE.day + "</p>";