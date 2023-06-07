import { redirect } from '@sveltejs/kit';
import setCookieParser from 'set-cookie-parser';

export async function load( event ) {

    if(event.locals.auth.isAuthenticated == false){
        throw redirect(303, '/login');
    }
    
    const sidValue = event.cookies.get('sid');

    const res = await fetch(`https://auth.e-risk.pt/api/logout`, {
        method: "POST",
        headers: {
            "Cookie": "sid=" + sidValue
        }
    });

    const auth = await res.json();
    var cookiesParsed = setCookieParser.parse(res);

    if(auth.success == true){
        for(let cookieParsed of cookiesParsed){
            const { name, value, ...options } = cookieParsed;

            event.cookies.delete(name, value, options);
        }
        throw redirect(303, '/login');
        
    } else {
        throw redirect(303, '/login');
    }

};