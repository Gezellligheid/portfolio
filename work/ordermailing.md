---
title: Ordermailing
description: A web application built to count inventory. Missing items will be ordered
tags: [Vue, Tailwind, Firebase, Vike]
client: Bellegems Friethuisje
image: /ordermailing1.png
---

# In the beginning

At first, Bellegems Friethuisje makde their orders via a mobile flash application. Back then, when I was a student, I developed a prototype which led eventualy to this project!

# The concept

The project needed to be simple to let non-IT people check and easily order the needed products.
Next to that, Bellegems Friethuisje has some vending machines where they want to check the stock from a distance to easily orderpick and fill the machines up.

# The execution

At the core, Ordermailing is a Vike project running Vue for the frontend together with Tailwind and ShadCN for the styling.
Whilst Vike is used for the backend. To save the data and to authentication, Firebase is used.

:::text-image src="/ordermailing2.png" alt="Portfolio screenshot"

## Mobile first

Since running around with a laptop is not that practical. It had to be made for mobile in mind.

Whilst ordering, you may enter some fridges or freezers, disconnecting you from the internet. For this, everything was saved locally until there is an internet signal again ready to upload everything back to the cloud. Making sure data is redundant.
:::
