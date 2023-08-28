export interface ListItemInterface {
  title: string;
  year?: string;
  heading: string;
  affiliates?: string;
}

export interface CreativeInterface {
  Creative: {
    id: string;
    name: string;
    role: string;
    profile_image: string;
    reelURL?: string;
    bio: string[];
    credits: ListItemInterface[];
    accolades?: ListItemInterface[];
    image_reel?: string[];
  };
}

export const CreativesData = [
  {
    creative: {
      id: "1",
      name: "Claire Mooney",
      role: "Co-Founder | Creative Producer",
      profile_image: "claire",
      bio: [
        "Claire is a creative producer from County Meath with a Masters in Creative Production and Screen Finance from the National Film School IADT.",
        "While studying at IADT, Claire produced an animated short, PORK, under Screen Ireland’s prestigious Frameworks scheme. During this time, Claire was also the Senior Production Coordinator on Nora Twomey's recent release, My Father's Dragon, at Cartoon Saloon. Claire is currently the Development Production Supervisor at DNEG Animation, as well as overseeing the set up of production structures for new incoming shows for the studio. Claire helped in the development of Nell's short film, Try & Touch. Arts Council funded short film Baths was received to positive reviews due to its unconventional anthology writing development structure. Claire is dedicated to bringing female & non-binary voices & POV to the screen on an international scale.",
      ],
      credits: [
        {
          title: "Falling For Alex Whelan",
          year: "(2023)",
          heading: " | Half Hour TV Drama | Producer",
          affiliates: "RTÉ and Screen Ireland",
        },
        {
          title: "What Feminism Is",
          year: "(2023)",
          heading: " | Short Drama | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Baths",
          year: "(2022)",
          heading: " | Experimental Anthology | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "PORK",
          year: "(2020)",
          heading: " | Short Animation | Producer",
          affiliates: "Screen Ireland",
        },
      ],
    },
  },
  {
    creative: {
      id: "2",
      name: "Nell Hensey",
      role: "Co-Founder | Creative Director",
      profile_image: "nell",
      reelURL: "gu",
      bio: [
        "Nell Hensey is a Filipino-Irish director and screenwriter from County Clare.",
        " After studying at the National Film School IADT, Nell worked as a production assistant, writers room assistant and showrunner's assistant on TV series for Netflix, BBC and RTÉ. Her short films Try & Touch and Baths both premiered at the Galway Film Fleadh 2022. Nell's latest short film Good Chips premiered at the Dublin International Film Festival 2023 and was broadcast on Virgin Media One. Nell was nominated for the Dublin International Film Festival's prestigious Discovers Award 2023. She is especially drawn to stories that centre on women, explore themes of coming-of-age or give honest representation of minorities.",
      ],
      credits: [
        {
          title: "Falling For Alex Whelan",
          year: "(2023)",
          heading: " | Half Hour TV Drama | Writer & Director",
          affiliates: "RTÉ and Screen Ireland",
        },
        {
          title: "Good Chips",
          year: "(2023)",
          heading: " | Short Drama | Co-Writer & Director",
          affiliates: "Virgin Media Television and Screen Ireland",
        },
        {
          title: "Baths",
          year: "(2022)",
          heading: " | Experimental Anthology | Co-Writer & Director",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Try & Touch",
          year: "(2021)",
          heading: " | Short Drama | Writer & Director",
          affiliates: "Engine Short Film Scheme",
        },
      ],
      accolades: [
        {
          title: "Winner",
          heading: " | Breakthrough Talent Award",
          affiliates: "Catalyst International Film Festival 2023",
        },
        {
          title: "Winner",
          heading: " | Best Director",
          affiliates: "First Cut Youth Film Festival 2023",
        },
        {
          title: "Nominee",
          heading: " | Discovery Award",
          affiliates: "Dublin International Film Festival 2023",
        },
      ],
    },
  },
  // {
  //   creative: {
  //     id: "3",
  //     name: "Emma Smith",
  //     role: "Director",
  //     profile_image: Emma,
  //     bio: [
  //       "Emma graduated from IADT Film and TV Production BA majoring in Direction. Her short film, Starry Night won Indie Cork's Best Short film award and was shortlisted for the Young Director Award at Cannes. She won a rising star award at Irish Screen America.",
  //       "She directed Buymie's 'We Shop Like You do' TV Commercial early last year and has made a number of music videos for artists like Lucy McWilliams, Junior Brother and Nixer. She is excited to create honest depictions of lost or directionless female characters going through the struggles of modern day life.",
  //     ],
  //     credits: [
  //       {
  //         title: "What Feminism Is",
  //         year: "(2023)",
  //         heading: " | Short Drama | Director",
  //         affiliates: "Arts Council of Ireland",
  //       },
  //       {
  //         title: "Pleasure",
  //         year: "(2022)",
  //         heading: " | Music Video | Director",
  //         affiliates: "NIXER",
  //       },
  //       {
  //         title: "Bumblebee & Blue Skies",
  //         year: "(2022)",
  //         heading: " | Music Video | Director",
  //         affiliates: "Lucy McWilliams",
  //       },
  //       {
  //         title: "We Shop Like You Do",
  //         year: "(2022)",
  //         heading: " TV Commercial | Director",
  //         affiliates: "Buymie",
  //       },
  //       {
  //         title: "No Country For Young Men",
  //         year: "(2021)",
  //         heading: " | Music Video | Director",
  //         affiliates: "Junior Brother",
  //       },
  //       {
  //         title: "Starry Night",
  //         year: "(2020)",
  //         heading: " | Short Film | Director",
  //       },
  //     ],
  //     accolades: [
  //       {
  //         title: "Shortlist",
  //         heading: " | Young Directors Award",
  //         affiliates: "Cannes Lions International Festival for Creativity 2020",
  //       },
  //       {
  //         title: "Winner",
  //         heading: " | Best Short Film",
  //         affiliates: "Indie Cork Film Festival 2020",
  //       },
  //       {
  //         title: "Winner",
  //         heading: " | Rising Star Award",
  //         affiliates: "Irish Screen America 2020",
  //       },
  //       {
  //         title: "Winner",
  //         heading: " | Best Student Film",
  //         affiliates: "Emerging Directors Awards 2020",
  //       },
  //     ],
  //   },
  // },
  {
    creative: {
      id: "4",
      name: "Brigid Leahy",
      role: "Co-Founder | Creative Producer",
      profile_image: "claire",
      bio: [
        "Claire is a creative producer from County Meath with a Masters in Creative Production and Screen Finance from the National Film School IADT.",
        "While studying at IADT, Claire produced an animated short, PORK, under Screen Ireland’s prestigious Frameworks scheme. During this time, Claire was also the Senior Production Coordinator on Nora Twomey's recent release, My Father's Dragon, at Cartoon Saloon. Claire is currently the Development Production Supervisor at DNEG Animation, as well as overseeing the set up of production structures for new incoming shows for the studio. Claire helped in the development of Nell's short film, Try & Touch. Arts Council funded short film Baths was received to positive reviews due to its unconventional anthology writing development structure. Claire is dedicated to bringing female & non-binary voices & POV to the screen on an international scale.",
      ],
      credits: [
        {
          title: "Falling For Alex Whelan",
          year: "(2023)",
          heading: " | Half Hour TV Drama | Producer",
          affiliates: "RTÉ and Screen Ireland",
        },
        {
          title: "What Feminism Is",
          year: "(2023)",
          heading: " | Short Drama | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Baths",
          year: "(2022)",
          heading: " | Experimental Anthology | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "PORK",
          year: "(2020)",
          heading: " | Short Animation | Producer",
          affiliates: "Screen Ireland",
        },
      ],
    },
  },
  {
    creative: {
      id: "5",
      name: "Lily Sweeney",
      role: "Director",
      profile_image: "emma",
      bio: [
        "Emma graduated from IADT Film and TV Production BA majoring in Direction. Her short film, Starry Night won Indie Cork's Best Short film award and was shortlisted for the Young Director Award at Cannes. She won a rising star award at Irish Screen America.",
        "She directed Buymie's 'We Shop Like You do' TV Commercial early last year and has made a number of music videos for artists like Lucy McWilliams, Junior Brother and Nixer. She is excited to create honest depictions of lost or directionless female characters going through the struggles of modern day life.",
      ],
      credits: [
        {
          title: "What Feminism Is",
          year: "(2023)",
          heading: " | Short Drama | Director",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Pleasure",
          year: "(2022)",
          heading: " | Music Video | Director",
          affiliates: "NIXER",
        },
        {
          title: "Bumblebee & Blue Skies",
          year: "(2022)",
          heading: " | Music Video | Director",
          affiliates: "Lucy McWilliams",
        },
        {
          title: "We Shop Like You Do",
          year: "(2022)",
          heading: " TV Commercial | Director",
          affiliates: "Buymie",
        },
        {
          title: "No Country For Young Men",
          year: "(2021)",
          heading: " | Music Video | Director",
          affiliates: "Junior Brother",
        },
        {
          title: "Starry Night",
          year: "(2020)",
          heading: " | Short Film | Director",
        },
      ],
      accolades: [
        {
          title: "Shortlist",
          heading: " | Young Directors Award",
          affiliates: "Cannes Lions International Festival for Creativity 2020",
        },
        {
          title: "Winner",
          heading: " | Best Short Film",
          affiliates: "Indie Cork Film Festival 2020",
        },
        {
          title: "Winner",
          heading: " | Rising Star Award",
          affiliates: "Irish Screen America 2020",
        },
        {
          title: "Winner",
          heading: " | Best Student Film",
          affiliates: "Emerging Directors Awards 2020",
        },
      ],
    },
  },
];
