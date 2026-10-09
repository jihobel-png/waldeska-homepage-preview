# Waldeska — designový návrh landing page

Samostatný klientský náhled značkové landing page. Vzhled ani struktura už nekopírují šablonu Choice; stávající Choice zůstává pouze cílem odkazů na menu a rezervace.

Náhled využívá veřejné informace restaurace, oficiální digitální logo a vybrané autentické fotografie z produkce Waldesky. Je označen `noindex,nofollow` a neobsahuje žádná interní data ani funkční formulář.

Vizuální styl vychází z klientem dodaného logopacku Waldeska 2026. Web používá oficiální horizontální logo a portrét pro digitální použití, oranžovou `#FF8500`, vínovou `#750000` a motiv „Holka z Vršovic“. Zdrojový logomanuál ani pracovní podklady nejsou součástí veřejného repozitáře.

## Obsah náhledu

- značkové hero s autentickým produkčním videem, bez zvuku, ve smyčce a bez ovládacích tlačítek,
- příběh a nabídka Waldesky,
- blok firemních a soukromých akcí,
- kontaktní formulář a newsletter,
- pravidelná obrazová galerie a rozbalitelné další fotografie,
- 17 vybraných fotografií prostoru, personálu, kuchyně, jídel, piva a kávy; galerie umožňuje zvětšení,
- kontakty, otevírací doba a přímý odkaz do navigace,
- responzivní mobilní navigace a nenápadné prolínání obsahu.

Kontaktní formulář a newsletter jsou v prototypu bezpečně neodesílací. Pro ostré nasazení vyžadují napojení na schválený formulářový nebo e-mailový nástroj.

Fotografie jsou optimalizované webové kopie ve formátu WebP s responzivními velikostmi a odstraněnými metadaty. Originální fotografie, kontaktní listy a interní poznámky k výběru nejsou součástí veřejného repozitáře.

Výběr upřednostňuje chuťové detaily jídla, skutečnou práci v kuchyni, čepování piva a stolování uvnitř restaurace. Sekce akcí ukazuje sdílené jídlo místo karetní hry, hlavní galerie přidává přirozený kuchyňský moment a čistý záběr baru. Portrét obsluhy v příběhu a hero video zůstávají zachované; ořezy respektují obsah snímků na desktopu i mobilu.

Vizuál je zklidněný: menší nadpisy, pravidelné rozložení a žádné velké dekorativní portréty nebo popisky přes fotografie. Hero používá webovou H.264/MP4 kopii dodaného 26sekundového videa (1280 × 720 px, bez zvukové stopy a zdrojových metadat, s rychlým začátkem přehrávání). Originální 4K soubor není publikovaný.

Fotografie interiéru zůstává jako okamžitý fallback při načítání, blokovaném přehrávání nebo chybě videa. Při omezení pohybu či zapnuté úspoře dat se video nestahuje a nespouští. Hero nemá tlačítko přehrát/pozastavit ani nativní ovládací lištu. Video se automaticky pozastaví mimo viditelný úvod stránky nebo na neaktivní záložce a při návratu se obnoví, pokud to dovoluje prohlížeč a preference návštěvníka.
