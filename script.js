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

let box;
let listTasks;

function showTasks(res) {
	
    res.forEach(task => {

    	box = document.createElement('input');
	    box.name = name;
	    box.type = 'checkbox';
	    //box.setAttribute('onchange', 'func(this)');
	    box.classList.add('checkbox');

        listTasks = document.createElement('label');
        listTasks.appendChild(box);

        if (task.userId == 2 && task.completed == false) {
        	listTasks.appendChild(document.createTextNode(task.title));
        	box.checked = false;
        	listTasks.classList.add('listFalse');
            resultFalse.appendChild(listTasks);

        }else if (task.userId == 2 && task.completed == true) {
        	listTasks.appendChild(document.createTextNode(task.title));
        	box.checked = true;
        	listTasks.classList.add('listTrue');
            resultTrue.appendChild(listTasks);
        }
 
    });
}

// function func(checkbox) {
//   if (checkbox.checked == true) {
//     let checkboxes = document.getElementsByClassName('checkbox');
//     for (let i=0; i<checkboxes.length; i++) {
//       checkboxes[i].checked = false;
//     }
//     checkbox.checked = true;    
// 	}
// }
  

allBox.addEventListener('change', function(event) {
	if (event.target.classList.contains('listFalse') && event.target.checked) {
		[].slice.call(document.querySelectorAll('.listFalse')).forEach(a => {
			a.classList.remove('.listFalse');
			a.classList.add('.listTrue');
		});
		event.target.checked = true;
	}	
});
