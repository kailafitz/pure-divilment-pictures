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
        "'A brilliantly conceived and memorably intimate  anthology short from acclaimed director Nell Hensey, with each chapter thematically linked and told from the perspective of someone taking a bath'",
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
      coverImage: bathsCoverImage,
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
        fontFamily: "'Comforter Brush', cursive",
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
        fontSize: "initial",
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
        fontSize: "2rem",
        fontWeight: 400,
      },
      details: [],
      coverImage: "Coming Soon",
    },
  },
];
