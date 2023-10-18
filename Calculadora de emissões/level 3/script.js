var CO2 = "CO2",
  COO = CO2.replace(/\d+/g, "<sub>$&</sub>");

const shipInputs = document.getElementById("shipInputs");
const trainInputs = document.getElementById("trainInputs");
const roadInpts = document.getElementById("roadInputs");
const equipmentInputs = document.getElementById("equipmentInputs");

// hide all mode inputs by default
shipInputs.style.display = "none";
trainInputs.style.display = "none";
roadInputs.style.display = "none";
equipmentInputs.style.display = "none";

const shipModeCheckbox = document.getElementById("ship");
const roadModeCheckbox = document.getElementById("road");
const trainModeCheckbox = document.getElementById("train");
const equipmentModeCheckbox = document.getElementById("portEquipment");

const roadinputscontainer = document.getElementById("roadInputs");
const shipinputcontainer = document.getElementById("shipInputs");
const traininputcontainer = document.getElementById("trainInputs");
const equipmentinputcontainer = document.getElementById("equipmentInputs");

const FCknownCheckBox = document.getElementById("FCknown");
const FcNotKnownCheckBox = document.getElementById("FCnotknown");

const shipinputsFCNOTknown = document.getElementById(
  "Container-ShipInputs-NO-FC"
);
const shipinputsFCknown = document.getElementById("Container-ShipInputs-FC");

FCknownCheckBox.addEventListener("change", () => {
  if (FCknownCheckBox.checked) {
    shipinputsFCknown.style.display = "block";
    shipinputsFCNOTknown.style.display = "none";
    FcNotKnownCheckBox.checked = false;
  } else {
    shipinputsFCknown.style.display = "none";
  }
});

FcNotKnownCheckBox.addEventListener("change", () => {
  if (FcNotKnownCheckBox.checked) {
    shipinputsFCNOTknown.style.display = "block";
    shipinputsFCknown.style.display = "none";
    FCknownCheckBox.checked = false;
  } else {
    shipinputsFCNOTknown.style.display = "none";
  }
});

shipModeCheckbox.addEventListener("change", () => {
  if (shipModeCheckbox.checked) {
    // Show ship-related inputs or perform other actions
    shipInputs.style.display = "block";
    trainInputs.style.display = "none";
    equipmentInputs.style.display = "none";
    roadInputs.style.display = "none";

    uncheckOtherCheckboxes(shipModeCheckbox);
  } else {
    shipInputs.style.display = "none";
    clearInputs(shipinputcontainer);
    // Hide ship-related inputs or perform other actions
  }
});

roadModeCheckbox.addEventListener("change", () => {
  if (roadModeCheckbox.checked) {
    roadInputs.style.display = "block";
    shipInputs.style.display = "none";
    trainInputs.style.display = "none";
    equipmentInputs.style.display = "none";

    uncheckOtherCheckboxes(roadModeCheckbox);
    // Show road-related inputs or perform other actions
  } else {
    roadInputs.style.display = "none";
    clearInputs(roadinputscontainer);
    // Hide road-related inputs or perform other actions
  }
});

trainModeCheckbox.addEventListener("change", () => {
  if (trainModeCheckbox.checked) {
    trainInputs.style.display = "block";
    equipmentInputs.style.display = "none";
    roadInputs.style.display = "none";
    shipInputs.style.display = "none";

    uncheckOtherCheckboxes(trainModeCheckbox);
    // Show train-related inputs or perform other actions
  } else {
    trainInputs.style.display = "none";
    clearInputs(traininputcontainer);
    // Hide train-related inputs or perform other actions
  }
});

equipmentModeCheckbox.addEventListener("change", () => {
  if (equipmentModeCheckbox.checked) {
    equipmentInputs.style.display = "block";
    roadInputs.style.display = "none";
    shipInputs.style.display = "none";
    trainInputs.style.display = "none";

    uncheckOtherCheckboxes(equipmentModeCheckbox);
    // Show equipment-related inputs or perform other actions
  } else {
    equipmentInputs.style.display = "none";
    clearInputs(equipmentinputcontainer);

    // Hide equipment-related inputs or perform other actions
  }
});

const potenciaNavioCheckBox = document.getElementById("potencia");
const potenciaInput = document.getElementById("potenciaNavio");
const GTInput = document.getElementById("GTNavio");
const GTNaviocheckBox = document.getElementById("grossTonage");
potenciaNavioCheckBox.addEventListener("change", () => {
  if (potenciaNavioCheckBox.checked) {
    potenciaInput.style.display = "block";
    GTInput.style.display = "none";
    GTNaviocheckBox.checked = false;
  } else {
    potenciaInput.style.display = "none";
  }
});
GTNaviocheckBox.addEventListener("change", () => {
  if (GTNaviocheckBox.checked) {
    potenciaInput.style.display = "none";
    GTInput.style.display = "block";
    potenciaNavioCheckBox.checked = false;
  } else {
    GTInput.style.display = "none";
  }
});

//show correct Inputs
const lightCommercialInputs = document.getElementById("lightCommercialInputs");
const heavyCommercialInputs = document.getElementById("heavyCommercialInputs");
const passengeCarInputs = document.getElementById("passengeCarInputs");
const vehicleType = document.getElementById("vehicleType");
// hide all mode inputs by default
lightCommercialInputs.style.display = "none";
passengeCarInputs.style.display = "none";
heavyCommercialInputs.style.display = "none";

function showCorrectInputs() {
  const vehicleTypeSelected = vehicleType.value;
  // Show input section based on vehicleType
  if (vehicleTypeSelected === "lightCommercial") {
    lightCommercialInputs.style.display = "block";
    passengeCarInputs.style.display = "none";
    heavyCommercialInputs.style.display = "none";
  } else if (vehicleTypeSelected === "heavyCommercial") {
    heavyCommercialInputs.style.display = "block";
    lightCommercialInputs.style.display = "none";
    passengeCarInputs.style.display = "none";
  } else if (vehicleTypeSelected === "passengerCar") {
    passengeCarInputs.style.display = "block";
    lightCommercialInputs.style.display = "none";
    heavyCommercialInputs.style.display = "none";
  }
}
vehicleType.addEventListener(
  "change",
  clearInputs(lightCommercialInputs),
  clearInputs(heavyCommercialInputs),
  clearInputs(passengeCarInputs),
  showCorrectInputs()
);

function getFuelright(fuelType) {
  switch (true) {
    case fuelType === "dieselPHEV":
      return "Diesel PHEV ~ Diesel";
    case fuelType === "gasolinePHEV":
      return "Petrol PHEV ~ Petrol";
    case fuelType === "cngGasoline":
      return "CNG Bifuel ~ CNG";
    case fuelType === "lpgGasoline":
      return "LPG Bifuel ~ LPG";
    case fuelType === "dieselB15" ||
      fuelType === "dieselB7" ||
      fuelType === "Biodiesel":
      return "Diesel";
    case fuelType === "gasolineE10" ||
      fuelType === "gasolineE5" ||
      fuelType === "ethanol" ||
      fuelType === "hybrid":
      return "Petrol";
    case fuelType === "MDO/MGO":
      return "Diesel marítimo";
    case fuelType === "LPG":
      return "Gás liquefeito de petróleo";
    case fuelType === "methanol":
      return "Metanol";
    case fuelType === "BFO":
      return "Fuelóleo pesado";
    case fuelType === "ecoBunkers" || fuelType === "B15":
      return "Biodiesel mix B15";
    case fuelType === "ucome" || fuelType === "B100":
      return "Biodiesel B100";
    case fuelType === "gasoline2stroke":
      return "Gasolina a 2 tempos";
    case fuelType === "gasoline4stroke":
      return "Gasolina a 4 tempos";
    case fuelType === "diesel":
      return "Diesel mix B7";
    case fuelType === "LPG":
      return "Gás natural Liquifeito";
    case fuelType === "eletricity":
      return "Eletricidade";
    case fuelType === "hydrogen":
      return "Hidrogénio (H2)";
  }
}

function clearInputs(container) {
  const inputFields = container.querySelectorAll("input, select");
  inputFields.forEach((input) => {
    if (input.tagName === "SELECT") {
      input.selectedIndex = 0;
    } else {
      input.value = "";
    }
  });
}

function showColumn(mode) {
  const selectedColumn = document.querySelector(`.${mode}-column`);

  if (selectedColumn && selectedColumn.style.display !== "block") {
    selectedColumn.style.display = "block";
  }
}

function showEngineSize() {
  const equipmentType = document.getElementById("equipmentType").value;
  const engineSizeInput = document.getElementById("engineSizeInput");
  if (
    equipmentType === "gasoline2stroke" ||
    equipmentType === "gasoline4stroke"
  ) {
    engineSizeInput.style.display = "block";
  } else {
    engineSizeInput.style.display = "none";
  }
}

function showShipSpeedInput() {
  const motorType = document.getElementById("motor-type").value;
  const engineSpeedInput = document.getElementById("engineSpeedInput");
  if (motorType === "diesel") {
    engineSpeedInput.style.display = "block";
  } else {
    engineSpeedInput.style.display = "none";
  }
}

function clearColumnContent() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    const vehicleList = column.querySelector(".vehicle-list");
    const resultsParagraph = column.querySelector("p");
    column.style.display = "none";
    if (vehicleList) {
      vehicleList.innerHTML = "";
    }

    if (resultsParagraph) {
      resultsParagraph.textContent = "";
    }
  });
}

