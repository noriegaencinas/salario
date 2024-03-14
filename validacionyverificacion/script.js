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


function holaMundo(){
    console.log("hola mundo")
}


function generarOpciones_anti() {
    const select = document.getElementById('opciones_anti');
    for (let i = 1; i <= 100; i++) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = `${i} Años`;
        select.appendChild(opcion);
    }
}

function generarOpciones_grado() {
    const select = document.getElementById('opciones_grado');
    const grados = ["Soldado", "Cabo", "Sargento Segundo", "Sargento Primero", "Subteniente", "Teniente", "Capitán Segundo", "Capitan Primero", "Mayor", "Teniente Coronel", "Coronel", "General de Brigadier", "General de Brigada", "General de División", "General de Secretario de la Defensa Nacional"]
    for (let i = 1; i < grados.length; i++) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = grados[i];
        select.appendChild(opcion);
    }
}

function validarNumero() {
    const input = document.getElementById('dias_trabajados');
    if (input.value < 0) {
        input.value = ''; // Borra el valor si es negativo
    }
    
}   

function clickBuscar(){
    const content = document.querySelectorAll('[data-content]')
    content.forEach(c => {
        c.classList.remove('active')
    })
    const t = document.getElementById("resultado")
	t.classList.add('active')
    const te = document.getElementById("texto_resultado")
    te.textContent = "algo"
}

window.onload = function() {
    generarOpciones_anti();
    generarOpciones_grado();
};