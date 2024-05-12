/**
 * Selects the form element from the DOM.
 * @type {HTMLFormElement} 
This comment is a documentation comment written in JSDoc style. It provides a description of the code that follows it.
 */

const form = document.querySelector("[data-form]");
// This line selects the form element from the DOM using the attribute selector [data-form].

const result = document.querySelector("[data-result]");
// This line selects the result element from the DOM using the attribute selector [data-result].

form.addEventListener("submit", (event) => {
// This line adds an event listener to the form element for the "submit" event.

  event.preventDefault();
// This line prevents the default form submission behavior.

  const entries = new FormData(event.target);
// This line creates a new FormData object containing the form data.

  const { dividend, divider } = Object.fromEntries(entries);
// This line extracts the "dividend" and "divider" values from the form data using object destructuring.

  if (!dividend.trim() || !divider.trim() || isNaN(dividend) || isNaN(divider)) {
// This line checks if either "dividend" or "divider" is empty or not a number using an if statement.

    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
// This line replaces the content of the document body with an error message.

    console.error("Invalid input: Non-numeric values provided");
// This line logs an error message to the console.

    return;
  }

  if (divider === "0") {
// This line checks if the divider is equal to "0".

    result.innerText = "Division by zero is not allowed.";
// This line sets the result element's inner text to an error message.

    console.error("Invalid division: Division by zero");
// This line logs an error message to the console.

    return;
  }

  const divisionResult = Math.floor(dividend / divider);
// This line calculates the division result using Math.floor to ensure whole numbers are produced as answers

  result.innerText = divisionResult;
// This line sets the result element's inner text to the calculated division result.
});