// Function to uncheck other checkboxes
function uncheckOtherCheckboxes(checkboxToKeep) {
  const checkboxes = [
    shipModeCheckbox,
    roadModeCheckbox,
    trainModeCheckbox,
    equipmentModeCheckbox,
  ];

  checkboxes.forEach((checkbox) => {
    if (checkbox !== checkboxToKeep) {
      checkbox.checked = false;
    }
  });
}

const vehicleLists = {
  road: document.querySelector(".road-column .vehicle-list"),
  train: document.querySelector(".train-column .vehicle-list"),
  ship: document.querySelector(".ship-column .vehicle-list"),
  portEquipment: document.querySelector(".portEquipment-column .vehicle-list"),
};

function addVehicleToColumn(mode, vehicleData) {
  const vehicleList = vehicleLists[mode];
  if (vehicleList && vehicleData) {
    const listItem = document.createElement("li");
    listItem.classList.add("icon-container");
    listItem.innerHTML = vehicleData;
    // Replace with formatted vehicle info
    vehicleList.appendChild(listItem);
  }
}

//------------------------------------ROAD----------------------
//STAGES
function getPassengerCarEmissionStage(passengerCarFuelType, passengerCarYear) {
  switch (passengerCarFuelType) {
    case "gasolineE5":
    case "gasolineE10":
    case "ethanol":
    case "hybrid":
    case "gasolinePHEV":
      switch (true) {
        case passengerCarYear < 1971:
          return "PRE ECE";
        case passengerCarYear >= 1972 && passengerCarYear <= 1977:
          return "ECE 15/00-01";
        case passengerCarYear >= 1978 && passengerCarYear <= 1980:
          return "ECE 15/02";
        case passengerCarYear >= 1981 && passengerCarYear <= 1985:
          return "ECE 15/03";
        case passengerCarYear >= 1985 && passengerCarYear <= 1990:
          return "Improved Conventional";
        case passengerCarYear >= 1992 && passengerCarYear <= 1996:
          return "Euro 1";
        case passengerCarYear >= 1996 && passengerCarYear <= 1999:
          return "Euro 2";
        case passengerCarYear >= 2000 && passengerCarYear <= 2004:
          return "Euro 3";
        case passengerCarYear >= 2005 && passengerCarYear <= 2009:
          return "Euro 4";
        case passengerCarYear >= 2011 && passengerCarYear <= 2014:
          return "Euro 5";
        case passengerCarYear >= 2014 && passengerCarYear <= 2016:
          return "Euro 6 a/b/c";
        case passengerCarYear >= 2019 && passengerCarYear <= 2020:
          return "Euro 6 d-temp";
        case passengerCarYear >= 2021:
          return "Euro 6 d";
      }
      break;
    case "dieselPHEV":
    case "dieselB7":
    case "dieselB15":
    case "Biodiesel":
      switch (true) {
        case passengerCarYear < 1992:
          return "Conventional";
        case passengerCarYear >= 1992 && passengerCarYear <= 1996:
          return "Euro 1";
        case passengerCarYear >= 1996 && passengerCarYear <= 2000:
          return "Euro 2";
        case passengerCarYear >= 2000 && passengerCarYear <= 2005:
          return "Euro 3";
        case passengerCarYear >= 2005 && passengerCarYear <= 2010:
          return "Euro 4";
        case passengerCarYear >= 2010 && passengerCarYear <= 2014:
          return "Euro 5";
        case passengerCarYear >= 2014 && passengerCarYear <= 2019:
          return "Euro 6 a/b/c";
        case passengerCarYear >= 2019 && passengerCarYear <= 2020:
          return "Euro 6 d-temp";
        case passengerCarYear >= 2021:
          return "Euro 6 d";
      }
      break;
    case "lpgGasoline":
    case "cngGasoline":
      switch (true) {
        case passengerCarYear < 1991:
          return "Conventional";
        case passengerCarYear >= 1992 && passengerCarYear <= 1996:
          return "Euro 1";
        case passengerCarYear >= 1996 && passengerCarYear <= 1999:
          return "Euro 2";
        case passengerCarYear >= 2000 && passengerCarYear <= 2004:
          return "Euro 3";
        case passengerCarYear >= 2005 && passengerCarYear <= 2010:
          return "Euro 4";
        case passengerCarYear >= 2011 && passengerCarYear <= 2014:
          return "Euro 5";
        case passengerCarYear >= 2014 && passengerCarYear <= 2019:
          return "Euro 6 a/b/c";
        case passengerCarYear >= 2019 && passengerCarYear <= 2020:
          return "Euro 6 d-temp";
        case passengerCarYear >= 2021:
          return "Euro 6 d";
      }
      break;
  }
}
function getlightCommercialEmissionStage(
  lightCommercialFuelType,
  lightCommercialYear
) {
  switch (lightCommercialFuelType) {
    case "gasolineE5":
    case "gasolineE10":
    case "ethanol":
      switch (true) {
        case lightCommercialYear <= 1993:
          return "Conventional";
        case lightCommercialYear >= 1993 && lightCommercialYear <= 1997:
          return "Euro 1";
        case lightCommercialYear >= 1997 && lightCommercialYear <= 2001:
          return "Euro 2";
        case lightCommercialYear >= 2001 && lightCommercialYear <= 2006:
          return "Euro 3";
        case lightCommercialYear >= 2006 && lightCommercialYear <= 2010:
          return "Euro 4";
        case lightCommercialYear >= 2011 && lightCommercialYear <= 2015:
          return "Euro 5";
        case lightCommercialYear >= 2016 && lightCommercialYear <= 2017:
          return "Euro 6 a/b/c";
        case lightCommercialYear >= 2018 && lightCommercialYear <= 2020:
          return "Euro 6 d-temp";
        case lightCommercialYear >= 2021:
          return "Euro 6 d";
      }
      break;
    case "dieselB7":
    case "dieselB15":
    case "Biodiesel":
      switch (true) {
        case lightCommercialYear <= 1993:
          return "Conventional";
        case lightCommercialYear >= 1993 && lightCommercialYear <= 1997:
          return "Euro 1";
        case lightCommercialYear >= 1997 && lightCommercialYear <= 2001:
          return "Euro 2";
        case lightCommercialYear >= 2001 && lightCommercialYear <= 2006:
          return "Euro 3";
        case lightCommercialYear >= 2006 && lightCommercialYear <= 2010:
          return "Euro 4";
        case lightCommercialYear >= 2011 && lightCommercialYear <= 2015:
          return "Euro 5";
        case lightCommercialYear >= 2016 && lightCommercialYear <= 2017:
          return "Euro 6 a/b/c";
        case lightCommercialYear >= 2018 && lightCommercialYear <= 2020:
          return "Euro 6 d-temp";
        case lightCommercialYear >= 2021:
          return "Euro 6 d";
      }
      break;
  }
}
function getHeavyCommercialEmissionStage(heavyCommercialYear) {
  switch (true) {
    case heavyCommercialYear <= 1992:
      return "Conventional";
    case heavyCommercialYear >= 1992 && heavyCommercialYear <= 1995:
      return "Euro I";
    case heavyCommercialYear >= 1996 && heavyCommercialYear <= 2000:
      return "Euro II";
    case heavyCommercialYear >= 2000 && heavyCommercialYear <= 2005:
      return "Euro III";
    case heavyCommercialYear >= 2005 && heavyCommercialYear <= 2008:
      return "Euro IV";
    case heavyCommercialYear >= 2008 && heavyCommercialYear <= 2013:
      return "Euro V";
    case heavyCommercialYear >= 2013 && heavyCommercialYear <= 2019:
      return "Euro VI A/B/C";
    case heavyCommercialYear >= 2019:
      return "Euro VI D/E";
  }
}

