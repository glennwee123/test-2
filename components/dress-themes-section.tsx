"use client"

import Image from "next/image"


const dinners = [
  {
    slug: "le-clarence",
    title: "Le Clarence Dinner",
    venue: "Paris",
    date: "Thursday, 2 April - 7:00 PM",
    womenDressCode: "Jewel Colors",
    womenDescription:
      "Ladies are invited to wear floor-length evening gowns in rich jewel tones — think emerald green, ruby red, sapphire blue, amethyst purple, topaz yellow, aquamarine, amber orange, or onyx black.",
    menDressCode: "White Tie",
    menDescription:
      "The most formal dress code. Gentlemen should wear a black tailcoat with silk lapels, matching trousers, a white marcella waistcoat, white marcella shirt with wing collar, white bow tie, and black patent leather oxford shoes.",
    womenLookBookImage: "/ladies-jewel-colors-lookbook.png",
    menLookBook: [
      { src: "/white-tie-formal-tailcoat-full-length.jpg", caption: "Classic White Tie Ensemble" },
      { src: "/white-tie-details-waistcoat-bowtie.jpg", caption: "Marcella Waistcoat & Bow Tie" },
      { src: "/white-tie-tailcoat-back-view.jpg", caption: "Tailcoat Silhouette" },
      { src: "/patent-leather-oxford-shoes-formal.jpg", caption: "Patent Leather Oxfords" },
    ],
  },
  {
    slug: "table-de-levernois",
    title: "Table De Levernois Dinner",
    venue: "Levernois, Burgundy",
    date: "Saturday, 4 April - 7:00 PM",
    womenDressCode: "Spring Floral",
    womenDescription:
      "Embrace the vineyard setting with beautiful floral prints. Ladies are invited to wear elegant dresses or ensembles featuring floral patterns — from romantic rose prints to bold botanical designs. Floor-length, midi, or cocktail length are all appropriate.",
    menDressCode: "Jacket Without Tie",
    menDescription:
      "A relaxed yet refined dress code. Gentlemen should wear a well-tailored sport coat or blazer with dress trousers. No tie required — an open collar or a pocket square adds a stylish touch.",
    womenLookBookImage: "/ladies-floral-lookbook-new.png",
    hideMenCaptions: true,
    menLookBook: [
      { src: "/blazer-no-tie-navy.jpg", caption: "Navy Blazer, Open Collar" },
      { src: "/blazer-no-tie-tan.jpg", caption: "Tan Sport Coat" },
      { src: "/blazer-no-tie-grey.jpg", caption: "Grey Blazer, Pocket Square" },
      { src: "/smart-casual-loafers.jpg", caption: "Leather Loafers" },
    ],
  },
]

export function DressThemesSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-4 block">
            What to Wear
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Dress Themes</h2>
        </div>

        <div className="space-y-24">
          {dinners.map((dinner) => (
            <div key={dinner.slug} id={`dress-${dinner.slug}`} className="space-y-12 scroll-mt-24">
              {/* Dinner Header */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-light mb-2">{dinner.title}</h3>
                <p className="text-muted-foreground">{dinner.venue}</p>
                <p className="text-primary text-sm mt-1">{dinner.date}</p>
              </div>

              {/* Ladies Section */}
              <div>
                <div className="text-center mb-8">
                  <h4 className="text-xl font-light mb-2">Ladies</h4>
                  <p className="text-primary text-lg font-medium mb-3">{dinner.womenDressCode}</p>
                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm">
                    {dinner.womenDescription}
                  </p>
                </div>

                {dinner.womenLookBookImage && (
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={dinner.womenLookBookImage}
                      alt={`${dinner.womenDressCode} Look Book`}
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Gentlemen Section */}
              <div>
                <div className="text-center mb-8">
                  <h4 className="text-xl font-light mb-2">Gentlemen</h4>
                  <p className="text-primary text-lg font-medium mb-3">{dinner.menDressCode}</p>
                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm">
                    {dinner.menDescription}
                  </p>
                </div>

                {dinner.menLookBook && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {dinner.menLookBook.map((item, index) => (
                      <div key={index} className="group">
                        <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-3">
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider between dinners */}
              {dinner.slug !== "table-de-levernois" && (
                <div className="border-t border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
