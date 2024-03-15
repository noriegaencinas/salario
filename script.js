const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
    target.addEventListener('click', () => {
        content.forEach(c => {
            c.classList.remove('active')
        })
        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
})


function holaMundo() {
    console.log("hola mundo")
}


function generarOpciones_anti() {
    const select = document.getElementById('opciones_anti');
    if (select) { // Verifica si el elemento existe
        for (let i = 1; i <= 100; i++) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = `${i} Años`;
            select.appendChild(opcion);
        }
    }
}

function generarOpciones_grado() {
    const select = document.getElementById('opciones_grado');
    if (select) { // Verifica si el elemento existe
        const grados = ["Soldado", "Cabo", "Sargento Segundo", "Sargento Primero", "Subteniente", "Teniente", "Capitán Segundo", "Capitan Primero", "Mayor", "Teniente Coronel", "Coronel", "General de Brigadier", "General de Brigada", "General de División", "General de Secretario de la Defensa Nacional"]
        for (let i = 1; i < grados.length; i++) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = grados[i];
            select.appendChild(opcion);
        }
    }
}

function validarNumero(id) {
    const input = document.getElementById(id);
    if (input.value < 0) {
        input.value = ''; // Borra el valor si es negativo
    }
}

function clickBuscar() {
    const content = document.querySelectorAll('[data-content]')
    content.forEach(c => {
        c.classList.remove('active')
    })
    const t = document.getElementById("resultado")
    t.classList.add('active')
    const te = document.getElementById("texto_resultado")
    te.textContent = "algo"
}

window.onload = function () {
    generarOpciones_anti();
    generarOpciones_grado();
    loadQuery();
};

function loadQuery() {
    // Recupera el correo y la contraseña del almacenamiento local
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');

    // Agrega el correo y la contraseña a la consulta
    var emailField = document.querySelector('#consulta_automatica .email');
    var passwordField = document.querySelector('#consulta_automatica .password');
    if (emailField && passwordField) {
        emailField.value = email || '';
        passwordField.value = password || '';
    }
}

function calculateSalary() {
    validarNumero('baseSalary');
    validarNumero('hoursWorked');
    validarNumero('extraHours');

    var hourlyRate = document.getElementById('baseSalary').value;
    var hoursWorked = document.getElementById('hoursWorked').value;
    var extraHours = document.getElementById('extraHours').value;

    // Las horas extras se pagan al doble
    var extraHourlyRate = hourlyRate * 2;

    var totalSalary = (hoursWorked * hourlyRate) + (extraHours * extraHourlyRate);

    document.getElementById('salaryResult').textContent = "El salario total es: " + totalSalary;
}

function createAccount() {
}