// Function to create a passenger car object
async function createPassengerCar() {
  const vehicleTypeR = document.getElementById("vehicleType").value;
  if (vehicleTypeR === "passengerCar") {
    const fuelType = document.getElementById("passengerCarFuelType").value;
    const size = document.getElementById("passengerCarSize").value;
    const year = document.getElementById("passengerCarYear").value;
    const stage = getPassengerCarEmissionStage(fuelType, year);
    const speed = parseFloat(
      document.getElementById("passengerCarSpeed").value
    );
    const count = parseFloat(
      document.getElementById("passengerCarCount").value
    );
    const distance = parseFloat(
      document.getElementById("passengerCarDistance").value
    );
    const CSVFuel = getFuelright(fuelType);
    console.log(fuelType, CSVFuel, distance, count, stage, speed, size);
    const emission = await calculateVehicleEmission(
      fuelType,
      CSVFuel,
      distance,
      count,
      stage,
      speed,
      size
    );

    if (emission !== null) {
      if (emission === 0) {
        alert(
          "Este resultado é 0, reveja os detalhes preenchidos. (This result is 0, review the details filled in)"
        );
      } else {
        const formattedEmission = emission.toFixed(3);
        const PassengerCarData = {
          count: count,
          vehicle_type: "Passenger Car",
          fueltype: CSVFuel,
          year: year,
          distance: distance,
          velocidade: speed,
          emission: formattedEmission,
        };

        const selectedColumn = document.querySelector(`.road-column`);
        if (selectedColumn && count === 1) {
          if (fuelType === "dieselB7") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
             Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.07081)) *
              0.07081
            ).toFixed(3)} kg de ${COO}`;
            const info = `${PassengerCarData.count} ligeiro de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
           Emissão direta (Direct emission): ${(
             PassengerCarData.emission /
             (1 - 0.07081)
           ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "dieselB15") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.1503)) *
              0.1503
            ).toFixed(3)} kg de ${COO}`;
            const info = `${PassengerCarData.count} ligeiro de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  PassengerCarData.emission /
                  (1 - 0.1503)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "Biodiesel") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.8975)) *
              0.8975
            ).toFixed(3)} kg de ${COO}`;
            const info = `${PassengerCarData.count} ligeiro de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  PassengerCarData.emission /
                  (1 - 0.8975)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE5") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.0425)) *
              0.0425
            ).toFixed(3)} kg de ${COO}`;
            const info = `${PassengerCarData.count} ligeiro de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  PassengerCarData.emission /
                  (1 - 0.0425)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE10") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.085)) *
              0.085
            ).toFixed(3)} kg de ${COO}`;
            const info = `${PassengerCarData.count} ligeiro de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  PassengerCarData.emission /
                  (1 - 0.085)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "ethanol") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.7225)) *
              0.7225
            ).toFixed(3)} kg de ${COO}`;
            const info = `${PassengerCarData.count} ligeiro de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  PassengerCarData.emission /
                  (1 - 0.7225)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else {
            const formattedPassengerCarData = `${PassengerCarData.count} ligeiro de passageiros, a ${PassengerCarData.fueltype} ,do ano (from) ${PassengerCarData.year}, ${PassengerCarData.distance} km de viagem (trip lenght), a uma velocidade média de ${PassengerCarData.velocidade} Km/h<br>
            Emissão direta (Direct emission): ${PassengerCarData.emission} kg de ${COO} <br>`;
            addVehicleToColumn("road", formattedPassengerCarData);
          }
        } else if (selectedColumn && count > 1) {
          if (fuelType === "dieselB7") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.07081)) *
              0.07081
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              PassengerCarData.count
            } ligeiros de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
            Emissão direta (Direct emission): ${(
              PassengerCarData.emission /
              (1 - 0.07081)
            ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "dieselB15") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.1503)) *
              0.1503
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              PassengerCarData.count
            } ligeiros de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    PassengerCarData.emission /
                    (1 - 0.1503)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "Biodiesel") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.8975)) *
              0.8975
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              PassengerCarData.count
            } ligeiros de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    PassengerCarData.emission /
                    (1 - 0.8975)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE5") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.0425)) *
              0.0425
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              PassengerCarData.count
            } ligeiros de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    PassengerCarData.emission /
                    (1 - 0.0425)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE10") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.085)) *
              0.085
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              PassengerCarData.count
            } ligeiros de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    PassengerCarData.emission /
                    (1 - 0.085)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "ethanol") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (PassengerCarData.emission / (1 - 0.7225)) *
              0.7225
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              PassengerCarData.count
            } ligeiros de passageiros, a ${
              PassengerCarData.fueltype
            }, do ano (from) ${PassengerCarData.year}, ${
              PassengerCarData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              PassengerCarData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    PassengerCarData.emission /
                    (1 - 0.7225)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else {
            const formattedPassengerCarData = `${PassengerCarData.count} ligeiros de passageiros, a ${PassengerCarData.fueltype} ,do ano (from) ${PassengerCarData.year}, ${PassengerCarData.distance} km de viagem (trip lenght), a uma velocidade média de ${PassengerCarData.velocidade} Km/h<br>
              Emissão direta (Direct emission): ${PassengerCarData.emission} kg de ${COO} <br>`;
            addVehicleToColumn("road", formattedPassengerCarData);
          }
        }
        return PassengerCarData;
      }
    }
  }
}

