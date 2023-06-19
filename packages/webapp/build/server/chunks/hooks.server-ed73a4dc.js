async function handle({ event, resolve }) {
  const sidValue = event.cookies.get("sid");
  const res = await fetch(`https://auth.e-risk.pt/api/who`, {
    method: "GET",
    headers: {
      "Cookie": "sid=" + sidValue
    }
  });
  const auth = await res.json();
  event.locals.auth = auth;
  return await resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-ed73a4dc.js.map
