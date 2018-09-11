
$(document).ready(function(event) {
  alert("JS is running!");
  $("#blankForm form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var surnameInput = $("input#surname").val();
    var jobTitleInput = $("input#jobTitle").val();
    var currentDate = new Date();
    var month = currentDate.getMonth()+1;
    var day = currentDate.getDate();
    var letterDate = currentDate.getFullYear() + '/' + (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day;

    $("span#firstName").text(firstNameInput);
    $("span#lastName").text(lastNameInput);
    $("span#surname").text(surnameInput);
    $("span#jobTitle").text(jobTitleInput);
    $("span#letterDate").text(letterDate);

    $("#blankForm").hide();

    $("#letter").show();

    event.preventDefault();
  });
});
