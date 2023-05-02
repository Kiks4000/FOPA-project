type MenuItem = {
  label: string;
  url: string;
  submenu: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    url: "/",
    submenu: [],
  },
  {
    label: "Inscription",
    url: "/inscription",
    submenu: [],
  },
  {
    label: "Contact",
    url: "/contact",
    submenu: [],
  },
  {
    label: "Compétences Numériques",
    url: "/competences-numeriques",
    submenu: [],
  },
  {
    label: "Classes",
    url: "#",
    submenu: [
      {
        label: "1ère année",
        url: "/premiere",
        submenu: [
          {
            label: "1ère français",
            url: "/premiere/francais",
            submenu: [],
          },
          {
            label: "1ère maths",
            url: "/premiere/maths",
            submenu: [],
          },
          {
            label: "1ère sciences",
            url: "/premiere/sciences",
            submenu: [],
          },
          {
            label: "1ère histoire",
            url: "/premiere/histoire",
            submenu: [],
          },
          {
            label: "1ère langues",
            url: "/premiere/langues",
            submenu: [],
          },
        ],
      },
      {
        label: "2ème année",
        url: "/deuxieme",
        submenu: [
          {
            label: "2ème français",
            url: "/deuxieme/francais",
            submenu: [],
          },
          {
            label: "2ème maths",
            url: "/deuxieme/maths",
            submenu: [],
          },
          {
            label: "2ème sciences",
            url: "/deuxieme/sciences",
            submenu: [],
          },
          {
            label: "2ème histoire",
            url: "/deuxieme/histoire",
            submenu: [],
          },
          {
            label: "2ème langues",
            url: "/deuxieme/langues",
            submenu: [],
          },
        ],
      },
      {
        label: "3ème année",
        url: "/troisieme",
        submenu: [
          {
            label: "3ème français",
            url: "/troisieme/francais",
            submenu: [],
          },
          {
            label: "3ème maths",
            url: "/troisieme/maths",
            submenu: [],
          },
          {
            label: "3ème sciences",
            url: "/troisieme/sciences",
            submenu: [],
          },
          {
            label: "3ème histoire",
            url: "/troisieme/histoire",
            submenu: [],
          },
          {
            label: "3ème langues",
            url: "/troisieme/langues",
            submenu: [],
          },
        ],
      },
      {
        label: "4ème année",
        url: "/quatrieme",
        submenu: [
          {
            label: "4ème français",
            url: "/quatrieme/francais",
            submenu: [],
          },
          {
            label: "4ème maths",
            url: "/quatrieme/maths",
            submenu: [],
          },
          {
            label: "4ème sciences",
            url: "/quatrieme/sciences",
            submenu: [],
          },
          {
            label: "4ème histoire",
            url: "/quatrieme/histoire",
            submenu: [],
          },
          {
            label: "4ème langues",
            url: "/quatrieme/langues",
            submenu: [],
          },
        ],
      },
    ],
  },
];
