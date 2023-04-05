const Claire = require("../../Assets/claire.png");
const Nell = require("../../Assets/nell.png");
const Emma = require("../../Assets/emma.png");
const NellCredit = require("../../Assets/nell-credits.png");
const EmmaCredit = require("../../Assets/emma-credits.png");
const ClaireCredit = require("../../Assets/claire-credits.png");

export interface CreditsInterface {
  title: string;
  heading: string;
  affiliates?: string;
}

export interface TeamMemberInterface {
  TeamMember: {
    id: string;
    name: string;
    role: string;
    profile_image_src: string;
    bio: string[];
    credit_image_src: string;
    credits: CreditsInterface[];
  };
}

export const TeamData = [
  {
    teamMember: {
      id: "1",
      name: "Claire Mooney",
      role: "Co-Founder | Lead / Creative Producer",
      profile_image_src: Claire,
      bio: [
        "Claire is a creative producer from County Meath with a Masters in Creative Production and Screen Finance from the National Film School IADT.",
        "While studying at IADT, Claire produced an animated short, PORK, under Screen Ireland’s prestigious Frameworks scheme. During this time, Claire was also the Senior Production Coordinator on Nora Twomey's recent release, My Father's Dragon, at Cartoon Saloon. Claire is currently the Development Production Supervisor at DNEG Animation, as well as overseeing the set up of production structures for new incoming shows for the studio. Claire helped in the development of Nell's short film, Try & Touch. Arts Council funded short film Baths was received to positive reviews due to its unconventional anthology writing development structure. Claire is dedicated to bringing female & non-binary voices & POV to the screen on an international scale.",
      ],
      credit_image_src: ClaireCredit,
      credits: [
        {
          title: "Falling For Alex Whelan (2023)",
          heading: " | Half Hour TV Drama | Producer",
          affiliates: "RTÉ and Screen Ireland",
        },
        {
          title: "What Feminism Is (2023)",
          heading: " | Short Drama | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Baths (2022)",
          heading: " | Experimental Anthology | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "PORK (2020)",
          heading: " | Short Animation | Producer",
          affiliates: "Screen Ireland",
        },
      ],
    },
  },
  {
    teamMember: {
      id: "2",
      name: "Nell Hensey",
      role: "Co-Founder | Lead Director | Writer",
      profile_image_src: Nell,
      bio: [
        "Nell Hensey is a Filipino-Irish director and screenwriter from County Clare.",
        "After studying at the National Film School IADT, Nell worked as a production assistant, writers room assistant and showrunner's assistant on TV series for Netflix, BBC and RTÉ. Her short films Try & Touch and Baths both premiered at the Galway Film Fleadh 2022. Nell's latest short film Good Chips premiered at the Dublin International Film Festival 2023 and was broadcast on Virgin Media One. Nell was nominated for the Dublin International Film Festival's prestigious Discovers Award 2023. She is especially drawn to stories that centre on women, explore themes of coming-of-age or give honest representation of minorities.",
        "Nell is currently developing her first feature film Displacement and is represented by Emily Hickman at The Agency in London.",
      ],
      credit_image_src: NellCredit,
      credits: [
        {
          title: "Falling For Alex Whelan (2023)",
          heading: " | Half Hour TV Drama | Writer & Director",
          affiliates: "RTÉ and Screen Ireland",
        },
        {
          title: "Good Chips (2023)",
          heading: " | Short Drama | Co-Writer & Director",
          affiliates: "Virgin Media Television and Screen Ireland",
        },
        {
          title: "Baths (2022)",
          heading: " | Experimental Anthology | Co-Writer & Director",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Try & Touch (2021)",
          heading: "| Short Drama | Writer & Director",
          affiliates: "Engine Short Film Scheme",
        },
      ],
    },
  },
  {
    teamMember: {
      id: "3",
      name: "Emma Smith",
      role: "Director | Writer",
      profile_image_src: Emma,
      bio: [
        "Emma graduated from IADT Film and TV Production BA majoring in Direction. Her short film, Starry Night won Indie Cork's Best Short film award and was shortlisted for the Young Director Award at Cannes. She won a rising star award at Irish Screen America.",
        "She directed Buymie's 'We Shop Like You do' TV Commercial early last year and has made a number of music videos for artists like Lucy McWilliams, Junior Brother and Nixer. She is excited to create honest depictions of lost or directionless female characters going through the struggles of modern day life.",
      ],
      credit_image_src: EmmaCredit,
      credits: [
        {
          title: "What Feminism Is (2023)",
          heading: " | Short Drama | Director",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Pleasure (2022)",
          heading: " | Music Video | Director",
          affiliates: "NIXER",
        },
        {
          title: "Bumblebee & Blue Skies (2022)",
          heading: " | Music Video | Director",
          affiliates: "Lucy McWilliams",
        },
        {
          title: "We Shop Like You Do (2022)",
          heading: " TV Commercial | Director",
          affiliates: "Buymie",
        },
        {
          title: "No Country For Young Men (2021)",
          heading: " | Music Video | Director",
          affiliates: "Junior Brother",
        },
        {
          title: "Starry Night (2020)",
          heading: " | Short Film | Director",
        },
      ],
    },
  },
];
