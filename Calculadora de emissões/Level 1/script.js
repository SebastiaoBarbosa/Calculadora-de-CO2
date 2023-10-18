var CO2 = "CO2",
  COO = CO2.replace(/\d+/g, "<sub>$&</sub>");

const modeSelect = document.getElementById("mode-select");

// get inputs for each mode
const shipInputs = document.getElementById("shipInputs");
const trainInputs = document.getElementById("trainInputs");
const roadInputs = document.getElementById("roadInputs");
const equipmentInputs = document.getElementById("equipmentInputs");

// hide all mode inputs by default
shipInputs.style.display = "none";
trainInputs.style.display = "none";
roadInputs.style.display = "none";
equipmentInputs.style.display = "none";

// function to show inputs for selected mode
function showInputs() {
  const selectedMode = modeSelect.value;
  if (selectedMode === "ship") {
    shipInputs.style.display = "block";
    trainInputs.style.display = "none";
    roadInputs.style.display = "none";
    equipmentInputs.style.display = "none";
  } else if (selectedMode === "train") {
    trainInputs.style.display = "block";
    shipInputs.style.display = "none";
    roadInputs.style.display = "none";
    equipmentInputs.style.display = "none";
  } else if (selectedMode === "road") {
    roadInputs.style.display = "block";
    trainInputs.style.display = "none";
    shipInputs.style.display = "none";
    equipmentInputs.style.display = "none";
  } else if (selectedMode === "portEquiment") {
    equipmentInputs.style.display = "block";
    roadInputs.style.display = "none";
    trainInputs.style.display = "none";
    shipInputs.style.display = "none";
  } else {
    // hide all mode inputs if no mode is selected
    shipInputs.style.display = "none";
    trainInputs.style.display = "none";
    roadInputs.style.display = "none";
    equipmentInputs.style.display = "none";
  }
}
// call showInputs() whenever the mode select value changes
modeSelect.addEventListener("change", showInputs);

