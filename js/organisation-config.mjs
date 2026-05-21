const organisationConfig = {
  nl_organisationName: "MinBZK/CIP",
  nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
  nl_organisationPublishURL: "https://bio-overheid.nl",

  logos: [{
    src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
    alt: "logo rijksoverheid",
    id: "Logo",
    height: 77,
    width: 44,
    url: "https://www.bio-overheid.nl/",
  }],
  useLogo: true,

  fileName: "",
  latestVersion: ["nl_organisationPublishURL"],
  thisVersion: ["nl_organisationPublishURL","/", "publishVersion"],
  prevVersion: ["nl_organisationPublishURL","/", "previousPublishVersion"],

  addSectionLinks: true,

  localizationStrings: {
    en: {
      wv: "Draft",
      cv: "Consultation version",
      vv: "Proposed version",
      def: "Definitive version",
      basis: "Document",
      eo: "Outdated version",
      tg: "Rescinded version",
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Proposed recommendation",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice",
    },
    nl: {
      cp: "Concept",  
      wv: "Werkversie",
      cv: "Consultatieversie",
      vv: "Versie ter vaststelling",
      def: "Vastgestelde versie",
      basis: "Document",
      eo: "Verouderde versie",
      tg: "Teruggetrokken versie",
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice",
    },
  },

  sotdText: {
    nl: {
      sotd: "Status van dit document",
      def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      wv: `Dit is een werkversie waarin wijzigingen zijn opgenomen die goedgekeurd zijn door de Werkgroep BIO`,
      cp: "Dit is een werkversie waarin wijziging zijn opgenomen die goedgekeurd zijn door de Werkgroep BIO",
      cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar digikoppeling@logius.nl`,
      vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      basis: "Dit is een document zonder officiële status.",
    },
    en: {
      sotd: "Status of This Document",
      def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
      wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
      cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to api@logius.nl`,
      vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
      basis: "This document has no official standing.",
    },
  },

  labelColor: {
    def: "#154273",
    wv: "#39870c",
    cp: "#39870c",
    cv: "#000000",
    vv: "#000000",
  },
  useLabel: true,

  licenses: {
    cc0: {
      name: "Creative Commons 0 Public Domain Dedication",
      short: "CC0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-zero.svg",
    },
    "cc-by": {
      name: "Creative Commons Attribution 4.0 International Public License",
      short: "CC-BY",
      url: "https://creativecommons.org/licenses/by/4.0/legalcode",
      image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by.svg",
    },
    "cc-by-nd": {
      name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
      image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by-nd.svg",
    },
  },
  license: "cc-by",

  localBiblio: {
    "ADR": {
      authors: ["Jasper Roes", "Joost Farla"],
      href: "https://gitdocumentatie.logius.nl/publicatie/api/adr/",
      publisher: "Logius",
      title: "API Design Rules"
    },
    "ADR1": {
      authors: ["Jasper Roes", "Joost Farla"],
      href: "https://gitdocumentatie.logius.nl/publicatie/api/adr/1.0",
      publisher: "Logius",
      title: "API Design Rules"
    },
    "ADR-ext": {
      authors: ["Jasper Roes", "Linda van den Brink"],
      date: "Januari 2020",
      href: "https://docs.geostandaarden.nl/api/API-Strategie-ext",
      publisher: "Geonovum/Kennisplatform APi's",
      title: "API Designrules Extensions (Nederlandse API Strategie IIb)"
    },
    "Algemene Voorwaarden Logius": {
      date: "12 juni, 2018",
      href: "https://www.logius.nl/onze-organisatie/zakendoen-met-logius/voorwaarden/algemene-voorwaarden-logius",
      publisher: "Logius",
      title: "Algemene voorwaarden Logius"
    },
    "AuthZEN": {
      date: "September 6, 2024 ",
      href: "https://openid.net/specs/authorization-api-1_0-01.html",
      publisher: "OpenID",
      title: "Authorization API 1.0 – draft 01"
    },
    "AVG": {
      date: "April 27, 2016",
      href: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32016R0679",
      publisher: "Verordening (EU) 2016/679 van het Europees Parlement",
      title: "Algemene Verordening Gegevensbescherming"
    },
    "BCP195": {
      authors: ["Y. Sheffer", "R. Holz", "P. Saint-Andre"],
      date: "May 2015",
      href: "https://tools.ietf.org/html/bcp195",
      publisher: "IETF",
      title: "Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)"
    },
    "DK-beveiliging": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/beveilig/",
      publisher: "Logius",
      title: "Digikoppeling Beveiligingsstandaarden en voorschriften"
    },
    "CloudEvents": {
      date: "May 2011",
      href: "https://github.com/cloudevents/spec/blob/v1.0.1/spec.md",
      publisher: "CNCF Serverless Working Group",
      title: "CloudEvents - Version 1.0.1"
    },
    "NLgov.CloudEvents": {
      authors: ["Werkgroep Berichtenstandaard (Project Notificatieservices)"],
      href: "https://gitdocumentatie.logius.nl/publicatie/notificatieservices/cloudevents-nl/",
      publisher: "Logius",
      title: "NLgov profile for CloudEvents"
    },
    "DK-CV": {
      href: "https://gitlab.com/logius/digikoppeling-compliance",
      publisher: "Logius",
      title: "Digikoppeling Compliance Voorziening"
    },
    "DK-Portaal": {
      href: "https://oinregister.logius.nl/",
      publisher: "Logius",
      title: "Digikoppeling Portaal"
    },
    "DK-WUS-voorbeeld": {
      href: "https://www.logius.nl/sites/default/files/public/bestanden/diensten/DigiKoppeling/Overig/Digikoppeling-Koppelvlakstandaard-WUS-Voorbeeldberichten.zip",
      publisher: "Logius",
      title: "Set voorbeeldberichten (zip)"
    },
    "Deployment Guide 1.1": {
      authors: ["Pete Wenzel", "Jacques Durand"],
      date: "June 2005",
      href: "http://www.oasis-open.org/apps/org/workgroup/ebxml-iic-deployment-profile-template-intro-100406.doc",
      publisher: "OASIS",
      title: "Deployment Profile Template For OASIS ebXML Message Service 2.0"
    },
    "DK": {
      href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling",
      publisher: "Logius",
      title: "Logius | Digikoppeling"
    },
    "DK-Doc": {
      href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling/documentatie",
      publisher: "Logius",
      title: "Digikoppeling documentatie"
    },
    "DK-Beheermodel": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/beheer/",
      publisher: "Logius",
      title: "Digikoppeling Beheermodel"
    },
    "DK-BPebMS": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/bpebms/",
      publisher: "Logius",
      title: "Digikoppeling Best Practices ebMS2"
    },
    "DK-BPGB": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/bpgb/",
      publisher: "Logius",
      title: "Digikoppeling Best Practices Grote Berichten"
    },
    "DK-BPWUS": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/bpwus/",
      publisher: "Logius",
      title: "Digikoppeling Best Practices WUS"
    },
    "DK-Beveiliging": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/beveilig/",
      publisher: "Logius",
      title: "Digikoppeling Beveiligingsstandaarden en voorschriften"
    },
    "DK-gbachtcert": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/ebms/",
      publisher: "Logius",
      title: "Digikoppeling Koppelvlakstandaard ebMS2"
    },
    "DK-ebMS": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/ebms/",
      publisher: "Logius",
      title: "Digikoppeling Koppelvlakstandaard ebMS2"
    },
    "DK-GB": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/gb/",
      publisher: "Logius",
      title: "Digikoppeling Koppelvlakstandaard Grote Berichten"
    },
    "DK-WUS": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/wus/",
      publisher: "Logius",
      title: "Digikoppeling Koppelvlakstandaard WUS"
    },
    "DK-RESTAPI": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/restapi/",
      publisher: "Logius",
      title: "Digikoppeling Koppelvlakstandaard REST-API"
    },
    "DK-Architectuur": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/architectuur/",
      publisher: "Logius",
      title: "Digikoppeling Architectuur"
    },
    "DK-IDAuth": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/idauth/",
      publisher: "Logius",
      title: "Digikoppeling Identificatie en Authenticatie"
    },
    "DK-WI": {
      href: "https://gitdocumentatie.logius.nl/publicatie/dk/watisdk/",
      publisher: "Logius",
      title: "Wat is Digikoppeling?"
    },
    "BOMOSFundament": {
      href: "https://gitdocumentatie.logius.nl/publicatie/bomos/fundament/",
      date: "2 november 2023",
      publisher: "Logius",
      title: "BOMOS, het fundament"
    },
    "BOMOSVerdieping": {
      href: "https://gitdocumentatie.logius.nl/publicatie/bomos/verdieping/",
      date: "2 november 2023",
      publisher: "Logius",
      title: "BOMOS, de verdieping"
    },
    "ebCPP": {
      authors: ["Oasis"],
      date: "September 2002",
      href: "http://www.ebxml.org/specs/ebcpp-2.0.pdf",
      publisher: "Oasis",
      title: "Collaboration-Protocol Profile and Agreement Specification Version 2.0"
    },
    "ebMS3": {
      authors: ["Ian Jones", "Pete Wenzel"],
      date: "October 2007",
      href: "https://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/os/ebms_core-3.0-spec-os.html",
      publisher: "Oasis",
      title: "Collaboration-Protocol Profile and Agreement Specification Version 2.0"
    },
    "eDelivery API4IPS": {
      authors: ["J. Dimitriou, V. Veduta, B. Dumitriu"],
      date: "September 8, 2022",
      href: "https://ec.europa.eu/digital-building-blocks/wikis/display/EDELCOMMUNITY/Project+deliverables",
      publisher: "OpenID foundation",
      title: "(ISA2).(eDelivery).(Piloting a REST API extension of CEF eDelivery).(ISA² IPS REST API Profile).(v1.0).pdf"
    },
    folmer2011: {
      href: "https://research.utwente.nl/en/publications/management-and-development-model-for-open-standards-bomos-version",
      title: "Management and Development Model for Open Standards (BOMOS) version 2",
      keywords: "IR-76837",
      authors: ["ErwinFolmer", "Matthijs Punter"],
      date: "2011",
      language: "English",
      publisher: "Programmabureau NOiV",
    },
    folmer2012: {
      href: "https://research.utwente.nl/en/publications/quality-of-semantic-standards",
      title: "Quality of Semantic Standards",
      authors: ["Erwin Folmer"],
      date: "2012",
      publisher: "Universiteit Twente",
    },
    "DK-Gebruiksvoorwaarden": {
      date: "Januari 1, 2021",
      href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling/documentatie/gebruiksvoorwaarden-digikoppeling",
      publisher: "Logius",
      title: "Gebruiksvoorwaarden Digikoppeling"
    },
    "ADR-GEO": {
      authors: ["L. van den Brink, P. Bresters, P. van Genuchten, G. Mathijssen, M. Strijker"],
      date: "March 07, 2024",
      href: "https://gitdocumentatie.logius.nl/publicatie/api/mod-geo/",
      publisher: "Geonovum",
      title: "API Design Rules Module: Geospatial"
    },
    "HTTPS-factsheet NCSC": {
      date: "November 2014",
      href: "https://www.ncsc.nl/documenten/factsheets/2019/juni/01/factsheet-https-kan-een-stuk-veiliger",
      publisher: "NCSC",
      title: "Factsheet HTTPS kan een stuk veiliger"
    },
    "iGOV.OpenID": {
      authors: ["M. Varley, P. Grassi"],
      date: "October 5, 2018",
      href: "https://openid.net/specs/openid-igov-openid-connect-1_0.html",
      publisher: "OpenID foundation",
      title: "International Government Assurance Profile (iGov) for OpenID Connect 1.0 - draft 3"
    },
    "NLgov.OpenID": {
      authors: ["Remco Schaar, Frank van Es, Joris Joosten, Jan Geert Koops"],
      date: "September 18, 2023",
      href: "https://gitdocumentatie.logius.nl/publicatie/api/oidc/",
      publisher: "Logius",
      title: "NLgov Assurance profile for OpenID Connect 1.0"
    },
    "Introspection": {
      authors: ["J. Richer"],
      date: "October 2015",
      href: "https://tools.ietf.org/html/rfc7662",
      publisher: "IETF",
      title: "OAuth 2.0 Token Introspection"
    },
    "JWA": {
      authors: ["M. Jones"],
      date: "May 2015",
      href: "https://tools.ietf.org/html/rfc7518",
      publisher: "IETF",
      title: "JSON Web Algorithms (JWA)"
    },
    "JWE": {
      authors: ["M. Jones, J. Hildebrand"],
      date: "May 2015",
      href: "https://tools.ietf.org/html/rfc7516",
      publisher: "IETF",
      title: "JSON Web Encryption (JWE)"
    },
    "JWK": {
      authors: ["M. Jones"],
      date: "May 2015",
      href: "https://tools.ietf.org/html/rfc7517",
      publisher: "IETF",
      title: "JSON Web Key (JWK))"
    },
    "JWS": {
      authors: ["M. Jones, J. Bradley, N. Sakimura"],
      date: "May 2015",
      href: "https://tools.ietf.org/html/rfc7515",
      publisher: "IETF",
      title: "JSON Web Signature (JWS)"
    },
    "JWT": {
      authors: ["M. Jones, J. Bradley, N. Sakimura"],
      date: "May 2015",
      href: "https://tools.ietf.org/html/rfc7519",
      publisher: "IETF",
      title: "JSON Web Token (JWT)"
    },
    "NCSC 2021": {
      date: "January 2021",
      href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
      publisher: "NCSC",
      title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS) v2.1"
    },
    "NCSC 2025": {
      date: "June 2025",
      href: "https://www.ncsc.nl/wat-kun-je-zelf-doen/documenten/publicaties/2025/juni/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2025-05",
      publisher: "NCSC",
      title: "Transport Layer Security (TLS) richtlijnen 2025-05"
    },
    "NEN3610": {
      date: "Maart 2011",
      href: "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
      publisher: "Nederlands Normalisatie-instituut",
      title: "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten"
    },
    "no-Reliable-messaging": {
      authors: ["Marc de Graauw"],
      date: "June 18, 2010",
      href: "https://www.infoq.com/articles/no-reliable-messaging/",
      publisher: "infoQ",
      title: "Nobody Needs Reliable Messaging"
    },
    "OAuth2": {
      authors: ["D. Hardt"],
      date: "October 2012",
      href: "https://tools.ietf.org/html/rfc6749",
      publisher: "The Internet Engineering Task Force",
      title: "The OAuth 2.0 Authorization Framework"
    },
    "OpenID.Core": {
      authors: ["N. Sakimura, J. Bradley, M. Jones, B. de Medeiros, C. Mortimore"],
      date: "November 8, 2014",
      href: "https://openid.net/specs/openid-connect-core-1_0.html",
      publisher: "OpenID foundation",
      title: "OpenID Connect Core 1.0"
    },
    "OpenID.Discovery": {
      authors: ["N. Sakimura, J. Bradley, M. Jones, E. Jay"],
      date: "November 8, 2014",
      href: "https://openid.net/specs/openid-connect-discovery-1_0.html",
      publisher: "OpenID foundation",
      title: "OpenID Connect Discovery 1.0"
    },
    "Pas-toe-of-leg-uit": {
      href: "https://www.forumstandaardisatie.nl/open-standaarden/verplicht",
      publisher: "Forum Standaardisatie",
      title: "Lijst Verplichte standaarden"
    },
    "PKIO-PvE": {
      href: "https://cp.pkioverheid.nl/",
      publisher: "Logius",
      title: "Certificate Policy/Programme of Requirements PKIoverheid"
    },
    "PKI-CA": {
      href: "https://www.logius.nl/domeinen/toegang/aansluiten-als-trust-service-provider",
      publisher: "Logius",
      title: "Aansluiten als Trust Service Provider"
    },
    "PKIoverheid": {
      href: "https://www.logius.nl/domeinen/toegang/pkioverheid",
      publisher: "Logius",
      title: "PKIoverheid"
    },
    "PKIO-Cert": {
      href: "https://cert.pkioverheid.nl/",
      publisher: "Logius",
      title: "Overzicht PKIoverheid certificaten"
    },
    "SemVer": {
      authors: ["T. Preston-Werner"],
      date: "June 2013",
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0"
    },
    "ADR-TS": {
      date: "March 07, 2024",
      href: "https://gitdocumentatie.logius.nl/publicatie/api/mod-ts/",
      publisher: "Kennisplatform API's",
      title: "API Design Rules Module: Transport Security"
    },
    "UMMR10": {
      date: "2001",
      href: "https://unece.org/DAM/cefact/umm/UMM_Revision_10_2001.zip",
      publisher: "UN/CEFACT",
      title: "UMM Revision 10"
    },
    "UMMUG": {
      date: "2003",
      href: "https://www.unece.org/fileadmin/DAM/cefact/umm/UMM_userguide_220606.pdf",
      publisher: "UN/CEFACT",
      title: "UN/CEFACT Modeling Methodology (UMM) User Guide"
    },
    "UUID": {
      authors: ["P. Leach", "M. Mealling", "R. Salz"],
      date: "July 2005",
      href: "https://tools.ietf.org/html/rfc4122",
      publisher: "The Internet Engineering Task Force",
      title: "A Universally Unique IDentifier (UUID) URN Namespace"
    },
    "DK-Voorwaarden": {
      date: "Januari 1, 2021",
      href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling/documentatie/voorwaarden-digikoppeling",
      publisher: "Logius",
      title: "Voorwaarden Digikoppeling"
    },
    "X520": {
      href: "https://www.iso.org/standard/43796.html",
      publisher: "ISO",
      title: "ITU-T Recommendation X.520 (2001) ISO/IEC 9594-6"
    },
    "ADR-Validator": {
      href: "https://gitlab.com/commonground/don/adr-validator/-/tree/v0.5.0/pkg/rulesets",
      title: "Technical ADR Validation rule testset 0.5.0",
      authors: ["H. Stijns"],
      publisher: "Geonovum",
      date: "November 2023"
    },
    "JRC117836": {
      href: "https://op.europa.eu/en/publication-detail/-/publication/6521f427-01df-11ea-8c1f-01aa75ed71a1",
      title: "The Relationship Between Open Source Software and Standard Setting",
      authors: ["Knut Blind", "Mirko Böhm"],
      editors: ["Nikolaus Thumm"],
      publisher: "Joint Research Center",
      id: "JRC117836",
      date: "2019"
    },
    "Krechmer2002": {
      href: "https://www.isology.com/pdf/cathedrals.pdf",
      title: "Cathedrals, Libraries and Bazaars",
      authors: ["Ken Krechmer"],
      publisher: "Association of Computing Machinery (ACM)",
      date: "March 2002"
    },
    "FSC-Core": {
      href: "https://gitdocumentatie.logius.nl/publicatie/fsc/core/2.0.0/",
      title: "FSC - Core",
      authors: ["Eelco Hotting", "Ronald Koster", "Henk van Maanen", "Niels Dequeker", "Edward van Gelderen", "Pim Gaemers"],
      publisher: "Logius"
    },
    "FSC-Logging": {
      href: "https://gitdocumentatie.logius.nl/publicatie/fsc/logging/1.1.0/",
      title: "FSC - Logging",
      authors: ["Eelco Hotting", "Ronald Koster", "Henk van Maanen", "Niels Dequeker", "Edward van Gelderen", "Pim Gaemers"],
      publisher: "Logius"
    },
    "HEART.OAuth2": {
      authors: ["J. Richer"],
      date: "April 25, 2017",
      href: "https://openid.net/specs/openid-heart-oauth2-1_0.html",
      publisher: "OpenID foundation",
      title: "Health Relationship Trust Profile for OAuth 2.0"
    },
    "JWS.JWE.Algs": {
      authors: ["Jim Schaad, Jeff Hodges, Joe Hildebrand, Sean Turner"],
      href: "https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms",
      publisher: "IANA",
      title: "IANA JSON Web Signatures and Encryption Algorithms registry"
    },
    "I-D.ietf-oauth-pop-architecture": {
      authors: ["P. Hunt, J. Richer, W. Mills, P. Mishra, H. Tschofenig"],
      date: "July 8, 2016",
      href: "https://tools.ietf.org/html/draft-ietf-oauth-pop-architecture-08",
      publisher: "IETF",
      title: "OAuth 2.0 Proof-of-Possession (PoP) Security Architecture"
    },
    "iGOV.OAuth2": {
      authors: ["J. Richer, M. Varley, P. Grassi"],
      date: "October 5, 2018",
      href: "https://openid.net/specs/openid-igov-oauth2-1_0-03.html",
      publisher: "OpenID foundation",
      title: "International Government Assurance Profile (iGov) for OAuth 2.0"
    },
    "NLgov.OAuth2": {
      authors: ["Jaron Azaria", "Martin Borgman", "Marc Fleischeuers", "Peter Haasnoot", "Leon van der Ree", "Bob te Riele", "Remco Schaar", "Frank Terpstra", "Jan Jaap Zoutendijk"],
      date: "December 3, 2024",
      href: "https://gitdocumentatie.logius.nl/publicatie/api/oauth/",
      publisher: "Logius",
      title: "NLgov Assurance profile for OAuth 2.0"
    },
    "ietf-oauth-v2-1-10-refresh-token-grant": {
      authors: ["Dick Hardt, Aaron Parecki, Torsten Lodderstedt"],
      date: "January 9, 2024",
      href: "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-10#name-refresh-token-grant",
      publisher: "IETF",
      title: "The OAuth 2.1 Authorization Framework: Refresh Token Grant",
    },
    "OpenID.FAPI2.0": {
      authors: ["D. Fett, D. Tonge, J. Heenan"],
      date: "February 22, 2025",
      href: "https://openid.net/specs/fapi-security-profile-2_0-final.html",
      publisher: "OpenID foundation",
      title: "FAPI 2.0 Security Profile"
    },
    "logboek-extensie-guideline": {
      authors: ["Nil Barua", "Tim van der Lippe"],
      date: "April 9, 2026",
      href: "https://gitdocumentatie.logius.nl/publicatie/logboek/logboek-extensie-template/",
      publisher: "Logius",
      title: "Logboek Dataverwerkingen Extensie Guidelines"
    },
    "logboek dataverwerkingen": {
      authors: ["Eelco Hotting", "Vedran Bilanovic"],
      date: "April 9, 2026",
      href: "https://gitdocumentatie.logius.nl/publicatie/logboek/dataverwerkingen/",
      publisher: "Logius",
      title: "Logboek Dataverwerkingen"
    }
  }
};

