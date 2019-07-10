(function () {

	// xhrButton.addEventListener('click', () => {
	// 	let xhr = new XMLHttpRequest();

	// 	xhr.addEventListener('readystatechange', () => {
	// 		if(xhr.readyState === 4 && xhr.status === 200) {
	// 			let res = JSON.parse(xhr.responseText);
	// 			showNames(res);
	// 		}
	// 	});

	// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
	// 	xhr.send(null);

	// });


	fetchButton.addEventListener('click', () => {
		fetch('https://jsonplaceholder.typicode.com/todos').then(respons => {
			if (respons.ok) {
				respons.json().then(json => {
					res = json;
					showTasks(res);
				});
			}else{
				alert(`Ответ ${respons.status} ${respons.statusText}`);
			}
		});
	});


	function showTasks(res) {

		res.forEach(task => {

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
	    
		    key.addEventListener('change', function(e) {
				if (e.target.classList.contains('listFalse')) {
					e.target.classList.toggle('listTrue');
				}else if (e.target.classList.contains('checkbox')) {
					let div = e.target.parentNode;
					div.classList.add('listTrue');
					div.remove();
					resultTrue.appendChild(div);
				}
			});
		}
	}

})();
