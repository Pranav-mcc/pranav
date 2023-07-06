let datas;
let amtinp,amtbal;
let a,b,c,d,pattern,pinnumber;
let accBank;
function forgetpass()
{
  pin.style="margin-top:200px;"
  pin.innerHTML='<h5 style="text-align:center;">MOBILE NO</h5>'+'<input type="number" id="mobnum" class="form-control">'+'<br>'+
  '<button type="button" onclick=checkndsendotp() class="btn btn-success">Send OTP</button>'
  +'<br>' +'<h5 style="text-align:center;">ENTER THE OTP</h5>'+'<input type="number" id="enterotp" class="form-control">'+'<br>'+'<button class="btn btn-success" onclick="setpin()">Next</button>'
}
function checkndsendotp()
{
  a=document.getElementById('mobnum').value;
  if(a==sessionStorage.getItem('mob'))
  {
    pattern=/^[0-9]{10}$/;
    b=pattern.test(a);
    if(b==true)
    {
    c=Math.floor(Math.random()*10000);
     alert("Your OTP is "+c);
    }
    else
    {
      alert("INVALID MOBILE NUMBER");
    }
  }
  else{
    alert("ENTERED NUMBER IS NOT REGISTERED");
  }
}
function sendotp()
 {
    a=document.getElementById('mobnum').value;
   pattern=/^[0-9]{10}$/;
   b=pattern.test(a);
   if(b==true)
   {
   c=Math.floor(Math.random()*10000);
    alert("Your OTP is "+c);
   }
   else
   {
    alert("INVALID MOBILE NUMBER");
   }
 }
