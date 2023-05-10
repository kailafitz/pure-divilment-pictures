// font-family: 'Beth Ellen', cursive;
// font-family: 'Birthstone Bounce', cursive;
// font-family: 'Bonheur Royale', cursive;
// font-family: 'Charm', cursive;
// font-family: 'Charmonman', cursive;
// font-family: 'Comforter', cursive;
// font-family: 'Comforter Brush', cursive;
// font-family: 'MonteCarlo', cursive;
// font-family: 'Square Peg', cursive;
// font-family: 'Water Brush', cursive;

const bathsCoverImage = require("../../Assets/baths-cover-photo.png");
const bathsStillImage1 = require("../../Assets/baths-still-1.png");
const bathsStillImage2 = require("../../Assets/baths-still-2.png");
const bathsMainImage = require("../../Assets/baths-production-main.png");

const reelTwo1 = require("../../Assets/production-reel-2.1.png");
const reelTwo2 = require("../../Assets/production-reel-2.2.png");
const reelTwo3 = require("../../Assets/production-reel-2.3.png");
const reelTwo4 = require("../../Assets/production-reel-2.4.png");

const testFont = "'Comforter Brush',cursive";

export interface ProductionDetails {
  fieldKey: string;
  fieldValue: string;
}

export interface ProductionItemInterface {
  Production: {
    id: string;
    title: string;
    reelButtonStyles?: {
      fontFamily?: string;
      fontSize?: string;
      textTransform?: string;
      fontWeight?: number;
    };
    // reelButtonStyles?: Object;
    coverImage?: string;
    blurb?: string;
    type?: string;
    status?: string;
    pressReview?: string;
    details: ProductionDetails[];
    primary_still_src?: string;
    secondary_still_src?: string;
    reel_one?: string[];
    reel_two?: string[];
    festivals?: string[];
    accolades?: string[];
    screenings?: string[];
    production_image?: string;
  };
}

export const ProductionData = [
  {
    production: {
      id: "1",
      title: "Baths",
      type: "Short Anthology",
      status: "In Distribution",
      pressReview:
        "'A uniquely conceived and memorably intimate anthology short from acclaimed director Nell Hensey, with each chapter thematically linked and told from the perspective of someone taking a bath.'",
      reelButtonStyles: {
        fontFamily: "'Libre Baskerville', serif",
        textTransform: "capitalize",
        fontSize: "2rem",
        fontWeight: 400,
        letterSpacing: "2px",
        "::first-letter": {
          fontStyle: "italic",
          marginRight: "1px",
        },
      },
      details: [
        {
          fieldKey: "Director",
          fieldValue: "Nell Hensey",
        },
        {
          fieldKey: "Producer",
          fieldValue: "Claire Mooney",
        },
        {
          fieldKey: "Writer(s)",
          fieldValue: "Nell Hensey",
        },
        {
          fieldKey: "Starring",
          fieldValue:
            "Frank Blake, Venetia Bowe, Emmanuel Okoye, Mark Doherty, Hannah Mamalis, Jeanne Nicole Ní Áinle, Jess Kavanagh, Naoise Dunbar, James Stewart, Susie Lamb and Alessandra Diaz.",
        },
        {
          fieldKey: "Financiers",
          fieldValue: "The Arts Council of Ireland",
        },
      ],
      primary_still_src: bathsStillImage1,
      secondary_still_src: bathsStillImage2,
      reel_one: [
        bathsStillImage1,
        bathsStillImage1,
        bathsStillImage1,
        bathsStillImage1,
      ],
      reel_two: [reelTwo1, reelTwo2, reelTwo3, reelTwo4],
      coverImage: bathsCoverImage,
      festivals: [
        "Galway Film Fleadh",
        "Dublin International Film Festival",
        "Irish Film Festival London",
        "Disappear Here Film Festival",
        "Meath Film Festival",
        "Still Voices Film Festival",
        "Kerry Film Festival",
        "St. Brigid's Film Festival London",
        "First Cut! Youth Film Festival",
      ],
      accolades: [
        "WINNER Best Direction at First Cut! Youth Film Festival",
        "NOMINATION Discovery Award",
      ],
      screenings: [
        "Galway Film Society Spring Programme",
        "Directed By HER Women's Day Film Event",
      ],
      production_image: bathsMainImage,
    },
  },
  {
    production: {
      id: "2",
      title: "Falling for the life of Alex Whelan",
      type: "In Development",
      status: "TV Drama",
      blurb:
        "A young woman hides under the delusion that her casual (bad) sex buddy has romantic potential and will sweep her off her feet. But after he drops her, she is more overcome by the lack of sympathy shown by her friends, her mother and even her therapist. A story of heartbreak - in more ways than one. Based off the short story 'What Feminism Is' by Louise Nealon.",
      reelButtonStyles: {
        fontFamily: testFont,
        textTransform: "none",
        fontSize: "2rem",
        fontWeight: 400,
      },
      details: [
        {
          fieldKey: "Director",
          fieldValue: "Nell Hensey",
        },
        {
          fieldKey: "Producer",
          fieldValue: "Claire Mooney",
        },
        {
          fieldKey: "Writer(s)",
          fieldValue: "Nell Hensey",
        },
        {
          fieldKey: "Based Off",
          fieldValue:
            "the short story 'How I Fell In Love With The Well-Documented Life of Alexander Whelan' by Yan Ge (Faber & Faber)",
        },
        {
          fieldKey: "Financiers",
          fieldValue: "",
        },
      ],
      coverImage: "Coming Soon",
    },
  },
  {
    production: {
      id: "3",
      title: "What Feminism Is",
      type: "",
      status: "",
      reelButtonStyles: {
        fontFamily: "'Arimo', sans-serif",
        textTransform: "uppercase",
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      details: [],
      coverImage: "Coming Soon",
    },
  },
  {
    production: {
      id: "4",
      title: "Musical",
      type: "",
      status: "",
      reelButtonStyles: {
        fontFamily: "'Arapey', serif",
        textTransform: "uppercase",
        fontSize: "3rem",
        fontWeight: 400,
      },
      details: [],
      coverImage: "Coming Soon",
    },
  },
];
