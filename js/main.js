/**
 * CKZ Ribnica C — Interactive i18n & Web Logic
 */

// --- DATA: MULTI-LANGUAGE MENU DICTIONARY ---
const menuData = [
  // COCKTAILS
  {
    category: 'cocktails',
    catTitle: { sr: 'Kokteli', en: 'Cocktails', ru: 'Коктейли' },
    items: [
      { name: 'Aperitivo Spritz', price: '6.80€', desc: { sr: 'Svež aperitiv sa penušavim vinom i korom pomorandže', en: 'Refreshing aperitif with prosecco and orange twist', ru: 'Освежающий аперитив с просекко и долькой апельсина' } },
      { name: 'Limoncello Spritz', price: '6.80€', desc: { sr: 'Limunski liker sa penušavim vinom i sodom', en: 'Limoncello liqueur, prosecco and soda splash', ru: 'Лимончелло, просекко и содовая' } },
      { name: 'Moscow Mule', price: '7.90€', desc: { sr: 'Votka, đumbirovo pivo, sok od limete', en: 'Vodka, ginger beer, lime juice', ru: 'Водка, имбирное пиво, сок лайма' } },
      { name: 'Skinny Bit**', price: '4.20€', desc: { sr: 'Votka sa gaziranom vodom i limetom', en: 'Vodka with sparkling water and fresh lime', ru: 'Водка с газированной водой и свежим лаймом' } },
      { name: 'Tom Collins', price: '4.20€', desc: { sr: 'Džin, sok od limuna, šećerni sirup, soda', en: 'Gin, lemon juice, sugar syrup, soda water', ru: 'Джин, лимонный сок, сахарный сироп, содовая' } }
    ]
  },
  // WARM DRINKS
  {
    category: 'coffee',
    catTitle: { sr: 'Topli Napici', en: 'Warm Drinks', ru: 'Горячие Напитки' },
    items: [
      { name: 'Espresso 0,05l', price: '1.50€', desc: { sr: 'Klasični italijanski espresso', en: 'Classic Italian espresso', ru: 'Классический итальянский эспрессо' } },
      { name: 'Espresso sa mlijekom 0,07l', price: '1.60€', desc: { sr: 'Espresso sa topom mlečnom penom', en: 'Espresso with warm milk foam', ru: 'Эспрессо с теплой молочной пеной' } },
      { name: 'Espresso bez kofeina 0,05l', price: '1.60€', desc: { sr: 'Espresso bez kofeina', en: 'Decaf espresso', ru: 'Эспрессо без кофеина' } },
      { name: 'Dojč 0,10l', price: '1.70€', desc: { sr: 'Tradicionalni crnogorski produženi espresso sa mlekom', en: 'Traditional Montenegrin extended espresso with milk', ru: 'Традиционный черногорский удлиненный эспрессо с молоком' } },
      { name: 'Cappuccino 0,10l', price: '1.80€', desc: { sr: 'Kremasti kapućino', en: 'Creamy cappuccino', ru: 'Кремовый капучино' } },
      { name: 'Caffe Latte Monin 0,20l', price: '3.60€', desc: { sr: 'Čokoladni keks / slana karamela / pumpkin spice / cimet', en: 'Chocolate cookie / salted caramel / pumpkin spice / cinnamon', ru: 'Шоколадное печенье / соленая карамель / тыквенный спайс / корица' } },
      { name: 'Nes kafa 0,20l', price: '2.10€', desc: { sr: 'Umutiti hladna ili topla Nes kafa', en: 'Whipped iced or warm Nescafe', ru: 'Взбитый холодный или горячий Нескафе' } },
      { name: 'Topla čokolada 0,15l', price: '2.80€', desc: { sr: 'Gusta i bogata topla čokolada', en: 'Rich and thick hot chocolate', ru: 'Густой и насыщенный горячий шоколад' } },
      { name: 'Čaj 0,20l', price: '1.90€', desc: { sr: 'Izbor biljnih i crnih čajeva', en: 'Selection of herbal and black teas', ru: 'Выбор травяных и черных чаев' } },
      { name: 'Mlijeko 0,20l', price: '1.00€', desc: { sr: 'Sveže mleko', en: 'Fresh milk', ru: 'Свежее молоко' } },
      { name: 'Mlijeko soja 0,10l', price: '0.80€', desc: { sr: 'Sojino mleko', en: 'Soy milk option', ru: 'Соевое молоко' } }
    ]
  },
  // FOOD & SNACKS
  {
    category: 'food',
    catTitle: { sr: 'Hrana & Doručak', en: 'Food & Breakfast', ru: 'Еда и Завтраки' },
    items: [
      { name: 'Ribnica doručak 500g', price: '4.20€', desc: { sr: 'Priganice, tri jaja, šunka, kulen, budimska, tvrdi sir, pavlaka', en: 'Local fried dough fritters, 3 eggs, ham, smoked sausage, hard cheese, sour cream', ru: 'Приганице (пончики), 3 яйца, ветчина, кулен, сыр, сметана' } },
      { name: 'Doručak piletina 350g', price: '5.40€', desc: { sr: 'Tri jaja, piletina, sir, pavlaka, priganice, hljeb', en: '3 eggs, chicken breast, cheese, sour cream, fritters, bread', ru: '3 яйца, куриное филе, сыр, сметана, приганице, хлеб' } },
      { name: 'Omlet povrće 350g', price: '5.40€', desc: { sr: 'Tri jaja, sir, miks povrća, priganice, hljeb', en: '3 eggs, cheese, mixed vegetables, fritters, bread', ru: '3 яйца, сыр, микс овощей, приганице, хлеб' } },
      { name: 'Priganice 350g', price: '3.20€', desc: { sr: 'Krem / sir / marmelada / med', en: 'Choice of chocolate cream / cheese / jam / honey', ru: 'На выбор: шоколадный крем / сыр / джем / мед' } },
      { name: 'Burger Ribnica 530g', price: '6.70€', desc: { sr: '100% juneće meso, ajsberg salata, cheddar, karamelizovani luk, Ribnica sos, pomfrit (*opcija bezglutenske lepinje)', en: '100% beef patty, iceberg, cheddar, caramelized onions, Ribnica sauce, fries (*gluten-free bun option)', ru: '100% говядина, айсберг, чеддер, карамелизованный лук, фирменный соус, картофель фри' } },
      { name: 'Tortilja Piletina 500g', price: '6.50€', desc: { sr: 'Piletina, Ribnica sos, ajsberg salata, pomfrit', en: 'Grilled chicken, Ribnica sauce, iceberg, fries', ru: 'Курица, фирменный соус, айсберг, картофель фри' } },
      { name: 'Tortilja Povrće (Vegan) 500g', price: '6.50€', desc: { sr: 'Vegan tortilja, tikvica, paprika, kukuruz, crveni pasulj, ajsberg salata', en: 'Vegan tortilla, zucchini, bell peppers, corn, red beans, iceberg', ru: 'Веганская тортилья, кабачки, перец, кукуруза, красная фасоль, айсберг' } },
      { name: 'Pizza Capricciosa 500g', price: '6.50€', desc: { sr: 'Pelat, sir, šunka, šampinjoni, origano', en: 'Tomato sauce, cheese, ham, mushrooms, oregano', ru: 'Томатный соус, сыр, ветчина, шампиньоны, орегано' } },
      { name: 'Pizza Margherita 500g', price: '6.50€', desc: { sr: 'Pelat, sir, origano', en: 'Tomato sauce, mozzarella cheese, oregano', ru: 'Томатный соус, сыр моцарелла, орегано' } },
      { name: 'Pizza Mexicana 500g', price: '6.50€', desc: { sr: 'Pelat, sir, kulen, feferoni, origano', en: 'Tomato sauce, cheese, spicy sausage, chili peppers, oregano', ru: 'Томатный соус, сыр, пикантная колбаса, пеперони, орегано' } },
      { name: 'Pizza Sendvič 500g', price: '6.50€', desc: { sr: 'Pelat, sir, šunka, pavlaka, šampinjoni, origano', en: 'Pizza sandwich with ham, sour cream and mushrooms', ru: 'Пицца-сэндвич с ветчиной, сметаной и грибами' } },
      { name: 'Pivska Pizza 500g', price: '6.50€', desc: { sr: 'Pavlaka, sir, kobasica, slanina, crveni luk, susam, origano', en: 'Sour cream base, cheese, sausages, bacon, red onion, sesame', ru: 'Сметанный соус, сыр, колбаски, бекон, красный лук, кунжут' } },
      { name: 'Punjene paprike / Jelo dana 600g', price: '6.00€', desc: { sr: 'Mljeveno meso, pire krompir, paprika, hljeb', en: 'Stuffed peppers with minced meat, mashed potatoes, bread', ru: 'Фаршированные перцы с мясным фаршем, картофельное пюре, хлеб' } },
      { name: 'Pileći štapići 450g', price: '6.00€', desc: { sr: 'Piletina, pomfrit, Ribnica sos, hljeb', en: 'Crispy chicken fingers, fries, Ribnica dip, bread', ru: 'Куриные стрипсы, картофель фри, фирменный соус, хлеб' } },
      { name: 'Piletina u pesto sosu 550g', price: '6.50€', desc: { sr: 'Piletina, pesto, sir, neutralna pavlaka, hljeb, pomfrit', en: 'Chicken in pesto cream sauce, cheese, fries, bread', ru: 'Куриное филе в соусе песто, сыр, картофель фри, хлеб' } },
      { name: 'Kobasice Ribnica 450g', price: '6.00€', desc: { sr: 'Svinjske/goveđe kobasice, Ribnica sos, domaći hljeb', en: 'Local sausages, Ribnica sauce, homemade bread', ru: 'Домашние колбаски, фирменный соус, свежий хлеб' } },
      { name: 'Krtola Ribnica 720g', price: '6.00€', desc: { sr: 'Pečeni krompir sa kajmakom i ajvarom', en: 'Baked potatoes with local clotted cream (kajmak) and ajvar', ru: 'Запеченный картофель с каймаком и айваром' } },
      { name: 'Oval Ribnica (Za 2-3 osobe) 1,3kg', price: '24.00€', desc: { sr: 'Domaći hljeb, pileći štapići, njeguška kobasica, kobasica Ribnica, pohovani luk, masline, pohovani sir, pomfrit', en: 'Big sharing platter: chicken fingers, local sausages, onion rings, fried cheese, olives, fries & bread', ru: 'Большое ассорти для компании: куриные стрипсы, домашние колбаски, луковые кольца, жареный сыр, картофель фри' } },
      { name: 'Meza Ribnica 700g', price: '18.00€', desc: { sr: 'Pršuta, sir, masline, kulen, pečenica, domaći hljeb', en: 'Montenegrin prosciutto, artisan cheese, cured meats, olives, fresh bread', ru: 'Черногорский пршут, домашний сыр, мясная нарезка, оливки, хлеб' } },
      { name: 'Nemesis dezert 350g', price: '5.20€', desc: { sr: 'Čokoladni kolač, engleski sos, kugla sladoleda', en: 'Rich chocolate cake, vanilla creme anglaise, scoop of ice cream', ru: 'Шоколадный торт, английский крем, шарик мороженого' } },
      { name: 'Palačinke 300g', price: '4.20€', desc: { sr: 'Čokoladni krem i plazma keks', en: 'Sweet crepe pancakes with chocolate cream and Plazma biscuit', ru: 'Блинчики с шоколадным кремом и печеньем Плазма' } }
    ]
  },
  // BEER & CIDER
  {
    category: 'beer',
    catTitle: { sr: 'Pivo & Sajder', en: 'Beer & Cider', ru: 'Пиво и Сидр' },
    items: [
      { name: 'Nikšićko Točeno 0,30l', price: '3.00€', desc: { sr: 'Sveže točeno domaće pivo', en: 'Freshly tapped local Montenegrin lager', ru: 'Свежее разливное черногорское пиво' } },
      { name: 'Nikšićko Nefiltrirano 0,30l', price: '3.10€', desc: { sr: 'Nefiltrirano svetlo pivo', en: 'Unfiltered draft lager', ru: 'Нефильтрованное разливное пиво' } },
      { name: 'Alter Draft 0,30l', price: '3.00€', desc: { sr: 'Kraft svetlo pivo', en: 'Craft lager', ru: 'Крафтовый лагер' } },
      { name: 'Stella Artois Točeno 0,33l', price: '3.80€', desc: { sr: 'Premium belgijski lager', en: 'Premium Belgian lager', ru: 'Бельгийский премиум лагер' } },
      { name: 'Hoegaarden 0,33l', price: '4.60€', desc: { sr: 'Belgijsko pšenično pivo', en: 'Belgian wheat beer', ru: 'Бельгийское пшеничное пиво' } },
      { name: 'Leffe Brune 0,33l', price: '4.10€', desc: { sr: 'Tamno opatsko pivo', en: 'Dark Belgian abbey beer', ru: 'Темное бельгийское монастырское пиво' } },
      { name: 'Guinness Točeno 0,25l / 0,50l', price: '4.20€ / 6.80€', desc: { sr: 'Čuveni irski crni stout', en: 'Famous Irish stout on tap', ru: 'Знаменитый ирландский стаут' } },
      { name: 'Corona Extra 0,355l', price: '5.80€', desc: { sr: 'Meksičko pivo sa kriškom limete', en: 'Mexican lager served with lime', ru: 'Мексиканское пиво с лаймом' } },
      { name: 'Aspall Sajder 0,33l', price: '3.90€', desc: { sr: 'Sajder od jabuke ili maline', en: 'Crisp apple or raspberry cider', ru: 'Яблочный или малиновый сидр' } }
    ]
  },
  // WINE
  {
    category: 'wine',
    catTitle: { sr: 'Vina', en: 'Wine List', ru: 'Винная Карта' },
    items: [
      { name: 'Graševina Kutjevo 0,75l', price: '32.00€', desc: { sr: 'Belo vino / staklo 0,15l (6.40€)', en: 'White wine / by glass 0.15l (6.40€)', ru: 'Белое вино / по бокалам 0.15л (6.40€)' } },
      { name: "Jacob's Creek Chardonnay 0,75l", price: '30.00€', desc: { sr: 'Sveže belo vino / staklo 0,15l (6.20€)', en: 'Crisp white wine / glass 0.15l (6.20€)', ru: 'Свежее белое вино / бокал (6.20€)' } },
      { name: "Jacob's Creek Shiraz Rose 0,75l", price: '30.00€', desc: { sr: 'Voćni roze / staklo 0,15l (6.20€)', en: 'Fruity rose wine / glass 0.15l (6.20€)', ru: 'Фруктовое розовое вино / бокал (6.20€)' } },
      { name: 'CineWine FANTASY 0,75l', price: '41.00€', desc: { sr: 'Ekskluzivno belo vino / staklo (8.30€)', en: 'Exclusive white wine / glass (8.30€)', ru: 'Эксклюзивное белое вино / бокал (8.30€)' } },
      { name: 'Bottega Prosecco Spumante 0,75l / 0,2l', price: '40.00€ / 12.00€', desc: { sr: 'Italijanski penušavac', en: 'Italian prosecco sparkling wine', ru: 'Итальянское просекко' } },
      { name: 'Moet & Chandon Brut Imperial 0,75l', price: '120.00€', desc: { sr: 'Premium francuski šampanjac', en: 'Premium French Champagne', ru: 'Французское шампанское премиум класса' } }
    ]
  },
  // SPIRITS & RAKIJA
  {
    category: 'spirits',
    catTitle: { sr: 'Rakije & Žestina', en: 'Spirits & Rakija', ru: 'Ракия и Алкоголь' },
    items: [
      { name: 'Šljiva Kraljica Zarić (7 god) 0,03l', price: '4.00€', desc: { sr: 'Vrhunska odležala rakija od šljive', en: 'Premium aged plum brandy', ru: 'Премиальная выдержанная сливовица' } },
      { name: 'Dunja Zarić / Kajsija / Kruška 0,03l', price: '4.00€', desc: { sr: 'Aromatična rakija od dunje, kajsije ili kruške', en: 'Aromatic quince, apricot or pear rakija', ru: 'Ароматная ракия из айвы, абрикоса или груши' } },
      { name: 'Baraba Dunja 0,03l', price: '5.30€', desc: { sr: 'Premium voćna rakija', en: 'Premium fruit brandy', ru: 'Премиальная фруктовая ракия' } },
      { name: 'Jameson Irish Whiskey 0,03l', price: '3.70€', desc: { sr: 'Klasični irski viski', en: 'Classic Irish whiskey', ru: 'Классический ирландский виски' } },
      { name: 'Chivas Regal 12 Y.O. 0,03l', price: '4.40€', desc: { sr: 'Škotski viski', en: 'Blended Scotch whisky', ru: 'Шотландский купажированный виски' } },
      { name: 'Monkey 47 Gin 0,03l', price: '6.50€', desc: { sr: 'Premium nemački kraft džin', en: 'Craft German gin', ru: 'Крафтовый немецкий джин' } },
      { name: 'Bumbu Rum Original 0,03l', price: '4.20€', desc: { sr: 'Egzotični rum sa Kariba', en: 'Exotic Caribbean rum', ru: 'Карибский пряный рум' } },
      { name: 'Amaro Montenegro / Gorki List 0,03l', price: '2.70€ / 2.30€', desc: { sr: 'Biljni likeri', en: 'Herbal digestifs', ru: 'Травяные ликеры' } }
    ]
  },
  // SOFT DRINKS
  {
    category: 'soft',
    catTitle: { sr: 'Bezalkoholna Pića', en: 'Soft Drinks', ru: 'Безалкогольные Напитки' },
    items: [
      { name: 'Rada Gazirana Voda / Suza Negazirana 0,25l', price: '1.80€', desc: { sr: 'Mineralna voda u staklu', en: 'Glass bottled mineral water', ru: 'Минеральная вода в стекле' } },
      { name: 'Pepsi / Pepsi Max / Mirinda 0,25l', price: '2.60€', desc: { sr: 'Osvežavajući gazirani sokovi', en: 'Refreshing soft drinks', ru: 'Освежающие газированные напитки' } },
      { name: 'Orangina / Orangina Rouge 0,25l', price: '3.40€', desc: { sr: 'Sok od pomorandže sa pulpom', en: 'Citrus sparkling drink with pulp', ru: 'Цитрусовый напиток с мякотью' } },
      { name: 'Fever Tree Tonic / Ginger Beer 0,20l', price: '5.20€', desc: { sr: 'Premium tonici i đumbirovo pivo', en: 'Premium mixers and ginger beer', ru: 'Премиальные тоники и имбирное пиво' } },
      { name: 'Cijeđena Pomorandža 0,25l', price: '3.90€', desc: { sr: '100% sveže ceđeni sok od pomorandže', en: '100% freshly squeezed orange juice', ru: '100% свежевыжатый апельсиновый сок' } },
      { name: 'Limunada 0,25l', price: '2.60€', desc: { sr: 'Sveža domaća limunada', en: 'Fresh homemade lemonade', ru: 'Свежий домашний лимонад' } },
      { name: 'Monin Limunada / Ice Tea 0,25l', price: '3.40€', desc: { sr: 'Breskva / jagoda / malina', en: 'Peach / strawberry / raspberry flavored', ru: 'Персик / клубника / малина' } }
    ]
  }
];

