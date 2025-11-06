import blogImage from "@assets/blog-test-image.png";

export interface Article {
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
    quote: string;
    conclusion: string;
  };
}

export const articlesData: Record<string, Article> = {
  "transformare-restaurant-business-succes": {
    slug: "transformare-restaurant-business-succes",
    title: "Cum să îți transformi restaurantul într-un business de succes în 2025",
    date: "20 August 2024",
    author: {
      name: "Maria Popescu",
      avatar: "/figmaAssets/image-2.png",
    },
    image: blogImage,
    excerpt: "Descoperă cele mai eficiente strategii și tehnici moderne pentru a-ți dezvolta afacerea din industria HoReCa. De la digitalizare până la optimizarea experienței clienților, află cum să rămâi competitiv pe piața actuală.",
    content: {
      intro: "Industria HoReCa din România este în continuă transformare, iar 2025 aduce noi provocări și oportunități pentru proprietarii de restaurante. Pentru a rămâne competitiv pe piață, este esențial să adopți o abordare modernă și să îmbrățișezi tehnologia.\n\nÎn acest articol, vom explora cele mai eficiente strategii care te vor ajuta să transformi restaurantul într-un business de succes sustenabil.",
      sections: [
        {
          title: "Digitalizarea proceselor operaționale",
          content: "Transformarea digitală nu mai este opțională - este esențială. Implementarea unui sistem modern de management poate reduce costurile operaționale cu până la 30% și poate îmbunătăți semnificativ experiența clienților.\n\nDe la comenzi online până la gestionarea stocurilor în timp real, tehnologia poate automatiza sarcinile repetitive și permite echipei tale să se concentreze pe ceea ce contează cu adevărat: oferirea unei experiențe excepționale clienților.",
        },
        {
          title: "Optimizarea experienței clienților",
          content: "În era digitală, clienții se așteaptă la o experiență fără fricțiuni, de la rezervare până la plată. Implementarea unui sistem de rezervări online și a unui meniu digital poate reduce timpul de așteptare și poate crește satisfacția clienților.\n\nPersonalizarea experienței prin utilizarea datelor clienților și oferirea de promoții țintite poate transforma clienții ocazionali în clienți fideli.",
        },
        {
          title: "Gestionarea eficientă a resurselor",
          content: "Controlul costurilor este crucial pentru profitabilitate. Monitorizarea în timp real a stocurilor și analiza datelor de vânzări pot ajuta la reducerea risipei alimentare și la optimizarea meniului.\n\nPrin identificarea preparatelor cu marjă mare de profit și eliminarea celor cu performanțe slabe, poți maximiza rentabilitatea fără a compromite calitatea.",
        },
      ],
      quote: "Succesul în industria HoReCa nu se măsoară doar în profit, ci și în zâmbetele clienților mulțumiți și în loialitatea pe care o construiești zi de zi.",
      conclusion: "Transformarea restaurantului într-un business de succes necesită o combinație de tehnologie modernă, procese eficiente și o atenție constantă la experiența clienților. Prin adoptarea strategiilor prezentate în acest articol, vei putea să construiești o afacere sustenabilă și profitabilă în 2025 și dincolo de el.",
    },
  },
  "termeni-horeca-2025": {
    slug: "termeni-horeca-2025",
    title: "Termeni esențiali pentru industria HoReCa în 2025",
    date: "15 August 2024",
    author: {
      name: "Alexandru Ionescu",
      avatar: "/figmaAssets/image-2.png",
    },
    image: blogImage,
    excerpt: "Ghidul complet al terminologiei moderne din industria ospitalității. De la concepte tehnologice până la tendințe culinare, descoperă termenii care definesc viitorul HoReCa.",
    content: {
      intro: "Industria HoReCa evoluează rapid, aducând cu sine noi concepte și terminologii. Pentru a rămâne la curent cu schimbările din sector, este esențial să înțelegi limbajul modern al ospitalității.\n\nAcest ghid te va ajuta să navighezi cu încredere prin jargonul industrial și să comunici eficient cu partenerii și clienții.",
      sections: [
        {
          title: "Termeni tehnologici",
          content: "Cloud POS - Sistem de vânzări bazat pe cloud care permite gestionarea afacerii de oriunde. Table Management - Sistemul de gestionare a meselor care optimizează ocuparea și reduce timpul de așteptare. Kitchen Display System - Ecrane digitale în bucătărie care înlocuiesc bonurile fizice.\n\nAcești termeni reprezintă viitorul tehnologic al industriei, permițând o eficiență operațională fără precedent.",
        },
        {
          title: "Concepte de marketing",
          content: "Guest Journey - Călătoria completă a clientului, de la descoperire până la fidelizare. Revenue Management - Strategii de optimizare a prețurilor pentru maximizarea veniturilor. Social Proof - Dovada socială prin recenzii și recomandări care influențează decizia clienților.\n\nÎnțelegerea acestor concepte este crucială pentru dezvoltarea unei strategii de marketing eficiente.",
        },
        {
          title: "Tendințe operaționale",
          content: "Ghost Kitchen - Bucătării dedicate exclusiv comenzilor online, fără spațiu pentru servire. Hybrid Service - Combinația între serviciul tradițional și self-service digital. Contactless Operations - Operațiuni fără contact, de la plată la meniu.\n\nAceste tendințe redefinesc modul în care restaurantele operează și servesc clienții.",
        },
      ],
      quote: "Cunoașterea terminologiei industriei nu este doar despre vocabular - este despre înțelegerea direcției în care se îndreaptă HoReCa.",
      conclusion: "Familiarizarea cu acești termeni esențiali te va ajuta să rămâi competitiv și să comunici eficient în industria HoReCa. Pe măsură ce sectorul continuă să evolueze, noi concepte vor apărea, așa că este important să rămâi la curent cu tendințele și inovațiile din domeniu.",
    },
  },
  "impact-tehnologie-afacere": {
    slug: "impact-tehnologie-afacere",
    title: "Impactul tehnologiei asupra afacerii: Cum tehnologia schimbă industria",
    date: "10 August 2024",
    author: {
      name: "Elena Dumitrescu",
      avatar: "/figmaAssets/image-2.png",
    },
    image: blogImage,
    excerpt: "Explorează transformarea digitală a industriei HoReCa și descoperă cum tehnologia modernă redefinește standardele de excelență în ospitalitate.",
    content: {
      intro: "Tehnologia a devenit un factor determinant în succesul afacerilor din industria HoReCa. De la automatizare până la inteligența artificială, inovațiile digitale transformă radical modul în care restaurantele și hotelurile își deservesc clienții.\n\nÎnțelegerea și adoptarea acestor tehnologii nu mai este opțională - este esențială pentru supraviețuirea pe termen lung.",
      sections: [
        {
          title: "Automatizarea proceselor",
          content: "Automatizarea elimină sarcinile repetitive și reduce erorile umane. De la comenzi automate la inventariere digitală, tehnologia permite echipei să se concentreze pe aspectele creative și relaționale ale serviciului.\n\nSistemele moderne pot gestiona automat reaprovizionarea, pot genera rapoarte financiare și pot optimiza programarea personalului, economisind timp prețios și resurse.",
        },
        {
          title: "Analiza datelor și business intelligence",
          content: "Colectarea și analiza datelor oferă insights valoroase despre comportamentul clienților, preferințele culinare și tendințele de consum. Acestea permit luarea unor decizii bazate pe evidențe, nu pe intuiție.\n\nDashboard-urile interactive și rapoartele în timp real transformă datele brute în informații acționabile care pot crește profitabilitatea și satisfacția clienților.",
        },
        {
          title: "Experiența digitală a clienților",
          content: "De la rezervări online până la plăți contactless, tehnologia a transformat complet experiența clienților. QR codes pentru meniuri, aplicații mobile pentru comenzi și sisteme de fidelizare digitale au devenit standard în industrie.\n\nPersonalizarea automată bazată pe preferințele clienților și istoricul comenzilor creează o experiență unică și memorabilă.",
        },
      ],
      quote: "Tehnologia nu înlocuiește ospitalitatea - o amplifică, permițându-ne să oferim experiențe mai bune, mai rapide și mai personalizate.",
      conclusion: "Impactul tehnologiei asupra industriei HoReCa este profund și ireversibil. Afacerile care adoptă inovațiile digitale vor prospera, în timp ce cele care rezistă schimbării vor rămâne în urmă. Investiția în tehnologie nu este doar despre eficiență - este despre crearea unei afaceri pregătite pentru viitor.",
    },
  },
};

export const getAllArticles = (): Article[] => {
  return Object.values(articlesData);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData[slug];
};
