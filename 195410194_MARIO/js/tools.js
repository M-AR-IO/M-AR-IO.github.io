function iconMenuBerubah(icon) {
	icon.classList.toggle("berubah");
}
function openNav() {
	document.getElementById("sidenav").style.width = "250px";
	document.getElementsByTagName("BODY")[0].style.paddingLeft = "250px";
}
function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementsByTagName("BODY")[0].style.paddingLeft = "0";
}
var NavOpenned = false;
function btnNav() {
	if (NavOpenned) {
		NavOpenned = false;
		closeNav();
	}else{
		NavOpenned = true;
		openNav();
	}
}
function toggleItem(ini){
	ini.classList.toggle("terbuka");
}