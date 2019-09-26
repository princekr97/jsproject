var divlength=document.querySelectorAll('.song').length;
        console.log(divlength);
        for(var i=0;i<divlength;i++)
        {
            var demo=document.querySelectorAll('.song')[i].addEventListener('click',playsong);
            var demo=document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
        }
        var song1=new Audio();//audio is a object
        song1.src="m1.mp3";
        var song2=new Audio();//audio is a object
        song2.src="m2.mp3";
        var song3=new Audio();//audio is a object
        song3.src="m3.mp3";
        var song4=new Audio();//audio is a object
        song4.src="m3.mp3";
        var song5=new Audio();//audio is a object
        song5.src="m2.mp3";
        var song6=new Audio();//audio is a object
        song6.src="m3.mp3";
        var song7=new Audio();//audio is a object
        song7.src="m1.mp3";
        var song8=new Audio();//audio is a object
        song8.src="m2.mp3";
        var song9=new Audio();//audio is a object
        song9.src="m3.mp3";
        function playsong()
        {
            var songId=this.innerHTML;
            console.log(songId);
            switch(songId)
            {
                case "a":
                    song1.play();
                    break;
                    case "b":
                    song2.play();
                    break;
                    case "c":
                    song3.play();
                    break;
                    case "d":
                    song4.play();
                    break;
                    case "e":
                    song5.play();
                    break;
                    case "f":
                    song6.play();
                    break;
                    case "g":
                    song7.play();
                    break;
                    case "h":
                    song8.play();
                    break;
                    case "i":
                    song9.play();
                    break;
                    default:
                        console.log("wrong output");
                        break;
            }


        }
        function pausesong()
        {
            var songId = this.innerHTML;
 console.log(songId);
            switch(songId)
            {
                case "a":
                    song1.pause();
                    break;
                    case "b":
                    song2.pause();
                    break;
                    case "c":
                    song3.pause();
                    break;
                    case "d":
                    song4.pause();
                    break;
                    case "e":
                    song5.pause();
                    break;
                    case "f":
                    song6.pause();
                    break;
                    case "g":
                    song7.pause();
                    break;
                    case "h":
                    song8.pause();
                    break;
                    case "i":
                    song9.pause();
                    break;
                    default:
                        console.log("wrong output");
                        break;
            }
        }







console.log("ajax project");
let detail=document.getElementById('detail');
detail.addEventListener('click',buttonClickHandler)

function buttonClickHandler()
{
    console.log("you have click fetch button");

    const xhr=new XMLHttpRequest();
    xhr.open('GET','cd.xml',true);


    xhr.onprogress=function()
    {
        console.log('on progress');
    }

xhr.onload=function()
{
    if(this.status===200)
    {
        console.log(this.responseText);
      //  myFunction(this);
    }
    else
    {
        Console.log("some error");

    }
}
xhr.send();
}
