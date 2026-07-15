import { loadRespecWithConfiguration } from "./organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "wv",
  specType: "nk",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2023-06-21",
  publishVersion: "0.0.3",

  prevVersion: [],

  editors:
    [
      {
        name: "Beheer BIO",
        company: "CIP",
        companyURL: "https://www.cip-overheid.nl",
      }
    ],
  authors:
    [
      {
        name: "Werkgroep BIO",
        company: "Rijksoverheid, VNG, IPO, UvW, Forum Standaardisatie, NCSC",
        companyURL: "https://www.bio-overheid.nl",
      }
    ],
  github: "https://github.com/MinBZK/Baseline-Informatiebeveiliging-Overheid",
});
