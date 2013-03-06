<script type="text/javascript">
function getOrderID(){
// generate a random order id
	var randomnumber = Math.floor(Math.random()*1000);
	var current = new Date();
	var month = current.getMonth()+1;
	var timeStamp = current.getFullYear() +month +current.getDate() + '-' +current.getHours() + current.getMinutes()+ current.getSeconds() +'-' + randomnumber;
	return(timeStamp);
}
function trackEng(name,value){
	// generate pseudo e-commerce trans
	var orderNum = getOrderID();
	_gaq.push(['_addTrans', orderNum, '', String(value), '', '','','','']);
	_gaq.push(['_addItem', orderNum, name, '', '', String(value), '1']);
	_gaq.push(['_trackTrans']);
	_gaq.push(['_clearTrans']);
}
</script>
