var CO2 = "CO2",
  COO = CO2.replace(/\d+/g, "<sub>$&</sub>");
let fuel;

const modeSelect = document.getElementById("mode-select");
const fleetList = document.getElementById("fleetList");

var vehicles = [];
var roadConsumption = 0;
const fuelType = document.getElementById("passengerCarFuelType").value;
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
vehicleType.addEventListener("change", showCorrectInputs);

//----------------------------Road Calcuations------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const addVehicleButton = document.getElementById("addVehicleButton");
  // Event listener for the "Add Vehicle To Fleet" button
  addVehicleButton.addEventListener("click", function (event) {
    event.preventDefault();
    addVehicleToFleet();
    if (modeSelect.value === "portEquiment") {
      addEquipmentToFleet();
    }
  });
});

function getFuelright(fuelType) {
  switch (true) {
    case fuelType === "dieselPHEV":
      return "Diesel PHEV ~ Diesel";
    case fuelType === "petrolPHEV":
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

let CSVFuel = getFuelright(fuelType);

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
function showFleetDiv() {
  const fleetdiv = document.getElementById("Frota");
  fleetdiv.style.display = "block";
}
function showComparationDiv() {
  const comparationdiv = document.getElementById("scenarios");
  comparationdiv.style.display = "block";
}

function showCorrectFleetTable() {
  const mode = document.getElementById("mode-select").value;
  const roadTabel = document.getElementById("roadfleetTable");
  const shipatable = document.getElementById("shipfleetTable");
  const trainTable = document.getElementById("trainfleetTable");
  const equipmentTable = document.getElementById("portEquimentfleetTable");
  if (mode === "ship") {
    shipatable.style.display = "block";
    roadTabel.style.display = "none";
    trainTable.style.display = "none";
    equipmentTable.style.display = "none";
  }
  if (mode === "road") {
    roadTabel.style.display = "block";
    shipatable.style.display = "none";
    trainTable.style.display = "none";
    equipmentTable.style.display = "none";
  }
  if (mode === "train") {
    trainTable.style.display = "block";
    shipatable.style.display = "none";
    roadTabel.style.display = "none";
    equipmentTable.style.display = "none";
  }
  if (mode === "portEquiment") {
    equipmentTable.style.display = "block";
    trainTable.style.display = "none";
    shipatable.style.display = "none";
    roadTabel.style.display = "none";
  }
}

// Function to add a vehicle to the fleet
function addVehicleToFleet() {
  const type = document.getElementById("vehicleType").value;
  const mode = document.getElementById("mode-select").value;
  let vehicle;

  if (type === "passengerCar" && mode === "road") {
    createPassengerCar().then((createdVehicle) => {
      vehicle = createdVehicle;
      if (vehicle) {
        const tableRow = document.createElement("tr");

        const countCell = document.createElement("td");
        countCell.textContent = vehicle.count;
        tableRow.appendChild(countCell);

        const vehicleTypeCell = document.createElement("td");
        vehicleTypeCell.textContent = vehicle.vehicleType;
        tableRow.appendChild(vehicleTypeCell);

        const fuelTypeCell = document.createElement("td");
        fuelTypeCell.textContent = vehicle.fuelType;
        tableRow.appendChild(fuelTypeCell);

        const sizeCell = document.createElement("td");
        sizeCell.textContent = vehicle.size;
        tableRow.appendChild(sizeCell);

        const stageCell = document.createElement("td");
        stageCell.textContent = vehicle.stage;
        tableRow.appendChild(stageCell);

        const distanceCell = document.createElement("td");
        distanceCell.textContent = vehicle.distance;
        tableRow.appendChild(distanceCell);

        const emissionCell = document.createElement("td");
        const fuelType = document.getElementById("passengerCarFuelType").value;
        if (
          fuelType === "dieselB7" ||
          fuelType === "dieselB15" ||
          fuelType === "Biodiesel" ||
          fuelType === "gasolineE5" ||
          fuelType === "gasolineE10" ||
          fuelType === "ethanol"
        ) {
          const reductionFactor =
            fuelType === "dieselB7"
              ? 0.07081
              : fuelType === "dieselB15"
              ? 0.1503
              : fuelType === "Biodiesel"
              ? 0.8975
              : fuelType === "gasolineE5"
              ? 0.0425
              : fuelType === "gasolineE10"
              ? 0.085
              : fuelType === "ethanol"
              ? 0.7225
              : 0; // Default if none of the specific fuel types

          // Create the tooltip text based on the selected fuel type
          const tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
            (vehicle.emission / (1 - reductionFactor)) *
            reductionFactor
          ).toFixed(3)} kg de ${COO}`;

          // Create the icon-container element
          const iconContainer = document.createElement("p");
          iconContainer.classList.add("icon-container");

          const elementoSpan = document.createElement("span");
          elementoSpan.innerHTML = tooltipText;
          elementoSpan.classList.add("tooltip");
          // Set the emission value as text content of the icon-container
          iconContainer.innerHTML =
            (vehicle.emission / (1 - reductionFactor)).toFixed(3) +
            " " +
            elementoSpan.outerHTML;

          // Add the icon-container to the cell
          emissionCell.appendChild(iconContainer);
        } else {
          // For other fuel types without tooltips

          emissionCell.innerHTML = vehicle.emission; // Set the emission value as text content
        }

        tableRow.appendChild(emissionCell);

        const fleetTable = document.getElementById("roadfleetTable");
        fleetTable.appendChild(tableRow);
      }
    });
  }
  if (type === "lightCommercial" && mode === "road") {
    createlightCommercial().then((createdVehicle) => {
      vehicle = createdVehicle;
      if (vehicle) {
        const tableRow = document.createElement("tr");

        const countCell = document.createElement("td");
        countCell.textContent = vehicle.count;
        tableRow.appendChild(countCell);

        const vehicleTypeCell = document.createElement("td");
        vehicleTypeCell.textContent = vehicle.vehicleType;
        tableRow.appendChild(vehicleTypeCell);

        const fuelTypeCell = document.createElement("td");
        fuelTypeCell.textContent = vehicle.fuelType;
        tableRow.appendChild(fuelTypeCell);

        const sizeCell = document.createElement("td");
        sizeCell.textContent = vehicle.size;
        tableRow.appendChild(sizeCell);

        const stageCell = document.createElement("td");
        stageCell.textContent = vehicle.stage;
        tableRow.appendChild(stageCell);

        const distanceCell = document.createElement("td");
        distanceCell.textContent = vehicle.distance;
        tableRow.appendChild(distanceCell);

        const emissionCell = document.createElement("td");
        const fuelType = document.getElementById(
          "lightCommercialFuelType"
        ).value;
        if (
          fuelType === "dieselB7" ||
          fuelType === "dieselB15" ||
          fuelType === "Biodiesel" ||
          fuelType === "gasolineE5" ||
          fuelType === "gasolineE10" ||
          fuelType === "ethanol"
        ) {
          const reductionFactor =
            fuelType === "dieselB7"
              ? 0.07081
              : fuelType === "dieselB15"
              ? 0.1503
              : fuelType === "Biodiesel"
              ? 0.8975
              : fuelType === "gasolineE5"
              ? 0.0425
              : fuelType === "gasolineE10"
              ? 0.085
              : fuelType === "ethanol"
              ? 0.7225
              : 0; // Default if none of the specific fuel types

          // Create the tooltip text based on the selected fuel type
          const tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
            (vehicle.emission / (1 - reductionFactor)) *
            reductionFactor
          ).toFixed(3)} kg de ${COO}`;

          // Create the icon-container element
          const iconContainer = document.createElement("p");
          iconContainer.classList.add("icon-container");

          const elementoSpan = document.createElement("span");
          elementoSpan.innerHTML = tooltipText;
          elementoSpan.classList.add("tooltip");
          // Set the emission value as text content of the icon-container
          iconContainer.innerHTML =
            (vehicle.emission / (1 - reductionFactor)).toFixed(3) +
            " " +
            elementoSpan.outerHTML;

          // Add the icon-container to the cell
          emissionCell.appendChild(iconContainer);
        } else {
          // For other fuel types without tooltips

          emissionCell.innerHTML = vehicle.emission; // Set the emission value as text content
        }

        tableRow.appendChild(emissionCell);

        const fleetTable = document.getElementById("roadfleetTable");
        fleetTable.appendChild(tableRow);
      }
    });
  }
  if (type === "heavyCommercial" && mode === "road") {
    createHeavyCommercial().then((createdVehicle) => {
      vehicle = createdVehicle;
      if (vehicle) {
        const tableRow = document.createElement("tr");

        const countCell = document.createElement("td");
        countCell.textContent = vehicle.count;
        tableRow.appendChild(countCell);

        const vehicleTypeCell = document.createElement("td");
        vehicleTypeCell.textContent = vehicle.vehicleType;
        tableRow.appendChild(vehicleTypeCell);

        const fuelTypeCell = document.createElement("td");
        fuelTypeCell.textContent = vehicle.fuelType;
        tableRow.appendChild(fuelTypeCell);

        const sizeCell = document.createElement("td");
        sizeCell.textContent = vehicle.size;
        tableRow.appendChild(sizeCell);

        const stageCell = document.createElement("td");
        stageCell.textContent = vehicle.stage;
        tableRow.appendChild(stageCell);

        const distanceCell = document.createElement("td");
        distanceCell.textContent = vehicle.distance;
        tableRow.appendChild(distanceCell);

        const emissionCell = document.createElement("td");
        const fuelType = document.getElementById("heavyCommercialType").value;
        if (
          fuelType === "dieselB7" ||
          fuelType === "dieselB15" ||
          fuelType === "Biodiesel" ||
          fuelType === "gasolineE5" ||
          fuelType === "gasolineE10" ||
          fuelType === "ethanol"
        ) {
          const reductionFactor =
            fuelType === "dieselB7"
              ? 0.07081
              : fuelType === "dieselB15"
              ? 0.1503
              : fuelType === "Biodiesel"
              ? 0.8975
              : fuelType === "gasolineE5"
              ? 0.0425
              : fuelType === "gasolineE10"
              ? 0.085
              : fuelType === "ethanol"
              ? 0.7225
              : 0; // Default if none of the specific fuel types

          // Create the tooltip text based on the selected fuel type
          const tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
            (vehicle.emission / (1 - reductionFactor)) *
            reductionFactor
          ).toFixed(3)} kg de ${COO}`;

          // Create the icon-container element
          const iconContainer = document.createElement("p");
          iconContainer.classList.add("icon-container");

          const elementoSpan = document.createElement("span");
          elementoSpan.innerHTML = tooltipText;
          elementoSpan.classList.add("tooltip");
          // Set the emission value as text content of the icon-container
          iconContainer.innerHTML =
            (vehicle.emission / (1 - reductionFactor)).toFixed(3) +
            " " +
            elementoSpan.outerHTML;

          // Add the icon-container to the cell
          emissionCell.appendChild(iconContainer);
        } else {
          // For other fuel types without tooltips

          emissionCell.innerHTML = vehicle.emission; // Set the emission value as text content
        }

        tableRow.appendChild(emissionCell);

        const fleetTable = document.getElementById("roadfleetTable");
        fleetTable.appendChild(tableRow);
      }
    });
  }
  if (mode === "ship") {
    createShip().then((createdVehicle) => {
      vehicle = createdVehicle;
      if (vehicle) {
        const tableRow = document.createElement("tr");

        const countCell = document.createElement("td");
        countCell.textContent = vehicle.count;
        tableRow.appendChild(countCell);

        const vehicleTypeCell = document.createElement("td");
        vehicleTypeCell.textContent = vehicle.vehicleType;
        tableRow.appendChild(vehicleTypeCell);

        const fuelTypeCell = document.createElement("td");
        fuelTypeCell.textContent = vehicle.fuelType;
        tableRow.appendChild(fuelTypeCell);

        const sizeCell = document.createElement("td");
        sizeCell.textContent = vehicle.size;
        tableRow.appendChild(sizeCell);

        const stageCell = document.createElement("td");
        stageCell.textContent = vehicle.days_of_travel;
        tableRow.appendChild(stageCell);

        const emissionCell = document.createElement("td");
        const fuelType = document.getElementById("fuel-type").value;

        if (
          fuelType === "hydrogen" ||
          fuelType === "ecoBunkers" ||
          fuelType === "ucome"
        ) {
          let reductionFactor;
          let tooltipText;
          if (fuelType === "hydrogen") {
            reductionFactor = 0; // Specify the reduction factor for Hidrogénio (H2)
            tooltipText = ` Este navio não tem emissão direta devido ao combustível ser hidrogénio, no entanto pode ser considerada a 
            Emissão indireta (indirect emission): ${vehicle.emission} kg de ${COO}`;
          } else if (fuelType === "ecoBunkers") {
            reductionFactor = 0.1503; // Specify the reduction factor for Biodiesel mix B15
            tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (vehicle.emission / (1 - reductionFactor)) *
              reductionFactor
            ).toFixed(3)} kg de ${COO}`;
          } else if (fuelType === "ucome") {
            reductionFactor = 0.8975; // Specify the reduction factor for Biodiesel B100
            tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (vehicle.emission / (1 - reductionFactor)) *
              reductionFactor
            ).toFixed(3)} kg de ${COO}`;
          }
          // Create the tooltip text based on the selected fuel type
          if (fuelType === "hydrogen") {
            const iconContainer = document.createElement("p");
            iconContainer.classList.add("icon-container");

            const elementoSpan = document.createElement("span");
            elementoSpan.innerHTML = tooltipText;
            elementoSpan.classList.add("tooltip");
            // Set the emission value as text content of the icon-container

            iconContainer.innerHTML = 0 + " " + elementoSpan.outerHTML;

            // Add the icon-container to the cell
            emissionCell.appendChild(iconContainer);
          } else {
            // Create the icon-container element
            const iconContainer = document.createElement("p");
            iconContainer.classList.add("icon-container");

            const elementoSpan = document.createElement("span");
            elementoSpan.innerHTML = tooltipText;
            elementoSpan.classList.add("tooltip");
            // Set the emission value as text content of the icon-container

            iconContainer.innerHTML =
              (vehicle.emission / (1 - reductionFactor)).toFixed(3) +
              " " +
              elementoSpan.outerHTML;

            // Add the icon-container to the cell
            emissionCell.appendChild(iconContainer);
          }
        } else {
          // For other fuel types without tooltips

          emissionCell.innerHTML = vehicle.emission; // Set the emission value as text content
        }

        tableRow.appendChild(emissionCell);

        const fleetTable = document.getElementById("shipfleetTable");
        fleetTable.appendChild(tableRow);
      }
    });
  }
  if (mode === "train") {
    createTrain().then((createdVehicle) => {
      vehicle = createdVehicle;
      if (vehicle) {
        const tableRow = document.createElement("tr");

        const countCell = document.createElement("td");
        countCell.textContent = vehicle.count;
        tableRow.appendChild(countCell);

        const fuelTypeCell = document.createElement("td");
        fuelTypeCell.textContent = vehicle.fuelType;
        tableRow.appendChild(fuelTypeCell);

        const sizeCell = document.createElement("td");
        sizeCell.textContent = vehicle.size;
        tableRow.appendChild(sizeCell);

        const stageCell = document.createElement("td");
        stageCell.textContent = vehicle.days_of_travel;
        tableRow.appendChild(stageCell);

        const emissionCell = document.createElement("td");

        const fuelType = document.getElementById("trainFuel").value;

        if (
          fuelType === "eletricity" ||
          fuelType === "biodiesel" ||
          fuelType === "diesel"
        ) {
          let reductionFactor;
          let tooltipText;
          if (fuelType === "eletricity") {
            reductionFactor = 0; // Specify the reduction factor for Hidrogénio (H2)
            tooltipText = `Este navio não tem emissão direta devido a ser elétrico, no entanto pode ser considerada a 
            Emissão indireta (indirect emission): ${vehicle.emission} kg de ${COO}`;
          } else if (fuelType === "diesel") {
            reductionFactor = 0.07081; // Specify the reduction factor for Biodiesel mix B15
            tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (vehicle.emission / (1 - reductionFactor)) *
              reductionFactor
            ).toFixed(3)} kg de ${COO}`;
          } else if (fuelType === "biodiesel") {
            reductionFactor = 0.8975; // Specify the reduction factor for Biodiesel B100
            tooltipText = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
              (vehicle.emission / (1 - reductionFactor)) *
              reductionFactor
            ).toFixed(3)} kg de ${COO}`;
          }
          // Create the tooltip text based on the selected fuel type
          if (fuelType === "eletricity") {
            const iconContainer = document.createElement("p");
            iconContainer.classList.add("icon-container");

            const elementoSpan = document.createElement("span");
            elementoSpan.innerHTML = tooltipText;
            elementoSpan.classList.add("tooltip");
            // Set the emission value as text content of the icon-container

            iconContainer.innerHTML = 0 + " " + elementoSpan.outerHTML;

            // Add the icon-container to the cell
            emissionCell.appendChild(iconContainer);
          } else {
            // Create the icon-container element
            const iconContainer = document.createElement("p");
            iconContainer.classList.add("icon-container");

            const elementoSpan = document.createElement("span");
            elementoSpan.innerHTML = tooltipText;
            elementoSpan.classList.add("tooltip");
            // Set the emission value as text content of the icon-container

            iconContainer.innerHTML =
              (vehicle.emission / (1 - reductionFactor)).toFixed(3) +
              " " +
              elementoSpan.outerHTML;

            // Add the icon-container to the cell
            emissionCell.appendChild(iconContainer);
          }
        } else {
          // For other fuel types without tooltips

          emissionCell.innerHTML = vehicle.emission; // Set the emission value as text content
        }

        tableRow.appendChild(emissionCell);

        const fleetTable = document.getElementById("trainfleetTable");
        fleetTable.appendChild(tableRow);
      }
    });
  }
}

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
  const fuelType = document.getElementById("passengerCarFuelType").value;
  const size = document.getElementById("passengerCarSize").value;
  const year = document.getElementById("passengerCarYear").value;
  const stage = getPassengerCarEmissionStage(fuelType, year);
  const speed = parseFloat(document.getElementById("passengerCarSpeed").value);
  const count = parseFloat(document.getElementById("passengerCarCount").value);
  const distance = parseFloat(
    document.getElementById("passengerCarDistance").value
  );
  const CSVFuel = getFuelright(fuelType);

  try {
    const emission = await calculateVehicleEmission(
      fuelType,
      CSVFuel,
      distance,
      count,
      stage,
      speed,
      size
    );
    if (fuelType && size && year && count && distance && speed) {
      return {
        vehicleType: "Passenger Car",
        fuelType: CSVFuel,
        size: size,
        stage: stage,
        count: count,
        distance: distance,
        emission: emission.toFixed(3),
      };
    }
  } catch (error) {
    console.log(error);
    // Handle the error or show an error message to the user
  }
}
//funçao criar light comercial
async function createlightCommercial() {
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

  try {
    const emission = await calculateVehicleEmission(
      fuelType,
      CSVFuel,
      distance,
      count,
      stage,
      speed,
      size
    );
    if (fuelType && size && year && count && distance && speed) {
      return {
        vehicleType: "Light Comercial",
        fuelType: CSVFuel,
        size: size,
        stage: stage,
        count: count,
        distance: distance,
        emission: emission.toFixed(3),
      };
    }
  } catch (error) {
    console.log(error);
    // Handle the error or show an error message to the user
  }
}
//funçao criar heavy comercial
async function createHeavyCommercial() {
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
  const load = parseFloat(document.getElementById("heavyCommercialLoad").value);
  const slope = parseFloat(
    document.getElementById("heavyCommercialSlope").value
  );
  try {
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
    if (fuelType && size && year && count && distance && speed) {
      return {
        vehicleType: "Heavy Comercial",
        fuelType: CSVFuel,
        size: size,
        stage: stage,
        count: count,
        distance: distance,
        emission: emission.toFixed(3),
      };
    }
  } catch (error) {
    console.log(error);
    // Handle the error or show an error message to the user
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

function calculateFleetEmissions() {
  const mode = document.getElementById("mode-select").value;
  let fleetTable;
  if (mode === "road") {
    fleetTable = document.getElementById("roadfleetTable");
  } else if (mode === "ship") {
    fleetTable = document.getElementById("shipfleetTable");
  } else if (mode === "train") {
    fleetTable = document.getElementById("trainfleetTable");
  } else if (mode === "portEquiment") {
    fleetTable = document.getElementById("portEquimentfleetTable");
  }

  if (fleetTable) {
    const rows = fleetTable.getElementsByTagName("tr");
    let totalEmission = 0;

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const emissionCell = row.querySelector("td:last-child");
      const emissionText = emissionCell.textContent.trim();
      const emission = parseFloat(emissionText);

      if (!isNaN(emission)) {
        totalEmission += emission;
      }
    }

    totalEmission = totalEmission.toFixed(3);

    document.getElementById(
      "emissionsResult"
    ).innerHTML = `Resultado (Result): ${totalEmission} kg de ${COO}`;
  }
}

//funcionamento do butão calcultate
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    calculateFleetEmissions();
  });

//----------------------------Ship Calcuations------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
  shipSize,
  shipSpeed,
  fuelType,
  daysAtSea,
  manuveringTime,
  hotellingTime,
  count
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

  let princLoadCruise = 0;
  let princLoadManuvering = 0;
  let princLoadHoteling = 0;
  let auxLoadCruise = 0;
  let auxLoadManuvering = 0;
  let auxLoadHoteling = 0;
  let EFfuel = 0;
  let coefBioFuel = 0;

  const LHVmeth = 6.39; // Low heating value of LPG (kWh/kgfuel)

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

async function createShip() {
  const count = document.getElementById("shipCount").value;
  const shipType = document.getElementById("ship-type").value;
  const shipSize = parseFloat(document.getElementById("ship-size").value);
  const shipSpeed = document.getElementById("ship-speed").value;
  const fuelType = document.getElementById("fuel-type").value;
  const daysAtSea = parseInt(document.getElementById("days-at-sea").value);
  const CSVFuel = getFuelright(fuelType);
  const RIGHTShipType = getShipRight(shipType);
  const hotellingTime = parseFloat(
    document.getElementById("hotellingTime").value
  );
  const manuveringTime = parseFloat(
    document.getElementById("manuveringTime").value
  );
  try {
    const emission = await calculateShipEmissions(
      shipType,
      shipSize,
      shipSpeed,
      fuelType,
      daysAtSea,
      manuveringTime,
      hotellingTime,
      count
    );

    if (fuelType && shipSize && count && shipSpeed) {
      return {
        vehicleType: RIGHTShipType,
        fuelType: CSVFuel,
        size: shipSize,
        speed: shipSpeed,
        count: count,
        days_of_travel: daysAtSea,
        emission: emission,
      };
    }
    console.log(
      shipType,
      CSVFuel,
      shipSize,
      shipSpeed,
      count,
      daysAtSea,
      emission
    );
  } catch (error) {
    console.log(error);
    // Handle the error or show an error message to the user
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
    if (trainFuel && trainHoras && trainLoad && trainPower) {
      return {
        fuelType: trainFuel,
        size: trainPower,
        count: count,
        days_of_travel: trainHoras,
        emission: emission,
      };
    }
  } catch (error) {}
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

//-----------------------------------------equipamentosssss--------------------------------------

// Get references to HTML elements
const addVehicleButton = document.getElementById("addVehicleButton");
const portEquimentfleetTable = document.getElementById(
  "portEquimentfleetTable"
);
const equipmentCountInput = document.getElementById("equipmentCount");
const equipmentTypeSelect = document.getElementById("equipmentType");
const equipmentActivityInput = document.getElementById("equipmentActivity");
const equipmentPowerInput = document.getElementById("equipmentPower");
const equipmentYearInput = document.getElementById("equipmentYear");
const engineSizeInput = document.getElementById("engineSize");
const equiLoadSelect = document.getElementById("equiLoad");

// Function to add equipment to the fleet
function addEquipmentToFleet() {
  const equipmentCount = equipmentCountInput.value;
  const equipmentType = equipmentTypeSelect.value;
  const equipmentActivity = equipmentActivityInput.value;
  const equipmentPower = equipmentPowerInput.value;
  const equipmentYear = equipmentYearInput.value;
  const engineSize = engineSizeInput.value;
  const equiLoad = equiLoadSelect.value;

  // Calculate emissions (you need to implement this calculation)
  const emissions = calculateEquipmentEmissions(
    equipmentType,
    equiLoad,
    equipmentPower,
    equipmentActivity,
    equipmentYear,
    engineSize,
    equipmentCount
  );

  // Create a new row for the table
  const newRow = portEquimentfleetTable.insertRow();

  // Populate the row cells with data
  newRow.insertCell(0).textContent = equipmentCount;
  newRow.insertCell(1).textContent = getFuelright(equipmentType);
  newRow.insertCell(2).textContent = equipmentActivity;
  newRow.insertCell(3).textContent = equipmentPower;
  const tooltipCell = newRow.insertCell(4);

  // Create a cell for the tooltip
  let fuel;
  // Check the equipment type and fuel type to determine the tooltip text
  if (equipmentType === "eletricity") {
    // For electric equipment
    fuel = `Este equipamento não emite ${COO} diretamente por ser elétrico<br>
      Emissão indireta (indirect emission): ${emissions} kg de COO`;

    const iconContainer = document.createElement("p");
    iconContainer.classList.add("icon-container");

    const elementoSpan = document.createElement("span");
    elementoSpan.innerHTML = fuel;
    elementoSpan.classList.add("tooltip");

    // Set the emission value as text content of the icon-container
    iconContainer.innerHTML = `0 ${elementoSpan.outerHTML}`;

    // Add the icon-container to the cell
    tooltipCell.textContent = ""; // Clear existing content in the tooltip cell
    tooltipCell.appendChild(iconContainer);
  } else if (equipmentType === "B100") {
    // For B100 fuel type
    const reductionFactor = 0.8975; // You can get this from your code
    fuel = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
      (emissions / (1 - reductionFactor)) *
      reductionFactor
    ).toFixed(3)} kg de COO`;
    const iconContainer = document.createElement("p");
    iconContainer.classList.add("icon-container");

    const elementoSpan = document.createElement("span");
    elementoSpan.innerHTML = fuel;
    elementoSpan.classList.add("tooltip");

    // Set the emission value as text content of the icon-container
    iconContainer.innerHTML = `${(emissions / (1 - reductionFactor)).toFixed(
      3
    )} ${elementoSpan.outerHTML}`;

    // Add the icon-container to the cell
    tooltipCell.textContent = ""; // Clear existing content in the tooltip cell
    tooltipCell.appendChild(iconContainer);
  } else if (equipmentType === "B15") {
    // For B15 fuel type
    const reductionFactor = 0.1503; // You can get this from your code
    fuel = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
      (emissions / (1 - reductionFactor)) *
      reductionFactor
    ).toFixed(3)} kg de COO`;
    const iconContainer = document.createElement("p");
    iconContainer.classList.add("icon-container");

    const elementoSpan = document.createElement("span");
    elementoSpan.innerHTML = fuel;
    elementoSpan.classList.add("tooltip");

    // Set the emission value as text content of the icon-container
    iconContainer.innerHTML = `${(emissions / (1 - reductionFactor)).toFixed(
      3
    )} ${elementoSpan.outerHTML}`;

    // Add the icon-container to the cell
    tooltipCell.textContent = ""; // Clear existing content in the tooltip cell
    tooltipCell.appendChild(iconContainer);
  } else if (equipmentType === "diesel") {
    // For diesel fuel type
    const reductionFactor = 0.07081; // You can get this from your code
    fuel = `Redução de ${COO} indiretamente (indirect ${COO} emission reduction): ${(
      (emissions / (1 - reductionFactor)) *
      reductionFactor
    ).toFixed(3)} kg de COO`;
    const iconContainer = document.createElement("p");
    iconContainer.classList.add("icon-container");

    const elementoSpan = document.createElement("span");
    elementoSpan.innerHTML = fuel;
    elementoSpan.classList.add("tooltip");

    // Set the emission value as text content of the icon-container
    iconContainer.innerHTML = `${(emissions / (1 - reductionFactor)).toFixed(
      3
    )} ${elementoSpan.outerHTML}`;

    // Add the icon-container to the cell
    tooltipCell.textContent = ""; // Clear existing content in the tooltip cell
    tooltipCell.appendChild(iconContainer);
  } else {
    // For other cases
    fuel = emissions;
    tooltipCell.textContent = fuel;
  }
}

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
function calculateEquipmentEmissions(
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
      equipmentCount *
      equiConsumption *
      equipmentPower *
      equipmentActivity *
      loadFactor *
      equiEF;
  }
  if (equipmentEmissions < 0.001) {
    equipmentEmissions = equipmentEmissions.toFixed(5);
  } else equipmentEmissions = equipmentEmissions.toFixed(2);
  return equipmentEmissions;
}

//---------------------------------comparaçao de cenarios--------------------------------------
// Get references to HTML elements
const saveScenarioButton = document.getElementById("saveScenarioButton");
const scenarioNameInput = document.getElementById("scenarioName");
const scenariosDiv = document.getElementById("scenarios");

// Attach event listener to "Save Scenario" button
saveScenarioButton.addEventListener("click", saveScenario);

// Function to save the scenario
function saveScenario() {
  const scenarioName = scenarioNameInput.value.trim();
  if (scenarioName === "") {
    alert("Please enter a scenario name.");
    return;
  }

  // Get the final emission results
  const emissionsResult =
    document.getElementById("emissionsResult").textContent;

  // Create a new scenario div
  const scenarioDiv = document.createElement("div");
  scenarioDiv.className = "scenario";

  // Create a heading for the scenario name
  const scenarioHeading = document.createElement("h3");
  scenarioHeading.textContent = scenarioName;
  scenarioDiv.appendChild(scenarioHeading);

  // Create a paragraph for the emission results
  const emissionsParagraph = document.createElement("p");
  emissionsParagraph.textContent = emissionsResult;
  scenarioDiv.appendChild(emissionsParagraph);

  // Append the scenario div to the scenarios div
  scenariosDiv.appendChild(scenarioDiv);

  // Clear the scenario name input
  scenarioNameInput.value = "";
}

//----------------------clear table-----------------
const clearFleetButton = document.getElementById("clearFleetButton");
clearFleetButton.addEventListener("click", clearSelectedFleetTable);

function clearSelectedFleetTable() {
  const selectedTableId = document.getElementById("mode-select").value;
  const selectedTable = document.getElementById(`${selectedTableId}fleetTable`);
  clearFleetTable(selectedTable);
}

function clearFleetTable(table) {
  const rowCount = table.rows.length;
  // Start from the last row to avoid affecting the header row
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

//-----------------------------------limpar cenarios-------------------------------------------------------
const clearScenariosButton = document.getElementById("clearScenariosButton");
clearScenariosButton.addEventListener("click", clearAllScenarios);

function clearAllScenarios() {
  const scenariosDiv = document.getElementById("scenarios");
  scenariosDiv.innerHTML = ""; // Clear the content of the scenarios div
}

var navigate1Button = document.getElementById("level1Button");
var navigate3Button = document.getElementById("level3Button");
navigate1Button.addEventListener("click", function () {
  // Redirect to the desired page
  window.location.href = "http://127.0.0.1:5500/Level%201/index.html";
});
navigate3Button.addEventListener("click", function () {
  // Redirect to the desired page
  window.location.href = "http://127.0.0.1:5500/level%203/index.html";
});
