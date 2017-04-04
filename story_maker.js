function makeStory() {
    // get form values (2 points)
    var name = document.getElementById('name').value;
    var teacher = document.getElementById('teacher').value;
    var adjective = document.getElementById('adjective').value;
    var noun1 = document.getElementById('noun1').value;
    var commonnoun1 = document.getElementById('commonnoun1').value;
    var commonnoun2 = document.getElementById('commonnoun2').value;
    var number = document.getElementById('number').value;
    var adverb1 = document.getElementById('adverb1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var number2 = document.getElementById('number2').value;
    var schoolname = document.getElementById('schoolname').value;
    // Set title of story. Use at least one form value in the title. (2 points)
    var title = name + "'s Excuse for tardiness";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "Dear " + teacher + ",";
    var paragraph2 = "Please excuse me for being tardy to your " + adjective + " class. The reason that I was late to class this morning was because my " + commonnoun1 + " got stuck in the " + noun1 + ", so we had to call the " + commonnoun2 + " to help us with the situation. After that, the " + commonnoun2 + " had finally left. We knew we only had " + number + " minutes before school starts, so we " + adverb1 + " in the " + noun2 + " and rushed to " + noun3 + " to get breakfest. I tried to eat my " + noun4 + " as fast as I could but my " + noun5 + " weren't even half way done with their food. So I decided to call my friend, " + noun6 + ", to come pick me up from " + noun3 + " to take me to school.";
    var paragraph3 = number2 + " minutes later, we had finally arrived at " + schoolname + ". And that is my excuse for being late. Sorry.";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
   document.getElementById("bigtitle").style.font = "italic bold 20px arial,serif";
   document.getElementById('title').innerHTML = title;
   document.getElementById('one').innerHTML = paragraph1;
   document.getElementById('two').innerHTML = paragraph2;
   document.getElementById('three').innerHTML = paragraph3;
   document.getElementById('image').innerHTML = "<img src='pic1.jpg'/>";
}
