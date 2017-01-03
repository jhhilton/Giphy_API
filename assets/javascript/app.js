var animals = ["Turtle", "Eagle", "Salmon", "Chicken", "Panda", "Racoon"];

for(var i = 0; i < animals.length; i++)
{
    document.write("<div>");
    {
       document.write("<button type='button' class='btn btn-success " + animals[i] + "'>" + animals[i] + "</button>");
    }
    document.write("</div>");
}
