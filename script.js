(function () {

	fetchButton.addEventListener('click', () => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(respons => {
			if (respons.ok ? respons : Promise.reject()) {
				return respons.json();
			}else{
				return reject();
			}
		}).then(data => {
			showTasks(data);
		}).catch(() => {
			alert(`Error: API - not found`);
		});
	}, {once : true});


	function showTasks(data) {

		data.forEach(task => {

	        if (task.userId == 2 && task.completed == false) {

	        	const box = document.createElement('input');
	        	box.id = task.id;
				box.name = name;
				box.type = 'checkbox';
				box.classList.add('checkbox');

	        	const listTasksFalse = document.createElement('label');
				listTasksFalse.appendChild(box);

	        	listTasksFalse.appendChild(document.createTextNode(task.title));
	        	box.checked = false;allBox
	        	listTasksFalse.classList.add('listFalse');
	            resultFalse.appendChild(listTasksFalse);

	        }else if (task.userId == 2 && task.completed == true) {

	        	const box = document.createElement('input');
	        	box.id = task.id;
				box.name = name;
				box.type = 'checkbox';
				box.classList.add('checkbox');

	        	const listTasksTrue = document.createElement('label');
				listTasksTrue.appendChild(box);

	        	listTasksTrue.appendChild(document.createTextNode(task.title));
	        	box.checked = true;
	        	listTasksTrue.classList.add('listTrue');
	            resultTrue.appendChild(listTasksTrue);
	        }	 
	    });

	    const itemTrue = [...(document.querySelectorAll('.listTrue'))];
		
	    const itemFalse = [...(document.querySelectorAll('.listFalse'))];
	    for (let key of itemFalse) {
	    
		    key.addEventListener('change', e => {
				if (e.target.classList.contains('listFalse')) {
					e.target.classList.toggle('listTrue');
				}else if (e.target.classList.contains('checkbox')) {
					let div = e.target.parentNode;
					div.classList.add('listTrue');
					setTimeout(() => {
					    div.remove();
					    resultTrue.appendChild(div);
					}, 1500);
				}
			});
		}
	}

})();
