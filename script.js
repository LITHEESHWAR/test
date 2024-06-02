function time(){
  setInterval(()=>{
    var day=new Date();
    var hh=day.getHours();
    var mi=day.getMinutes();
    var se=day.getSeconds();
    const hour= 30 * hh + mi/2;
    const minute=6*mi;
    const second=6*se;
    hr.style.transform=`rotate(${hour}deg)`;
    min.style.transform=`rotate(${minute}deg)`;
    sec.style.transform=`rotate(${second}deg)`;
  }) 
} 


  let f=0;
  let g=0;
  let task=5;
  let ind=4;
  let fill=0;


  function addFieldset() {
  let flag=true;
  if(flag){
    for(let i=1;i<=ind;i++){
      let s="t"+i;
      let temp=document.getElementById(s);
      if(temp.value == ""){
        alert("Fill" + " TODO " + i +"...");
        f=i;
        g=1;
        temp.style="border-color:red";
        flag=false;
        break;
      }
      else{
        flag=true;
      }
    }
  }
  if(flag){
  ind+=1;
  var fieldset = document.createElement('fieldset');
  var legend = document.createElement('legend');
  legend.innerText = 'TODO '+task; // textContent
  legend.classList.add('legend')
  var from=document.createElement('lable');
  from.innerText="from";
  var input = document.createElement("input");
  input.setAttribute("type", "time");
  var space = document.createTextNode("\u00A0\u00A0\u00A0");
  var to=document.createElement('lable');
  to.innerText="to";
  to.classList.add("to");
  var space2 = document.createTextNode("\u00A0\u00A0\u00A0");
  var input2 = document.createElement("input");
  input2.setAttribute("type", "time");
  var br1 = document.createElement('br');
  var br2 = document.createElement('br');
  var input3 = document.createElement("input");
  input3.setAttribute("type", "text");
  input3.setAttribute("placeholder","Which work are you want to do!" );
  input3.classList.add("text");
  let s="t"+ind;
  input3.setAttribute("id",s);
  input3.addEventListener("input",function(){
    if(input3.value.length>0){
    input3.style="border-color:black";
    }
  });
  var br3 = document.createElement('br');
  var br4 = document.createElement('br');
  let l="same"+task;
  let m="same"+task;
  let r="r"+task;
  var input4 = document.createElement("input");
  input4.setAttribute("type", "radio");
  input4.setAttribute("name",l);
  input4.classList.add("done");
  input4.setAttribute("id",r);
  var done=document.createElement('lable');
  done.innerText="Done";
  var input5 = document.createElement("input");
  input5.setAttribute("type", "radio");
  input5.setAttribute("name",m);
  input5.classList.add("nope");
  r+=task;
  input5.setAttribute("id",r);
  var nope=document.createElement('lable');
  nope.innerText="Nope";
  

  
  // Append the legend to the fieldset
  fieldset.appendChild(legend);
  fieldset.appendChild(from);
  fieldset.appendChild(space);
  fieldset.appendChild(input);
  fieldset.appendChild(to);
  fieldset.appendChild(space2);
  fieldset.appendChild(input2);
  fieldset.appendChild(br1);
  fieldset.appendChild(br2);
  fieldset.appendChild(input3);
  fieldset.appendChild(br3);
  fieldset.appendChild(br4);
  fieldset.appendChild(input4);
  fieldset.appendChild(done);
  fieldset.appendChild(input5);
  fieldset.appendChild(nope);
  fieldset.classList.add('custom-fieldset');

  


  // Append the fieldset to the body
  let x=document.getElementById("div1");
  x.appendChild(fieldset);
  task=task+1;
  }

}
function check(){
    let flag=true;
    let done=0;
    let nope=0;
    if(fill<4){
      for(var i=1;i<=fill;i++){
        let s="r"+i;
        var ch=document.getElementById(s);
        s+=i;
        var ch2=document.getElementById(s);
        if(ch.checked == false && ch2.checked==false){
          alert("Update Your Work Status Of TODO "+ i +" Before Submitting...");
          flag=false;
          break;
        }
        else if(ch.checked == true){
          done+=1;
        }
        else{
          nope+=1;
        }
      }
    }
    else{

    for(var i=1;i<task;i++){
        let s="r"+i;
        var ch=document.getElementById(s);
        s+=i;
        var ch2=document.getElementById(s);
        if(ch.checked == false && ch2.checked==false){
          alert("Update Your Work Status Of TODO "+ i +" Before Submitting...");
          flag=false;
          break;
        }
        else if(ch.checked == true){
          done+=1;
        }
        else{
          nope+=1;
        }
    }
  }
    if(flag){
      alert("See Your Work Progress");
      let b=document.getElementById("body");
      let div=document.createElement('div');
      let h2=document.createElement('h1');
      let h3=document.createElement('h1');
      let br=document.createElement('br');
      if(done>=nope){
        h2.innerText="You have completed "+done+" works out of "+(done+nope) + " Awesome";
        h3.innerText="You're an incredibly hard worker.... keep growing..."
      }
      else{
        h2.innerText="You have completed "+done+" works out of "+(done+nope) + " good";
        h3.innerText="The greater the effort, the greater the glory.... Work more..."
      }
      div.appendChild(br);
      div.appendChild(h2);
      div.appendChild(h3);
      h2.style="color:black;font-weight:bold;text-align:center";
      h3.style="color:black;font-weight:bold;font-size:50px;text-align:center";
      //b.innerText="";
      b.style.backgroundImage='url("Untitled\ design.png")';
      div.style="background:linear-gradient(to right,#dbdbdb,#eaeaea);margin-top:270px;border-radius:30px;height:190px;border:1px solid black"
      b.appendChild(div);
    }
}
function content(){
    let s="t"+f;
    if(g==1){
      let temp=document.getElementById(s);
      temp.style="border-color:black";
      f=0;
      g=0;
    }
}
function enable(s){
  if(fill<s[s.length-1])
    fill=s[s.length-1];
  let r1="r"+s[s.length-1];
  let done=document.getElementById(r1);
  r1="r"+s[s.length-1]+s[s.length-1];
  let nope=document.getElementById(r1);
  done.disabled=false;
  nope.disabled=false;
}