// --- DATA: REVIEWS IN 3 LANGUAGES ---
const reviewsData = [
  {
    name: 'Andrija Simovic',
    stars: 5,
    text: {
      sr: 'Ovo mesto je apsolutni dragulj! Brzo je postalo kulturni centar grada. Odlične svirke uživo, sjajna energija i preukusna hrana po veoma pristupačnim cenama. Apsolutna preporuka!',
      en: 'This place is an absolute gem! It has quickly become the ultimate cultural hub in the area, offering a fantastic mix of live music gigs and corporate events. Food is top-notch at budget-friendly prices!',
      ru: 'Это место — настоящая находка! Быстро стало главным культурным хабом. Отличные живые концерты, классная атмосфера и вкусная еда по очень приемлемым ценам.'
    },
    meta: { sr: 'Pre 2 meseca • Lokalni vodič', en: '2 months ago • Local guide', ru: '2 месяца назад • Местный эксперт' }
  },
  {
    name: 'Aleksandra Simoni',
    stars: 5,
    text: {
      sr: 'Jedno od mojih omiljenih mesta za koktele u Podgorici, posebno u proleće i leto! Često organizuju bazare sa rukotvorinama i cool ljudima.',
      en: 'One of my fav places for cocktails in Podgorica, especially during summer and spring season. Great vibes, bazaars, and craft cocktails!',
      ru: 'Одно из моих любимых мест для коктейлей в Подгорице, особенно весной и летом! Крутая атмосфера и интересные мероприятия.'
    },
    meta: { sr: 'Pre 10 meseci', en: '10 months ago', ru: '10 месяцев назад' }
  },
  {
    name: 'Jovana Rackovic',
    stars: 5,
    text: {
      sr: 'Omiljeno mesto u gradu! Idealno za jutarnju kafu pored reke Ribnice, ali i za fantastične svirke koje organizuju uveče!',
      en: 'Fav place in town :) Ideal for morning coffee next to Ribnica river, but also for awesome concerts they organize in the evening!',
      ru: 'Любимое место в городе! Идеально для утреннего кофе у реки Рибница, а также для потрясающих вечерних концертов!'
    },
    meta: { sr: 'Pre 2 meseca', en: '2 months ago', ru: '2 месяца назад' }
  },
  {
    name: 'Nilda Dobardžić Kučević',
    stars: 5,
    text: {
      sr: 'Ribnica je jedno od mojih omiljenih mesta u Podgorici! Atmosfera na svirkama – sjajna, opuštena i ima neku posebnu energiju. Čitav prostor ima posebnu magiju.',
      en: 'Ribnica is one of my favorite spots in Podgorica! The atmosphere at gigs is awesome, chill, and filled with special magic.',
      ru: 'Рибница — одно из моих любимых мест в Подгорице! Атмосфера на концертах просто супер, расслабленная и с особой магией.'
    },
    meta: { sr: 'Pre 10 meseci', en: '10 months ago', ru: '10 месяцев назад' }
  }
];

