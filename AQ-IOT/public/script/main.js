//var funccall;
const database = firebase.database();
const usersRef = database.ref('/AQ/FinalData');
usersRef.on('value', snapshot => {
    console.log(snapshot.val());
    sessionStorage.setItem("maintainVal",snapshot.val().Maintenance);
    sessionStorage.setItem("AQIVal", snapshot.val().AQI);
    sessionStorage.setItem("COVal", snapshot.val().CO);

});
var maintenance=sessionStorage.getItem("maintainVal");
//maintenance=false;
var AQ=parseFloat(sessionStorage.getItem("AQIVal"));//returns only string value
var CO=parseFloat(sessionStorage.getItem("COVal"));
function loadfunction(){
if(maintenance==="false"){
    setTimeout(showRegularContent,1000);
}else{
    setTimeout(showMaintenanceContent,1000);
}
}
function showRegularContent(){
      var contPercent=(AQ/1000)*100;
      var coPercent=(CO/1000)*100;
      console.log(contPercent);
      console.log(coPercent);
      
      
      document.getElementById("loader").style.display = "none";
      document.getElementById("regularContent").style.display = "block";
      document.getElementById("maintenanceContent").style.display="none";
      document.getElementById("AQIval").innerHTML="AQI : "+AQ+" PPM";
      document.querySelector(".contlvl").style.width = contPercent.toFixed(2)+"%";
      document.querySelector(".colvl").style.width = coPercent.toFixed(2)+"%";
      document.getElementById("contlvllbl").innerHTML=contPercent.toFixed(2)+"%";
      document.getElementById("colvllbl").innerHTML=coPercent.toFixed(2)+"%";

}
function showMaintenanceContent() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("regularContent").style.display = "none";
    document.getElementById("maintenanceContent").style.display = "block";

}
