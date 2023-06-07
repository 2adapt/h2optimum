import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load( event ) {

  let paramString = event.params.slug_id;
  let user = event.locals;
  //let loggedUserID = user.userId;
  let loggedUserID = 1;


  let paramArray = paramString.split('-') ;
  let id = paramArray.pop();
  

  const res = await fetch(`https://app.2adapt.pt/api/get-installations?user_id=1`);
  const installations = await res.json();

  const installation = installations.find(item => item.id == id);

  if (!installation) {
    throw error(404, {
        message: 'Installation not found'
    });
  }

  installation.devices.forEach(obj => {obj.last_reading_formatted = new Date(obj.last_reading).toLocaleString()});

  console.log(installation.userId);
  
  if(event.locals.auth.isAuthenticated == false || installation.userId != loggedUserID){
    throw redirect(303, '/public/' + paramString);
  }

	return {
		installation, user
	};
}

export const actions = {
  default: async (event) => {
      // TODO log the user in
      const formData = await event.request.formData();
      const data = {};
      for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
      }

      return { success: true };
  }
};