const shipFuelData = {
  BFO: {
    EFfuel: 3.114,
    fast: {
      10: 1.144, //---------kgCO2/kWh
      20: 1.012,
      30: 0.901,
      40: 0.813,
      50: 0.747,
      60: 0.703,
      70: 0.681,
      80: 0.682,
      90: 0.704,
      100: 0.749,
    },
    medium: {
      10: 0.99,
      20: 0.875,
      30: 0.78,
      40: 0.703,
      50: 0.646,
      60: 0.608,
      70: 0.589,
      80: 0.59,
      90: 0.609,
      100: 0.648,
    },
    slow: {
      10: 0.997,
      20: 0.881,
      30: 0.785,
      40: 0.708,
      50: 0.651,
      60: 0.613,
      70: 0.594,
      80: 0.594,
      90: 0.614,
      100: 0.653,
    },
  },
  "MDO/MGO": {
    EFfuel: 3.206,
    fast: {
      10: 1.089, //---------kgCO2/kWh
      20: 0.963,
      30: 0.858,
      40: 0.774,
      50: 0.711,
      60: 0.669,
      70: 0.649,
      80: 0.649,
      90: 0.67,
      100: 0.713,
    },
    medium: {
      10: 0.942,
      20: 0.833,
      30: 0.742,
      40: 0.669,
      50: 0.615,
      60: 0.579,
      70: 0.561,
      80: 0.561,
      90: 0.58,
      100: 0.617,
    },
    slow: {
      10: 0.949,
      20: 0.839,
      30: 0.747,
      40: 0.674,
      50: 0.619,
      60: 0.583,
      70: 0.565,
      80: 0.565,
      90: 0.584,
      100: 0.621,
    },
  },
  ecoBunkers: {
    EFfuel: 3.206,
    coefBioFuel: 1 - 0.1503,
    fast: {
      10: 1.089, //---------kgCO2/kWh
      20: 0.963,
      30: 0.858,
      40: 0.774,
      50: 0.711,
      60: 0.669,
      70: 0.649,
      80: 0.649,
      90: 0.67,
      100: 0.713,
    },
    medium: {
      10: 0.942,
      20: 0.833,
      30: 0.742,
      40: 0.669,
      50: 0.615,
      60: 0.579,
      70: 0.561,
      80: 0.561,
      90: 0.58,
      100: 0.617,
    },
    slow: {
      10: 0.949,
      20: 0.839,
      30: 0.747,
      40: 0.674,
      50: 0.619,
      60: 0.583,
      70: 0.565,
      80: 0.565,
      90: 0.584,
      100: 0.621,
    },
  },
  ucome: {
    EFfuel: 3.206,
    coefBioFuel: 1 - 0.8975,
    fast: {
      10: 1.089, //---------kgCO2/kWh
      20: 0.963,
      30: 0.858,
      40: 0.774,
      50: 0.711,
      60: 0.669,
      70: 0.649,
      80: 0.649,
      90: 0.67,
      100: 0.713,
    },
    medium: {
      10: 0.942,
      20: 0.833,
      30: 0.742,
      40: 0.669,
      50: 0.615,
      60: 0.579,
      70: 0.561,
      80: 0.561,
      90: 0.58,
      100: 0.617,
    },
    slow: {
      10: 0.949,
      20: 0.839,
      30: 0.747,
      40: 0.674,
      50: 0.619,
      60: 0.583,
      70: 0.565,
      80: 0.565,
      90: 0.584,
      100: 0.621,
    },
  },
  LPG: {
    EFfuel: 2.75,
    fast: {
      10: 0.854, //---------kgCO2/kWh
      20: 0.75,
      30: 0.665,
      40: 0.598,
      50: 0.548,
      60: 0.515,
      70: 0.499,
      80: 0.5,
      90: 0.518,
      100: 0.554,
    },
    medium: {
      10: 0.738,
      20: 0.649,
      30: 0.575,
      40: 0.517,
      50: 0.474,
      60: 0.446,
      70: 0.432,
      80: 0.433,
      90: 0.448,
      100: 0.479,
    },
    slow: {
      10: 0.744,
      20: 0.654,
      30: 0.579,
      40: 0.521,
      50: 0.477,
      60: 0.449,
      70: 0.435,
      80: 0.436,
      90: 0.452,
      100: 0.482,
    },
  },
  methanol: {
    EFfuel: 1.375,
    fast: {
      10: 1.053, //---------kgCO2/kWh
      20: 0.929,
      30: 0.826,
      40: 0.744,
      50: 0.683,
      60: 0.643,
      70: 0.623,
      80: 0.624,
      90: 0.645,
      100: 0.687,
    },
    medium: {
      10: 0.911,
      20: 0.803,
      30: 0.714,
      40: 0.644,
      50: 0.591,
      60: 0.556,
      70: 0.539,
      80: 0.539,
      90: 0.558,
      100: 0.594,
    },
    slow: {
      10: 0.917,
      20: 0.809,
      30: 0.72,
      40: 0.648,
      50: 0.595,
      60: 0.56,
      70: 0.543,
      80: 0.543,
      90: 0.562,
      100: 0.598,
    },
  },
  amonia: {
    EFfuel: 3.206,
    fast: {
      10: 0.303, //----------kgCO2/kWh
      20: 0.217,
      30: 0.158,
      40: 0.119,
      50: 0.0949,
      60: 0.0832,
      70: 0.0816,
      80: 0.0896,
      90: 0.108,
      100: 0.139,
    },
    medium: {
      10: 0.262,
      20: 0.188,
      30: 0.137,
      40: 0.103,
      50: 0.0821,
      60: 0.0719,
      70: 0.0706,
      80: 0.0775,
      90: 0.0934,
      100: 0.12,
    },
    slow: {
      10: 0.264,
      20: 0.189,
      30: 0.138,
      40: 0.104,
      50: 0.0827,
      60: 0.0725,
      70: 0.0711,
      80: 0.0781,
      90: 0.0941,
      100: 0.121,
    },
  },
  hydrogen: {
    EFfuel: 2.04,
    slow: {
      10: 12.99, //----------MJ/kWh
      20: 11.49,
      30: 10.24,
      40: 9.23,
      50: 8.48,
      60: 7.98,
      70: 7.74,
      80: 7.74,
      90: 8,
      100: 8.51,
    },
    medium: {
      10: 12.9,
      20: 11.41,
      30: 10.16,
      40: 9.17,
      50: 8.42,
      60: 7.93,
      70: 7.68,
      80: 7.69,
      90: 7.94,
      100: 8.45,
    },
    fast: {
      10: 14.92,
      20: 13.19,
      30: 11.75,
      40: 10.6,
      50: 9.74,
      60: 9.17,
      70: 8.88,
      80: 8.89,
      90: 9.18,
      100: 9.77,
    },
  },
};

