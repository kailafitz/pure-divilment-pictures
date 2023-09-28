import { ReactNode } from "react";

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
    bio: ReactNode[];
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
        <>
          Claire Mooney is an Irish creative producer. She is the co-founder and
          leads the business end of{" "}
          <span>
            <i>P</i>
          </span>
          ure{" "}
          <span>
            <i>D</i>
          </span>
          ivilment Pictures. She has experience across a wide variety of mediums
          from feature films to television content to animation and VFX.
        </>,
        <>
          Claire graduated from DCU in Digital Communication and Multimedia,
          before achieving a first class Masters in Creative Production and
          Screen Finance from the National Film School IADT.
        </>,
        <>
          Claire worked as Senior Production Coordinator for Nora Twomey's
          acclaimed film, <i>My Father's Dragon</i>, at the Academy Award
          nominated production company Cartoon Saloon. She has also worked as
          Development Production Supervisor for several film and television
          projects at DNEG, one of the world’s leading animation and VFX
          studios.
        </>,
        <>
          Under Screen Ireland’s Frameworks scheme, Claire produced the
          acclaimed animated short film <i>PORK</i>. She also produced the
          anthology film <i>Baths</i>, directed by Nell Hensey and supported by
          the Arts Council of Ireland. Most recently, Claire produced the
          live-action television film <i>Falling For The Life Of Alex Whelan</i>{" "}
          for RTÉ and Screen Ireland.
        </>,
        <>
          Claire is committed to bringing fresh and exciting perspectives to the
          international landscape of television and film. With a track record of
          successful projects and a passion for championing new voices, Claire
          has become solidified as a producer to watch.
        </>,
      ],
      credits: [
        {
          title: "What Feminism Is",
          year: "(2024)",
          heading: " | Short Film | Producer",
          affiliates: "Arts Council of Ireland",
        },
        {
          title: "Falling For The Life Of Alex Whelan",
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
        <>
          Nell Hensey is an Irish-Filipino director and screenwriter from the
          west of Ireland. She is particularly interested in female-centric
          narratives, coming-of-age themes, and stories that explore outsider
          identities.
        </>,
        <>
          After studying English Literature and Film Studies in UCD, Nell went
          on to complete a Masters in Creative Production and Screen Finance at
          the National Film School IADT. Nell has worked as a writers room
          assistant, showrunners assistant and writer on television shows for
          Netflix and Sky.
        </>,
        <>
          As a director, Nell’s work has been supported by Screen Ireland, RTÉ,
          Virgin Media Television, The Arts Council of Ireland, and more. Her
          latest short film, <i>Good Chips</i>, premiered at the 2023 Dublin
          International Film Festival. In 2023, Nell was one of ten
          international directors selected for the Toronto International Film
          Festival's prestigious Filmmaker Lab. It is through this programme
          that she is developing her highly anticipated debut feature film,{" "}
          <i>Displacement</i>.
        </>,
      ],
      credits: [
        {
          title: "Falling For The Life Of Alex Whelan",
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
        <>
          Brigid Leahy is a Vietnamese-Irish-American actor, writer and
          producer. She holds a B.A. in History from University of California,
          Los Angeles, where she was the recipient of the Mary Ritter Beard
          Writing Award.  She also holds an M.Phil in Public History and
          Cultural Heritage from Trinity College Dublin.
        </>,
        <>
          An actor herself, Brigid’s television & film credits include{" "}
          <i>Silver</i> (Amazon Studios), <i>Disenchanted</i> (Disney),{" "}
          <i>As Luck Would Have It</i> (Hallmark Channel), <i>Smother</i>{" "}
          (Treasure Entertainment/BBC Studios), <i>Avenue 5</i> (HBO),{" "}
          <i>Familiar</i> (Fremantle), and <i>Can’t Cope Won’t Cope</i> (Deadpan
          Pictures). She is also the voice of 'Seigiri' in Nintendo’s{" "}
          <i>Xenoblade Chronicles 3</i>. 
        </>,
        <>
          As a writer, Brigid was the recipient of the 2022 Virgin Media
          Discovers Award. She co-wrote and co-produced the award winning short
          film <i>Good Chips</i> - the first piece of mainstream Irish cinema to
          depict a majority Asian cast. Brigid is an alumni of Dublin Fringe
          Festival’s Weft Studio, an artist collective and creative initiative
          for artists of colour.
        </>,
        <>
          Brigid is excited by diverse, niche stories that bring fresh
          perspectives to the screen. She looks forward to developing more
          stories as well as discovering exciting acting and creative talent.
        </>,
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
        <>
          Lily Sweeney works with{" "}
          <span>
            <i>P</i>
          </span>
          ure{" "}
          <span>
            <i>D</i>
          </span>
          ivilment as both a line producer and associate producer. She is based
          between Ireland and Vancouver, Canada.
        </>,
        <>
          Lily is graduate of Irish music and dance from the University of
          Limerick. She first entered the world of film through her knowledge of
          Irish music and culture when asked to work on German Irish
          co-production <i>Sprachlos in Irland</i> (2020) in her home county,
          Clare.
        </>,
        <>
          Throughout her three years working in production, Lily has worked on a
          number of feature films, shorts, and TV series including{" "}
          <i>Smother</i> (Treasure Entertainment/BBC Studios),{" "}
          <i>Fate the Winx Saga</i> (Archery Pictures/Netflix) and{" "}
          <i>As Luck Would Have It</i> (Hallmark Channel). Lily has gained wide
          experience working on a variety of roles on high end productions for
          the likes of Universal, Netflix and Apple TV, allowing her to meet
          producers and directors from all over the world.
        </>,
        <>
          Aspiring to further her career as a producer, Lily’s work is
          underpinned by her Irish heritage and love of storytelling, culture
          and the power of music in visual narratives. Lily also hopes to
          dismantle traditional gender stereotypes and create space for
          authentic female characters. She has a particular affinity for
          automobiles on screen, a lifelong affair rooted in her from childhood.
          Lily understands that cars, beyond their mechanical functions,
          symbolise freedom, adventure, and empowerment in storytelling. Lily
          hopes to amalgamate these two passions allowing women to take the
          wheel both literally and metaphorically.
        </>,
      ],
      credits: [],
      accolades: [],
    },
  },
];
