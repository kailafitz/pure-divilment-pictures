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

// Baths Media
const bathsCoverImage = require("../../Assets/baths-cover-photo.png");
const bathsStillImage1 = require("../../Assets/baths-still-1.png");
const bathsStillImage2 = require("../../Assets/baths-still-2.png");
const bathsMainImage = require("../../Assets/baths-production-main.png");
const bathsTitleVideoDesktop = require("../../Assets/baths-production-video-hp.mp4");
const bathsTitleVideoMobile = require("../../Assets/baths-production-video-hp-mobile.mp4");
const bathsProductionReel21 = require("../../Assets/baths-production-page-reel-2.1.png");
const bathsProductionReel22 = require("../../Assets/baths-production-page-reel-2.2.png");
const bathsProductionReel23 = require("../../Assets/baths-production-page-reel-2.3.png");
const bathsProductionReel24 = require("../../Assets/baths-production-page-reel-2.4.png");

// Alex Media
const alexTitleVideo = require("../../Assets/test-alex-video.mp4");

// Feminism Media
const femTitleVideo = require("../../Assets/test-feminism-video.mp4");

const testFont = "'Comforter Brush',cursive";

export interface ProductionDetails {
  fieldKey: string;
  fieldValue: string;
}
export interface AccoladeDetails {
  type: string;
  accoladeName: string;
}

export interface slideTitleFontSizes {
  desktop: string;
  mobile: string;
}

export interface ProductionItemInterface {
  Production: {
    id: string;
    title: string;
    titleStyles: {
      baseStyles: {
        fontFamily: string;
        textTransform: string;
        fontWeight: number;
      };

      reelButtonStyles: {
        fontSize: string;
      };

      slideFontSize: slideTitleFontSizes;
    };
    videoDesktop?: string;
    videoMobile?: string;
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
    accolades?: AccoladeDetails[];
    screenings?: string[];
    production_image?: string;
  };
}

export const ProductionData = [
  {
    production: {
      id: "1",
      title: "Baths",
      videoDesktop: bathsTitleVideoDesktop,
      videoMobile: bathsTitleVideoMobile,
      type: "Short Anthology",
      status: "In Distribution",
      pressReview:
        "'A uniquely conceived and memorably intimate anthology short from acclaimed director Nell Hensey, with each chapter thematically linked and told from the perspective of someone taking a bath.'",
      titleStyles: {
        baseStyles: {
          fontFamily: "'Libre Baskerville', serif",
          textTransform: "capitalize",
          fontWeight: 400,
          letterSpacing: "2px",
          "::first-letter": {
            fontStyle: "italic",
            marginRight: "1px",
          },
        },
        reelButtonStyles: {
          fontSize: "2rem",
        },
        slideFontSize: {
          mobile: "7rem",
          desktop: "15rem",
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
      reel_two: [
        bathsProductionReel21,
        bathsProductionReel22,
        bathsProductionReel23,
        bathsProductionReel24,
      ],
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
        {
          type: "WINNER",
          accoladeName: "Best Direction at First Cut! Youth Film Festival",
        },
        {
          type: "NOMINATION",
          accoladeName: "Discovery Award",
        },
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
      videoDesktop: alexTitleVideo,
      videoMobile: alexTitleVideo,
      type: "TV Drama",
      status: "In Development",
      blurb:
        "A young woman hides under the delusion that her casual (bad) sex buddy has romantic potential and will sweep her off her feet. But after he drops her, she is more overcome by the lack of sympathy shown by her friends, her mother and even her therapist. A story of heartbreak - in more ways than one. Based off the short story 'What Feminism Is' by Louise Nealon.",
      titleStyles: {
        baseStyles: {
          fontFamily: testFont,
          textTransform: "none",
          fontWeight: 400,
        },
        reelButtonStyles: {
          fontSize: "2rem",
        },
        slideFontSize: {
          mobile: "4.5rem",
          desktop: "7rem",
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
          fieldKey: "Based Off",
          fieldValue:
            "The short story 'How I Fell In Love With The Well-Documented Life of Alexander Whelan' by Yan Ge (Faber & Faber)",
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
      videoDesktop: femTitleVideo,
      videoMobile: femTitleVideo,
      type: "",
      status: "In Development",
      titleStyles: {
        baseStyles: {
          fontFamily: "'Arimo', sans-serif",
          textTransform: "uppercase",
          fontWeight: 700,
        },
        reelButtonStyles: {
          fontSize: "1.5rem",
        },
        slideFontSize: {
          mobile: "4rem",
          desktop: "7rem",
        },
      },
      details: [],
      coverImage: "Coming Soon",
    },
  },
  {
    production: {
      id: "4",
      title: "Musical",
      titleStyles: {
        baseStyles: {
          fontFamily: "'Arapey', serif",
          textTransform: "uppercase",
          fontWeight: 400,
        },
        reelButtonStyles: {
          fontSize: "3rem",
        },
        slideFontSize: {
          mobile: "5rem",
          desktop: "13rem",
        },
      },
      type: "",
      status: "In Development",
      details: [],
      coverImage: "Coming Soon",
    },
  },
];
