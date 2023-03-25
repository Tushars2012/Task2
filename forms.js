function validateForm() {
    var name = document.forms["surveyForm"]["first name"].value;
    var name = document.forms["surveyForm"]["last name"].value;
    var date = document.forms["surveyForm"]["date"].value;
    var email = document.forms["surveyForm"]["email"].value;
    var number = document.forms["surveyForm"]["number"].value;
    var industry = document.forms["surveyForm"]["industry"].value;
    var feedback = document.forms["surveyForm"]["feedback"].value;
    var rating = document.forms["surveyForm"]["rating"].value;

    if (name == "") {
        alert("Please enter your first name.");
        return false;
    }
    if (name == "") {
        alert("Please enter your last name.");
        return false;
    }
    if (date == "") {
        alert("Please enter your DOB.");
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    if (number== "") {
        alert("Please enter your number.");
        return false;
    }
    if (industry == "") {
        alert("Please select your industry.");
        return false;
    }
    if (feedback == "") {
        alert("Please provide your feedback.");
        return false;
    }
    if (rating == "") {
        alert("Please rate our service.");
        return false;
    }
    return true;
}