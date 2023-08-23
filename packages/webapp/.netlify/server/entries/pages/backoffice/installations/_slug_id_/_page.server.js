import { e as error } from "../../../../../chunks/index2.js";
import { A as API_ORIGIN } from "../../../../../chunks/private.js";
async function load(event) {
  let paramString = event.params.slug_id;
  let user = event.locals;
  let loggedUserID = 1;
  let paramArray = paramString.split("-");
  let id = paramArray.pop();
  const res = await fetch(`${API_ORIGIN}/api/v2/installation/` + id);
  const installation = await res.json();
  if (!installation) {
    throw error(404, {
      message: "Installation not found"
    });
  }
  let listDevices = installation.deviceList;
  listDevices.forEach((obj) => {
    obj.last_reading_formatted = new Date(obj.last_reading).toLocaleString();
  });
  if (installation.userId != loggedUserID)
    ;
  return {
    installation,
    user,
    listDevices
  };
}
const actions = {
  manageDevice: async (event) => {
    const formData = await event.request.formData();
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
    if (data.ID) {
      const apiEdit = await fetch(`${API_ORIGIN}/api/v2/device/` + data.ID, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "user_id": event.locals.auth.credentials.id,
          "installation_id": data.installationID,
          "device_type_code": data.deviceType,
          "battery_mode_code": "battery_eco",
          "mac": data.MACaddress,
          "activation_key": data.activationkey,
          "description": data.description,
          "active": true
        })
      });
      if (apiEdit.ok) {
        return { success: true };
      }
      return { success: false };
    } else {
      const apiCreate = await fetch(`${API_ORIGIN}/api/v2/device`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "user_id": event.locals.auth.credentials.id,
          "installation_id": data.installationID,
          "device_type_code": data.deviceType,
          "battery_mode_code": "battery_eco",
          "mac": data.MACaddress,
          "activation_key": data.activationkey,
          "description": data.description,
          "active": true
        })
      });
      let info = await apiCreate.json();
      console.log(info);
      if (apiCreate.ok) {
        return { success: true };
      }
      return { success: false };
    }
  },
  deleteDevice: async (event) => {
    const formData = await event.request.formData();
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    const apiDelete = await fetch(`${API_ORIGIN}/api/v2/device/` + data.ID, {
      method: "DELETE"
    });
    if (apiDelete.ok) {
      return { success: true };
    }
  }
};
export {
  actions,
  load
};
