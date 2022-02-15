
var innerDiv=document.getElementById("inner")
innerDiv.addEventListener("click",function(event)
{
    console.log("inner Div clicked");
    event.stopPropagation();
});
var outerDiv=document.getElementById("outer")
outerDiv.addEventListener("click",function(event)
{
    console.log("outer Div clicked");
    event.stopPropagation();

});
document.addEventListener("click",function()
{
    console.log("Document clicked");
});