//funçao criar light comercial
async function createlightCommercial() {
  const vehicleTypeR = document.getElementById("vehicleType").value;
  if (vehicleTypeR === "lightCommercial") {
    const fuelType = document.getElementById("lightCommercialFuelType").value;
    const size = document.getElementById("lightCommercialSize").value;
    const year = document.getElementById("lightCommercialYear").value;
    const stage = getlightCommercialEmissionStage(fuelType, year);
    const speed = parseFloat(
      document.getElementById("lightCommercialSpeed").value
    );
    const count = parseFloat(
      document.getElementById("lightCommercialCount").value
    );
    const distance = parseFloat(
      document.getElementById("lightCommercialDistance").value
    );
    const CSVFuel = getFuelright(fuelType);

    const emission = await calculateVehicleEmission(
      fuelType,
      CSVFuel,
      distance,
      count,
      stage,
      speed,
      size
    );

    if (emission !== null) {
      if (emission === 0) {
        alert(
          "Este resultado é 0, reveja os detalhes preenchidos. (This result is 0, review the details filled in)"
        );
      } else {
        const formattedEmission = emission.toFixed(3);
        const LightCommercialData = {
          count: count,
          vehicle_type: "Light Commercial",
          fueltype: CSVFuel,
          year: year,
          distance: distance,
          velocidade: speed,
          emission: formattedEmission,
        };

        const selectedColumn = document.querySelector(`.road-column`);
        if (selectedColumn && count === 1) {
          if (fuelType === "dieselB7") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
             Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.07081)) *
              0.07081
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiro de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
           Emissão direta (Direct emission): ${(
             LightCommercialData.emission /
             (1 - 0.07081)
           ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "dieselB15") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.1503)) *
              0.1503
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiro de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  LightCommercialData.emission /
                  (1 - 0.1503)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "Biodiesel") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.8975)) *
              0.8975
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiro de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  LightCommercialData.emission /
                  (1 - 0.8975)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE5") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.0425)) *
              0.0425
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiro de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  LightCommercialData.emission /
                  (1 - 0.0425)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE10") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.085)) *
              0.085
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiro de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  LightCommercialData.emission /
                  (1 - 0.085)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "ethanol") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.7225)) *
              0.7225
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiro de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  LightCommercialData.emission /
                  (1 - 0.7225)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else {
            const formattedPassengerCarData = `${LightCommercialData.count}ligeiro de mercadoria, a ${LightCommercialData.fueltype} ,do ano (from) ${LightCommercialData.year}, ${LightCommercialData.distance} km de viagem (trip lenght), a uma velocidade média de ${LightCommercialData.velocidade} Km/h<br>
            Emissão direta (Direct emission): ${LightCommercialData.emission} kg de ${COO} <br>`;
            addVehicleToColumn("road", formattedPassengerCarData);
          }
        } else if (selectedColumn && count > 1) {
          if (fuelType === "dieselB7") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.07081)) *
              0.07081
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiros de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
            Emissão direta (Direct emission): ${(
              LightCommercialData.emission /
              (1 - 0.07081)
            ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "dieselB15") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.1503)) *
              0.1503
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiros de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    LightCommercialData.emission /
                    (1 - 0.1503)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "Biodiesel") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.8975)) *
              0.8975
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiros de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    LightCommercialData.emission /
                    (1 - 0.8975)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE5") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.0425)) *
              0.0425
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiros de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    LightCommercialData.emission /
                    (1 - 0.0425)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE10") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.085)) *
              0.085
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiros de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    LightCommercialData.emission /
                    (1 - 0.085)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "ethanol") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (LightCommercialData.emission / (1 - 0.7225)) *
              0.7225
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              LightCommercialData.count
            } ligeiros de mercadoria, a ${
              LightCommercialData.fueltype
            }, do ano (from) ${LightCommercialData.year}, ${
              LightCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              LightCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    LightCommercialData.emission /
                    (1 - 0.7225)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else {
            const formattedPassengerCarData = `${LightCommercialData.count}ligeiros de mercadoria, a ${LightCommercialData.fueltype} ,do ano (from) ${LightCommercialData.year}, ${LightCommercialData.distance} km de viagem (trip lenght), a uma velocidade média de ${LightCommercialData.velocidade} Km/h<br>
              Emissão direta (Direct emission): ${LightCommercialData.emission} kg de ${COO} <br>`;
            addVehicleToColumn("road", formattedPassengerCarData);
          }
        }
        return LightCommercialData;
      }
    }
  }
}
//funçao criar heavy comercial
async function createHeavyCommercial() {
  const vehicleTypeR = document.getElementById("vehicleType").value;
  if (vehicleTypeR === "heavyCommercial") {
    const fuelType = document.getElementById("heavyCommercialType").value;
    const size = document.getElementById("heavyCommercialSize").value;
    const year = document.getElementById("heavyCommercialYear").value;
    const stage = getHeavyCommercialEmissionStage(year);
    const speed = parseFloat(
      document.getElementById("heavyCommercialSpeed").value
    );
    const count = parseFloat(
      document.getElementById("heavyCommercialCount").value
    );
    const distance = parseFloat(
      document.getElementById("heavyCommercialDistance").value
    );
    const CSVFuel = getFuelright(fuelType);
    const load = parseFloat(
      document.getElementById("heavyCommercialLoad").value
    );
    const slope = parseFloat(
      document.getElementById("heavyCommercialSlope").value
    );

    const emission = await calculateVehicleEmission(
      fuelType,
      CSVFuel,
      distance,
      count,
      stage,
      speed,
      size,
      slope,
      load
    );

    if (emission !== null) {
      if (emission === 0) {
        alert(
          "Este resultado é 0, reveja os detalhes preenchidos. (This result is 0, review the details filled in)"
        );
      } else {
        const formattedEmission = emission.toFixed(3);
        const heavyCommercialData = {
          count: count,
          vehicle_type: "Heavy Commercial",
          fueltype: CSVFuel,
          year: year,
          distance: distance,
          velocidade: speed,
          emission: formattedEmission,
        };

        const selectedColumn = document.querySelector(`.road-column`);
        if (selectedColumn && count === 1) {
          if (fuelType === "dieselB7") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
             Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.07081)) *
              0.07081
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesado de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
           Emissão direta (Direct emission): ${(
             heavyCommercialData.emission /
             (1 - 0.07081)
           ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "dieselB15") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.1503)) *
              0.1503
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesado de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  heavyCommercialData.emission /
                  (1 - 0.1503)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "Biodiesel") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.8975)) *
              0.8975
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesado de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  heavyCommercialData.emission /
                  (1 - 0.8975)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE5") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.0425)) *
              0.0425
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesado de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  heavyCommercialData.emission /
                  (1 - 0.0425)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE10") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.085)) *
              0.085
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesado de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  heavyCommercialData.emission /
                  (1 - 0.085)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "ethanol") {
            const fuel = `Este veículo tem uma redução na emissão global devido à porção biocombustível<br> 
            Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.7225)) *
              0.7225
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesado de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                Emissão direta (Direct emission): ${(
                  heavyCommercialData.emission /
                  (1 - 0.7225)
                ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else {
            const formattedPassengerCarData = `${heavyCommercialData.count}pesado de mercadoria, a ${heavyCommercialData.fueltype} ,do ano (from) ${heavyCommercialData.year}, ${heavyCommercialData.distance} km de viagem (trip lenght), a uma velocidade média de ${heavyCommercialData.velocidade} Km/h<br>
            Emissão direta (Direct emission): ${heavyCommercialData.emission} kg de ${COO} <br>`;
            addVehicleToColumn("road", formattedPassengerCarData);
          }
        } else if (selectedColumn && count > 1) {
          if (fuelType === "dieselB7") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.07081)) *
              0.07081
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesados de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
            Emissão direta (Direct emission): ${(
              heavyCommercialData.emission /
              (1 - 0.07081)
            ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "dieselB15") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.1503)) *
              0.1503
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesados de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    heavyCommercialData.emission /
                    (1 - 0.1503)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "Biodiesel") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.8975)) *
              0.8975
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesados de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    heavyCommercialData.emission /
                    (1 - 0.8975)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE5") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.0425)) *
              0.0425
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesados de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    heavyCommercialData.emission /
                    (1 - 0.0425)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "gasolineE10") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.085)) *
              0.085
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesados de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    heavyCommercialData.emission /
                    (1 - 0.085)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else if (fuelType === "ethanol") {
            const fuel = `Estes veículos têm uma redução na emissão global devido ao combustível<br> 
              Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (heavyCommercialData.emission / (1 - 0.7225)) *
              0.7225
            ).toFixed(3)} kg de ${COO}`;
            const info = `${
              heavyCommercialData.count
            } pesados de mercadoria, a ${
              heavyCommercialData.fueltype
            }, do ano (from) ${heavyCommercialData.year}, ${
              heavyCommercialData.distance
            } km de viagem (trip lenght), a uma velocidade média de ${
              heavyCommercialData.velocidade
            } Km/h<br>
                  Emissão direta (Direct emission): ${(
                    heavyCommercialData.emission /
                    (1 - 0.7225)
                  ).toFixed(3)} kg de ${COO} <br>`;
            const elementoSpan = document.createElement("span");

            elementoSpan.innerHTML = fuel;
            elementoSpan.classList.add("tooltip");
            const formattedPassengerCarData =
              info + " " + elementoSpan.outerHTML;

            addVehicleToColumn("road", formattedPassengerCarData);
          } else {
            const formattedPassengerCarData = `${heavyCommercialData.count}pesados de mercadoria, a ${heavyCommercialData.fueltype} ,do ano (from) ${heavyCommercialData.year}, ${heavyCommercialData.distance} km de viagem (trip lenght), a uma velocidade média de ${heavyCommercialData.velocidade} Km/h<br>
              Emissão direta (Direct emission): ${heavyCommercialData.emission} kg de ${COO} <br>`;
            addVehicleToColumn("road", formattedPassengerCarData);
          }
          return heavyCommercialData;
        }
      }
    }
  }
}
//propriedades dos combustiveis road EF [kg co2/kg fuel]; PCI(MJ/kg);road EF second fuel in PHEV é a intensidade de co2 do energy mix e
const fuelData = {
  dieselB7: {
    roadEF: 3.169 * (1 - 0.07081),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 42.58,
  },
  dieselB15: {
    roadEF: 3.169 * (1 - 0.1503),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 42.1,
  },
  Biodiesel: {
    roadEF: 3.169 * (1 - 0.8975),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 37,
  },
  gasolineE5: {
    roadEF: 3.169 * (1 - 0.0425),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 42.2,
  },
  gasolineE10: {
    roadEF: 3.169 * (1 - 0.085),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 41.4,
  },
  ethanol: {
    roadEF: 3.169 * (1 - 0.7225),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 27,
  },
  hybrid: {
    roadEF: 3.169 * (1 - 0.0425),
    roadEFSecondeFuel: 0,
    LowerHeatingValue: 42.2,
  },
  dieselPHEV: {
    roadEF: 3.169 * (1 - 0.0708),
    roadEFSecondeFuel: 41300000,
    LowerHeatingValue: 42.58,
  }, //second fuel =diesel
  gasolinePHEV: {
    roadEF: 3.169 * (1 - 0.0425),
    roadEFSecondeFuel: 41300000,
    LowerHeatingValue: 42.2,
  }, //second fuel = gasoline
  lpgGasoline: {
    roadEF: 3.024,
    roadEFSecondeFuel: 3.169 * (1 - 0.0425),
    LowerHeatingValue: 36.564,
  }, //second fuel = gasoline
  cngGasoline: {
    roadEF: 2.473,
    roadEFSecondeFuel: 3.169 * (1 - 0.0425),
    LowerHeatingValue: 48,
  }, //second fuel = gasoline
};

async function calculateVehicleEmission(
  fuelType,
  CSVFuel,
  distance,
  count,
  stage,
  speed,
  size,
  slope,
  load
) {
  const Type = document.getElementById("vehicleType").value;
  try {
    let response;
    if (Type === "passengerCar" || Type === "lightCommercial") {
      response = await fetch("PC & LC ECEF's.csv");
    } else if (Type === "heavyCommercial") {
      response = await fetch("HC EF's.csv");
    }

    const data = await response.text();
    const parsedData = await new Promise((resolve, reject) => {
      Papa.parse(data, {
        header: true,
        delimiter: ";",
        dynamicTyping: true,
        complete: resolve,
        error: reject,
      });
    });

    var matchingRow = parsedData.data.find(function (row) {
      // Use parsedData.data
      return (
        row.Type === Type &&
        row.Fuel === CSVFuel &&
        row.Segment === size &&
        (row["Euro Standart"] || row["Euro Standard"]) === stage &&
        (Type !== "heavyCommercial" || row["Road Slope"] === slope) &&
        (Type !== "heavyCommercial" || row.Load === load)
      );
    });
  } catch (error) {
    console.error(error);
    alert("Erro, verifique os detalhes inseridos (Error, verify the inputs)");
    return null;
  }
  // Or handle the error case accordingly
  if (matchingRow) {
    var alpha = parseFloat(matchingRow.Alpha);
    var beta = parseFloat(matchingRow.Beta);
    var gamma = parseFloat(matchingRow.Gamma);
    var delta = parseFloat(matchingRow.Delta);
    var epsilon = parseFloat(matchingRow.Epsilon);
    var zita = parseFloat(matchingRow.Zita);
    var heta = parseFloat(matchingRow.Hta);

    let roadConsumption =
      (alpha * speed ** 2 + beta * speed + gamma + delta / speed) /
      (epsilon * speed ** 2 + zita * speed + heta);

    var roadEF = fuelData[fuelType].roadEF;
    var PCI = fuelData[fuelType].LowerHeatingValue;
    let emission = (count * distance * roadEF * roadConsumption) / PCI;

    return emission;
  } else {
    alert(
      "Correspondência não encontrada, verifique os detalhes introduzidos (Match not found, please check your inputs)"
    );
    return null; // Or handle the no match case accordingly
  }
}

//---------------------------------SHIPS----------------------------------------------

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
async function calculateShipEmissions(
  shipType,
  shipSpeed,
  fuelType,
  daysAtSea,
  manuveringTime,
  hotellingTime,
  count,
  shipSize,
  potenciaPrincipal,
  potenciaSecundaria
) {
  let shipEmissions = 0;
  let cruiseEmissions = 0;
  let hotelingEmissions = 0;
  let manuveringEmissions = 0;

  let EFprincCruise = 0;
  let EFauxCruise = 0;
  let EFprincManuvering = 0;
  let EFauxManuvering = 0;
  let EFprincHoteling = 0;
  let EFauxHoteling = 0;
  const cruisingTime = 24 * daysAtSea;
  let princLoadCruise = 0;
  let princLoadManuvering = 0;
  let princLoadHoteling = 0;
  let auxLoadCruise = 0;
  let auxLoadManuvering = 0;
  let auxLoadHoteling = 0;
  let EFfuel = 0;
  let coefBioFuel = 0;

  const potenciaNavioCheckBox = document.getElementById("potencia");

  // Retrieve data from shipFuelData structure based on the provided shipType and fuelType
  const fuelData = shipFuelData[fuelType];

  // Retrieve specific fuel efficiency values based on the provided shipSpeed
  const speedData = fuelData[shipSpeed];

  // Assign the retrieved fuel efficiency values to the respective variables
  EFfuel = fuelData.EFfuel;
  coefBioFuel = fuelData.coefBioFuel || 1; // Use a default value of 1 if not provided in the structure

  if (potenciaNavioCheckBox.checked) {
    switch (shipType) {
      case "tanker":
        // potenciaPrincipal = 14.755 * shipSize ** 0.6082;
        // potenciaSecundaria = potenciaPrincipal * 0.3;
        // hotellingTime = 30.7;
        // manuveringTime = 0.95;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.6;
        break;
      case "bulk-carrier":
        // potenciaPrincipal = 35.912 * shipSize ** 0.5276;
        // potenciaSecundaria = potenciaPrincipal * 0.3;
        // hotellingTime = 121;
        // manuveringTime = 2;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
      case "container-ship":
        // potenciaPrincipal = 2.9165 * shipSize ** 0.8719;
        // potenciaSecundaria = potenciaPrincipal * 0.25;
        // hotellingTime = 58;
        // manuveringTime = 0.92;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
      case "general-cargo-ship":
        // potenciaPrincipal = 5.56482 * shipSize ** 0.7425;
        // potenciaSecundaria = potenciaPrincipal * 0.23;
        // hotellingTime = 59.5;
        // manuveringTime = 1.5;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
      case "ro-ro-ship":
        // potenciaPrincipal = 164.578 * shipSize ** 0.435;
        //potenciaSecundaria = potenciaPrincipal * 0.24;
        //hotellingTime = 110.7;
        // manuveringTime = 1;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
      case "fishing-ship":
        // potenciaPrincipal = 9.75891 * shipSize ** 0.7527;
        // potenciaSecundaria = potenciaPrincipal * 0.39;
        // hotellingTime = 60;
        // manuveringTime = 0.5;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
      case "port-vessel":
        // potenciaPrincipal = 54.2171 * shipSize ** 0.642;
        // potenciaSecundaria = potenciaPrincipal * 0.1;
        // manuveringTime = 0.5;
        // hotellingTime = 0;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
    }
    if (fuelType === "methanol" || fuelType === "amonia") {
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
      shipEmissions =
        (cruiseEmissions + hotelingEmissions + manuveringEmissions) * count;

      return shipEmissions.toFixed(3);
    } else if (fuelType === "hydrogen") {
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
      shipEmissions =
        (cruiseEmissions + hotelingEmissions + manuveringEmissions) * count;

      return shipEmissions.toFixed(3);
    } else {
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
      shipEmissions =
        (cruiseEmissions + hotelingEmissions + manuveringEmissions) * count;
      if (fuelType === "ecoBunkers" || fuelType === "ucome") {
        shipEmissions = shipEmissions * coefBioFuel;
      }

      return shipEmissions.toFixed(3);
    }
  }
  if (GTNaviocheckBox.checked) {
    switch (shipType) {
      case "tanker":
        potenciaPrincipal = 14.755 * shipSize ** 0.6082;
        potenciaSecundaria = potenciaPrincipal * 0.3;
        // hotellingTime = 30.7;
        // manuveringTime = 0.95;
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
        // hotellingTime = 121;
        // manuveringTime = 2;
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
        // hotellingTime = 58;
        // manuveringTime = 0.92;
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
        // hotellingTime = 59.5;
        // manuveringTime = 1.5;
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
        //hotellingTime = 110.7;
        // manuveringTime = 1;
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
        // hotellingTime = 60;
        // manuveringTime = 0.5;
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
        // manuveringTime = 0.5;
        // hotellingTime = 0;
        princLoadCruise = 0.8;
        princLoadManuvering = 0.2;
        princLoadHoteling = 0.2;
        auxLoadCruise = 0.3;
        auxLoadManuvering = 0.5;
        auxLoadHoteling = 0.4;
        break;
    }
    if (fuelType === "methanol" || fuelType === "amonia") {
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
      shipEmissions =
        (cruiseEmissions + hotelingEmissions + manuveringEmissions) * count;

      return shipEmissions.toFixed(3);
    } else if (fuelType === "hydrogen") {
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
      shipEmissions =
        (cruiseEmissions + hotelingEmissions + manuveringEmissions) * count;

      return shipEmissions.toFixed(3);
    } else {
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
      shipEmissions =
        (cruiseEmissions + hotelingEmissions + manuveringEmissions) * count;

      if (fuelType === "ecoBunkers" || fuelType === "ucome") {
        shipEmissions = shipEmissions * coefBioFuel;
      }

      return shipEmissions.toFixed(3);
    }
  }
}

async function calculateShipEmissionsFC(fuelType, FC, totalTime, count) {
  // Retrieve data from shipFuelData structure based on the provided shipType and fuelType
  const fuelData = shipFuelData[fuelType];

  // Retrieve specific fuel efficiency values based on the provided shipSpeed

  // Assign the retrieved fuel efficiency values to the respective variables
  EFfuel = fuelData.EFfuel;
  coefBioFuel = fuelData.coefBioFuel || 1; // Use a default value of 1 if not provided in the structure

  shipEmissions = ((FC * totalTime) / 1000) * EFfuel * count;
  if (fuelType === "ecoBunkers" || fuelType === "ucome") {
    shipEmissions = shipEmissions * coefBioFuel;
  }
  return shipEmissions.toFixed(3);
}

async function createShip() {
  const count = parseInt(document.getElementById("shipCount").value);
  const shipType = document.getElementById("ship-type").value;
  const potenciaNavioCheckBox = document.getElementById("potencia");
  const GTNaviocheckBox = document.getElementById("grossTonage");
  const shipSize = parseFloat(document.getElementById("ship-size").value);
  const shipSpeed = document.getElementById("ship-speed").value;
  const fuelType = document.getElementById("fuel-type").value;
  const daysAtSea = parseFloat(document.getElementById("days-at-sea").value);
  const CSVFuel = getFuelright(fuelType);
  const RIGHTShipType = getShipRight(shipType);
  const hotellingTime = parseFloat(
    document.getElementById("hotellingTime").value
  );
  const manuveringTime = parseFloat(
    document.getElementById("manuveringTime").value
  );

  if (potenciaNavioCheckBox.checked && FcNotKnownCheckBox.checked) {
    const potenciaPrincipal = parseFloat(
      document.getElementById("potenciaPrincipal").value
    );
    const potenciaSecundaria = parseFloat(
      document.getElementById("potenciaSecundaria").value
    );
    console.log(potenciaSecundaria);
    try {
      const emission = await calculateShipEmissions(
        shipType,
        shipSpeed,
        fuelType,
        daysAtSea,
        manuveringTime,
        hotellingTime,
        count,
        shipSize,
        potenciaPrincipal,
        potenciaSecundaria
      );
      const formattedEmission = isNaN(emission)
        ? "N/A"
        : parseFloat(emission).toFixed(3);

      // Construct ship data
      const shipData = {
        count: count,
        shipType: RIGHTShipType,
        fuelType: CSVFuel,
        daysAtSea: daysAtSea,
        emission: formattedEmission,
      };

      if (shipData.fuelType === "Hidrogénio (H2)") {
        const fuel = `Este navio não tem emissão direta devido ao combustível ser hidrogénio, no entanto pode ser considerada a 
        Emissão indireta (indirect emission) ${shipData.emission} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${shipData.fuelType}, ${shipData.daysAtSea} dias (days) <br>
        Emissão direta (Direct emission): 0 kg de ${COO} <br>
        `;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else if (shipData.fuelType === "Biodiesel mix B15") {
        const fuel = `Este navio tem uma redução na emissão global devido à porção biocombustível,
        Emissão indireta (indirect emission) ${(
          (shipData.emission / (1 - 0.1503)) *
          0.1503
        ).toFixed(3)} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${
          shipData.fuelType
        }, ${shipData.daysAtSea} dias (days) <br>
        Emissão direta (Direct emission): ${(
          shipData.emission /
          (1 - 0.1503)
        ).toFixed(3)} kg de ${COO} <br>
        `;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else if (shipData.fuelType === "Biodiesel B100") {
        const fuel = `Este navio tem uma redução na emissão direta devido ao combustível <br>,
