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
        "Hailing from the picturesque County Meath, Claire Mooney is a creative force in the world of film production.",
        "Armed with a Masters in Creative Production and Screen Finance from the esteemed National Film School IADT, Claire's journey through the realm of cinema has been nothing short of exciting.",
        "During her time at IADT, Claire distinguished herself as a producer of exceptional talent. One of her standout achievements was the production of the animated short film 'PORK', which earned recognition under Screen Ireland's prestigious Frameworks scheme. This early success showcased Claire's innate ability to bring imaginative stories to life through the magic of animation.",
        "Simultaneously, Claire assumed the role of Senior Production Coordinator for Nora Twomey's acclaimed release, 'My Father's Dragon', at the renowned Cartoon Saloon. Her contribution to this project further solidified her reputation as a producer of exceptional caliber.",
        "Since then, Claire held the pivotal position of Development Production Supervisor at DNEG Animation, where she not only oversaw ongoing production efforts but also played a vital role in establishing production structures for new and exciting projects at the studio. Her dedication to fostering a creative and efficient production environment is a testament to her commitment to cinematic excellence. Claire's passion for nurturing emerging talent is evident in her work. She played an instrumental role in the development of Nell Hensey's short film, 'Try & Touch', showcasing her support for emerging voices in the industry.",
        "One of Claire's most notable achievements is the Arts Council-funded short film, 'Baths', This film garnered positive reviews, thanks to its unconventional anthology-style writing development structure, which reflects Claire's innovative approach to storytelling.",
        "Moreover, Claire is on a mission to bring underrepresented voices to the forefront of the international cinematic landscape. Her commitment to amplifying female and non-binary perspectives on screen reflects her dedication to inclusivity and diversity in filmmaking.",
        "Claire Mooney's journey in film production is a testament to her unwavering dedication, creative prowess, and commitment to fostering an inclusive and vibrant cinematic world. With a track record of successful projects and a passion for championing diverse voices, Claire continues to make an indelible mark on the industry and is poised for even greater achievements in the years to come.",
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
      reel_url: "/creatives/nell/show-reel.mp4",
      bio: [
        "Nell Hensey is a Filipino-Irish writer-director from the west of Ireland.",
        "After studying English Literature and Film Studies in UCD, Nell went on to complete a Masters in Creative Production and Screen Finance at the National Film School IADT. She has worked as a writers room assistant, showrunners assistant and television writer on shows for Netflix and Sky. She has directed work for Screen Ireland, RTÉ, Virgin Media Television, The Arts Council of Ireland, and more. Her latest short film, Good Chips, premiered at the 2023 Dublin International Film Festival and was piece in Irish cinema history to depict a majority Asian cast.",
        "As a filmmaker, Nell holds a keen interest in female-centric narratives, coming-of-age themes, and stories that explore outsider identities. In 2023, Nell was one of ten international directors selected for the Toronto International Film Festival's prestigious Filmmaker Lab. It is through this programme that she is developing her highly anticipated debut feature film, Displacement.",
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
        "Claire is a creative producer from County Meath with a Masters in Creative Production and Screen Finance from the National Film School IADT.",
        "While studying at IADT, Claire produced an animated short, PORK, under Screen Ireland’s prestigious Frameworks scheme. During this time, Claire was also the Senior Production Coordinator on Nora Twomey's recent release, My Father's Dragon, at Cartoon Saloon. Claire is currently the Development Production Supervisor at DNEG Animation, as well as overseeing the set up of production structures for new incoming shows for the studio. Claire helped in the development of Nell's short film, Try & Touch. Arts Council funded short film Baths was received to positive reviews due to its unconventional anthology writing development structure. Claire is dedicated to bringing female & non-binary voices & POV to the screen on an international scale.",
      ],
      credits: [
        {
          title: "Good Chips",
          year: "(2023)",
          heading: " | Short Drama | Co-Writer & Director",
          affiliates: "Virgin Media Television and Screen Ireland",
        },
      ],
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
      credits: [
        {
          title: "Falling For Alex Whelan",
          year: "(2023)",
          heading: " | Half Hour TV Drama | Writer & Director",
          affiliates: "RTÉ and Screen Ireland",
        },
      ],
    },
  },
];
