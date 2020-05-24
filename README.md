

# Kunstwerk kiezen

Toen ik opzoek ging naar een kunstwerk deed ik dit met de opdracht in gedachte. Ik wilde iets wat ik redelijk snel kon namaken in Illustrator, maar waar ook genoeg elementen inzaten die ik kon laten bewegen. Ik heb uiteindelijk het volgende kunstwerk uit AIGA Archive gevonden:

![Uitgekozen kunstwerk](https://designarchives.aiga.org/assets/images/000/101/599/101599_lg.jpg)
[Summerworks 2010](https://designarchives.aiga.org/#/entries/%2Bcollections%3A%22Denver%20Art%20Museum%22/_/detail/relevance/asc/7073/7/21472/summerworks-2010/1)

Deze poster is gemaakt om een festival te promoten. De felle kleuren zijn herkenbaar voor hun en in combinatie met de illustraties laten ze dag en nacht zien, twee dingen die tegenover elkaar staan.

# Kunstwerk aanpassen

Ik heb hier en daar het kunstwerk aangepast zodat het beter in het scherm past.

![Kunstwerk responsive design](https://user-images.githubusercontent.com/45418246/81500193-cc7fc580-92d0-11ea-8f19-a2a85391540b.png)


Links zie je het originele kunstwerk die ik in Illustrator heb nagemaakt. Daarnaast zie je de Mobiele versie, en de Desktop versie. Ik heb een achtergrond toegevoegd om de lege plekken die ontstaan in te vullen. Ik heb ook het logo en de tekst weggehaald omdat ik me volledig wil focussen op het kunstwerk zelf.

# Animatie en interactie

Bij het laden van de pagina wilde ik al wat beweging laten zien. Deze bewegingen noem ik de "Idle" animations. Zo zie je bijvoorbeeld de draaiende en zwevende elementen. Elk symbool binnen een cirkel is interactief en zal, na erop te klikken, een animatie afspelen.

![Idle state](https://user-images.githubusercontent.com/45418246/82759155-cb2fbc00-9deb-11ea-9522-bcf16272bed1.gif)

## Rollend balletje
Bij deze animatie heb ik gebruik gemaakt van 2 animaties die tegelijkertijd afspelen. IK heb hier gebruik gemaakt van `translate` om de positie van het balletje te veranderen. Met `easing` en de `cubic-bezier` heb ik geprobeerd dit vloeiend te laten afspelen. Met `skew` heb ik het balletje de illiusie van snelheid gegeven.

![Rollend balletje](https://user-images.githubusercontent.com/45418246/82759317-eea73680-9dec-11ea-8793-d258994c0e6a.gif)


## Draaiende maan
De maan kan oneindig lang doordraaien. Omdat het een SVG is heb ik `Transform-origin` gebruikt om de maan zoveel mogelijk vanuit het midden te laten draaien.

![Draaiende maan](https://user-images.githubusercontent.com/45418246/82759415-9ae91d00-9ded-11ea-9775-5b3cb7f0cf4f.gif)

## Dag en Nacht
In het thema van dag en nacht, wat een van de achterliggende ideeën was van het kunstwerk, kan je door het klikken op de ster en zon de achtergrond van licht naar donker veranderen. Hier moest ik met de `eventlistener` duidelijk maken dat als ik op een van die objecten klik, dat dan de achtergrond veranderd. Dit heb ik gedaan door een `class` op de `body` te zetten op het moment dat een van deze objecten geselecteerd wordt. Voor het contrast veranderd de zon in het midden ook mee van kleur.

![Dag en nacht](https://user-images.githubusercontent.com/45418246/82759564-8f4a2600-9dee-11ea-9908-da4d1ec231a8.gif)

## Grote zon
De zon in het midden heb ik met `scale` groter gemaakt. Om de zon ook tijdens de hoverstate te laten draaien heb ik een custom property gebruikt die dit probleem oploste. _(Deze zie je ook terug bij de kleine zon aan de rechterkant)_