Emissão indireta (indirect emission) ${(
          (shipData.emission / (1 - 0.8975)) *
          0.8975
        ).toFixed(3)} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${
          shipData.fuelType
        }, ${shipData.daysAtSea} dias (days) <br>
Emissão direta (Direct emission): ${(shipData.emission / (1 - 0.8975)).toFixed(
          3
        )} kg de ${COO} <br>
`;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else {
        const formattedShipData = `${shipData.count}  ${shipData.shipType}, a ${shipData.fuelType}, ${shipData.daysAtSea} dias (days) <br>
      Emissão (Emission): ${shipData.emission} kg de ${COO}`;
        addVehicleToColumn("ship", formattedShipData);
      }

      return shipData;
    } catch (error) {
      console.log(error);
      alert("Erro, verifique os detalhes inseridos (Error, verify the inputs)");
      // Handle the error or show an error message to the user
    }
  }
  if (GTNaviocheckBox.checked && FcNotKnownCheckBox.checked) {
    const shipSize = parseFloat(document.getElementById("ship-size").value);
    try {
      const emission = await calculateShipEmissions(
        shipType,
        shipSpeed,
        fuelType,
        daysAtSea,
        manuveringTime,
        hotellingTime,
        count,
        shipSize
      );
      const formattedEmission = isNaN(emission)
        ? "N/A"
        : parseFloat(emission).toFixed(3);

      // Construct ship data
      const shipData = {
        count: count,
        shipType: RIGHTShipType,
        fuelType: CSVFuel,
        daysAtSea: daysAtSea,
        emission: formattedEmission,
      };

      if (shipData.fuelType === "Hidrogénio (H2)") {
        const fuel = `Este navio não tem emissão direta devido ao combustível ser hidrogénio, no entanto pode ser considerada a 
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${shipData.emission} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${shipData.fuelType}, ${shipData.daysAtSea} dias (days) <br>
        Emissão direta (Direct emission): 0 kg de ${COO} <br>
        `;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else if (shipData.fuelType === "Biodiesel mix B15") {
        const fuel = `Este navio tem uma redução na emissão global devido à porção biocombustível<br>
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
          (shipData.emission / (1 - 0.1503)) *
          0.1503
        ).toFixed(3)} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${
          shipData.fuelType
        }, ${shipData.daysAtSea} dias (days) <br>
        Emissão direta (Direct emission): ${(
          shipData.emission /
          (1 - 0.1503)
        ).toFixed(3)} kg de ${COO} <br>
        `;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else if (shipData.fuelType === "Biodiesel B100") {
        const fuel = `Este navio tem uma redução na emissão global devido à porção biocombustível<br>
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
          (shipData.emission * (1 - 0.8975)) /
          0.8975
        ).toFixed(3)} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${
          shipData.fuelType
        }, ${shipData.daysAtSea} dias (days) <br>
