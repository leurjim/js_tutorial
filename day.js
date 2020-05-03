function dayName(date) {

  const daysOfTheWeek  =  ["Domingo", "Lunes", "Martes", "Miércoles",
                           "Jueves", "Viernes", "Sábado"];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
  return `¡Hola, mundo! Feliz ${dayName(date)}!`;
}
