
var innerDiv=document.getElementById("inner")
innerDiv.addEventListener("click",function()
{
    console.log("inner Div clicked");
});
var outerDiv=document.getElementById("outer")
outerDiv.addEventListener("click",function()
{
    console.log("outer Div clicked");
});
document.addEventListener("click",function()
{
    console.log("Document clicked");
});