function calculateShipEmissions(
  shipType,
  shipSize,
  shipSpeed,
  fuelType,
  daysAtSea
) {
  let shipEmissions = 0;
  let cruiseEmissions = 0;
  let hotelingEmissions = 0;
  let manuveringEmissions = 0;
  let potenciaPrincipal = 0;
  let potenciaSecundaria = 0;
  let EFprincCruise = 0;
  let EFauxCruise = 0;
  let EFprincManuvering = 0;
  let EFauxManuvering = 0;
  let EFprincHoteling = 0;
  let EFauxHoteling = 0;
  const cruisingTime = 24 * daysAtSea;
  let hotellingTime = 0;
  let manuveringTime = 0;
  let princLoadCruise = 0;
  let princLoadManuvering = 0;
  let princLoadHoteling = 0;
  let auxLoadCruise = 0;
  let auxLoadManuvering = 0;
  let auxLoadHoteling = 0;
  let EFfuel = 0;
  let coefBioFuel = 0;
  let mensagem;

  // Retrieve data from shipFuelData structure based on the provided shipType and fuelType
  const fuelData = shipFuelData[fuelType];

  // Retrieve specific fuel efficiency values based on the provided shipSpeed
  const speedData = fuelData[shipSpeed];

  // Assign the retrieved fuel efficiency values to the respective variables
  EFfuel = fuelData.EFfuel;
  coefBioFuel = fuelData.coefBioFuel || 1; // Use a default value of 1 if not provided in the structure

  switch (shipType) {
    case "tanker":
      potenciaPrincipal = 14.755 * shipSize ** 0.6082;
      potenciaSecundaria = potenciaPrincipal * 0.3;
      hotellingTime = 30.7;
      manuveringTime = 0.95;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.6;
      break;
    case "bulk-carrier":
      potenciaPrincipal = 35.912 * shipSize ** 0.5276;
      potenciaSecundaria = potenciaPrincipal * 0.3;
      hotellingTime = 121;
      manuveringTime = 2;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.4;
      break;
    case "container-ship":
      potenciaPrincipal = 2.9165 * shipSize ** 0.8719;
      potenciaSecundaria = potenciaPrincipal * 0.25;
      hotellingTime = 58;
      manuveringTime = 0.92;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.4;
      break;
    case "general-cargo-ship":
      potenciaPrincipal = 5.56482 * shipSize ** 0.7425;
      potenciaSecundaria = potenciaPrincipal * 0.23;
      hotellingTime = 59.5;
      manuveringTime = 1.5;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.4;
      break;
    case "ro-ro-ship":
      potenciaPrincipal = 164.578 * shipSize ** 0.435;
      potenciaSecundaria = potenciaPrincipal * 0.24;
      hotellingTime = 110.7;
      manuveringTime = 1;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.4;
      break;
    case "fishing-ship":
      potenciaPrincipal = 9.75891 * shipSize ** 0.7527;
      potenciaSecundaria = potenciaPrincipal * 0.39;
      hotellingTime = 60;
      manuveringTime = 0.5;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.4;
      break;
    case "port-vessel":
      potenciaPrincipal = 54.2171 * shipSize ** 0.642;
      potenciaSecundaria = potenciaPrincipal * 0.1;
      manuveringTime = 0.5;
      hotellingTime = 0;
      princLoadCruise = 0.8;
      princLoadManuvering = 0.2;
      princLoadHoteling = 0.2;
      auxLoadCruise = 0.3;
      auxLoadManuvering = 0.5;
      auxLoadHoteling = 0.4;
      break;
  }
  if (fuelType === "methanol" || fuelType === "amonia") {
    console.log("amonia");
    EFprincCruise = speedData[princLoadCruise * 100];
    EFprincManuvering = speedData[princLoadManuvering * 100];
    EFprincHoteling = speedData[princLoadHoteling * 100];
    EFauxCruise = speedData[auxLoadCruise * 100];
    EFauxManuvering = speedData[auxLoadManuvering * 100];
    EFauxHoteling = speedData[auxLoadHoteling * 100];
    cruiseEmissions =
      EFfuel *
      cruisingTime *
      (potenciaPrincipal * EFprincCruise + potenciaSecundaria * EFauxCruise);
    hotelingEmissions =
      EFfuel * hotellingTime * (potenciaPrincipal * EFprincHoteling) +
      potenciaSecundaria * EFauxHoteling;
    manuveringEmissions =
      EFfuel *
      manuveringTime *
      (potenciaPrincipal * EFprincManuvering +
        potenciaSecundaria * EFauxManuvering);
    shipEmissions = cruiseEmissions + hotelingEmissions + manuveringEmissions;

    shipEmissions = shipEmissions.toFixed(2);
    // Display emissions on the webpage
    mensagem = `${shipEmissions} kg de ${COO}`;
  } else if (fuelType === "hydrogen") {
    console.log("hidrogenio");
    EFprincCruise = (0.538 * speedData[princLoadCruise * 100]) / 120;
    EFprincManuvering = (0.538 * speedData[princLoadManuvering * 100]) / 120;
    EFprincHoteling = (0.538 * speedData[princLoadHoteling * 100]) / 120;
    EFauxCruise = (0.538 * speedData[auxLoadCruise * 100]) / 120;
    EFauxManuvering = (0.538 * speedData[auxLoadManuvering * 100]) / 120;
    EFauxHoteling = (0.538 * speedData[auxLoadHoteling * 100]) / 120;
    cruiseEmissions =
      EFfuel *
      cruisingTime *
      (potenciaPrincipal * EFprincCruise + potenciaSecundaria * EFauxCruise);
    hotelingEmissions =
      EFfuel * hotellingTime * (potenciaPrincipal * EFprincHoteling) +
      potenciaSecundaria * EFauxHoteling;
    manuveringEmissions =
      EFfuel * manuveringTime * (potenciaPrincipal * EFprincManuvering) +
      potenciaSecundaria * EFauxManuvering;
    shipEmissions = cruiseEmissions + hotelingEmissions + manuveringEmissions;

    shipEmissions = shipEmissions.toFixed(2);
    // Display emissions on the webpage
    mensagem = `0 kg de ${COO} emitidos diretamente, pois trata-se de um navio a hidrogénio.<br> No entanto pode-se ter em conta as emissões da produção e distribuição do combustível no valor de: ${shipEmissions} kg de ${COO}`;
  } else;
  EFprincCruise = speedData[princLoadCruise * 100];
  EFprincManuvering = speedData[princLoadManuvering * 100];
  EFprincHoteling = speedData[princLoadHoteling * 100];
  EFauxCruise = speedData[auxLoadCruise * 100];
  EFauxManuvering = speedData[auxLoadManuvering * 100];
  EFauxHoteling = speedData[auxLoadHoteling * 100];
  cruiseEmissions =
    EFfuel *
    cruisingTime *
    (potenciaPrincipal * EFprincCruise + potenciaSecundaria * EFauxCruise);
  hotelingEmissions =
    EFfuel * hotellingTime * (potenciaPrincipal * EFprincHoteling) +
    potenciaSecundaria * EFauxHoteling;
  manuveringEmissions =
    EFfuel * manuveringTime * (potenciaPrincipal * EFprincManuvering) +
    potenciaSecundaria * EFauxManuvering;
  shipEmissions = cruiseEmissions + hotelingEmissions + manuveringEmissions;

  if (fuelType === "ecoBunkers" || fuelType === "ucome") {
    shipEmissions = shipEmissions.toFixed(2);
    // Display emissions on the webpage
    mensagem = `Resultado (Result): ${shipEmissions} kg de ${COO}, no entanto há uma redução indireta de ${(
      shipEmissions * coefBioFuel
    ).toFixed(3)} kg de ${COO} devido à porção de biocombustível`;
  } else if (
    fuelType !== "ecoBunkers" &&
    fuelType !== "ucome" &&
    fuelType !== "hydrogen" &&
    fuelType !== "methanol" &&
    fuelType !== "amonia"
  ) {
    shipEmissions = shipEmissions.toFixed(2);
    // Display emissions on the webpage
    mensagem = `${shipEmissions} kg de ${COO}`;
  }

  document.getElementById(
    "emissionsResult"
  ).innerHTML = `Resultado (Result): ${mensagem}`;
}