Emissão direta (Direct emission): ${(shipData.emission / (1 - 0.8975)).toFixed(
          3
        )} kg de ${COO} <br>
`;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else {
        const formattedShipData = `${shipData.count}  ${shipData.shipType}, a ${shipData.fuelType}, ${shipData.daysAtSea} dias (days) <br>
      Emissão (Emission): ${shipData.emission} kg de ${COO}`;
        addVehicleToColumn("ship", formattedShipData);
      }

      return shipData;
    } catch (error) {
      console.log(error);
      alert("Erro, verifique os detalhes inseridos (Error, verify the inputs)");
      // Handle the error or show an error message to the user
    }
  }
  if (FCknownCheckBox.checked) {
    const FuelConsumption = parseFloat(document.getElementById("shipFC").value);
    const totalTime = manuveringTime + hotellingTime + daysAtSea * 24;
    try {
      const emission = await calculateShipEmissionsFC(
        fuelType,
        FuelConsumption,
        totalTime,
        count
      );

      const formattedEmission = isNaN(emission)
        ? "N/A"
        : parseFloat(emission).toFixed(3);

      const shipData = {
        count: count,
        shipType: RIGHTShipType,
        fuelType: CSVFuel,
        FuelConsumption: FuelConsumption,
        emission: formattedEmission,
      };
      if (shipData.fuelType === "Hidrogénio (H2)") {
        const fuel = `Este navio não tem emissão direta devido ao combustível ser hidrogénio, no entanto pode ser considerada a 
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${shipData.emission} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${shipData.fuelType}, ${shipData.daysAtSea} dias (days) <br>
        Emissão direta (Direct emission): 0 kg de ${COO} <br>
        `;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else if (shipData.fuelType === "Biodiesel mix B15") {
        const fuel = `EEste navio tem uma redução na emissão global devido à porção biocombustível<br>
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
          (shipData.emission / (1 - 0.1503)) *
          0.1503
        ).toFixed(3)} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${
          shipData.fuelType
        }, ${shipData.daysAtSea} dias (days) <br>
        Emissão direta (Direct emission): ${(
          shipData.emission /
          (1 - 0.1503)
        ).toFixed(3)} kg de ${COO} <br>
        `;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else if (shipData.fuelType === "Biodiesel B100") {
        const fuel = `Este navio tem uma redução na emissão global devido à porção biocombustível<br>
        Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
          (shipData.emission / (1 - 0.8975)) *
          0.8975
        ).toFixed(3)} kg de ${COO}`;
        const info = `${shipData.count}  ${shipData.shipType}, a ${
          shipData.fuelType
        }, ${shipData.daysAtSea} dias (days) <br>
Emissão direta (Direct emission): ${(shipData.emission / (1 - 0.8975)).toFixed(
          3
        )} kg de ${COO} <br>
`;
        const elementoSpan = document.createElement("span");

        elementoSpan.innerHTML = fuel;
        elementoSpan.classList.add("tooltip");
        const formattedShipData = info + " " + elementoSpan.outerHTML;

        addVehicleToColumn("ship", formattedShipData);
      } else {
        const formattedShipData = `${shipData.count}  ${shipData.shipType}, a ${shipData.fuelType}, ${shipData.daysAtSea} dias (days) <br>
      Emissão direta (Emission): ${shipData.emission} kg de ${COO}`;
        addVehicleToColumn("ship", formattedShipData);
      }

      return shipData;
    } catch (error) {
      console.log(error);
      alert("Erro, verifique os detalhes inseridos (Error, verify the inputs)");
      // Handle the error or show an error message to the user
    }
  }
}

function getShipRight(shipType) {
  switch (true) {
    case shipType === "tanker":
      return "Navio-Tanque (Tanker)";
    case shipType === "bulk-carrier":
      return "Graneleiro (Bulk carrier)";
    case shipType === "container-ship":
      return "Navio de contentores (Container ship)";
    case shipType === "general-cargo-ship":
      return "Navio de carga geral (General cargo ship)";
    case shipType === "ro-ro-ship":
      return "Cargueiro Ro-Ro (Ro-Ro ship)";
    case shipType === "fishing-ship":
      return "Embarcação de pesca (Fishing vessel)";
    case shipType === "port-vessel":
      return "Embarcação portuária (Port vessel)";
  }
}
//----------------------Train ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function createTrain() {
  const count = document.getElementById("trainCount").value;
  const trainFuel = document.getElementById("trainFuel").value;
  const trainHoras = parseInt(document.getElementById("trainHoras").value);
  const trainLoad = document.getElementById("trainLoad").value;
  const trainPower = parseFloat(document.getElementById("trainPower").value);
  try {
    const emission = await calculateTrainEmissions(
      trainFuel,
      trainHoras,
      trainLoad,
      trainPower,
      count
    );

    const trainData = {
      fuelType: trainFuel,
      Power: trainPower,
      count: count,
      activity: trainHoras,
      emission: emission,
    };

    if (trainData.fuelType === "eletricity") {
      const fuel = `Este comboio não emite ${COO} diretamente por ser elétrico <br>
      Emissão indireta (indirect emission) ${trainData.emission} kg de ${COO}`;
      const info = `${trainData.count} Locomotiva, a ${trainData.fuelType}, ${trainData.activity} horas de viagem (hours of travel) <br>
            Emissão direta (Direct emission): 0 kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedTrainData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("train", formattedTrainData);
    } else if (trainData.fuelType === "biodiesel") {
      const fuel = `Esta locomotiva tem uma redução na emissão global devido à porção biocombustível<br> 
      Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
        (trainData.emission / (1 - 0.8975)) *
        0.8975
      ).toFixed(3)} kg de ${COO}`;
      const info = `${trainData.count}  locomotiva, a ${trainData.fuelType}, ${
        trainData.activity
      }  horas de viagem (hours of travel) <br>
      Emissão direta (Direct emission): ${(
        trainData.emission /
        (1 - 0.8975)
      ).toFixed(3)} kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedTrainData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("train", formattedTrainData);
    } else if (trainData.fuelType === "diesel") {
      const fuel = `Esta locomotiva tem uma redução na emissão global devido à porção biocombustível<br> 
      Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
        (trainData.emission / (1 - 0.07081)) *
        0.07081
      ).toFixed(3)} kg de ${COO}`;
      const info = `${trainData.count}  locomotiva, a ${trainData.fuelType}, ${
        trainData.activity
      }  horas de viagem (hours of travel) <br>
      Emissão direta (Direct emission): ${(
        trainData.emission /
        (1 - 0.07081)
      ).toFixed(3)} kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedTrainData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("train", formattedTrainData);
    }
    return trainData;
  } catch (error) {
    alert("Erro, verifique os detalhes inseridos (Error, verify the inputs)");
  }
}
async function calculateTrainEmissions(
  trainFuel,
  trainHoras,
  trainLoad,
  trainPower,
  count
) {
  let trainEmissions;
  let loadFactor;

  if (trainLoad === "full") {
    loadFactor = 1;
  } else if (trainLoad === "empty") {
    loadFactor = 0.3;
  } else if (trainLoad === "half") {
    loadFactor = 0.5;
  }

  if (trainFuel === "diesel") {
    const lowHeatingValue = 11.944; // [kWh/kg fuel]
    const emissionFactor = 3.169 * (1 - 0.07081); // [kg CO2/kgfuel]
    trainEmissions =
      count *
      ((trainHoras * trainPower) / lowHeatingValue) *
      loadFactor *
      emissionFactor;
  } else if (trainFuel === "biodiesel") {
    const lowHeatingValue = 10.278; // [kWh/kg fuel]
    const emissionFactor = 3.169 * (1 - 0.8975); // [kg CO2/ kg fuel]
    trainEmissions =
      count *
      ((trainHoras * trainPower) / lowHeatingValue) *
      loadFactor *
      emissionFactor;
  } else if (trainFuel === "eletricity") {
    const energyMixFactor = 0.14868; // [Kg CO2/KWh]
    trainEmissions =
      count * trainHoras * trainPower * energyMixFactor * loadFactor;
  }
  if (trainEmissions < 0.001) {
    trainEmissions = trainEmissions.toFixed(5);
  } else {
    trainEmissions = trainEmissions.toFixed(3);
  }

  return trainEmissions;
}

