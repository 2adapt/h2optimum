import { r as redirect } from "../../../../chunks/index2.js";
import { A as API_ORIGIN } from "../../../../chunks/private.js";
async function load(event) {
  let user = event.locals;
  let isAdmin = user.auth.credentials.is_admin;
  if (!isAdmin) {
    throw redirect(303, "/backoffice");
  }
  const res = await fetch(`${API_ORIGIN}/api/v2/user`);
  const users = await res.json();
  const res2 = await fetch(`${API_ORIGIN}/api/v2/installation`);
  const installations = await res2.json();
  return {
    users,
    installations
  };
}
const actions = {
  manageUser: async (event) => {
    const formData = await event.request.formData();
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
    if (data.ID) {
      const apiEdit = await fetch(`${API_ORIGIN}/api/v2/user/` + data.ID, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": data.email,
          "first_name": data.firstname,
          "last_name": data.lastname,
          "installationList": data.installations
        })
      });
      if (apiEdit.ok) {
        return { success: true };
      }
      return { success: false };
    } else {
      const apiCreate = await fetch(`${API_ORIGIN}/api/v2/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": data.email,
          "first_name": data.firstname,
          "last_name": data.lastname,
          "active": true,
          "installationList": data.installations
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
  deleteUser: async (event) => {
    const formData = await event.request.formData();
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    const apiDelete = await fetch(`${API_ORIGIN}/api/v2/user/` + data.ID, {
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
