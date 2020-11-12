/_-----------------------------------------content cards readme----------------------------------------_/

- Solution, Webisode, Podcast, Webisode cards are all under ContentCards.js
- News Cards are under NewsCard.js
- Vertical NewsCards are under VertalCard.js
- BreakingNews are under BreakingNews.js

Vertical Card explenation: (temporary)
We have a Vertical Cards because of the way react-bootstrap is handling sizing of the cards.
Originally I want to use NewsCard.js, but it only resizes upon window changes and not when I set into columns
this is subject to be fixed, that way we have a single card

Content Card is a global card for solution, websiode, podcast, etc....
Basically its the same data, just different stylings according to figma doc
Since we don't know how our backend data looks like, all this is subject to change...

    How to use Content Card?
    takes in type for different stylings
    all types are no caps

    e.g.
    ```
        <ContentCard type="podcast">
    ```
    Should render card type  podcast, all card is solution by default

    Available types
    - "solution"
    - "webisode"
    - "podcast"
    - "opinion"
