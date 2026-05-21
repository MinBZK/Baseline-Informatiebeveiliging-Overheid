import { loadRespecWithConfiguration } from "./organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "cp",
  specType: "st",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2023-06-21",
  publishVersion: "0.0.3",

  // TODO: Verwijder voordat de release plaats vindt
  latestVersion: "https://github.com/logius-standaarden/respec-template/",
  prevVersion: [],

  editors:
    [
      {
        name: "Naam van persoon hier",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Naam van persoon hier",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",
});
