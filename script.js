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
};

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
    // Verificar si ya existe un formulario en el cuerpo del documento
    var existingForm = document.querySelector('body form');

    if (!existingForm) {
        // Crear un nuevo formulario
        var form = document.createElement('form');
        form.className = 'form';

        // Crear un campo de entrada para el salario por hora
        var hourlyRateInput = document.createElement('input');
        hourlyRateInput.type = 'number';
        hourlyRateInput.name = 'hourlyRate';
        hourlyRateInput.placeholder = 'Salario por hora';
        hourlyRateInput.className = 'input';
        form.appendChild(hourlyRateInput);

        // Crear un campo de entrada para las horas trabajadas al día
        var hoursWorkedInput = document.createElement('input');
        hoursWorkedInput.type = 'number';
        hoursWorkedInput.name = 'hoursWorked';
        hoursWorkedInput.placeholder = 'Horas trabajadas al día';
        hoursWorkedInput.className = 'input';
        form.appendChild(hoursWorkedInput);

        // Crear un campo de entrada para los días trabajados
        var daysWorkedInput = document.createElement('input');
        daysWorkedInput.type = 'number';
        daysWorkedInput.name = 'daysWorked';
        daysWorkedInput.placeholder = 'Días trabajados';
        daysWorkedInput.className = 'input';
        form.appendChild(daysWorkedInput);

        // Crear un botón de envío para el formulario
        var submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Crear Cuenta';
        submitButton.className = 'boton';
        form.appendChild(submitButton);

        // Agregar el formulario al cuerpo del documento
        document.body.appendChild(form);
    }
}