// --- UI DICTIONARY FOR TEXT STRINGS ---
const uiTranslations = {
  sr: {
    nav_vibe: 'Atmosfera',
    nav_menu: 'Meni',
    nav_reviews: 'Utisci',
    nav_contacts: 'Kontakti',
    order_glovo: 'Glovo',
    reviews_count: '216 recenzija',
    hero_title: 'Tvoje omiljeno mesto uz reku Ribnicu.',
    hero_subtitle: 'Jutarnja kafa, autorski kokteli, sočni burgeri i svirke uživo ispod letnjih girlandi u srcu Podgorice.',
    hero_cta_menu: 'Pogledaj Meni',
    hero_cta_glovo: 'Naruči na Glovo',
    vibe_tag: 'Kulturni prostor & Bar',
    vibe_title: 'Vibe koji pokreće grad',
    vibe_desc: 'Jedinstveno mesto na obali Ribnice. Preko dana — mirna oaza za kafu, rad i druženje uz reku. Uveče — epicentar živih nastupa, DJ večeri i sjajne energije.',
    badge_live: 'Live Music',
    vibe_card1_title: 'Koncerti & DJ Svirke',
    vibe_card1_desc: 'Pravi muzički centar sa posebnim šarmom i energijom u Podgorici.',
    badge_bar: 'Bar & Sunset',
    vibe_card2_title: 'Kokteli & Osveženje',
    vibe_card2_desc: 'Aperol, Limoncello Spritz i hladna piva za tople letnje večeri.',
    badge_food: 'Zalogaji',
    vibe_card3_title: 'Burger & Kraft Hrana',
    vibe_card3_desc: '100% juneće meso, tortilje, pizze i obilni ovali za ekipu.',
    badge_morning: 'Morning Routine',
    vibe_card4_title: 'Kafa & Priganice',
    vibe_card4_desc: 'Dojč kafa, sveži doručak i pogled na reku za savršen početak dana.',
    menu_tag: 'Nezaboravni ukusi',
    menu_title: 'Naš Meni',
    menu_desc: 'Od jutarnje kafe i tradicionalnih priganica do autorskih burgera, koktela i bogate karte vina i rakija.',
    cat_all: 'Sve',
    cat_food: 'Hrana & Doručak',
    cat_coffee: 'Topli Napici',
    cat_cocktails: 'Kokteli',
    cat_beer: 'Pivo & Sajder',
    cat_wine: 'Vina',
    cat_spirits: 'Rakije & Žestina',
    cat_soft: 'Bezalkoholna Pića',
    reviews_tag: 'Iskrena iskustva',
    reviews_title: 'Šta kažu naši gosti',
    google_reviews_label: 'Google recenzije (216)',
    loc_tag: 'Gde se nalazimo',
    loc_title: 'Poseti CKZ Ribnica C',
    loc_desc: 'Smešteni u samom centru Podgorice, na zelenim obalama reke Ribnice. Nudimo predivnu terasu, prijatnu atmosferu i mesta za velike kompanije.',
    info_address_title: 'Adresa',
    info_phone_title: 'Telefon',
    info_order_title: 'Dostava / Preuzimanje',
    info_order_text: 'Naručite omiljena jela preko Glovo aplikacije ili preuzmite na licu mesta.',
    info_parking_title: 'Parkiranje',
    info_parking_text: 'Besplatan i plaćeni parking na ulici pored lokala.',
    info_pet_title: 'Dog Friendly',
    info_pet_text: 'Vaši ljubimci su uvek dobrodošli kod nas na terasi i u lokalu.',
    btn_map: 'Otvori na Google Mapama',
    btn_glovo_order: 'Naruči na Glovo',
    footer_tagline: 'Kulturni prostor, kafa, svirke uživo i gastronomske užitke na obali reke Ribnice u Podgorici.',
    footer_nav_title: 'Navigacija',
    footer_contacts_title: 'Kontakti',
    float_call: 'Pozovi',
    float_menu: 'Meni'
  },
  en: {
    nav_vibe: 'Atmosphere',
    nav_menu: 'Menu',
    nav_reviews: 'Reviews',
    nav_contacts: 'Location',
    order_glovo: 'Glovo',
    reviews_count: '216 reviews',
    hero_title: 'Your favorite spot by the Ribnica river.',
    hero_subtitle: 'Morning specialty coffee, signature cocktails, juicy craft burgers, and live concerts under warm patio lights in Podgorica.',
    hero_cta_menu: 'Explore Menu',
    hero_cta_glovo: 'Order on Glovo',
    vibe_tag: 'Cultural Space & Bar',
    vibe_title: 'The vibe that drives the city',
    vibe_desc: 'A unique cultural riverside hub. By day — a peaceful spot for coffee, work, and river views. By night — an epicenter of live gigs, vibrant energy, and cocktails.',
    badge_live: 'Live Music',
    vibe_card1_title: 'Concerts & DJ Gigs',
    vibe_card1_desc: 'A vibrant music and cultural center in Podgorica with unforgettable energy.',
    badge_bar: 'Bar & Sunset',
    vibe_card2_title: 'Cocktails & Craft Drinks',
    vibe_card2_desc: 'Aperol Spritz, Limoncello, and draft craft beer for warm summer nights.',
    badge_food: 'Gourmet',
    vibe_card3_title: 'Burgers & Craft Bites',
    vibe_card3_desc: '100% beef patties, loaded tortillas, pizzas, and sharing platters.',
    badge_morning: 'Morning Routine',
    vibe_card4_title: 'Coffee & Fritters',
    vibe_card4_desc: 'Dojč espresso, traditional Montenegrin dough fritters, and river breezes.',
    menu_tag: 'Taste & Vibe',
    menu_title: 'Our Menu',
    menu_desc: 'From morning coffees and traditional local fritters to artisan burgers, cocktails, and fine spirits.',
    cat_all: 'All Items',
    cat_food: 'Food & Breakfast',
    cat_coffee: 'Warm Drinks',
    cat_cocktails: 'Cocktails',
    cat_beer: 'Beer & Cider',
    cat_wine: 'Wine List',
    cat_spirits: 'Rakija & Spirits',
    cat_soft: 'Soft Drinks',
    reviews_tag: 'Guest Experience',
    reviews_title: 'What Our Guests Say',
    google_reviews_label: 'Google Reviews (216)',
    loc_tag: 'Where to Find Us',
    loc_title: 'Visit CKZ Ribnica C',
    loc_desc: 'Located in central Podgorica right along the lush banks of the Ribnica river. Spacious patio, cozy indoor seating, and welcoming vibe.',
    info_address_title: 'Address',
    info_phone_title: 'Phone',
    info_order_title: 'Delivery & Takeout',
    info_order_text: 'Order via Glovo delivery app or pick up on site.',
    info_parking_title: 'Parking',
    info_parking_text: 'Street parking (free & paid options available nearby).',
    info_pet_title: 'Dog Friendly',
    info_pet_text: 'Pets are always welcome on our riverside terrace and indoors.',
    btn_map: 'Open in Google Maps',
    btn_glovo_order: 'Order on Glovo',
    footer_tagline: 'Cultural hub, specialty coffee, live gigs, and delicious bites on the riverbank of Podgorica.',
    footer_nav_title: 'Navigation',
    footer_contacts_title: 'Contact Info',
    float_call: 'Call Us',
    float_menu: 'Menu'
  },
  ru: {
    nav_vibe: 'Atмосфера',
    nav_menu: 'Меню',
    nav_reviews: 'Отзывы',
    nav_contacts: 'Контакты',
    order_glovo: 'Glovo',
    reviews_count: '216 отзывов',
    hero_title: 'Твое любимое место у реки Рибница.',
    hero_subtitle: 'Утренний кофе, авторские коктейли, сочные бургеры и живые концерты под гирляндами в самом сердце Подгорицы.',
    hero_cta_menu: 'Смотреть Меню',
    hero_cta_glovo: 'Заказать в Glovo',
    vibe_tag: 'Культурный Центр & Бар',
    vibe_title: 'Атмосфера, которая вдохновляет',
    vibe_desc: 'Уникальное пространство на берегу реки. Днем — уютная локация для кофе и работы. Вечером — эпицентр живой музыки, диджей-сетов и зажигательных вечеров.',
    badge_live: 'Живая Музыка',
    vibe_card1_title: 'Концерты & DJ Сеты',
    vibe_card1_desc: 'Настоящий музыкальный и культурный центр Подгорицы с уникальной энергией.',
    badge_bar: 'Бар & Закат',
    vibe_card2_title: 'Коктейли & Напитки',
    vibe_card2_desc: 'Апероль, Лимончелло Спритц и прохладное пиво для летних вечеров.',
    badge_food: 'Еда & Закуски',
    vibe_card3_title: 'Бургеры & Крафт',
    vibe_card3_desc: '100% сочная говядина, тортильи, пицца и сеты на большую компанию.',
    badge_morning: 'Утренний Кофе',
    vibe_card4_title: 'Кофе & Приганице',
    vibe_card4_desc: 'Традиционный черногорский кофе, свежие пончики и вид на реку.',
    menu_tag: 'Яркие вкусы',
    menu_title: 'Наше Меню',
    menu_desc: 'От утреннего капучино и традиционных приганиц до крафтовых бургеров, коктейлей и винной карты.',
    cat_all: 'Все',
    cat_food: 'Еда и Завтраки',
    cat_coffee: 'Горячие Напитки',
    cat_cocktails: 'Коктейли',
    cat_beer: 'Пиво и Сидр',
    cat_wine: 'Винная Карта',
    cat_spirits: 'Ракия и Алкоголь',
    cat_soft: 'Безалкогольные',
    reviews_tag: 'Отзывы гостей',
    reviews_title: 'Что говорят наши посетители',
    google_reviews_label: 'Google Отзывы (216)',
    loc_tag: 'Как нас найти',
    loc_title: 'Ждем вас в CKZ Ribnica C',
    loc_desc: 'Мы находимся в центре Подгорицы прямо у реки Рибница. Уютная летняя терраса, отличный звук и рады большим компаниям.',
    info_address_title: 'Адрес',
    info_phone_title: 'Телефон',
    info_order_title: 'Доставка / На вынос',
    info_order_text: 'Заказывайте через Glovo или забирайте заказ на баре.',
    info_parking_title: 'Парковка',
    info_parking_text: 'Бесплатная и платная уличная парковка рядом с заведением.',
    info_pet_title: 'Dog Friendly',
    info_pet_text: 'Мы всегда рады вашим питомцам на террасе и в зале.',
    btn_map: 'Открыть в Google Картах',
    btn_glovo_order: 'Заказать в Glovo',
    footer_tagline: 'Культурное пространство, кофе, живая музыка и вкусная еда на берегу реки Рибница в Подгорице.',
    footer_nav_title: 'Навигация',
    footer_contacts_title: 'Контакты',
    float_call: 'Позвонить',
    float_menu: 'Меню'
  }
};

