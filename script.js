function compute()
{
    var principal = document.getElementById("principal").value;
    //validation for principal amount if 0 or less than 0 then focus back on input field
    if(principal<0||principal==0 )
    {
        alert("Enter Positive Number");
        document.getElementById("principal").focus();
    } 
    else
    {
        //if valid principal amount calculate intrest and display on html page
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposite \<b>"+principal+",\</b>\<br\> at an interest rate of \<b>"+
        rate+"%\</b>,\<br\> you will receive amount of \<b>"+interest+"\</b>,\<br\> in the year \<b>"+year+"\</b>\<br\>"
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        