function prependSectionToBodyAndCreateIfNotExists(document, sectionId) {
  let section = document.getElementById(sectionId);
  if (section === null) {
    section = document.createElement('section');
    section.id = sectionId;
  }
  section.classList.add('introductory');
  document.body.prepend(section);
}

function missingOrIsEmpty(persons) {
  return persons === undefined || persons.length === 0;
}

/**
 * Laad Respec met een `localConfig`, waarbij default waarden uit een
 * `organisationConfig` object komen. Tevens worden de `localBiblio`
 * waarden van beide objecten gecombineerd, mocht de standaard specifieke
 * bibliografie referenties nodig hebben die niet ergens anders nodig zijn.
 *
 * In de `index.html` moet het volgende staan:
 *
 * ```html
 * <script class="remove" type="module" src="js/config.mjs"></script>
 * ```
 *
 * In `js/config.mjs` moet het volgende staan:
 *
 * ```js
 * import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
 *
 * loadRespecWithConfiguration({
 *   <Zet de standaard specifieke configuratie hier>
 * });
 * ```
 *
 * @param {*} localConfig Configuratie specifiek voor deze standaard
 */
export function loadRespecWithConfiguration(localConfig) {
  const respecConfig = {
    ...organisationConfig,
    ...localConfig,
  };

  respecConfig.localBiblio = {
    ...organisationConfig.localBiblio,
    ...localConfig.localBiblio,
  };

  respecConfig.preProcess = [
    ...(localConfig.preProcess || []),
    (config, document, utils) => {
      const ACCEPTED_DOMAINS = ['api', 'bomos', 'dk', 'digimelding', 'fsc', 'ftv', 'logboek', 'notificatieservices'];
      if (!ACCEPTED_DOMAINS.includes(config.pubDomain)) {
        utils.showError(`Invalid pubDomain. Must be one of ${ACCEPTED_DOMAINS}, but was "${config.pubDomain}"`);
      }
      if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(config.shortName)) {
        utils.showError(`Invalid shortName. Must be in kebab-case (only lowercase letters and potentially separated by dashes), but was "${config.shortName}"`);
      }
      if (missingOrIsEmpty(config.github)) {
        utils.showError('No github link specified in configuration.');
      }
      if (missingOrIsEmpty(config.editors)) {
        utils.showError('No editors specified in configuration.');
      }
      if (missingOrIsEmpty(config.authors)) {
        utils.showError('No authors specified in configuration.');
      }
      for (const person of [...(config.editors || []), ...(config.authors || [])]) {
        if (!('companyURL' in person)) {
          continue;
        }
        if (person.companyURL.includes("logius.nl") && person.companyURL !== "https://www.logius.nl") {
          utils.showError(`companyURL of an editor/author of Logius must be "https://www.logius.nl", instead it was "${person.companyURL}"`);
        }
        if (person.companyURL.includes("github.com")) {
          utils.showError(`companyURL of an editor/author must link to a website of an organisation (not GitHub), instead it was ${person.companyURL}`);
        }
      }
    },
    (config, document, utils) => {
      if (config.specStatus.toLowerCase() !== 'cv') {
        return;
      }
      let email;
      let overleg;

      if (['dk', 'fsc'].includes(config.pubDomain)) {
        email = "digikoppeling@logius.nl";
        overleg = "Digikoppeling";
      } else if (config.pubDomain === "bomos") {
        email = "bomos@logius.nl";
        overleg = "BOMOS-klankbord";
      } else {
        email = "api@logius.nl";

        if (config.pubDomain === "notificatieservices") {
          overleg = "Notificeren";
        } else if (config.pubDomain === "logboek") {
          overleg = "LDV";
        } else if (config.shortName.startsWith("oauth") || config.shortName === "oidc") {
          overleg = "OAuth";
        } else {
          overleg = "API";
        }
      }

      for (const texts of Object.values(config.sotdText)) {
        texts.cv = texts.cv.replace(/\w+@logius\.nl/, email);
      }
      // Zodat het kan worden uitgelezen bij het aanmaken van de consultatie README
      utils.amendConfiguration({
        emailForConsultation: email,
        technischOverleg: overleg,
      });
    },
    (config, document) => {
      // Secties worden toegevoegd in omgekeerde volgorde. Dus de
      // sectie die hier als laatste staat, komt als eerste voor
      // in het document.
      prependSectionToBodyAndCreateIfNotExists(document, 'conformance');
      prependSectionToBodyAndCreateIfNotExists(document, 'sotd');
    },
    (config, document, utils) => {
      if (!config.alternateFormats) {
        config.alternateFormats = [];
      }
      const pdfName = `${config.pubDomain}-${config.shortName}-${config.publishVersion}.pdf`;
      const existingFormat = config.alternateFormats.find(format => format.label.toLowerCase() === 'pdf');
      if (existingFormat) {
        if (existingFormat.uri !== pdfName) {
          utils.showError(`Invalid name for PDF format. Expected "${pdfName}", but got "${existingFormat.uri}".
            Consider removing the PDF format from 'config.alternateFormats', as it is automatically generated already.`);
        }
        return;
      }
      config.alternateFormats.push({
        label: 'PDF',
        uri: pdfName,
      });
    }
  ];

  globalThis.respecConfig = respecConfig;

  import("https://logius-standaarden.github.io/publicatie/respec/builds/respec-nlgov.js");
}