// --- STATE MANAGEMENT ---
let currentLang = 'sr';
let activeCategory = 'all';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initLanguageSwitcher();
  initMenuTabs();
  renderMenu();
  renderReviews();
  initDrawer();
});

// Header Scroll Effect
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile Drawer Menu
function initDrawer() {
  const burgerBtn = document.getElementById('burgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  burgerBtn.addEventListener('click', () => {
    drawer.classList.add('open');
  });

  drawerClose.addEventListener('click', () => {
    drawer.classList.remove('open');
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// Language Switcher Logic
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      if (lang === currentLang) return;

      currentLang = lang;

      // Update active state on all switcher buttons
      langBtns.forEach(b => {
        if (b.getAttribute('data-lang') === currentLang) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      updateStaticTranslations();
      renderMenu();
      renderReviews();
    });
  });
}

// Update all DOM elements with data-i18n attribute
function updateStaticTranslations() {
  const langObj = uiTranslations[currentLang];
  if (!langObj) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langObj[key]) {
      el.textContent = langObj[key];
    }
  });
}

// Menu Category Filtering
function initMenuTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      activeCategory = e.target.getAttribute('data-category');
      renderMenu();
    });
  });
}

// Render Menu HTML Dynamically
function renderMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  container.innerHTML = '';

  const filteredCategories = activeCategory === 'all'
    ? menuData
    : menuData.filter(c => c.category === activeCategory);

  filteredCategories.forEach(cat => {
    const block = document.createElement('div');
    block.className = 'menu-category-block';

    const titleText = cat.catTitle[currentLang] || cat.catTitle['sr'];
    
    let itemsHtml = '';
    cat.items.forEach(item => {
      const descText = item.desc[currentLang] || item.desc['sr'];
      itemsHtml += `
        <div class="menu-item-card">
          <div>
            <div class="menu-item-head">
              <h4 class="menu-item-title">${item.name}</h4>
              <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-desc">${descText}</p>
          </div>
        </div>
      `;
    });

    block.innerHTML = `
      <h3 class="category-header-title">${titleText}</h3>
      <div class="menu-items-grid">
        ${itemsHtml}
      </div>
    `;

    container.appendChild(block);
  });
}

// Render Reviews HTML Dynamically
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  container.innerHTML = '';

  reviewsData.forEach(rev => {
    const text = rev.text[currentLang] || rev.text['sr'];
    const meta = rev.meta[currentLang] || rev.meta['sr'];
    const starsHtml = '★'.repeat(rev.stars);

    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div>
        <div class="review-header">
          <div>
            <div class="reviewer-name">${rev.name}</div>
          </div>
          <div class="review-stars">${starsHtml}</div>
        </div>
        <p class="review-text">"${text}"</p>
      </div>
      <div class="review-meta">${meta}</div>
    `;

    container.appendChild(card);
  });
}