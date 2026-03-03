"use client"

import { useState } from "react"
import { DestinationModal } from "./destination-modal"
import { ChevronRight } from "lucide-react"

export interface Destination {
  id: string
  name: string
  location: string
  date: string
  time?: string
  image: string
  category: "paris" | "burgundy" | "accommodation" | "dining" | "travel"
  shortDescription: string
  fullDescription: string
  highlights: string[]
  tips: string[]
  gallery: string[]
  website: string
}

const destinations: Destination[] = [
  {
    id: "hotel-de-crillon",
    name: "Hôtel de Crillon",
    location: "10 Place de la Concorde, Paris",
    date: "2-3 April",
    image: "/hotel-de-crillon-paris-luxury-palace-exterior-plac.jpg",
    category: "accommodation",
    shortDescription: "Our magnificent Parisian home, a Rosewood Hotel on the iconic Place de la Concorde",
    fullDescription:
      "Hôtel de Crillon, A Rosewood Hotel, is one of the most prestigious palace hotels in the world. Occupying a prime position on the Place de la Concorde since 1758, this architectural masterpiece combines 18th-century grandeur with contemporary luxury. After a four-year renovation led by designer Karl Lagerfeld and architect Richard Martinet, the hotel reopened in 2017 as a celebration of French art de vivre at its finest.",
    highlights: [
      "Historic palace dating to 1758",
      "Stunning views of Place de la Concorde",
      "Les Ambassadeurs restaurant",
      "World-class Sense spa",
      "Karl Lagerfeld-designed suites",
    ],
    tips: [
      "Request a room with Concorde views",
      "The Jardin d'Hiver is perfect for afternoon tea",
      "L'Ecrin is their Michelin-starred restaurant",
    ],
    gallery: [
      "/hotel-de-crillon-paris-grand-lobby-interior.jpg",
      "/hotel-de-crillon-paris-luxury-suite-bedroom.jpg",
      "/place-de-la-concorde-paris-evening-view.jpg",
    ],
    website: "https://www.rosewoodhotels.com/en/hotel-de-crillon",
  },
  {
    id: "versailles",
    name: "Palace of Versailles",
    location: "Place d'Armes, Versailles",
    date: "2 April",
    time: "11:00 AM–12:30 PM",
    image: "/versailles-palace-exterior.jpg",
    category: "paris",
    shortDescription: "A private tour of the legendary palace including Marie Antoinette's private apartment",
    fullDescription:
      "The Palace of Versailles is the most famous royal residence in the world, a UNESCO World Heritage site and the ultimate symbol of French grandeur. Originally a hunting lodge, it was transformed by Louis XIV into a sprawling palace complex with over 2,300 rooms, immaculate gardens, and the legendary Hall of Mirrors. Our exclusive private tour includes access to Marie Antoinette's private apartment—intimate chambers rarely seen by the public that offer a fascinating glimpse into the personal life of France's most iconic queen.",
    highlights: [
      "Private guided tour with exclusive access",
      "Marie Antoinette's private apartment",
      "The legendary Hall of Mirrors",
      "Royal Apartments of the Sun King",
      "UNESCO World Heritage Site",
    ],
    tips: [
      "Wear comfortable walking shoes for the palace halls",
      "Photography is permitted in most rooms",
      "The private apartment tour is a rare privilege—savour every moment",
      "The gardens are breathtaking if time permits a stroll",
    ],
    gallery: [
      "/versailles-hall-of-mirrors.jpg",
      "/versailles-marie-antoinette-apartment.jpg",
      "/versailles-gardens.jpg",
    ],
    website: "https://en.chateauversailles.fr/",
  },
  {
    id: "bar-les-ambassadeurs",
    name: "Bar Les Ambassadeurs",
    location: "Hôtel de Crillon, 10 Place de la Concorde, Paris",
    date: "2 April",
    time: "4:30 PM",
    image: "/bar-les-ambassadeurs-main.png",
    category: "dining",
    shortDescription: "Photo shoot and drinks at the iconic bar within Hôtel de Crillon",
    fullDescription:
      "Bar Les Ambassadeurs epitomises the quintessential spirit of Paris. Located in the legendary Hôtel de Crillon overlooking Place de la Concorde, this magnificent bar features marble walls, gilded moldings, mirrors, and stunning crystal chandeliers hanging from a ceiling frescoed with clouds to resemble the sky. Crushed velvet armchairs and loveseats are arranged around elegant tables, creating an intoxicatingly seductive atmosphere. The bar is renowned for its creative seasonal cocktails crafted by bar manager Kevin Rigault and his team, complemented by live music every evening from 8pm.",
    highlights: [
      "18th-century palace interior with ceiling frescoes",
      "Crystal chandeliers with artistic metal chain details",
      "Award-winning seasonal cocktail program",
      "Live music every evening",
      "Named Best International Hotel Bar 2025 by Food & Wine",
    ],
    tips: [
      "No reservations taken - arrive early for best seating",
      "Try their signature seasonal cocktails",
      "Open daily from 5pm until 1am",
      "Dress code: Smart casual",
    ],
    gallery: ["/bar-les-ambassadeurs-bartender.png", "/bar-les-ambassadeurs-interior.png"],
    website: "https://www.rosewoodhotels.com/en/hotel-de-crillon/dining/bar-les-ambassadeurs",
  },
  {
    id: "le-clarence",
    name: "Le Clarence",
    location: "31 Avenue Franklin D. Roosevelt, Paris",
    date: "2 April",
    image: "/le-clarence-restaurant-paris-michelin-star-elegant.jpg",
    category: "dining",
    shortDescription: "Our first celebratory dinner at this two Michelin-starred gastronomic temple",
    fullDescription:
      "Le Clarence is a two Michelin-starred restaurant housed in a stunning 19th-century hôtel particulier owned by Domaine Clarence Dillon (Château Haut-Brion). Chef Christophe Pelé creates exceptional French cuisine that showcases the finest seasonal ingredients with remarkable technique and creativity. The wine list, as you might expect from the Dillon family, is extraordinary—featuring rare vintages from their Bordeaux estates alongside an impeccable selection of Burgundies.",
    highlights: [
      "Two Michelin stars",
      "Stunning 19th-century mansion setting",
      "Exceptional wine pairings from Château Haut-Brion",
      "Chef Christophe Pelé's creative French cuisine",
      "Intimate private dining rooms available",
    ],
    tips: [
      "The wine pairing is exceptional and highly recommended",
      "Request the garden room for group dining",
      "Save room for the spectacular desserts",
    ],
    gallery: [
      "/le-clarence-paris-restaurant-dining-room-elegant.jpg",
      "/french-fine-dining-plated-dish-michelin-star.jpg",
      "/wine-cellar-bordeaux-bottles-elegant.jpg",
    ],
    website: "https://www.le-clarence.paris/en/",
  },
  {
    id: "paris-dijon-train",
    name: "LYRIA 9269 to Dijon",
    location: "Paris Gare de Lyon (Hall 1 & 2) → Gare de Dijon-Ville",
    date: "3 April",
    image: "/tgv-high-speed-train-french-countryside-spring.jpg",
    category: "travel",
    shortDescription: "First-class LYRIA train journey through the French countryside to Burgundy",
    fullDescription:
      "Our journey from Paris to Burgundy begins at the beautiful Paris Gare de Lyon (Hall 1 & 2), one of Paris's most elegant train stations with its stunning Le Train Bleu restaurant. The LYRIA 9269 departs at 11:56 AM and arrives in Dijon at 1:30 PM, whisking us through the French countryside in first-class comfort in approximately 1 hour 34 minutes. Watch the landscape transform from the Parisian suburbs to the rolling hills and vineyards of Burgundy as we approach our destination.",
    highlights: [
      "LYRIA 9269 high-speed train",
      "Departs 11:56 AM from Paris Gare de Lyon",
      "Arrives 1:30 PM at Gare de Dijon-Ville",
      "First-class seating and service",
      "Scenic views of the French countryside",
    ],
    tips: [
      "Grab a coffee at Le Train Bleu before departure",
      "Sit on the left side for better vineyard views",
      "The trip is about 1 hour 34 minutes",
    ],
    gallery: [
      "/gare-de-lyon-paris-train-station-interior-beautifu.jpg",
      "/french-countryside-from-train-window-spring.jpg",
      "/dijon-train-station-arrival-burgundy.jpg",
    ],
    website: "https://www.sncf-connect.com/en-en/",
  },
  {
    id: "hotel-de-beaune",
    name: "L'Hôtel de Beaune",
    location: "5 Rue Samuel Legay, Beaune",
    date: "3-5 April",
    image: "/hotel-de-beaune-burgundy-boutique-hotel-exterior-c.jpg",
    category: "accommodation",
    shortDescription: "Our charming Burgundian home base in the heart of wine country",
    fullDescription:
      "L'Hôtel de Beaune is an elegant boutique hotel perfectly situated in the heart of Beaune, the wine capital of Burgundy. The hotel combines contemporary comfort with traditional Burgundian charm, offering easy walking access to the town's historic sites, wine cellars, and restaurants. It serves as our perfect base for exploring the legendary vineyards of the Côte d'Or.",
    highlights: [
      "Central location in historic Beaune",
      "Walking distance to Hospices de Beaune",
      "Contemporary Burgundian design",
      "Easy access to wine cellars and tastings",
      "Excellent local restaurant recommendations",
    ],
    tips: [
      "The concierge can arrange last-minute tastings",
      "Ask about bicycle rentals for vineyard visits",
      "The nearby Les Halles market is excellent for picnic supplies",
    ],
    gallery: [
      "/beaune-burgundy-hotel-room-interior-elegant.jpg",
      "/beaune-old-town-cobblestone-streets-wine-shops.jpg",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://www.lhoteldebeaune.com/",
  },
  {
    id: "domaine-prieure-roch",
    name: "Domaine Prieuré Roch",
    location: "Prémeaux-Prissey, Burgundy",
    date: "3 April",
    image: "/burgundy-vineyard-domaine-stone-building.jpg",
    category: "burgundy",
    shortDescription:
      "An extraordinary afternoon of wine tasting followed by a casual intimate dinner hosted by the domaine",
    fullDescription:
      "Domaine Prieuré Roch is one of Burgundy's most mystical and sought-after producers, founded in 1988 by the late Henri-Frédéric Roch, co-director of Domaine de la Romanée-Conti. The domaine practices biodynamic viticulture with a spiritual approach that borders on the philosophical. Their wines are rare, ethereal, and deeply connected to terroir. This exclusive visit includes both a tasting and a casual dinner hosted by the domaine—an extraordinary privilege.",
    highlights: [
      "Ultra-rare wines from legendary vineyards",
      "Biodynamic and spiritual winemaking philosophy",
      "Founded by Henri-Frédéric Roch of DRC fame",
      "Private casual dinner hosted by the domaine",
      "Exclusive access to the historic cellars",
    ],
    tips: [
      "These wines are nearly impossible to find elsewhere",
      "Ask about their biodynamic practices",
      "The dinner will be an unforgettable experience",
    ],
    gallery: [
      "/burgundy-wine-cellar-barrels.jpg",
      "/biodynamic-vineyard-rows-burgundy.jpg",
      "/wine-tasting-burgundy-glasses.jpg",
    ],
    website: "https://domaine-prieure-roch.com/en/home",
  },
  {
    id: "premnord-restaurant",
    name: "Premnord Restaurant",
    location: "Prémeaux-Prissey, Burgundy",
    date: "3 April",
    time: "7:00 PM",
    image: "/premnord-restaurant-burgundy.jpg",
    category: "dining",
    shortDescription: "Dinner hosted by Domaine Prieuré Roch at their bistronomic restaurant on the Route des Grands Crus",
    fullDescription:
      "Premnord is the restaurant of Domaine Prieuré Roch, located in Prémeaux-Prissey on the legendary Route des Grands Crus between Beaune and Dijon. More than just a restaurant, it's a destination that celebrates Burgundian terroir in every aspect. Chef Céline Dedinger crafts elegant bistronomic cuisine using products from the Ferme du Poiset, the domaine's own farm, featuring heritage poultry, Gascon black pigs, and lamb. The contemporary dining room opens onto the surrounding vineyards, while a convivial wine bar offers over 700 references with pride of place for Domaine Prieuré Roch wines.",
    highlights: [
      "On-site restaurant of Domaine Prieuré Roch",
      "Chef Céline Dedinger's farm-to-table bistronomic cuisine",
      "Products from their own Ferme du Poiset",
      "Over 700 wine references in the cave",
      "Contemporary setting overlooking the vineyards",
    ],
    tips: [
      "The cuisine features produce from the domaine's own farm",
      "Try the heritage poultry and Gascon black pork",
      "The wine bar is perfect for discovering rare bottles",
    ],
    gallery: [
      "/premnord-restaurant-burgundy.jpg",
      "/premnord-restaurant-burgundy.jpg",
      "/premnord-restaurant-burgundy.jpg",
    ],
    website: "https://premnord.com/fr/",
  },
  {
    id: "beaune-saturday-market",
    name: "Beaune Saturday Market",
    location: "Place de la Halle, Beaune",
    date: "4 April",
    image: "/beaune-saturday-market-place-de-la-halle.jpg",
    category: "burgundy",
    shortDescription: "One of Burgundy's finest markets with local produce, cheese, and regional specialties",
    fullDescription:
      "The Beaune Saturday Market is one of the most beloved markets in Burgundy, drawing locals and visitors alike to the historic Place de la Halle and surrounding streets. With roughly 180 stalls offering an incredible array of fresh fruits, vegetables, artisan cheeses, charcuterie, freshly baked breads, organic produce, and local farm products, it's a feast for all the senses. The market has been a Saturday morning tradition for centuries, set against the backdrop of Beaune's beautiful medieval architecture.",
    highlights: [
      "Approximately 180 stalls of local goods",
      "Fresh Burgundian cheeses including Époisses and Comté",
      "Local charcuterie and pâtés",
      "Seasonal fruits and vegetables from local farms",
      "Artisan breads and pastries",
    ],
    tips: [
      "Arrive early for the best selection",
      "Try the local Époisses cheese - it's famous in Burgundy",
      "Perfect for picking up picnic supplies for vineyard visits",
      "The market extends to Place Fleury and Avenue de la République",
    ],
    gallery: [
      "/french-market-cheese-stall-burgundy.jpg",
      "/french-market-produce-vegetables-colorful.jpg",
      "/french-market-charcuterie-meats.jpg",
    ],
    website: "https://www.beaune-tourism.com/organize-your-stay/events/marche-de-beaune-beaune-en-3860373",
  },
  {
    id: "maison-joseph-drouhin",
    name: "Maison Joseph Drouhin",
    location: "7 Rue d'Enfer, Beaune",
    date: "4 April",
    image: "/joseph-drouhin-wine-cellar-beaune-historic.jpg",
    category: "burgundy",
    shortDescription: "Morning tasting at one of Burgundy's most prestigious and historic wine houses",
    fullDescription:
      "Founded in 1880, Maison Joseph Drouhin is one of Burgundy's most respected négociant-éleveurs, with an exceptional portfolio spanning the entire Côte d'Or. Their historic cellars beneath Beaune date back to the 13th-15th centuries and include former cellars of the Dukes of Burgundy and the Kings of France. The Drouhin family has been pioneers in organic and biodynamic viticulture, and their wines represent the purest expression of Burgundy's greatest terroirs.",
    highlights: [
      "Historic 13th-15th century cellars",
      "Former cellars of Dukes of Burgundy",
      "Pioneer in organic Burgundy winemaking",
      "Exceptional range from village to Grand Cru",
      "Family-owned since 1880",
    ],
    tips: [
      "The cellar tour is fascinating—don't rush it",
      "Try to taste their Clos des Mouches",
      "Ask about their Oregon (Domaine Drouhin) wines too",
    ],
    gallery: [
      "/historic-wine-cellar-stone-arches.jpg",
      "/burgundy-wine-bottles-collection.jpg",
      "/wine-tasting-room-elegant.jpg",
    ],
    website: "https://www.drouhin.com/",
  },
  {
    id: "1243-bourgogne-society",
    name: "1243 Bourgogne Society",
    location: "Couvent des Cordeliers, Beaune",
    date: "4 April",
    time: "1:00 PM",
    image: "/1243-bourgogne-society-courtyard.png",
    category: "dining",
    shortDescription: "An exclusive private lunch at this prestigious wine collector's club in a 13th-century convent",
    fullDescription:
      "The 1243 Bourgogne Society is an ultra-exclusive private wine collector's club housed in the beautifully restored Couvent des Cordeliers, a 13th-century Franciscan convent in the heart of Beaune. Named after the year the convent was founded, the society hosts intimate gatherings for passionate wine lovers in this extraordinary historic setting. The stunning Gothic cloisters and rose gardens provide a magical backdrop for their exclusive dining events, which feature cuisine by the acclaimed Japanese restaurant Bissoh paired with some of the world's rarest Burgundy wines.",
    highlights: [
      "Ultra-exclusive private wine collector's club",
      "Set in a beautifully restored 13th-century Franciscan convent",
      "Stunning Gothic cloisters and rose gardens",
      "Cuisine by acclaimed Japanese restaurant Bissoh",
      "Access to some of the world's rarest Burgundy wines",
    ],
    tips: [
      "This is a rare invitation-only privilege",
      "The convent architecture and gardens are extraordinary",
      "Expect exceptional wines paired with refined cuisine",
      "Take time to explore the beautiful cloisters",
    ],
    gallery: [
      "/1243-bourgogne-society-courtyard.png",
      "/1243-bourgogne-society-courtyard.png",
      "/1243-bourgogne-society-courtyard.png",
    ],
    website: "https://www.1243bourgognesociety.com/index.php",
  },
  {
    id: "hospices-beaune",
    name: "Hospices de Beaune",
    location: "Rue de l'Hôtel-Dieu, Beaune",
    date: "3-5 April",
    image: "/hospices-de-beaune-colorful-tiled-roof-burgundy-fr.jpg",
    category: "burgundy",
    shortDescription: "The iconic symbol of Beaune with its magnificent polychrome roof tiles",
    fullDescription:
      "Founded in 1443 as a hospital for the poor, the Hospices de Beaune is adorned with an extraordinary multicolored glazed tile roof that has become the symbol of Burgundy. This architectural gem hosts the world's most famous charity wine auction each November, but year-round visitors can explore its remarkable courtyards, museum, and pharmacy. The Last Judgment altarpiece by Rogier van der Weyden is an absolute masterpiece.",
    highlights: [
      "Iconic polychrome glazed tile roofs",
      "The Last Judgment altarpiece by Rogier van der Weyden",
      "Historic pharmacy with pewter vessels",
      "Beautiful Gothic courtyard architecture",
      "Site of the world's most famous wine auction",
    ],
    tips: [
      "Audio guides are available in multiple languages",
      "Allow 1-2 hours for a complete visit",
      "The gift shop has excellent local wines",
    ],
    gallery: [
      "/hospices-de-beaune-courtyard-interior.jpg",
      "/medieval-pharmacy-beaune.jpg",
      "/rogier-van-der-weyden-altarpiece.jpg",
    ],
    website: "https://www.hospices-de-beaune.com/en/",
  },
  {
    id: "domaine-leflaive",
    name: "Domaine Leflaive",
    location: "Place des Marronniers, Puligny-Montrachet",
    date: "4 April",
    time: "6:00–7:00 PM",
    image: "/domaine-leflaive-puligny-montrachet.jpg",
    category: "burgundy",
    shortDescription: "Evening wine tasting at this legendary Puligny-Montrachet estate, producing world-class white Burgundy since 1717",
    fullDescription:
      "Domaine Leflaive is one of the most revered names in white Burgundy, producing exceptional Chardonnay from the hallowed terroirs of Puligny-Montrachet since 1717. The domaine has been a pioneer in biodynamic viticulture and is renowned for its crystalline, mineral-driven wines from some of the world's greatest white wine vineyards including Chevalier-Montrachet, Bâtard-Montrachet, and Bienvenues-Bâtard-Montrachet Grand Crus. Under the stewardship of Brice de la Morandière, the estate continues its legacy of excellence, crafting wines that are both powerful and elegant.",
    highlights: [
      "Legendary Puligny-Montrachet estate since 1717",
      "Pioneer in biodynamic viticulture",
      "Grand Cru holdings including Chevalier-Montrachet and Bâtard-Montrachet",
      "World-renowned white Burgundy producer",
      "Four generations of the Leflaive wine family",
    ],
    tips: [
      "These are among the finest white wines in the world",
      "Ask about their biodynamic practices",
      "The village of Puligny-Montrachet is charming to explore",
      "Savor the minerality and precision of their wines",
    ],
    gallery: [
      "/domaine-leflaive-puligny-montrachet.jpg",
      "/domaine-leflaive-puligny-montrachet.jpg",
      "/domaine-leflaive-puligny-montrachet.jpg",
    ],
    website: "https://www.leflaive.fr/en_US/",
  },
  {
    id: "table-de-levernois",
    name: "Table De Levernois",
    location: "Levernois, Burgundy",
    date: "4 April",
    image: "/table-de-levernois-dining-room.png",
    category: "dining",
    shortDescription: "An elegant Michelin-starred dinner in the heart of Burgundy wine country",
    fullDescription:
      "La Table de Levernois is the gastronomic restaurant of Hostellerie de Levernois, a prestigious Relais & Châteaux property set in a beautiful 18th-century estate surrounded by parkland. Chef Philippe Augé crafts a passionate cuisine immersed in the traditional flavors of Burgundy, sourcing seasonal produce from their garden and local suppliers. The elegant dining room overlooks the park and its century-old trees, offering a serene and rejuvenating atmosphere.",
    highlights: [
      "1 Michelin star",
      "Chef Philippe Augé's refined Burgundian cuisine",
      "Beautiful Relais & Châteaux estate setting",
      "Over 1,000 wine references featuring prestigious Burgundy bottles",
      "Elegant terrace and garden views",
    ],
    tips: [
      "Let sommelier Philippe Meurger guide your wine pairing",
      "Request a table with garden views if weather permits",
      "Seasonal produce comes from their own market gardener Baptiste",
    ],
    gallery: [
      "/table-de-levernois-terrace.jpg",
      "/table-de-levernois-cuisine.jpg",
      "/table-de-levernois-wine-cellar.jpg",
    ],
    website: "https://www.levernois.com/en/la-table-de-levernois.html",
  },
  {
    id: "chagny-sunday-market",
    name: "Chagny Sunday Market",
    location: "Centre Ville, Chagny",
    date: "5 April",
    image: "/chagny-sunday-market-burgundy-village.jpg",
    category: "burgundy",
    shortDescription: "A charming village market in the heart of Burgundy's wine country",
    fullDescription:
      "The Chagny Sunday Market is a delightful traditional French village market located in the charming town of Chagny, just a short drive from Beaune. This authentic market offers a more intimate experience than larger city markets, with local farmers and artisans selling their finest products. It's the perfect way to spend a Sunday morning in Burgundy, browsing fresh produce, tasting local specialties, and soaking in the relaxed atmosphere of village life in wine country.",
    highlights: [
      "Authentic Burgundian village market atmosphere",
      "Local farmers selling seasonal produce",
      "Regional wines and spirits",
      "Handmade crafts and artisan products",
      "Traditional French market experience",
    ],
    tips: [
      "Less crowded than Beaune - perfect for a relaxed morning",
      "Great place to find local honey and preserves",
      "Chagny is home to the famous Maison Lameloise restaurant",
      "Combine with a morning coffee at a local café",
    ],
    gallery: [
      "/french-village-market-morning-spring.jpg",
      "/burgundy-local-wines-market-stall.jpg",
      "/french-market-flowers-plants-spring.jpg",
    ],
    website: "https://www.burgundy-tourism.com/wine-themed-events/marche-dominical-de-chagny",
  },
  {
    id: "la-ferme-de-la-ruchotte",
    name: "La Ferme de la Ruchotte",
    location: "Bligny-sur-Ouche, Burgundy",
    date: "5 April",
    time: "12:00 PM",
    image: "/la-ferme-de-la-ruchotte-burgundy.jpg",
    category: "dining",
    shortDescription: "A charming farmhouse restaurant celebrating authentic Burgundian cuisine",
    fullDescription:
      "La Ferme de la Ruchotte is a beloved farmhouse restaurant nestled in the rolling hills of Burgundy near Bligny-sur-Ouche. This authentic working farm offers a true taste of rural Burgundy, with menus crafted from their own organic produce, eggs, and meats raised on-site. The rustic dining room and beautiful outdoor terrace provide the perfect setting for a leisurely lunch surrounded by the peaceful Burgundian countryside.",
    highlights: [
      "Authentic working farm setting",
      "Farm-to-table organic cuisine",
      "Beautiful countryside views",
      "Traditional Burgundian recipes",
      "Relaxed, family-friendly atmosphere",
    ],
    tips: [
      "Try their signature farm-raised chicken",
      "The homemade desserts are not to be missed",
      "Book ahead as it's popular with locals",
      "Perfect for a leisurely multi-course lunch",
    ],
    gallery: [
      "/la-ferme-de-la-ruchotte-interior.jpg",
      "/la-ferme-de-la-ruchotte-terrace.jpg",
      "/la-ferme-de-la-ruchotte-cuisine.jpg",
    ],
    website: "https://www.lafermedelaruchotte.com/",
  },
]

export function DestinationGrid() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [filter, setFilter] = useState<"all" | "accommodation" | "dining" | "burgundy" | "travel">("all")

  const filteredDestinations = destinations.filter((dest) => filter === "all" || dest.category === filter)

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-4 block">Discover</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Our Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light mb-10">
            Click on any destination to explore detailed information, photos, and insider tips
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { value: "all", label: "All Places" },
              { value: "accommodation", label: "Hotels" },
              { value: "dining", label: "Dining" },
              { value: "burgundy", label: "Wine & Culture" },
              { value: "travel", label: "Travel" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as typeof filter)}
                className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 ${
                  filter === option.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <button
              key={destination.id}
              onClick={() => setSelectedDestination(destination)}
              className="group text-left bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs uppercase tracking-wider ${
                      destination.category === "accommodation"
                        ? "bg-primary text-primary-foreground"
                        : destination.category === "dining"
                          ? "bg-accent text-accent-foreground"
                          : destination.category === "burgundy"
                            ? "bg-primary/80 text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {destination.category === "burgundy" ? "Wine & Culture" : destination.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-muted-foreground tracking-wide">
                  {destination.date}
                  {destination.time ? ` · ${destination.time}` : ""}
                </span>
                <h3 className="text-xl font-medium mt-1 mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm text-muted-foreground font-light line-clamp-2">{destination.shortDescription}</p>
                <div className="flex items-center gap-1 mt-4 text-primary text-sm">
                  <span>View details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4">
                  <a
                    href={destination.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <DestinationModal destination={selectedDestination} onClose={() => setSelectedDestination(null)} />
    </section>
  )
}
