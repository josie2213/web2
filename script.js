const horarios = ["08:00", "09:00","10:00","14:00","15:00"];
const selectHorario = document.getElementById("horario");

horarios.forEach(h => {
  let opt = document.createElement("option");
  opt.value = h;
  opt.textContent = h;
  selectHorario.appendChild(opt);
});
  
const cidade = ["Campo Dourado", "Santa Esperança", "Rio Claro", "Boa Vista", "Serra do Vento", "Campo Belo"];
const selecCidade = document.getElementById("cidade");

cidade.forEach(h => {
  let opt = document.createElement("option");
  opt.value = h;
  opt.textContent = h;
  selecCidade.appendChild(opt);
});