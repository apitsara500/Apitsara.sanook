var number=0;
function postFunction(){
    var text1= document.getElementById("text1");
    if (number==0) { 
        var post1= document.getElementById("post1");
        post1.innerHTML=text1.value;
        number++
        } 
    else if (number==1) { 
        var reply1= document.getElementById("reply1");
        reply1.innerHTML=text1.value;
        number++
        }
         
    else if(number==2) { 
        var reply2= document.getElementById("reply2");
        reply2.innerHTML=text1.value;
        number++ 
    
    }
    else{
        alert("stop");
    }

}

function clearFunction(){
    var post1= document.getElementById("post1");
    var reply1= document.getElementById("reply1");
    var reply2= document.getElementById("reply2");
    reply1.innerHTML="";
    reply2.innerHTML="";
    post1.innerHTML="";
    number=0;
}


