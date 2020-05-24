# Bekijk hier het bewegende kunstwerk

Link: https://flappynarwal.github.io/WebAnimation/.

Video: https://www.loom.com/share/0076036664044b27955e110276705dec  & https://www.loom.com/share/61c4e8497dd04b5abefe937767e2262f  & https://www.loom.com/share/fabcbb6a2c964509bddabc77abb00a3d

_(Loom besloot op eigen houtje mijn recordings af te kappen, dus vandaar dat er meerdere links zijn)_

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

Bij het laden van de pagina wilde ik al wat beweging laten zien. Deze bewegingen noem ik de "Idle" animations. Zo zie je bijvoorbeeld de draaiende en zwevende elementen. Elk symbool binnen een driehoek is interactief en zal, na erop te klikken, een animatie afspelen.

![Idle state](https://user-images.githubusercontent.com/45418246/82759155-cb2fbc00-9deb-11ea-9522-bcf16272bed1.gif)

## Rollend balletje
Bij deze animatie heb ik gebruik gemaakt van 2 animaties die tegelijkertijd afspelen. Ik heb hier gebruik gemaakt van `translate` om de positie van het balletje te veranderen. Met `easing` en de `cubic-bezier` heb ik geprobeerd dit vloeiend te laten afspelen. Met `skew` heb ik het balletje de illusie van snelheid gegeven.

![Rollend balletje](https://user-images.githubusercontent.com/45418246/82759317-eea73680-9dec-11ea-8793-d258994c0e6a.gif)


## Draaiende maan
De maan kan oneindig lang doordraaien. Omdat het een SVG is heb ik `Transform-origin` gebruikt om de maan zoveel mogelijk vanuit het midden te laten draaien.

![Draaiende maan](https://user-images.githubusercontent.com/45418246/82759415-9ae91d00-9ded-11ea-9775-5b3cb7f0cf4f.gif)

## Dag en Nacht
In het thema van dag en nacht, wat een van de achterliggende ideeën was van het kunstwerk, kan je door het klikken op de ster en zon de achtergrond van licht naar donker veranderen. Hier moest ik met de `eventlistener` duidelijk maken dat als ik op een van die objecten klik, dat dan de achtergrond veranderd. Dit heb ik gedaan door een `class` op de `body` te zetten op het moment dat een van deze objecten geselecteerd wordt. Voor het contrast veranderd de zon in het midden ook mee van kleur.

![Dag en nacht](https://user-images.githubusercontent.com/45418246/82759564-8f4a2600-9dee-11ea-9908-da4d1ec231a8.gif)

## Grote zon
De zon in het midden heb ik met `scale` groter gemaakt. Om de zon ook tijdens de hoverstate te laten draaien heb ik een custom property gebruikt. _(Deze zie je ook terug bij de kleine zon aan de rechterkant)_

![Grote zon](https://user-images.githubusercontent.com/45418246/82759779-b0f7dd00-9def-11ea-8eb4-1ae5d3bab8b1.gif)


## Disco wolk
Als je op de wolk klikt zal het gehele scherm gaan schudden alsof er een storm plaats vindt. De achtergrond kleuren veranderen terwijl er een kort fragment van een nummer afspeelt. Dit nummer is van een van de bands die op dit festival optreden. Omdat het kunstwerk met een festival te maken heeft leek het me leuk om ook van muziek gebruik te maken. De muziek heb ik met `audio.play` direct in de javascript laten afspelen. Het trillen van het scherm en de kleuren stoppen dankzij de `animation-iteration-count` tegelijk met de muziek. De wolk zelf pulseert doordat hij bestaat uit 4 losse cirkels. Door de `:nth-of-type()` te gebruiken heb ik ze ieder een eigen `animation-delay` meegegeven waardoor de wolk natuurlijker lijkt te bewegen.

![Discowolk](https://user-images.githubusercontent.com/45418246/82759933-9eca6e80-9df0-11ea-8dc1-7c61d2e1f621.gif)

## Verlegen cirkel
Als je op deze cirkel klikt zal hij krimpen en verdwijnen. Hiervoor heb ik met `opacity`gewerkt.

![verlegen cirkel](https://user-images.githubusercontent.com/45418246/82760036-4cd61880-9df1-11ea-97fe-72244e7b6587.gif)


## Verander de achtergrond
Door op de letters "P, Y & G" te drukken kan je de achtergrond kleur veranderen in "Purple, Yellow & Green". Om dit voor elkaar te krijgen heb ik het `keypress` event gebruikt en de de keycode gelinkt aan een specifieke kleur. 

![Verander de achtergrond](https://user-images.githubusercontent.com/45418246/82760159-0f25bf80-9df2-11ea-80de-433afdb02d7a.gif)


## Responsive Design.
Op mobiel past het kunstwerk verticaal in het scherm. Alle animaties werken op de keyboard events na.

![Responsive design](https://user-images.githubusercontent.com/45418246/82760812-69c11a80-9df6-11ea-8caf-c9f389a759f6.gif)


