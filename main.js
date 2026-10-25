

// This file starts unfinished. Record the first call before implementing your design.
// Read the complete contract and evidence directions in README.md.


function calculateTicketTotal(priceText, quantityText, hasDiscount = false) {
  // TODO: Check blank/whitespace before deliberate Number conversion.
  // TODO: Reject non-finite input, negative price, and negative/fractional quantity.
  // TODO: Preserve valid zero and decimal prices.
  // TODO: Use an if/else decision for your documented Boolean discount rule.
  // TODO: Return an understandable rejection message or a numeric successful total.




  // Calculate the core ticket cost
  const ticketSubtotal = (quantityText * priceText) {
    return quantityText * priceText;  
  };

  console.log(ticketSubtotal);
  // Ticket Subtotal before the hasDiscount is applied


  // Calculate the final total after applying hasDiscount
  const finalTotal = (ticketSubtotal - hasDiscount) {
    return ticketSubtotal - hasDiscount;
  };

  console.log(finalTotal);
  // Final Final Total


  // Boolean = false
  if (ticketSubtotal + hasDiscount == finalTotal) 
    console.log("it's false")
  // 

  // Example
  Let quantityText = 3, priceText = 2.5;
  console.log(quantityText * priceText);
 


// Baseline: this unfinished call returns undefined because the stub has no return.
// When your complete ordinary path works, this call should return numeric 7.5

// TODO: Choose and run the boundary, error, next-valid, and flag tests in README.
// TODO: Record your own expected/actual results, explanations, repairs, and retests.


}