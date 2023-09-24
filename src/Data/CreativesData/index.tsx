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
    reel_url?: string;
    bio: string[];
    credits: ListItemInterface[];
    accolades: ListItemInterface[];
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
        "Claire Mooney is an Irish creative producer. She is the co-founder and leads the business end of Pure Divilment Pictures. She has experience across a wide variety of mediums from feature films to television content to animation and VFX.",
        "Claire graduated from DCU with a bachelor’s in Digital Communication and Multimedia, before achieving a first class Masters in Creative Production and Screen Finance from the National Film School.",
        "Claire worked as Senior Production Coordinator for Nora Twomey's acclaimed film, 'My Father's Dragon', at the academy award nominated production company Cartoon Saloon. She has also worked as Development Production Supervisor for several film and television projects at DNEG, one of the world’s leading animation and VFX studios.",
        "Under Screen Ireland’s Frameworks scheme, Claire produced the acclaimed animated short film Pork. She also produced the anthology film Baths, directed by Nell Hensey and supported by the Arts Council of Ireland. Most recently, Claire produced the live-action television film Falling For The Life Of Alex Whelan for RTÉ and Screen Ireland.",
        "Claire is committed to bringing fresh and exciting perspectives to the international landscape of television and film. With a track record of successful projects and a passion for championing new voices, Claire has become solidified as a producer to watch.",
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
      accolades: [],
    },
  },
  {
    creative: {
      id: "2",
      name: "Nell Hensey",
      role: "Co-Founder | Creative Director",
      profile_image: "nell",
      reel_url: "/creatives/nell/show-reel.mp4",
      bio: [
        "Nell Hensey is an Irish-Filipino director and screenwriter from the west of Ireland. She is particularly interested in female-centric narratives, coming-of-age themes, and stories that explore outsider identities.",
        "After studying English Literature and Film Studies in UCD, Nell went on to complete a Masters in Creative Production and Screen Finance at the National Film School IADT. Nell has worked as a writers room assistant, showrunners assistant and writer on television shows for Netflix and Sky.",
        "As a director, Nell’s work has been supported by Screen Ireland, RTÉ, Virgin Media Television, The Arts Council of Ireland, and more. Her latest short film, Good Chips, premiered at the 2023 Dublin International Film Festival. In 2023, Nell was one of ten international directors selected for the Toronto International Film Festival's prestigious Filmmaker Lab. It is through this programme that she is developing her highly anticipated debut feature film, Displacement.",
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
  {
    creative: {
      id: "3",
      name: "Brigid Leahy",
      role: "Talent & Development Executive",
      profile_image: "brigid",
      bio: [
        "Brigid Leahy is a Vietnamese-Irish-American actor, writer and producer. She holds a B.A. in History from University of California, Los Angeles, where she was the recipient of the Mary Ritter Beard Writing Award.  She also holds an M.Phil in Public History and Cultural Heritage from Trinity College Dublin.",
        "An actor herself, Brigid’s television & film credits include Silver (Amazon Studios), Disney’s Disenchanted, As Luck Would Have It (Hallmark Channel), Smother (Treasure Entertainment/BBC Studios), Avenue 5 (HBO), Familiar (Fremantle), and Can’t Cope Won’t Cope (Deadpan Pictures). She is also the voice of ‘Seigiri’ in Nintendo’s Xenoblade Chronicles 3. ",
        "As a writer, Brigid was the recipient of the 2022 Virgin Media Discovers Award. So co-wrote and co-produced the award winning short film Good Chips - the first piece of mainstream Irish cinema to depict a majority Asian cast. Brigid is an alumni of Dublin Fringe Festival’s Weft Studio, an artist collective and creative initiative for artists of colour.",
        "Brigid is excited by diverse, niche stories that bring fresh new perspectives to the screen. She looks forward to working in script development and discovering exciting acting and creative talent.",
      ],
      credits: [],
      accolades: [],
    },
  },
  {
    creative: {
      id: "4",
      name: "Lily Sweeney",
      role: "Associate Producer",
      profile_image: "lily",
      bio: [
        "Emma graduated from IADT Film and TV Production BA majoring in Direction. Her short film, Starry Night won Indie Cork's Best Short film award and was shortlisted for the Young Director Award at Cannes. She won a rising star award at Irish Screen America.",
        "She directed Buymie's 'We Shop Like You do' TV Commercial early last year and has made a number of music videos for artists like Lucy McWilliams, Junior Brother and Nixer. She is excited to create honest depictions of lost or directionless female characters going through the struggles of modern day life.",
      ],
      credits: [],
      accolades: [],
    },
  },
];