//-----------------------------------------EQUIPAMENTOS------------------------------
function getEmissionStage(equipmentYearInput) {
  if (equipmentYearInput < 1981) {
    return "Before 1981";
  } else if (equipmentYearInput >= 1981 && equipmentYearInput <= 1990) {
    return "1981-1990";
  } else if (equipmentYearInput >= 1991 && equipmentYearInput <= 1998) {
    return "1991-1998";
  } else if (equipmentYearInput >= 1999 && equipmentYearInput <= 2000) {
    return "Stage I";
  } else if (equipmentYearInput >= 2001 && equipmentYearInput <= 2005) {
    return "Stage II";
  } else if (equipmentYearInput >= 2006 && equipmentYearInput <= 2009) {
    return "Stage IIIA";
  } else if (equipmentYearInput >= 2010 && equipmentYearInput <= 2013) {
    return "Stage IIIB";
  } else if (equipmentYearInput >= 2014 && equipmentYearInput <= 2019) {
    return "Stage IV";
  } else {
    return "Stage V";
  }
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
async function calculateEquipmentEmissions(
  equipmentType,
  equiLoad,
  equipmentPower,
  equipmentActivity,
  equipmentYearInput,
  engineSize,
  equipmentCount
) {
  let equipmentEmissions = 0;

  const stage = getEmissionStage(equipmentYearInput);
  const loadFactor = loadfactor[stage][equiLoad];

  if (equipmentType === "LPG") {
    const equiEF = 3.024; //[kgCO2/kgfuel]
    const equiConsumption = 0.311; //[kgfuel/kWh]
    equipmentEmissions =
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
  }

  if (equipmentType === "eletricity") {
    const energyMixFactor = 0.14868; // [Kg CO2/KWh]
    equipmentEmissions =
      equipmentCount *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      energyMixFactor;
  }
  if (equipmentType === "diesel") {
    const equiEF = 3.169 * (1 - 0.07081); //[kgCO2/kgfuel]
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
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
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
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF *
      coefBioFuel;
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
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF *
      coefBioFuel;
  }
  if (equipmentType === "gasoline2stroke") {
    const equiEF = 3.169; //[kgCO2/kgfuel]
    let equiConsumption = 0.652; //[Kgfuel/kWh]
    equipmentEmissions =
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
  }
  if (equipmentType === "gasoline4stroke") {
    const equiEF = 3.169; //[kgCO2/kgfuel]
    let equiConsumption = 0;
    if (engineSize < 66 && stage === "Before 1981") {
      equiConsumption = 0.603; //[Kgfuel/kWh]
    } else if (
      engineSize < 66 &&
      (stage === "1981-1990" ||
        stage === "1991-1998" ||
        stage === "Stage I" ||
        stage === "Stage II" ||
        stage === "Stage IIIA" ||
        stage === "Stage IIIB" ||
        stage === "Stage IV" ||
        stage === "Stage V")
    ) {
      equiConsumption = 0.475; //[Kgfuel/kWh]
    } else if (
      engineSize <= 66 &&
      engineSize < 100 &&
      stage === "Before 1981"
    ) {
      equiConsumption = 0.627; //[Kgfuel/kWh]
    } else if (engineSize <= 66 && engineSize < 100 && stage === "1981-1990") {
      equiConsumption = 0.599; //[Kgfuel/kWh]
    } else if (
      engineSize <= 66 &&
      engineSize < 100 &&
      (stage === "1991-1998" || stage === "Stage I")
    ) {
      equiConsumption = 0.57; //[Kgfuel/kWh]
    } else if (
      (engineSize <= 66 && engineSize < 100 && stage === "Stage II") ||
      stage === "Stage IIIA" ||
      stage === "Stage IIIB" ||
      stage === "Stage IV" ||
      stage === "Stage V"
    ) {
      equiConsumption = 0.45;
    } else if (
      engineSize <= 100 &&
      engineSize < 225 &&
      stage === "Before 1981"
    ) {
      equiConsumption = 0.601; //[Kgfuel/kWh]
    } else if (engineSize <= 100 && engineSize < 225 && stage === "1981-1990") {
      equiConsumption = 0.573; //[Kgfuel/kWh]
    } else if (
      engineSize <= 100 &&
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
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
  }
  if (equipmentEmissions < 0.003) {
    equipmentEmissions = equipmentEmissions.toFixed(5);
  } else equipmentEmissions = equipmentEmissions.toFixed(3);
  return equipmentEmissions;
}

async function createEquipment() {
  const equipmentCountInput = document.getElementById("equipmentCount").value;
  const equipmentTypeInput = document.getElementById("equipmentType").value;
  const equipmentActivityInput =
    document.getElementById("equipmentActivity").value;
  const equipmentPowerInput = document.getElementById("equipmentPower").value;
  const equipmentYearInput = document.getElementById("equipmentYear").value;
  const engineSizeInput = document.getElementById("engineSize").value;
  const equiLoadInput = document.getElementById("equiLoad").value;
  const equiRightFuel = getFuelright(equipmentTypeInput);
  try {
    const emission = await calculateEquipmentEmissions(
      equipmentTypeInput,
      equiLoadInput,
      equipmentPowerInput,
      equipmentActivityInput,
      equipmentYearInput,
      engineSizeInput,
      equipmentCountInput
    );
    const EquipmentData = {
      count: equipmentCountInput,
      fueltype: equiRightFuel,
      power: equipmentPowerInput,
      activity: equipmentActivityInput,
      emission: emission,
    };

    if (equipmentTypeInput === "eletricity") {
      const fuel = `Este equipamento não emite ${COO} diretamente por ser elétrico<br>
        Emissão indireta (indirect emission): ${EquipmentData.emission} kg de ${COO}`;
      const info = `${EquipmentData.count} Equipamento portuário (handling equipment), a ${EquipmentData.fueltype}, com (with) ${EquipmentData.power} kW, ${EquipmentData.activity} horas de trabalho (working hours) <br>
      
      
      Emissão direta (Direct emission): 0 kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedEquipmentData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("portEquipment", formattedEquipmentData);
    } else if (equipmentTypeInput === "B100") {
      const fuel = `Este equipamento tem uma redução na emissão global devido à porção biocombustível<br> 
      Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
        (EquipmentData.emission / (1 - 0.8975)) *
        0.8975
      ).toFixed(3)} kg de ${COO}`;
      const info = `${
        EquipmentData.count
      } Equipamento portuário (handling equipment), a ${
        EquipmentData.fueltype
      }, com (with) ${EquipmentData.power} kW, ${
        EquipmentData.activity
      } horas de trabalho (working hours) <br>
      Emissão direta (Direct emission): ${(
        EquipmentData.emission /
        (1 - 0.8975)
      ).toFixed(3)} kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedEquipmentData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("portEquipment", formattedEquipmentData);
    } else if (equipmentTypeInput === "B15") {
      const fuel = `Este equipamento tem uma redução na emissão global devido à porção biocombustível<br> 
      Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
        (EquipmentData.emission / (1 - 0.1503)) *
        0.1503
      ).toFixed(3)} kg de ${COO}`;
      const info = `${
        EquipmentData.count
      } Equipamento portuário (handling equipment), a ${
        EquipmentData.fueltype
      }, com (with) ${EquipmentData.power} kW, ${
        EquipmentData.activity
      } horas de trabalho (working hours) <br>
      Emissão direta (Direct emission): ${(
        EquipmentData.emission /
        (1 - 0.1503)
      ).toFixed(3)} kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedEquipmentData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("portEquipment", formattedEquipmentData);
    } else if (equipmentTypeInput === "diesel") {
      const fuel = `Este equipamento tem uma redução na emissão global devido à porção biocombustível<br> 
      Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
        (EquipmentData.emission / (1 - 0.07081)) *
        0.07081
      ).toFixed(3)} kg de ${COO}`;
      const info = `${
        EquipmentData.count
      } Equipamento portuário (handling equipment), a ${
        EquipmentData.fueltype
      }, com (with) ${EquipmentData.power} kW, ${
        EquipmentData.activity
      } horas de trabalho (working hours) <br>
      Emissão direta (Direct emission): ${(
        EquipmentData.emission /
        (1 - 0.07081)
      ).toFixed(3)} kg de ${COO} <br>
      `;
      const elementoSpan = document.createElement("span");

      elementoSpan.innerHTML = fuel;
      elementoSpan.classList.add("tooltip");
      const formattedEquipmentData = info + " " + elementoSpan.outerHTML;

      addVehicleToColumn("portEquipment", formattedEquipmentData);
    } else {
      const formattedEquipmentData = `${EquipmentData.count} Equipamento portuário (handling equipment), a ${EquipmentData.fueltype}, com (with) ${EquipmentData.power} kW, ${EquipmentData.activity} horas de trabalho (working hours) <br>
      Emissão direta (Direct emission): ${EquipmentData.emission} kg de ${COO} <br>`;
      addVehicleToColumn("portEquipment", formattedEquipmentData);
    }
    return EquipmentData;
  } catch (error) {
    alert("Erro, verifique os detalhes inseridos (Error, verify the inputs)");
  }
}

//--------------------------------------------------Butões------------------------------

var scenarios = [];
var shipDataToEX = [];
var trainDataToEX = [];
var equipmentDataToEX = [];
var passengcarDataToEX = [];
var heavyComDataToEX = [];
var lightComDataToEX = [];

document.addEventListener("DOMContentLoaded", function () {
  const addVehicleButton = document.getElementById("addVehicleButton");
  const constainerToshow = document.getElementById("simulation-section");
  addVehicleButton.addEventListener("click", async function (event) {
    event.preventDefault();

    if (shipModeCheckbox.checked) {
      showColumn("ship");
      try {
        const shipData = await createShip();
        shipDataToEX.push(shipData);
        // Wait for the promise to be resolved
        // Now you can safely log the resolved data
      } catch (error) {
        console.error(error);
        // Handle errors if necessary
      }
    }

    if (roadModeCheckbox.checked) {
      showColumn("road");
      try {
        const passengcarData = await createPassengerCar();
        const heavyComData = await createHeavyCommercial();
        const lightComData = await createlightCommercial();
        console.log("passengcarData:", passengcarData);
        console.log("heavyComData:", heavyComData);
        console.log("lightComData:", lightComData);
        if (passengcarData) {
          passengcarDataToEX.push(passengcarData);
        }
        if (heavyComData) {
          heavyComDataToEX.push(heavyComData);
        }
        if (lightComData) {
          lightComDataToEX.push(lightComData);
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (trainModeCheckbox.checked) {
      showColumn("train");
      try {
        const trainData = await createTrain();
        trainDataToEX.push(trainData);
      } catch (error) {
        console.error(error);
      }
    }
    if (equipmentModeCheckbox.checked) {
      showColumn("portEquipment");
      try {
        const equipmentData = await createEquipment();
        equipmentDataToEX.push(equipmentData);
      } catch (error) {
        console.error(error);
      }
    }
    constainerToshow.style.display = "block";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const deleteScenario = document.getElementById("clearFleetButton");
  deleteScenario.addEventListener("click", function (event) {
    event.preventDefault();
    clearColumnContent();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const deleteButton = document.getElementById("deleteButton");
  const constainerToshow = document.getElementById("comparison-section");
  saveButton.addEventListener("click", function () {
    // Assuming createScenario returns the current scenario data
    const scenario = createScenario();

    scenarios.push(scenario);

    const chartData = generateChartDataFromScenario(scenario);
    const totalEmissions =
      parseFloat(scenario.roadTotalEmissions) +
      parseFloat(scenario.trainTotalEmissions) +
      parseFloat(scenario.shipTotalEmissions) +
      parseFloat(scenario.equipmentTotalEmissions);
    const totalReduction =
      parseFloat(scenario.trainReduction) +
      parseFloat(scenario.equipmentReduction) +
      parseFloat(scenario.roadReduction) +
      parseFloat(scenario.shipReduction);
    createChartCanvas(chartData, totalEmissions, totalReduction);
    constainerToshow.style.display = "block";
  });

  deleteButton.addEventListener("click", function () {
    deleteChartCanvas();
  });
  var navigate1Button = document.getElementById("level1Button");
  var navigate2Button = document.getElementById("level2Button");
  navigate1Button.addEventListener("click", function () {
    // Redirect to the desired page
    window.location.href = "http://127.0.0.1:5500/Level%201/index.html";
  });
  navigate2Button.addEventListener("click", function () {
    // Redirect to the desired page
    window.location.href = "http://127.0.0.1:5500/Level%202/index.html";
  });
});

//---------------------------------tratamento de cenários-----------------------
function createChartCanvas(chartData, totalEmissions, totalReduction) {
  const chartContainer = document.createElement("div");
  chartContainer.classList.add("chart-container");

  const canvas = document.createElement("canvas");
  canvas.width = 650; // Set the desired width
  canvas.height = 650; // Set the desired height

  const container = document.getElementById("chartContainer");

  const ctx = canvas.getContext("2d");
  const chart = new Chart(ctx, {
    type: "pie",
    data: chartData,
    options: {
      // your chart options here
    },
  });

  chartContainer.appendChild(canvas);

  const totalEmissionsParagraph = document.createElement("p");
  totalEmissionsParagraph.innerHTML = `Total: ${totalEmissions.toFixed(
    3
  )} kg ${COO} <br> Redução total (total reduction): ${totalReduction.toFixed(
    3
  )} kg ${COO}`;
  chartContainer.appendChild(totalEmissionsParagraph);

  container.appendChild(chartContainer);
}

function deleteChartCanvas() {
  const container = document.getElementById("chartContainer");
  // Replace with your actual container ID
  const chartContainers = container.getElementsByClassName("chart-container");

  if (chartContainers.length > 0) {
    const containerToRemove = chartContainers[chartContainers.length - 1]; // Remove the last added chart container
    container.removeChild(containerToRemove);
  }
  if (scenarios.length > 0) {
    scenarios.pop();
  }
}

// Array to store multiple scenarios

function createScenario() {
  const scenario = {};

  scenario.shipData = shipDataToEX;
  scenario.passengcarData = passengcarDataToEX;
  scenario.lightComData = lightComDataToEX;
  scenario.heavyComData = heavyComDataToEX;
  scenario.trainData = trainDataToEX;
  scenario.equipmentData = equipmentDataToEX;
  //Gather ship data
  scenario.shipTotalEmissions = calculateTotalEmissions("ship-column");

  // Gather road data
  scenario.roadTotalEmissions = calculateTotalEmissions("road-column");

  // Gather train data
  scenario.trainTotalEmissions = calculateTotalEmissions("train-column");

  // Gather equipment data
  scenario.equipmentTotalEmissions = calculateTotalEmissions(
    "portEquipment-column"
  );

  scenario.roadReduction = calculateTotalReductionEmissions("road-column");
  scenario.shipReduction = calculateTotalReductionEmissions("ship-column");
  scenario.trainReduction = calculateTotalReductionEmissions("train-column");
  scenario.equipmentReduction = calculateTotalReductionEmissions(
    "portEquipment-column"
  );

  return scenario;
}

function calculateTotalEmissions(columnClassName) {
  const columnElements = document.querySelectorAll(`.${columnClassName}`);
  let totalEmissions = 0;

  columnElements.forEach((column) => {
    const emissionItems = column.querySelectorAll("li");

    emissionItems.forEach((item) => {
      const directEmissionMatch = item.textContent.match(
        /Emissão direta \(Direct emission\): ([0-9.]+)/
      );

      if (directEmissionMatch) {
        const emissionValue = parseFloat(directEmissionMatch[1]);
        if (!isNaN(emissionValue)) {
          totalEmissions += emissionValue;
        }
      }
    });
  });

  return totalEmissions.toFixed(3); // Adjust the decimal places as needed
}

function calculateTotalReductionEmissions(columnClassName) {
  const columnElements = document.querySelectorAll(`.${columnClassName}`);
  let totalReductionEmissions = 0;

  columnElements.forEach((column) => {
    const hoverSpans = column.querySelectorAll("span.tooltip");

    hoverSpans.forEach((hoverSpan) => {
      if (hoverSpan.textContent) {
        const indirectEmissionMatch = hoverSpan.textContent.match(
          /Redução de CO2 indiretamente \(indirect CO2 emission reduction\): ([0-9.]+)/
        );

        if (indirectEmissionMatch) {
          const emissionReductionValue = parseFloat(indirectEmissionMatch[1]);
          if (!isNaN(emissionReductionValue)) {
            totalReductionEmissions += emissionReductionValue;
          }
        }
      }
    });
  });

  return totalReductionEmissions.toFixed(3);
}

function generateChartDataFromScenario(scenario) {
  const chartData = {
    labels: [
      "Veículos rodoviários (Road Vehicles)",
      "Comboios (Trains)",
      "Navio (Ship)",
      "Equipamentos Portuárias (Port Equipment)",
    ],
    datasets: [
      {
        data: [
          scenario.roadTotalEmissions,
          scenario.trainTotalEmissions,
          scenario.shipTotalEmissions,
          scenario.equipmentTotalEmissions,
        ],
        backgroundColor: [
          "#FF6384", // Road
          "#36A2EB", // Train
          "#FFCE56", // Ship
          "#4CAF50", // Equipment
        ],
      },
    ],
  };

  return chartData;
}

//EXport to EXCEl_____________________________
function exportScenariosToExcel(scenarios) {
  if (!scenarios || scenarios.length === 0) {
    alert("No scenarios to export.");
    return;
  }

  const workbook = XLSX.utils.book_new();

  scenarios.forEach((scenario, index) => {
    const scenarioName = `Scenario ${index + 1}`;
    const worksheets = [];

    // Create worksheets for each mode (ship, road, train, equipment)
    const modes = [
      "shipData",
      "passengcarData",
      "heavyComData",
      "lightComData",
      "trainData",
      "equipmentData",
    ];

    modes.forEach((mode) => {
      const modeData = scenario[mode];
      if (modeData && modeData.length > 0) {
        const worksheet = XLSX.utils.json_to_sheet(modeData);
        worksheets.push({ name: mode, data: worksheet });
      }
    });

    // Create a worksheet for total results
    const totalResultsData = [
      ["Mode", "Total Emissions (kg COO)"],
      ["Ship", scenario.shipTotalEmissions],
      ["Road", scenario.roadTotalEmissions],
      ["Train", scenario.trainTotalEmissions],
      ["Equipment", scenario.equipmentTotalEmissions],
    ];

    const totalResultsWorksheet = XLSX.utils.aoa_to_sheet(totalResultsData);
    worksheets.push({ name: "Total Results", data: totalResultsWorksheet });

    // Add the worksheets to the workbook
    worksheets.forEach((sheet) => {
      XLSX.utils.book_append_sheet(
        workbook,
        sheet.data,
        `${scenarioName} - ${sheet.name}`
      );
    });
  });

  // Create a blob containing the workbook data and trigger a download
  XLSX.writeFile(workbook, "scenarios.xlsx");
}

const exportButton = document.getElementById("exportButton");

exportButton.addEventListener("click", function () {
  exportScenariosToExcel(scenarios);
});
