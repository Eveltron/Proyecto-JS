document.addEventListener('DOMContentLoaded',function() {
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const table = document.getElementById('table');
	const btn = document.getElementById('add');

	
	
	function addtodo(){
		if (title.value === "" || description.value === ""){
			console.error("title and description are required");	
		}else{
			console.log("ok");
		}
	}
	
	btn.onclick = addtodo;
});