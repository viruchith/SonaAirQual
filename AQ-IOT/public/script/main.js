//var funccall;
const database = firebase.database();
const usersRef = database.ref('/AQ/FinalData');

var maintenance="false";
//maintenance=false;
usersRef.on('value',snapshot=>{
sessionStorage.setItem("maintainVal",snapshot.val().Maintenance);
});
maintenance=sessionStorage.getItem("maintainVal");

function loadfunction(){
if(maintenance==="false"||maintenance==null){
    setTimeout(showRegularContent,1000);
}else{
    setTimeout(showMaintenanceContent,1000);
}
}
function showRegularContent(){
      usersRef.on('value', snapshot => {
          console.log(snapshot.val());
          document.getElementById("loader").style.display = "none";
          document.getElementById("regularContent").style.display = "block";
          document.getElementById("maintenanceContent").style.display = "none";
          document.getElementById("AQIval").innerHTML = "AQI : " + snapshot.val().AQI + " PPM";
          document.querySelector(".contlvl").style.width = (((snapshot.val().AQI) / 1000) * 100).toFixed(2) + "%";
          document.querySelector(".colvl").style.width = (((snapshot.val().CO) / 1000) * 100).toFixed(2) + "%";
          document.getElementById("contlvllbl").innerHTML =(((snapshot.val().AQI) / 1000) * 100).toFixed(2) + "%";
          document.getElementById("colvllbl").innerHTML = (((snapshot.val().CO) / 1000) * 100).toFixed(2) + "%";


      });
      
      
}
function showMaintenanceContent() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("regularContent").style.display = "none";
    document.getElementById("maintenanceContent").style.display = "block";

}
