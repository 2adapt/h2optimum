import { r as redirect } from "./index2.js";
function refreshGraph(selectedD, D, shapesValues, Generate) {
  var devis = [];
  for (const property in selectedD) {
    if (selectedD[property] == true) {
      let device = D.find((obj) => {
        return obj.id == property;
      });
      devis.push(device);
    }
  }
  Generate(devis, shapesValues);
}
function unpack(prop, array) {
  const Values = array.map((obj) => obj[prop] == -127 ? NaN : obj[prop]);
  return Values;
}
function addYear(dateStr) {
  let onlyDate = dateStr.split("T")[0];
  let year = onlyDate.split("-")[0];
  let changedYear = Number(year) + 1;
  let finalDate = changedYear + "-" + onlyDate.split("-")[1] + "-" + onlyDate.split("-")[2] + "T" + dateStr.split("T")[1];
  return finalDate;
}
function filterHumidityByID(sid, array) {
  const Values = array.filter((obj) => {
    if (obj.sid == sid) {
      return obj;
    }
  });
  return Values;
}
function getTraceName(unitCode) {
  if (unitCode == "t") {
    return " - Temp. solo";
  } else if (unitCode == "tar") {
    return " - Temp. ar";
  } else if (unitCode == "h") {
    return "";
  } else if (unitCode == "b") {
    return " - Bateria";
  } else {
    return " - Desconhecido";
  }
}
function calibrateHumidityValues(tempArray, humidityList) {
  var humiArray = unpack("val", humidityList);
  var WPA2 = [];
  for (var i = 0; i < humiArray.length; i++) {
    var r = humiArray[i];
    var T = tempArray[i];
    if (!T) {
      T = 25;
      console.log("A usar valor temperatura 25");
    }
    if (r >= 0 && r < 1e3) {
      WPA2.push(Math.abs(-20 * (r / 1e3 * (1 + 0.018 * (25 - T)) - 0.55)));
    } else if (r >= 1e3 && r < 8e3) {
      WPA2.push(Math.abs((-3.213 * (r / 1e3) - 4.093) / (1 - 9733e-6 * (r / 1e3) - 0.01205 * T)));
    } else if (r >= 8e3) {
      WPA2.push(
        Math.abs(-2.246 - 5.239 * (r / 1e3) * (1 + 0.018 * (T - 24)) - 0.06756 * Math.pow(r / 1e3, 2) * Math.pow(1 + 0.018 * (T - 24), 2))
      );
    } else {
      WPA2.push(null);
    }
  }
  return WPA2;
}
function getRecommendedThresholds(soilType, valueType, minOrMax) {
  if (soilType == "loamy_sand") {
    if (valueType == "saturated") {
      if (minOrMax == 0) {
        return 0;
      } else
        return 11;
    } else if (valueType == "wet") {
      if (minOrMax == 0) {
        return 11;
      } else
        return 20;
    } else if (valueType == "irrigate") {
      if (minOrMax == 0) {
        return 20;
      } else
        return 25;
    } else {
      return 25;
    }
  } else if (soilType == "fine_sandy_loam") {
    if (valueType == "saturated") {
      if (minOrMax == 0) {
        return 0;
      } else
        return 12;
    } else if (valueType == "wet") {
      if (minOrMax == 0) {
        return 12;
      } else
        return 22;
    } else if (valueType == "irrigate") {
      if (minOrMax == 0) {
        return 22;
      } else
        return 30;
    } else {
      return 30;
    }
  } else if (soilType == "sandy_loam") {
    if (valueType == "saturated") {
      if (minOrMax == 0) {
        return 0;
      } else
        return 13;
    } else if (valueType == "wet") {
      if (minOrMax == 0) {
        return 13;
      } else
        return 28;
    } else if (valueType == "irrigate") {
      if (minOrMax == 0) {
        return 28;
      } else
        return 40;
    } else {
      return 40;
    }
  } else if (soilType == "loam") {
    if (valueType == "saturated") {
      if (minOrMax == 0) {
        return 0;
      } else
        return 23;
    } else if (valueType == "wet") {
      if (minOrMax == 0) {
        return 23;
      } else
        return 64;
    } else if (valueType == "irrigate") {
      if (minOrMax == 0) {
        return 64;
      } else
        return 84;
    } else {
      return 84;
    }
  } else if (soilType == "clay") {
    if (valueType == "saturated") {
      if (minOrMax == 0) {
        return 0;
      } else
        return 36;
    } else if (valueType == "wet") {
      if (minOrMax == 0) {
        return 36;
      } else
        return 160;
    } else if (valueType == "irrigate") {
      if (minOrMax == 0) {
        return 160;
      } else
        return 215;
    } else {
      return 215;
    }
  } else {
    if (valueType == "saturated") {
      if (minOrMax == 0) {
        return 0;
      } else
        return 10;
    } else if (valueType == "wet") {
      if (minOrMax == 0) {
        return 10;
      } else
        return 60;
    } else if (valueType == "irrigate") {
      if (minOrMax == 0) {
        return 60;
      } else
        return 100;
    } else {
      return 100;
    }
  }
}
function redirectIfNotAuth(event, redirectTo = "/login") {
  if (event.locals.auth.isAuthenticated == false) {
    throw redirect(303, redirectTo);
  }
}
async function getDiagnostic(installation) {
  let diagnostic = {};
  let todayDate = /* @__PURE__ */ new Date();
  let tommorowDate = /* @__PURE__ */ new Date();
  todayDate = todayDate.toISOString().split("T")[0];
  tommorowDate.setDate(tommorowDate.getDate() + 1);
  tommorowDate = tommorowDate.toISOString().split("T")[0];
  if (installation.deviceList.length == 0) {
    return diagnostic = ["Sem dispositivos"];
  }
  for (let device of installation.deviceList) {
    let arrErrors = [];
    let searchParams = new URLSearchParams({
      from_date: todayDate,
      to_date: tommorowDate,
      device_mac: device.mac,
      installation_id: device.installation_id
    });
    let valHum;
    let res = await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`);
    let list = await res.json();
    var filteredListTemp = list.filter((obj) => obj.type === "t");
    var filteredListAr = list.filter((obj) => obj.type === "tar");
    var filteredListBatt = list.filter((obj) => obj.type === "b");
    var filteredListHum = list.filter((obj) => obj.type === "h");
    let lastReadingTemp = filteredListTemp[filteredListTemp.length - 1];
    let lastReadingAr = filteredListAr[filteredListAr.length - 1];
    let lastReadingBatt = filteredListBatt[filteredListBatt.length - 1];
    for (var i = 0; i < 3; i++) {
      let listHum = filterHumidityByID(i + 2, filteredListHum);
      let lastReadingHum = listHum[listHum.length - 1];
      if (lastReadingTemp && lastReadingHum) {
        if (lastReadingTemp.val == -127) {
          arrErrors.push("Erro num cálculo da hum(Temp inválida, a calcular com temp = 25).");
        } else {
          valHum = calibrateHumidityValues([lastReadingTemp.val], [lastReadingHum]);
          if (valHum[0] > 2e3 || !valHum[0]) {
            arrErrors.push("Erro no sensor de hum " + (i + 1) + " (>2k).");
          }
        }
      }
      if (!lastReadingHum) {
        arrErrors.push("Erro no sensor de hum(inativo).");
      }
    }
    if (!lastReadingTemp && !lastReadingAr && !lastReadingBatt) {
      diagnostic[device.description] = ["Dispositivo inativo"];
      continue;
    }
    if (lastReadingTemp.val == -127) {
      arrErrors.push("Erro no sensor de temperatura solo(-127).");
    }
    if (!lastReadingTemp) {
      arrErrors.push("Erro no sensor de temperatura solo(inativo).");
    }
    if (!lastReadingAr || lastReadingAr == void 0) {
      arrErrors.push("Erro no sensor de temperatura ar(inativo).");
    }
    if (lastReadingBatt.val <= 3.5) {
      arrErrors.push("Bateria baixa.");
    }
    if (!lastReadingBatt) {
      arrErrors.push("Erro na bateria.");
    }
    if (arrErrors.length > 0) {
      diagnostic[device.description] = arrErrors;
    }
  }
  return diagnostic;
}
async function hasErrors(installation) {
  if (installation) {
    let diag = await getDiagnostic(installation);
    if (Object.keys(diag).length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
export {
  refreshGraph as a,
  addYear as b,
  getRecommendedThresholds as c,
  getTraceName as g,
  hasErrors as h,
  redirectIfNotAuth as r,
  unpack as u
};
