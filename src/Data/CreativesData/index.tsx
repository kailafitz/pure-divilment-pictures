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
        "Claire graduated from DCU in Digital Communication and Multimedia, before achieving a first class Masters in Creative Production and Screen Finance from the National Film School.",
        "Claire worked as Senior Production Coordinator for Nora Twomey's acclaimed film, 'My Father's Dragon', at the academy award nominated production company Cartoon Saloon. She has also worked as Development Production Supervisor for several film and television projects at DNEG, one of the world’s leading animation and VFX studios.",
        "Under Screen Ireland’s Frameworks scheme, Claire produced the acclaimed animated short film Pork. She also produced the anthology film Baths, directed by Nell Hensey and supported by the Arts Council of Ireland. Most recently, Claire produced the live-action television film Falling For The Life Of Alex Whelan for RTÉ and Screen Ireland.",
        "Claire is committed to bringing fresh and exciting perspectives to the international landscape of television and film. With a track record of successful projects and a passion for championing new voices, Claire has become solidified as a producer to watch.",
      ],
      credits: [
        {
          title: "What Feminism Is",
          year: "(2023)",
          heading: " | Short Film | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Falling for the Life of Alex Whelan",
          year: "(2023)",
          heading: " | TV Drama Special | Producer",
          affiliates: "RTÉ and Screen Ireland",
        },
        {
          title: "Baths",
          year: "(2022)",
          heading: " | Anthology Film | Producer",
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
          title: "Falling for the Life of Alex Whelan",
          year: "(2023)",
          heading: " | TV Drama Special | Writer & Director",
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
          heading: " | Anthology Film | Co-Writer & Director",
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
        "Brigid is excited by diverse, niche stories that bring fresh new perspectives to the screen. She looks forward to developing more stories as well as discovering exciting acting and creative talent.",
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
        "Lily Sweeney is a graduate of Irish music and dance from the University of Limerick. Lily entered the world of film through her knowledge of Irish music and culture when asked to work on feature film “Sprachlos in Irland” (2020) for Ard 1 in her home county, Clare.",
        "Throughout her 3 years working in production, Lily has worked on a number of feature films, shorts, and TV series including Smother (Treasure Entertainment/BBC Studios), Fate the Winx Saga (Archery Pictures/Netflix) and As Luck Would Have It (Hallmark Channel). Lily has gained wide experience working on a variety of roles on high end productions for the likes of Universal Pictures, Netflix and Apple TV, allowing her to meet producers and directors from all over the world.",
        "Lily has worked with Pure Divilment on both Baths and Falling For The Life Of Alex Whelan, as associate producer and line producer. She is currently based between Ireland and Vancouver, Canada.",
        "Aspiring to further her career as a producer, Lily’s work is underpinned by her Irish heritage and love of storytelling, culture and the power of music in visual narratives. She also has a passion for automobiles and is always on the hunt for a script with a good car chase! ",
      ],
      credits: [],
      accolades: [],
    },
  },
];
