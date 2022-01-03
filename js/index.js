document.querySelector('#formulario-1').addEventListener('submit',(e)=>{
    e.preventDefault()

    let horas = Number(document.querySelector('#hora').value);
    let minutos = Number(document.querySelector('#minuto').value);

    let porcentaje = Number(document.querySelector('#porcentaje').value);

    let resultado = ((horas * 60 + minutos) * 10) / porcentaje;

    let horas_rep = Math.trunc(resultado / 60);
    let minutos_rep = Math.trunc(resultado % 60);

    document.querySelector('#rept').innerHTML = `Horas: ${horas_rep} - Minutos: ${minutos_rep}`;
})

document.querySelector('#formulario-2').addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let horas = Number(document.querySelector("#hora2").value);
    let minutos = Number(document.querySelector("#minuto2").value);

    let resultado = (horas * 60) + minutos;

    let rept1 = resultado - (resultado * 0.4);
    let rept2 = resultado - (resultado * 0.6);
    let rept3 = resultado - (resultado * 0.8);

    let rept1_hora = Math.trunc(rept1 / 60);
    let rept1_minuto = Math.trunc(rept1 % 60);

    let rept2_hora = Math.trunc(rept2 / 60);
    let rept2_minuto = Math.trunc(rept2 % 60);

    let rept3_hora = Math.trunc(rept3 / 60);
    let rept3_minutos = Math.trunc(rept3 % 60);

    document.querySelector('.rept-2 #primer').innerHTML = `40% = Horas: ${rept1_hora} - Minutos: ${rept1_minuto}`;
    document.querySelector('.rept-2 #segundo').innerHTML = `60% = Horas: ${rept2_hora} - Minutos: ${rept2_minuto}`;
    document.querySelector('.rept-2 #tercer').innerHTML = `80% = Horas: ${rept3_hora} - Minutos: ${rept3_minutos}`;
})

document.querySelector('#formulario-1').addEventListener('reset',(e)=>{
    document.querySelector('#rept').innerHTML = 'H - M';
})

document.querySelector('#formulario-2').addEventListener('reset',(e)=>{
    document.querySelectorAll('.respuestas').forEach(item=>item.innerHTML = 'H - M');
})



function isCommaDecimalNumber(value) {
    return /^-?(?:\d+(?:,\d*)?)$/.test(value);
}
  