function setpin()
{
 d=document.getElementById('enterotp').value;
  if(c==d)
  {
   pin.innerHTML='<h3 style="text-align:center;">SET PIN</h3><br>'+'<h5 style="text-align:center;">NEW PIN</H5>'+
  '<input type="number" id="setpinnum" class="form-control"><br>' +'<button type="button" class="btn btn-success" onclick="pincreated()">Set Pin</button>'
}
else
{
  alert("INVALID OTP");
}
}
function pincreated()
{
  pinnumber=document.getElementById('setpinnum').value;
  if(pinnumber.length==6)
  {
    alert("PIN CREATED");
    sessionStorage.setIte
    m('pin',pinnumber);
  pin.innerHTML='<H5 style="text-align: center;">PIN NUMBER</H5>'+'<input class="form-control" id="pinno" onkeyup="pincheck()" type="number"/> '+'<br>'+'<a href="#" onclick="forgetpass()">Forget Pin</a>'+
  '<button type="button" style="margin-left: 90px;" class="btn btn-success" onclick="register()">Register</button>'
}
else
{
  alert("Enter a 6 digit PIN number");
}
}
function register()
{
  pin.innerHTML='<h5 style="text-align:center;">MOBILE NO</h5>'+'<input type="number" id="regmobnum" class="form-control">'+'<br>'+'<button type="button" class="btn btn-success" onclick="registerpin()">Send OTP</button>'
  +'<br>' +'<h5 style="text-align:center;">ENTER THE OTP</h5>'+'<input type="number" id="regenterotp" class="form-control">'+'<br>'+'<button class="btn btn-success" onclick="kyc()">Next</button>'
}
function registerpin()
{
  a=document.getElementById('regmobnum').value;
  sessionStorage.setItem('mob',a);
   pattern=/^[0-9]{10}$/;
   b=pattern.test(a);
   if(b==true)
   {
   c=Math.floor(Math.random()*10000);
   alert("Your OTP is "+c);
   }
   else
   {
    alert("INVALID MOBILE NUMBER");
   }
}
function kyc()
{
  d=document.getElementById('regenterotp').value;
  if(c==d)
  {
  pin.style="margin-top:150px;"
  pin.innerHTML='<h2 style="text-align:center;">KYC</h2>'+"Name :"+'<input type="text" id="Name" class="form-control">'+
  "Age :"+'<input type="text" id="age" class="form-control">'+"E-Mail :"+'<input type="email" id="email" class="form-control">'+
  "Aadhar No :"+'<input type="text" id="aadharno" class="form-control">'+"PIN NO :"+'<input type="text" id="pinnumbers" class="form-control">'+
  '<br>'+'<button type="button" class="btn btn-success" onclick="completedkyc()">Complete KYC</button>'
}
else
{
  alert("INVALID OTP");
}
}
function completedkyc()
{
  let name=document.getElementById('Name').value;
  namepattern=/^[a-zA-Z]+$/;
  let ages=document.getElementById('age').value;
  agepattern=/^[0-9]+$/;
  let emails=document.getElementById('email').value;
  let aadhar=document.getElementById('aadharno').value;
  aadharpattern=/^[0-9]{12}$/;
  let PIN=document.getElementById('pinnumbers').value;
  PINpattern=/^[0-9]{6}$/;
  nametest=namepattern.test(name);
  agetest=agepattern.test(ages);
  aadhartest=aadharpattern.test(aadhar);
  pintest=PINpattern.test(PIN);
  console.log(nametest,agetest,aadhartest,pintest);
  if(nametest==true&&agetest==true&&aadhartest==true&&pintest==true)
  {
    sessionStorage.setItem('name',name);
    sessionStorage.setItem('age',ages);
    sessionStorage.setItem('email',emails);
    sessionStorage.setItem('aadhar',aadhar);
    sessionStorage.setItem('pin',PIN);
    alert("KYC COMPLETED");
    pin.innerHTML='<H5 style="text-align: center;">PIN NUMBER</H5>'+'<input class="form-control" id="pinno" onkeyup="pincheck()" type="number"/> '+'<br>'+'<a href="#" onclick="forgetpass()">Forget Pin</a>'+
    '<button type="button" style="margin-left: 90px;" class="btn btn-success" onclick="register()">Register</button>'
  }
  else
  {
    alert("something wrong with your details..")
  }
}
function pincheck()
{
  let e=document.getElementById('pinno').value;
  let pins='';
  pins+=e;
  if(pins.length==6)
  {
    if(pins==sessionStorage.getItem('pin'))
  {
    pin.innerHTML='<h2 style="text-align:center;color:green;">MENU</h2>'+'<h5 ><a onclick="profile()" style="text-decoration:none;" href="#">PROFILE</a></H5>'+'<h5><a onclick="transfer()" style="text-decoration:none;" href="#">TRANSFER</a></H5>'
    +'<h5><a href="#" style="text-decoration:none;" onclick="checkbal()">CHECK BALANCE</a></H5>'+'<h5><a style="text-decoration:none;" href="#" onclick="accounts()">ACCOUNTS</a></H5>'+'<h5><a onclick="linkacc() " style="text-decoration:none;" href="#">LINK ACC</a></H5>'
  }
}
}
function linkacc()
{
  pin.style="margin-top:150px";
  pin.innerHTML='<h2 style="text-align:center;">Link Account</h2><h5>Bank Name :</h5><input id="banknames" type="text" class="form-control">'
  +'<h5>IFSC Code :</h5><input type="text" id="ifsccodes" class="form-control"><h5>ACC No :</h5><input id="accnos" type="text" class="form-control">'
  +'<h5>Re-enter Acc No :</h5><input type="text" id="reacc" class="form-control"><h5>Balance :</h5><input id="balances" type="text" class="form-control">'
  +'<br><button type="button" class="btn btn-success" onclick="accverify()">Link Acc</button><br>'+
  '<button type="button" class="btn btn-success" onclick="back()">Back</button>'
}
function accverify()
{
 let bankname=document.getElementById('banknames').value;
 let ifsccode=document.getElementById('ifsccodes').value;
 let accno=document.getElementById('accnos').value;
 let balance=document.getElementById('balances').value;
 if(accno==document.getElementById('reacc').value)
 {
 let obj={
  'bankname':bankname,
  'ifsccode':ifsccode,
  'accno':accno,
  'balance':balance,
 };
 let existingData = JSON.parse(sessionStorage.getItem('data')) || [];
existingData.push(obj);
sessionStorage.setItem('data', JSON.stringify(existingData));
  pin.innerHTML='<h2 style="text-align:center;">OTP VERIFICATION</h2><h5>Enter the OTP :</H5><input type="text" id="otp2" class="form-control">'
  +'<br><button type="button" class="btn btn-success" onclick="tpin()">Verify</button>'
  c=Math.floor(Math.random()*10000);
    alert("Your OTP is "+c);
  }
else
  {
    alert("CHECK THE ACCOUNT NUMBER");
  }
}
function tpin()
{
  let e=document.getElementById('otp2').value;
  if(c==e){
  pin.innerHTML='<h2 style="text-align:center;">SET T-PIN</h2><h5>Create a T-PIN :</h5><input id="transferpin" type="text" class="form-control">'
  +'<br><button type="button" onclick="tpinverify()" class="btn btn-success">Submit</button>'
}
else
{
  alert("INVALID OTP");
}}
function tpinverify()
{
  let tpins=document.getElementById('transferpin').value;
  sessionStorage.setItem('tpin',tpins);
  alert("T-PIN CREATED");
  //sessionStorage.setItem('counts',Number(sessionStorage.getItem('counts')+1));
  //console.log(sessionStorage.getItem('counts'));
  pin.innerHTML='<h2 style="text-align:center;color:green;">MENU</h2>'+'<h5 ><a onclick="profile()" style="text-decoration:none;" href="#">PROFILE</a></H5>'+'<h5><a onclick="transfer()" style="text-decoration:none;" href="#">TRANSFER</a></H5>'
  +'<h5><a href="#" style="text-decoration:none;" onclick="checkbal()">CHECK BALANCE</a></H5>'+'<h5><a style="text-decoration:none;" href="#" onclick="accounts()">ACCOUNTS</a></H5>'+'<h5><a onclick="linkacc() " style="text-decoration:none;" href="#">LINK ACC</a></H5>'
}
function accounts()
{
   datas=JSON.parse(sessionStorage.getItem('data'));
 pin.innerHTML='<h3 style="text-align:center">LINKED ACCOUNTS AND DETAILS</h3>'
 for(let i=0;i<datas.length;i++)
 {
    pin.innerHTML+='<h5>BANK NAME :</H5>'+datas[i].bankname+'<br>'+
    '<H5>IFSC CODE :</H5>'+datas[i].ifsccode+'<br>'+'<H5>ACC NO :</H5>'+datas[i].accno+'<br>'+
     '<H5>BALANCE :</H5>'+datas[i].balance+'<br><br>'
 }
 pin.innerHTML+='<button type="button" class="btn btn-success" onclick="back()">Back</button>'
}
function checkbal()
{
  datas=JSON.parse(sessionStorage.getItem('data'));
  pin.innerHTML='<h2>CHECK BALANCE</h2><h5>Choose ACC :</h5>'+'<select id="drop"></select>'
  for(let i=0;i<datas.length;i++)
  {
    var option = document.createElement('option');
    option.text = datas[i].bankname;
    drop.add(option);
  }
  pin.innerHTML+='<h4>T-PIN :</h4><input type="text" id="TPIN" class="form-control"><br><button onclick="showbalance()" type="button" class="btn btn-success" onclick="bal()">View Balance</button>'+
  '<br><button type="button" class="btn btn-success" onclick="back()">Back</button>'
}
function showbalance()
{
  amtbal=document.getElementById('drop').value
  if(document.getElementById('TPIN').value==sessionStorage.getItem('tpin'))
  {
  datas=JSON.parse(sessionStorage.getItem('data'));
  for(let i=0;i<datas.length;i++)
  {
    if(datas[i].bankname==amtbal)
    {
      alert("YOUR ACCOUNT BALANCE IS Rs."+datas[i].balance);
       back();
    }
  }
}
else{
  alert("INVALID TPIN");
}}
function bal()
{
  pin.innerHTML='<h2>Account Balance</h2><h5>Amount :</h5><br><button type="button" class="btn btn-success">Close</button>'
}
function profile()
{
  pin.style="width:550px";
  pin.innerHTML='<h2 style="text-align:center; color:green;">PROFILE</H2><BR><h5>NAME : '+sessionStorage.getItem('name')+
  '</h5><h5>AGE :'+sessionStorage.getItem('age')+'</h5><h5>EMAIL : '+sessionStorage.getItem('email')+
  '</h5><h5>AADHAR NO :'+sessionStorage.getItem('aadhar')+'</h5>'+'<button type="button" class="btn btn-success" onclick="back()">Back</button>'
}
function transfer()
{
  datas=JSON.parse(sessionStorage.getItem('data'));
  pin.style="margin-top:150px";
  pin.innerHTML='<h2 style="text-align:center;">TRANSFER</H2><H5>Mobile no Or UPI :</h5><input id="transfermob" type="text" class="form-control">'
  +'<H5>To Mobile :</h5><input type="text" class="form-control">'
  +'<H5>Choose A/C :</h5>'+'<select id="trAcc"></select>'
  console.log(datas.length);
  for(let i=0;i<datas.length;i++)
  {
    var option = document.createElement('option');
    option.text = datas[i].bankname;
    trAcc.add(option);
  }
  pin.innerHTML+='<H5>Amount :</h5><input type="text" id="amt" class="form-control">'
  +'<br><button type="button" onclick="moneytransfer()" class="btn btn-success">Send</button>'+
  '<br><button type="button" class="btn btn-success" onclick="back()">Back</button>'
}
function moneytransfer()
{
  amtinp=document.getElementById('amt').value
   let mobtransfer=document.getElementById('transfermob').value;
   accBank = document.getElementById('trAcc').value;
   //alert(accBank);
   if(mobtransfer==sessionStorage.getItem('mob'))
   {
    pin.innerHTML='<h2 style="text-align:center;">Enter T-PIN</h2><input  id="tpincheck" type="text" class="form-control">'
    +'<br><button type="button" onclick="checktpin()"  class="btn btn-success">SEND MONEY</button>'
   }
   else
   {
    alert("WRONG MOBILE NUMBER");
   }
}
function checktpin()
{
  datas=JSON.parse(sessionStorage.getItem('data'));
  let tpin=document.getElementById('tpincheck').value;
  if(tpin==sessionStorage.getItem('tpin'))
  {
    for(let i=0;i<datas.length;i++)
    {
      if(accBank==datas[i].bankname)
      {
       
        if(datas[i].balance>=amtinp)
        {
          datas[i].balance=datas[i].balance-amtinp;
          sessionStorage.setItem('data',JSON.stringify(datas));
          alert("Money Transfered .... Your remaining Balance is Rs."+datas[i].balance);
          back();
        }
        else
        {
          alert("INSUFFICIENT BALANCE...");
          back();
        }
      }
    }
  }
  else
  {
    alert("WRONG TPIN..");
          back();
          
  } 
}
function back()
{ 
  pin.innerHTML='<h2 style="text-align:center;color:green;">MENU</h2>'+'<h5 ><a onclick="profile()" style="text-decoration:none;" href="#">PROFILE</a></H5>'+'<h5><a onclick="transfer()" style="text-decoration:none;" href="#">TRANSFER</a></H5>'
  +'<h5><a href="#" style="text-decoration:none;" onclick="checkbal()">CHECK BALANCE</a></H5>'+'<h5><a style="text-decoration:none;" href="#" onclick="accounts()">ACCOUNTS</a></H5>'+'<h5><a onclick="linkacc() " style="text-decoration:none;" href="#">LINK ACC</a></H5>'
}