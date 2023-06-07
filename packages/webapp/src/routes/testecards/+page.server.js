import { redirect } from '@sveltejs/kit';

export async function load( event ) {

  let Cards;

  const res = await fetch(`https://app.2adapt.pt/api/get-installations?user_id=1`);
  Cards = await res.json();
  
  Cards.forEach(obj => {obj.hidden = false, obj.lat = 38.50, obj.long = -8.15})

  return {
      Cards
  };
}