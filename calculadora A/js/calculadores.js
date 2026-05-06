function calcular() {
const cuenta = parseFloat(document.getElementById('cuenta').value);
const porcentaje = parseFloat(document.getElementById('porcentaje').value);
const personas = parseFloat(document.getElementById('personas').value);

if (isNaN(cuenta) || cuenta <= 0){
    alert('por favor ingresa un total valido');
    return;
}
if (isNaN(personas) || personas <= 0){
    alert('por favor ingresa un numero valido de personas');
    return;
}

const propina = cuenta * (porcentaje / 100);
const total = cuenta + propina;
const porpersona = total / personas;

document.getElementById('propina').textContent = 'Q' + propina.toFixed(2);
document.getElementById('total').textContent = 'Q' + total.toFixed(2);
document.getElementById('porPersona').textContent = 'Q' + porpersona.toFixed(2);
document.getElementById('resultado').style.display = 'block';









}