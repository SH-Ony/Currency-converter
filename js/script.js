
var ans;

function check()
{
    var x=document.getElementById('input').value;
    if(x== 0)
    {
        alert("Enter amount")
    }
    else if(x<0)
    {
        alert("Enter Positive amount")
    }
}

function toTaka(n)
{
    
    ans=n;
    
}

function takaTo()
{
    return ans;
}