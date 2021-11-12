
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = ['Message One','Message Two','Message Three','Message Four','Message Five'];
const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null ) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandonType());

    notif.innerText = message ? message : getRandonMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandonMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandonType() {
    return types[Math.floor(Math.random() * types.length)];
}