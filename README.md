# DunnhumbySDETTest

*** REMEMBER to fix the +1 for CET in apis

I've given examples of different approached that can be taken

## UI

Note that I had issues wit the product Buy button. Directly in Chrome dev tools console I can succesfully click it with $('a#buyButton.snipcart-add-item.buyBtn').click() and $('[id="buyButton"]').click(). But when trying various approaches via the Cypress browser it was not activating the cart window. I could see this issue even manually via Cypress browser. I tested this on both Mac Chrome and Windows Chrome via Cypress browser.

In a work environment I would pair with the developer and demonstrate the issue I'm seeing, and I believe the button required some additonal dev work. In the meantime I using a workaround to move pass this step in the user journey.