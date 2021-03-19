
const partyHeader = document.getElementById('party');

// converts a string to a p tag and appends it to an element
export const htmlGenerator = (string, htmlElement) => {
  const p = document.createElement('p');
  const q = document.createElement('p');
  q.innerText = string;
  p.innerText = string;
  // htmlElement.append(p, q); // append takes many params (as many as you want)
  htmlElement.appendChild(p, q); // appendChild only takes one param. additional params passed in won't work
}; 


htmlGenerator('Party Time.', partyHeader);