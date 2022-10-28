let nameInp = document.querySelector('#name');
let emailInp = document.querySelector('#email');
let textarea = document.querySelector('#message');
let warn = document.querySelector('#warn');
let btn = document.querySelector('#btn-check');

function checkData() {
	let name = nameInp.value;
	let email = emailInp.value;
	let message = textarea.value;
	let check = /.+?@(mail\.ru|gmail\.com)/g.test(email);

	if (!name && !check) {
		warn.style.display = 'block';
		warn.textContent = 'Неправильно введены данные: Имя, Email';
		return;
	}
	if (!name) {
		warn.style.display = 'block';
		warn.textContent = 'Неправильно введены данные: Имя';
		return;
	}
	if (!check) {
		warn.style.display = 'block';
		warn.textContent = 'Неправильно введены данные: Email';
		return;
	}
	if (!message) {
		warn.style.display = 'block';
		warn.textContent = 'Вы не ввели сообщение';
		return;
	}
	

	if (name && check && message) {
		warn.style.display = 'none';
		alert('Успешно отправлено!');
	}
}
btn.addEventListener('click', checkData);
