export type QuertionsType = {
    categoria: string;
    pregunta: string;
    incorrecta1: string | undefined;
    incorrecta2: string | undefined;
    incorrecta3: string | undefined;
    respuesta: string;
    imagenID: string;
};

export const QuestionsFile: QuertionsType[] = [
    {
        categoria: "Seguridad Vial",
        pregunta: "La tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) corresponde a los usuarios de:",
        incorrecta1: "Opcion A",
        incorrecta2: "Opcion C",
        incorrecta3: "Ninguna es correcta",
        respuesta: "Opcion B",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-1.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores,¿Cuáles son?",
        incorrecta1: "Vehicular y Ambiental",
        incorrecta2: "Humano y Vehicular",
        incorrecta3: "Humano ",
        respuesta: "Humano, Vehicular y Ambiental",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿A qué factor se deben la mayoría de los siniestros viales?",
        incorrecta1: "Todas son correctas",
        incorrecta2: "Al ambiental",
        incorrecta3: "Al vehicular",
        respuesta: "Al humano",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: ". “Cada usuario de la vía pública es responsable de una parte del tránsito.”¿Es correcta ésta premisa?",
        incorrecta1: "No,porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo",
        incorrecta2: "No,la responsabilidad la asumen aquellos que obtienen una licencia de conducir",
        incorrecta3: "Ningun usuario es responsable",
        respuesta: "Sí,porque se está obligado a no causar peligro ni entorpecer la circulación",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Además de provocar víctimas fatales o lesionados graves,¿Qué otras consecuencias puede generar un siniestro de tránsito?",
        incorrecta1: "es lo mismo que accidente vial",
        incorrecta2: "Sólo daños materiales",
        incorrecta3: "Daños materiales y costos sanitarios",
        respuesta: "Daños materiales, costos sanitarios y administrativos",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
        incorrecta1: "Velocidad y confort",
        incorrecta2: "Comodidad y Agilidad",
        incorrecta3: "Confort y eficacia",
        respuesta: "Fluidez y seguridad",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿A qué se denomina Movilidad Sustentable?",
        incorrecta1: "Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular",
        incorrecta2: "Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida",
        incorrecta3: "Todas son correctas",
        respuesta: "Forma de trasladarnos de manera rápida, segura y ordenada",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Indique cuál es la premisa correcta",
        incorrecta1: "Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad",
        incorrecta2: "Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad",
        incorrecta3: "A menor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad",
        respuesta: "A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
        incorrecta1: "Opción A",
        incorrecta2: "Ambas respuestas,son correctas",
        incorrecta3: "Ambas respuestas,son incorrectas",
        respuesta: "Opción B",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-imageID-2.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: " ¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?",
        incorrecta1: "Todas son correctas",
        incorrecta2: "Opción C",
        incorrecta3: "Opción B",
        respuesta: "Opción A",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-imageID-4.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
        incorrecta1: "Camión.Colectivo.Moto.Ciclista.Peatón.Taxi/Automóvil",
        incorrecta2: "Moto.Peatón.Ciclista.Colectivo.Taxi/Automóvil.Camión",
        incorrecta3: "Peatón.Ciclista.Colectivo.Moto.Taxi/Automóvil.Camión",
        respuesta: "Peatón.Ciclista.Moto.Colectivo.Taxi/Automóvil.Camión",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Se puede circular en bicicleta por esta vía?",
        incorrecta1: "Sí, siempre que se mantenga en el carril derecho",
        incorrecta2: "Sí, siempre que se mantenga en el carril izquierdo",
        incorrecta3: "Sí, mientras se respete la velocidad mínima de la arteria",
        respuesta: "No, está prohibido",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-imageID-7.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Qué se debe evitar al circular en bicicleta?",
        incorrecta1: "Usar auriculares y dispositivos electrónicos, que afecten la concentración",
        incorrecta2: "Usar ropa oscura y suelta",
        incorrecta3: "Los pantalones cortos y sueltos",
        respuesta: "Ambas respuestas,son correctas",
        imagenID: "https://pixnio.com/free-images/2017/05/31/2017-05-31-19-09-ID57.jpg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "En cuanto a su indumentaria,¿Cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?",
        incorrecta1: "Nada de eso representa algun riesgo para el ciclista",
        incorrecta2: "Ambas opciones presentan el mismo riesgo por igual",
        incorrecta3: "Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores",
        respuesta: "La opción A, ya que al tener ropa clara es más visible",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-imageID-6.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Es aconsejable circular en bicicleta de esta manera?",
        incorrecta1: "Esto no afecta en nada al ciclista",
        incorrecta2: "Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje",
        incorrecta3: "Sí, porque está conduciendo correctamente",
        respuesta: "No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-imageID-5.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Un menor de 12 años puede circular en bicicleta por..",
        incorrecta1: "La calle, acompañado de un adulto mayor de 18 años",
        incorrecta2: "Por la vereda, a la menor velocidad posible",
        incorrecta3: "La calle, sin supervision adulta",
        respuesta: "Ambas respuestas, son correctas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Qué indica esta seña?",
        incorrecta1: "Giro a la derecha",
        incorrecta2: "Adelantamiento por la izquierda",
        incorrecta3: "Detenerse",
        respuesta: "Giro a la izquierda",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-ID11.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿A qué se denomina siniestro vial?",
        incorrecta1: "Giro a la izquierda",
        incorrecta2: "Adelantarse hacia la izquierda",
        incorrecta3: "Detenerse",
        respuesta: "Giro a la derecha",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-ID12.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Qué indica esta seña?",
        incorrecta1: "Giro a la izquierda",
        incorrecta2: "Adelantamiento por la izquierda",
        incorrecta3: "Adelantamiento sin direccion alguna",
        respuesta: "Detenerse",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-ID13.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "En esta situación, ¿es correcto que el vehículo avance?",
        incorrecta1: "Sí, porque por allí no circulan peatones y no hay peligro",
        incorrecta2: "Sí, ya que tiene la razon de avanzar el",
        incorrecta3: "Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar",
        respuesta: "No, porque aún hay peatones cruzando de un lado al otro",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-ID16.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
        incorrecta1: "Avanzar, pero avisar con la bosina que este estara pasando",
        incorrecta2: "Avanzar pero a una velocidad baja",
        incorrecta3: "Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan",
        respuesta: "Detener el vehículo para que el peatón termine de cruzar",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-ID17.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Si Ud. es el conductor del vehículo, ¿Qué conducta debe adoptar en la siguiente situación?",
        incorrecta1: "ninguna de las acciones es correcta",
        incorrecta2: "completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda",
        incorrecta3: "Realizar una guiñada para advertir su preferencia de avance",
        respuesta: "Priorizar la circulación del peatón, indefectiblemente",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/07/word-image-ID21.jpeg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Cuando no hay demarcación de la senda peatonal,¿por dónde deben cruzar los peatones?",
        incorrecta1: "Por el medio de la calle",
        incorrecta2: "Es indistinto, siempre que miren a ambos lados antes de hacerlo",
        incorrecta3: "En coincidencia con las paradas de transporte",
        respuesta: "Por la esquina",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: " En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?",
        incorrecta1: "Ninguna es correcta",
        incorrecta2: "Llamar al 911 y continuar el viaje",
        incorrecta3: "Conducir hasta la comisaría más cercana",
        respuesta: "Detenerse inmediatamente y permanecer en el lugar del hecho",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "En caso de siniestro, el orden de actuación recomendado es",
        incorrecta1: "Alertar.Proteger.Socorrer",
        incorrecta2: "Alertar.Socorrer.Proteger",
        incorrecta3: "Socorrer.Proteger.Alertar",
        respuesta: "Proteger.Alertar.Socorrer",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cuáles son los números de emergencia a los que se les puede pedir ayuda ante algún incidente?",
        incorrecta1: "911 y 109",
        incorrecta2: "109 y 107",
        incorrecta3: "107 y 911",
        respuesta: "103 y 911",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias, indique con claridad:",
        incorrecta1: "Solo indicar si hay heridos",
        incorrecta2: "Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible",
        incorrecta3: "Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas",
        respuesta: "Lugar del hecho, características del incidente, cantidad y estado de las víctimas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
        incorrecta1: "Ninguna de las respuestas es correcta",
        incorrecta2: "Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción",
        incorrecta3: "Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente",
        respuesta: "Que ha actuado no conforme a las exigencias de la Ley",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
        incorrecta1: "30 días corridos desde su vencimiento",
        incorrecta2: "Un mes entero de corrido",
        incorrecta3: "Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva",
        respuesta: "No debe superar el año desde su vencimiento",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
        incorrecta1: "Todas las respuestas son correctas",
        incorrecta2: "Todo tipo de drogas (las legales e ilegales)",
        incorrecta3: "Sólo las drogas ilegales",
        respuesta: "Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos)",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?",
        incorrecta1: "Ninguna es correcta",
        incorrecta2: "Sí, ya que se presume el estado de alcoholemia positiva",
        incorrecta3: "Sí, deberá ordenar la remoción del vehículo",
        respuesta: "Ambas respuestas, la A y la B, son correctas",
        imagenID: "https://autoescuelacity.com.ar/wp-content/uploads/2022/10/ID26.jpg"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cada cuánto tiempo es recomendable parar si se realiza un viaje largo?",
        incorrecta1: "Cada 1 hora aproximadamente",
        incorrecta2: "Cada 6 horas aproximadamente",
        incorrecta3: "Cada 4 horas aproximadamente",
        respuesta: "Cada 2 horas aproximadamente",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior..",
        incorrecta1: "No importa el descanso que el conductor haya tenido",
        incorrecta2: "Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso",
        incorrecta3: "Al menos 4 horas",
        respuesta: "Aproximadamente 8 horas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "El cansancio puede verse inducido por ingerir:",
        incorrecta1: "Ninguna es correcta",
        incorrecta2: "Comidas abundantes",
        incorrecta3: "Bebidas alcohólicas",
        respuesta: "Ambas respuestas son correctas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
        incorrecta1: "El que el conductor hable poco",
        incorrecta2: "La sensación de euforia",
        incorrecta3: "No realizar movimientos en el asiento, ni cambios de postura",
        respuesta: "La visión borrosa y el aumento del número y duración de parpadeos",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
        incorrecta1: "Se tome algo",
        incorrecta2: "Escuche música a alto volúmen",
        incorrecta3: "Mantenga el interior del vehículo a una temperatura superior a 25 °C",
        respuesta: "Mantenga bien ventilado el interior del vehículo",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Que documentacion es necesaria para circular?",
        incorrecta1: "DNI y Licencia de conducir",
        incorrecta2: "La cédula verde y Comprobante de seguro en vigencia",
        incorrecta3: "Que el vehículo tenga colocadas las placas de identificación de dominio (patentes), legibles, normalizadas y sin aditamentos",
        respuesta: "Todas son correctas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cuales son los elementos de seguridad vial que debe llevar una moto?",
        incorrecta1: "Casco normalizado, aprobado por normas IRAM",
        incorrecta2: "No usar ropa suelta",
        incorrecta3: "Calzado que se afirme con seguridad a los pedales",
        respuesta: "Todas son correctas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cuales son los elementos de seguridad vial que debe llevar un auto?",
        incorrecta1: "Cinturones de seguridad y Bocina",
        incorrecta2: "Matafuego de 1kg, aprobado por normas IRAM",
        incorrecta3: "Balizas portátiles y espejos retrovisores en ambos lados",
        respuesta: "Todas son correctas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Indique cual de estas acciones es correcta para transladar a los niños menores de 10 años dentro del vehiculo",
        incorrecta1: "Los niños menores de 10 años deben ir siempre en el asiento trasero del vehículo con el cinturón de seguridad colocado",
        incorrecta2: "No hay necesidad de cuidados especiales",
        incorrecta3: "Es igual que con los adultos",
        respuesta: "Todas son incorrectas",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "Indique cual de estas acciones es correcta para transladar a los niños menores de 4 años dentro del vehiculo",
        incorrecta1: "Deben ir siempre en el asiento trasero del vehículo con el cinturón de seguridad colocado",
        incorrecta2: "No hay necesidad de cuidados especiales",
        incorrecta3: "Es igual que con los adultos",
        respuesta: "Deben utilizar la silla correspondiente",
        imagenID: "none"
    },
    {
        categoria: "Seguridad Vial",
        pregunta: "¿Cúal es la velocidad máxima de circulación en las calles de las zonas urbanas?",
        respuesta: "la velocidad máxima es de 40 km/h",
        incorrecta1: "60 km/h",
        incorrecta2: "110 km/h",
        incorrecta3: "90 km/h",
        imagenID: "none"
    }
];