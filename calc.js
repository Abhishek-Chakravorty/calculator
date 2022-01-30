let btn=document.getElementsByClassName("btn");
let input=document.getElementById("input")
input.innerHTML=0;
let sum=0 ,flag=0,a=0,count=0,output,total=0;
console.log(btn)
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",clickfunc);
    function clickfunc()
    {
        if(btn[i].innerHTML=="=")
        {
            output=input.innerHTML;
            input.innerHTML=eval(output);
        }
        else if(btn[i].innerHTML=="C")
        input.innerHTML="0";
        else if(btn[i].classList.contains("operator"))
        {
            if(count==0)
            {
                input.innerHTML+=btn[i].innerHTML;
            }
            count++;
        }
        else if(btn[i].innerHTML=="C.E")
        {
                let str=input.innerHTML;
                str=str.substr(0,str.length-1);
                input.innerHTML=str;
                if(str[str.length-1]=="+"||str[str.length-1]=="-"||str[str.length-1]=="*"||str[str.length-1]=="/"
                ||str[str.length-1]==".")
                count=1;
                else
                count=0;
        }
        else if(input.innerHTML=="0")
        {
        input.innerHTML=btn[i].innerHTML;
        count=0;
        }
        else if(btn[i].innerHTML==".")
        {
            let mainstr = input.innerHTML;
            if(! mainstr.includes("."))
               {
            input.innerHTML+=btn[i].innerHTML; 
            count =0;
        }
        else
        {
        input.innerHTML+=btn[i].innerHTML;
        count=0;
        }
    }
}
