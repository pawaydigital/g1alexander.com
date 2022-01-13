import { mdiLinkedin, mdiGithub, mdiInstagram, mdiTwitter } from "@mdi/js";

export function getSocialMedia() {
  return [
    {
      id: 1,
      link: "https://linkedin.com/in/g1alexander/",
      icon: mdiLinkedin,
      color: 800,
      name: "LinkedIn",
    },
    {
      id: 2,
      link: "https://github.com/g1alexander",
      icon: mdiGithub,
      color: 800,
      name: "Github",
    },
    {
      id: 3,
      link: "https://twitter.com/g1alexander_",
      icon: mdiTwitter,
      color: 600,
      name: "Twitter",
    },
    {
      id: 4,
      link: "https://instagram.com/g1alexander/",
      icon: mdiInstagram,
      color: 600,
      name: "Instagram",
    },
  ];
}
