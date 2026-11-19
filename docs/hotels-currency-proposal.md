# Hotels and currency: selected design

The user selected official hotel booking links in every country on 18 November 2026. This document records the design for that update.

## Existing website

Atlas & Away is a static HTML, CSS and JavaScript project. Every country guide already shows its currency name and three-letter code in its quick facts. There is no hotel availability, reservation or payment service.

## Proposed visitor experience

Add a Hotels section to country guides with the property name, city, a short factual description, the country's currency and a clear booking action. Keep the existing white, black and photographic style. Verify hotel details against official hotel websites before publishing a listing.

Place a Currency section beside the travel planning information. Show the local currency name/code prominently. A converter could let visitors enter an amount and select their home currency, with the rate's update date and source. Hotel pricing and conversion estimates must remain distinct: actual room prices come from the hotel for the selected dates.

Antarctica should explain expedition accommodation and the currency quoted by the voyage operator, rather than display a national currency or ordinary hotel list.

## Booking approaches

1. **Official hotel links - recommended.** The visitor checks availability and completes a real booking on the hotel's website. This fits the existing static project. Atlas & Away does not create a reservation or process payment.
2. **Demonstration reservation form.** Visitors practise selecting dates, guests and a hotel. The result clearly says it is a demonstration with no real reservation or payment. This supports an in-site form exercise but does not create a bookable hotel service.

Selected approach: official hotel websites, authorised by the user's answer: “I recommend official hotel links so visitors can check current prices and availability. IN each country”.

Implementation choices: include two verified property options per country, keep each property's city visible, and link to its official property/booking page. Use text cards so destination photos cannot be mistaken for photographs of a hotel. Add a local-currency panel and an optional on-demand converter using daily reference rates, a visible update date, provider attribution and graceful failure handling. Keep all guide content in readable static HTML and the converter in one shared script. These are implementation choices made for the existing static learning project.

## Research checked on 18 November 2026

- Hotel Sawa, Douala, Cameroon: https://www.hotelsawa.com/ and https://www.hotelsawa.com/contacts/
- Veranda Tamarin, Mauritius: https://veranda-resorts.com/en/mauritius-hotel-tamarin/faq
- Park Hyatt Zanzibar, Stone Town, Tanzania: https://www.hyatt.com/park-hyatt/en-US/znzph-park-hyatt-zanzibar/faqs

These examples establish a route to verified official booking resources. They are not a ranked recommendation or a live-price comparison.

The selected currency conversion source is https://www.exchangerate-api.com/docs/free. Its open endpoint requires attribution, updates daily and is rate-limited. The implemented converter requests rates on demand, caches them until the next provider update and displays the reference date. No fixed exchange-rate table is checked into the project.

## Scope and completion

Complete this in the existing local checkout. Keep prices and availability on the hotel website, and use no affiliate identifiers. Preserve existing visitor features. Add expedition accommodation links and an explanation of operator-quoted currencies for Antarctica. Update research records, learning notes and the source PDF after implementation.

Implementation and verification are complete. All 31 country guides have two official hotel links and a currency converter. The sources PDF remains a draft because the student's GitHub and walkthrough URLs are still pending.