//funcção calcular emissions de comboios
function calculateTrainEmissions(trainFuel, trainHoras, trainLoad, trainPower) {
  let trainEmissions;
  let loadFactor;
  let mensagem;
  if (trainLoad === "full") {
    loadFactor = 1;
  } else if (trainLoad === "empty") {
    loadFactor = 0.3;
  } else if (trainLoad === "half") {
    loadFactor = 0.5;
  }

  if (trainFuel === "diesel") {
    const lowHeatingValue = 11.944; // [kWh/kg fuel]
    const emissionFactor = 3.169; // [kg CO2/kgfuel]
    trainEmissions =
      ((trainHoras * trainPower) / lowHeatingValue) *
      loadFactor *
      emissionFactor;
    mensagem = `${trainEmissions.toFixed(
      3
    )} kg de ${COO}, no entanto há uma redução indireta de ${(
      trainEmissions * 0.07081
    ).toFixed(3)} kg de ${COO} devido à porção de biocombustível `;
  } else if (trainFuel === "biodiesel") {
    const lowHeatingValue = 10.278; // [kWh/kg fuel]
    const emissionFactor = 3.169; // [kg CO2/ kg fuel]
    trainEmissions =
      ((trainHoras * trainPower) / lowHeatingValue) *
      loadFactor *
      emissionFactor;
    mensagem = `${trainEmissions.toFixed(
      3
    )} kg de ${COO}, no entanto há uma redução indireta de ${(
      trainEmissions * 0.8975
    ).toFixed(3)} kg de ${COO} devido à porção de biocombustível `;
  } else if (trainFuel === "eletricity") {
    const energyMixFactor = 0.14868; // [Kg CO2/KWh]
    trainEmissions = trainHoras * trainPower * energyMixFactor * loadFactor;
    mensagem = `0 kg de ${COO}, pois trata-se de um comboio elétrico. No entanto pode-se ter em conta as emissões da produção da eletriciade: ${trainEmissions.toFixed(
      3
    )} kg de ${COO}`;
  }
  if (trainEmissions < 0.001) {
    trainEmissions = trainEmissions.toFixed(5);
  } else {
    trainEmissions = trainEmissions.toFixed(3);
  }

  document.getElementById(
    "emissionsResult"
  ).innerHTML = `Resultado (Result): ${mensagem}`;
}
const loadfactor = {
  "Before 1981": { full: 1.01, half: 1.095, empty: 1.18 },
  "1981-1990": {
    full: 1.01,
    half: 1.095,
    empty: 1.18,
  },
  "1991-1998": {
    full: 1.01,
    half: 1.095,
    empty: 1.18,
  },
  "Stage I": {
    full: 1.01,
    half: 1.095,
    empty: 1.18,
  },
  "Stage II": {
    full: 1.01,
    half: 1.095,
    empty: 1.18,
  },
  "Stage IIIA": { full: 1.01, half: 1.095, empty: 1.18 },
  "Stage IIIB": { full: 1, half: 1, empty: 1 },
  "Stage IV": { full: 1, half: 1, empty: 1 },
  "Stage V": { full: 1, half: 1, empty: 1 },
};
//funcção calcular emissions de equipmaentos portuarios
function calculateEquipmentEmissions(
  equipmentType,
  equiLoad,
  equipmentPower,
  equipmentActivity,
  equipmentYear,
  engineSize
) {
  let equipmentEmissions = 0;
  let mensagem;

  const stage = getEmissionStage(equipmentYear);
  const loadFactor = loadfactor[stage][equiLoad];

  if (equipmentType === "LPG") {
    const equiEF = 3.024; //[kgCO2/kgfuel]
    const equiConsumption = 0.311; //[kgfuel/kWh]
    equipmentEmissions =
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
    mensagem = `${equipmentEmissions} kg de ` + COO;
  }

  if (equipmentType === "eletricity") {
    const energyMixFactor = 0.14868; // [Kg CO2/KWh]
    equipmentEmissions =
      equipmentPower * equipmentActivity * loadFactor * energyMixFactor;
    mensagem = ` 0  kg de ${COO} por ser um equipamento portuário elétrico. No entanto pode-se ter em conta as emissões da produção da eletriciade: ${equipmentEmissions.toFixed(
      3
    )} kg de ${COO}`;
  }
  if (equipmentType === "diesel") {
    const equiEF = 3.169; //[kgCO2/kgfuel]
    let equiConsumption = 0; //[Kgfuel/kWh]
    if (equipmentPower < 19) {
      if (stage === "Before 1981") {
        equiConsumption = 0.3; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.281; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.262; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 19 && equipmentPower < 37) {
      if (stage === "Before 1981") {
        equiConsumption = 0.29; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.275; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 37 && equipmentPower < 75) {
      if (stage === "Before 1981") {
        equiConsumption = 0.29; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.275; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 75 && equipmentPower < 130) {
      if (stage === "Before 1981") {
        equiConsumption = 0.28; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.268; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.255; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 130 && equipmentPower < 560) {
      if (stage === "Before 1981") {
        equiConsumption = 0.27; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.25; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 560) {
      equiConsumption = 0.25; //[Kgfuel/kWh]
    }
    equipmentEmissions =
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
    mensagem = `${equipmentEmissions.toFixed(
      3
    )} kg de ${COO}, no entanto há uma redução indireta de ${(
      equipmentEmissions * 0.07081
    ).toFixed(3)} kg de ${COO} devido à porção de biocombustível`;
  }
  if (equipmentType === "B15") {
    const equiEF = 3.169; //[kgCO2/Kgfuel]
    let equiConsumption = 0; //[Kgfuel/kWh]
    let coefBioFuel = 1 - 0.1503; //5 de reduçao de emissons ao usar B15
    if (equipmentPower < 19) {
      if (stage === "Before 1981") {
        equiConsumption = 0.3; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.281; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.262; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 19 && equipmentPower < 37) {
      if (stage === "Before 1981") {
        equiConsumption = 0.29; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.275; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 37 && equipmentPower < 75) {
      if (stage === "Before 1981") {
        equiConsumption = 0.29; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.275; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 75 && equipmentPower < 130) {
      if (stage === "Before 1981") {
        equiConsumption = 0.28; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.268; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.255; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 130 && equipmentPower < 560) {
      if (stage === "Before 1981") {
        equiConsumption = 0.27; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.25; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 560) {
      equiConsumption = 0.25; //[Kgfuel/kWh]
    }
    equipmentEmissions =
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF *
      coefBioFuel;
    mensagem = `${equipmentEmissions.toFixed(
      3
    )} kg de ${COO}, no entanto há uma redução indireta de ${(
      equipmentEmissions * 0.1503
    ).toFixed(3)} kg de ${COO} devido à porção de biocombustível`;
  }
  if (equipmentType === "B100") {
    const equiEF = 3.169; //[kgCO2/Kgfuel]
    let equiConsumption = 0; //[Kgfuel/kWh]
    let coefBioFuel = 1 - 0.8975; //5 de reduçao de emissons ao usar B15
    if (equipmentPower < 19) {
      if (stage === "Before 1981") {
        equiConsumption = 0.3; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.281; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.262; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 19 && equipmentPower < 37) {
      if (stage === "Before 1981") {
        equiConsumption = 0.29; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.275; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 37 && equipmentPower < 75) {
      if (stage === "Before 1981") {
        equiConsumption = 0.29; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.275; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 75 && equipmentPower < 130) {
      if (stage === "Before 1981") {
        equiConsumption = 0.28; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.268; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.255; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 130 && equipmentPower < 560) {
      if (stage === "Before 1981") {
        equiConsumption = 0.27; //[Kgfuel/kWh]
      } else if (stage === "1981-1990") {
        equiConsumption = 0.26; //[Kgfuel/kWh]
      } else {
        equiConsumption = 0.25; //[Kgfuel/kWh]
      }
    } else if (equipmentPower >= 560) {
      equiConsumption = 0.25; //[Kgfuel/kWh]
    }
    equipmentEmissions =
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
    mensagem = `${equipmentEmissions.toFixed(
      3
    )} kg de ${COO}, no entanto há uma redução indireta de ${(
      equipmentEmissions * 0.8975
    ).toFixed(3)} kg de ${COO} devido à porção de biocombustível`;
  }
  if (equipmentType === "gasoline2stroke") {
    const equiEF = 3.169; //[kgCO2/kgfuel]
    let equiConsumption = 0.652; //[Kgfuel/kWh]
    equipmentEmissions =
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
    mensagem = `${equipmentEmissions} kg de ` + COO;
  }
  if (equipmentType === "gasoline4stroke") {
    const equiEF = 3.169; //[kgCO2/kgfuel]
    let equiConsumption = 0;
    if (engineSize < 66 && stage === "Before 1981") {
      equiConsumption = 0.603; //[Kgfuel/kWh]
    } else if (
      engineSize < 66 &&
      (stage === "Stage I" ||
        stage === "Stage II" ||
        stage === "Stage IIIA" ||
        stage === "Stage IIIB" ||
        stage === "Stage IV" ||
        stage === "Stage V")
    ) {
      equiConsumption = 0.475; //[Kgfuel/kWh]
    } else if (
      66 <= engineSize &&
      engineSize < 100 &&
      stage === "Before 1981"
    ) {
      equiConsumption = 0.627; //[Kgfuel/kWh]
    } else if (66 <= engineSize && engineSize < 100 && stage === "1981-1990") {
      equiConsumption = 0.599; //[Kgfuel/kWh]
    } else if (
      66 <= engineSize &&
      engineSize < 100 &&
      (stage === "Stage I" ||
        stage === "Stage II" ||
        stage === "Stage IIIA" ||
        stage === "Stage IIIB" ||
        stage === "Stage IV" ||
        stage === "Stage V")
    ) {
      equiConsumption = 0.57; //[Kgfuel/kWh]
    } else if (
      100 <= engineSize &&
      engineSize < 225 &&
      stage === "Before 1981"
    ) {
      equiConsumption = 0.601; //[Kgfuel/kWh]
    } else if (100 <= engineSize && engineSize < 225 && stage === "1981-1990") {
      equiConsumption = 0.573; //[Kgfuel/kWh]
    } else if (
      100 <= engineSize &&
      engineSize < 225 &&
      (stage === "Stage I" ||
        stage === "Stage II" ||
        stage === "Stage IIIA" ||
        stage === "Stage IIIB" ||
        stage === "Stage IV" ||
        stage === "Stage V")
    ) {
      equiConsumption = 0.546; //[Kgfuel/kWh]
    } else if (engineSize >= 225 && stage === "Before 1981") {
      equiConsumption = 0.539; //[Kgfuel/kWh]
    } else if (engineSize >= 225 && stage === "1981-1990") {
      equiConsumption = 0.514; //[Kgfuel/kWh]
    } else if (
      engineSize >= 225 &&
      (stage === "Stage I" ||
        stage === "Stage II" ||
        stage === "Stage IIIA" ||
        stage === "Stage IIIB" ||
        stage === "Stage IV" ||
        stage === "Stage V")
    ) {
      equiConsumption = 0.49; //[Kgfuel/kWh]
    }
    equipmentEmissions =
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
    mensagem = `${equipmentEmissions} kg de ` + COO;
  }

  // Display emissions on the webpage
  document.getElementById(
    "emissionsResult"
  ).innerHTML = `Resultado (Result): ${mensagem}`;
}
//função de calculo das emissos rodoviarias
const roadData = {
  passengerCar: {
    dieselB7: { roadEF: 3.169 * (1 - 0.0708), roadConsumption: 0.06 },
    dieselB15: { roadEF: 3.169 * (1 - 0.1503), roadConsumption: 0.06 },
    gasolineE10: { roadEF: 3.169 * (1 - 0.085), roadConsumption: 0.07 },
    ethanol: { roadEF: 3.169 * (1 - 0.7225), roadConsumption: 0.0865 },
    lpg: { roadEF: 3.024, roadConsumption: 0.0575 },
    cng: { roadEF: 2.473, roadConsumption: 0.0625 },
    bioDiesel: { roadEF: 3.169 * (1 - 0.8975), roadConsumption: 0.06 },
  },
  lightCommercial: {
    dieselB7: { roadEF: 3.169 * (1 - 0.0708), roadConsumption: 0.08 },
    dieselB15: { roadEF: 3.169 * (1 - 0.1503), roadConsumption: 0.08 },
    gasolineE10: { roadEF: 3.169 * (1 - 0.085), roadConsumption: 0.1 },
    ethanol: { roadEF: 3.169 * (1 - 0.7225), roadConsumption: 0.1 },
    lpg: { roadEF: 3.024, roadConsumption: 0.0575 },
    cng: { roadEF: 2.473, roadConsumption: 0.0625 },
    bioDiesel: { roadEF: 3.169 * (1 - 0.8975), roadConsumption: 0.08 },
  },
  heavyCommercial: {
    dieselB7: { roadEF: 3.169 * (1 - 0.0708), roadConsumption: 0.24 },
    dieselB15: { roadEF: 3.169 * (1 - 0.1503), roadConsumption: 0.24 },
    gasolineE10: { roadEF: 3.169 * (1 - 0.085), roadConsumption: 0.177 },
    ethanol: { roadEF: 3.169 * (1 - 0.7225), roadConsumption: 0.177 },
    lpg: { roadEF: 3.024, roadConsumption: 0.5 },
    cng: { roadEF: 2.473, roadConsumption: 0.5 },
    bioDiesel: { roadEF: 3.169 * (1 - 0.8975), roadConsumption: 0.24 },
  },
};
function calculateRoadEmissions(
  vehicleType,
  vehicleFuelType,
  vehicleDistance,
  vehiclePower,
  travelTime
) {
  let roadEmissions = 0;
  let roadEF = 0;
  let roadConsumption = 0;
  let mensagem;

  if (vehicleFuelType === "eletric") {
    let energyMixFactor = 0.14868; // [Kg CO2/KWh]
    roadEmissions = vehiclePower * travelTime * energyMixFactor;
    mensagem = `0 kg de ${COO}, por se tratar de um veiculo elétrico. No entanto pode-se ter em conta as emissões de produção da eletricidade: ${roadEmissions} kg de ${COO}`;
  } else if (vehicleFuelType in roadData[vehicleType]) {
    roadEF = roadData[vehicleType][vehicleFuelType].roadEF;
    roadConsumption = roadData[vehicleType][vehicleFuelType].roadConsumption;
    roadEmissions = roadEF * roadConsumption * vehicleDistance;
    if (
      vehicleFuelType === "dieselB7" ||
      vehicleFuelType === "dieselB15" ||
      vehicleFuelType === "bioDiesel" ||
      vehicleFuelType === "gasolineE10" ||
      vehicleFuelType === "ethanol"
    ) {
      const reductionFactor =
        vehicleFuelType === "dieselB7"
          ? 0.07081
          : vehicleFuelType === "dieselB15"
          ? 0.1503
          : vehicleFuelType === "bioDiesel"
          ? 0.8975
          : vehicleFuelType === "gasolineE5"
          ? 0.0425
          : vehicleFuelType === "gasolineE10"
          ? 0.085
          : vehicleFuelType === "ethanol"
          ? 0.7225
          : 0;

      mensagem = ` ${(roadEmissions / (1 - reductionFactor)).toFixed(
        3
      )} kg de ${COO}, no entanto há uma redução indireta de ${(
        (roadEmissions / (1 - reductionFactor)) *
        reductionFactor
      ).toFixed(3)} kg de ${COO} devido à porção de biocombustível`;
    } else {
      roadEmissions = roadEmissions.toFixed(3);
      mensagem = `${roadEmissions} kg de ${COO}`;
    }
  }
  document.getElementById("emissionsResult").innerHTML =
    `Resultado (Result): ${mensagem} kg de ` + COO;
}
//classificaçao dos equipametnos portúarios
function getEmissionStage(equipmentYear) {
  if (equipmentYear < 1981) {
    return "Before 1981";
  } else if (equipmentYear >= 1981 && equipmentYear <= 1990) {
    return "1981-1990";
  } else if (equipmentYear >= 1991 && equipmentYear <= 1998) {
    return "1991-1998";
  } else if (equipmentYear >= 1999 && equipmentYear <= 2000) {
    return "Stage I";
  } else if (equipmentYear >= 2001 && equipmentYear <= 2005) {
    return "Stage II";
  } else if (equipmentYear >= 2006 && equipmentYear <= 2009) {
    return "Stage IIIA";
  } else if (equipmentYear >= 2010 && equipmentYear <= 2013) {
    return "Stage IIIB";
  } else if (equipmentYear >= 2014 && equipmentYear <= 2019) {
    return "Stage IV";
  } else {
    return "Stage V";
  }
}

//funcionamento do butão calcultate
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    if (modeSelect.value === "train") {
      const trainFuel = document.getElementById("trainFuel").value;
      const trainHoras = parseFloat(
        document.getElementById("trainHoras").value
      );
      const trainLoad = document.getElementById("trainLoad").value;
      const trainPower = parseFloat(
        document.getElementById("trainPower").value
      );
      calculateTrainEmissions(trainFuel, trainHoras, trainLoad, trainPower);
    } else if (modeSelect.value === "ship") {
      const shipType = document.getElementById("ship-type").value;
      const shipSize = parseFloat(document.getElementById("ship-size").value);

      const shipSpeed = document.getElementById("ship-speed").value;
      const fuelType = document.getElementById("fuel-type").value;
      const daysAtSea = parseInt(document.getElementById("days-at-sea").value);
      console.log(shipType, shipSize, shipSpeed, fuelType, daysAtSea);
      calculateShipEmissions(
        shipType,
        shipSize,
        shipSpeed,
        fuelType,
        daysAtSea
      );
    }
    if (modeSelect.value === "portEquiment") {
      const equipmentType = document.getElementById("equipmentType").value;
      const equiLoad = document.getElementById("equiLoad").value;
      const equipmentPower = parseFloat(
        document.getElementById("equipmentPower").value
      );
      const equipmentActivity = parseFloat(
        document.getElementById("equipmentActivity").value
      );
      const equipmentYear = parseInt(
        document.getElementById("equipmentYear").value
      );
      const engineSize = parseFloat(
        document.getElementById("engineSize").value
      );

      calculateEquipmentEmissions(
        equipmentType,
        equiLoad,
        equipmentPower,
        equipmentActivity,
        equipmentYear,
        engineSize
      );
    }
    if (modeSelect.value === "road") {
      const vehicleType = document.getElementById("vehicleType").value;
      const vehicleFuelType = document.getElementById("vehicleFuelType").value;
      const vehicleDistance = parseFloat(
        document.getElementById("vehicleDistance").value
      );
      const vehiclePower = parseFloat(
        document.getElementById("vehiclePower").value
      );
      const travelTime = parseFloat(
        document.getElementById("travelTime").value
      );

      calculateRoadEmissions(
        vehicleType,
        vehicleFuelType,
        vehicleDistance,
        vehiclePower,
        travelTime
      );
    }
  });
var navigateButton = document.getElementById("level2Button");
navigateButton.addEventListener("click", function () {
  // Redirect to the desired page
  window.location.href = "http://127.0.0.1:5500/Level%202/index.html";
});
var navigate3Button = document.getElementById("level3Button");
navigate3Button.addEventListener("click", function () {
  // Redirect to the desired page
  window.location.href = "http://127.0.0.1:5500/level%203/index.html";
});
