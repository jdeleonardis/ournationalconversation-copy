/_-----------------------------------------content cards readme----------------------------------------_/

- Solution, Webisode, Podcast, Webisode cards are all under ContentCards.js
- News Cards are under NewsCard.js
- BreakingNews are under BreakingNews.js

Content Card is a global card for solution, websiode, podcast, etc....
Basically its the same data, just different stylings according to figma doc

    How to use Content Card?
    takes in type for different stylings
    all types are no caps

    e.g.
    ```
        <ContentCard type="PODCAST">
    ```
    Should render card type  podcast, all card is solution by default

    Available types can be found in constants;
    In your js, you can import it as a library and use the types

    e.g.
    ```
    import * as type from ../constants/cardConstants.js

    <ContentCard type={type.OPINION}>
    <ContentCard type={type.PODCAST}>
    etc...

    ```
    Available types
        OPINION
        WEBISODE
        PODCAST
        SOLUTION

News Card is a card specifically for the news there are
1 type - vertical

    if set to true, vertical will change the styles of the NewsCard for
    a vertical layout from figma, else it will be horizontal as you see for the big horizontal cards

    default = horizontal;

    e.g.
    ```
        <NewsCard vertical={true}>
    ```
