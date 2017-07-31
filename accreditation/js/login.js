function submitentry(){
password = document.password1.password2.value.toLowerCase()
username = document.password1.username2.value.toLowerCase()
passcode = 1
usercode = 1
for(i = 0; i < password.length; i++) {
passcode *= password.charCodeAt(i);
}
for(x = 0; x < username.length; x++) {
usercode *= username.charCodeAt(x);
}
//CHANGE THE NUMBERS BELOW TO REFLECT YOUR USERNAME/PASSWORD
if(usercode==16800843889557000&&passcode==2.4138847670135472e+24)
//CHANGE THE NUMBERS ABOVE TO REFLECT YOUR USERNAME/PASSWORD
{
window.location=password+"lounge.html"}
else{
alert("password/username combination wrong")}
}