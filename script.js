// HAMBURGUER MENU

let hamburguerOpen = false;

document.getElementById('nav-hamburguer').addEventListener('click', () => {

  if (!hamburguerOpen) {
    document.getElementById('nav').style.display = 'block';
    hamburguerOpen = true;
  } else if (hamburguerOpen) {
    document.getElementById('nav').style.display = 'none';
    hamburguerOpen = false;
  }
  
});

// TRANSLATION (JQUERY)

let siteLanguage = 'ESP';
console.log('ESP');

// DICTIONARY

const dictionaryESP = {
  bajadaHeader: 'CONTENIDO DIGITAL',
  languageHeader: '🇬🇧 VIEW IN ENGLISH',
  frontEndHeader: '💻 DESARROLLO FRONT-END',
  cmsHeader: '🔧 ADMINISTRACIÓN DE CMS',
  marketingHeader: '📱 MARKETING DIGITAL',
  bioText: 'Comunicador digital con experiencia en planificación y gestión de contenidos y redacción creativa español/inglés. Actualmente en proceso de formación como programador web.',
  frontEndSectionHeader: '<span class="text-grey">//</span> DESARROLLO FRONT-END',
  twelveToneProject: 'GENERADOR DE SERIES DODECAFÓNICAS',
  twelveToneDescription: 'Generador aleatorio de series de doce notas musicales inspirado en la música dodecafónica. Proyecto realizado con HTML, Bootstrap y Javascript.',
  twelveToneSite: '<a href="https://neatdisorder.github.io/series-dodecafonicas/" target="_blank">🔗 VER SITIO WEB</a>',
  fccJavascriptProject: 'CERTIFICACIÓN JAVASCRIPT DE FREECODECAMP',
  fccJavascriptDescription: 'Aplicación de una sola página creada para mostrar los cinco proyectos finales de la certificación "Javascript Algorithms and Data Structures" del programa de freeCodeCamp. Realizado con HTML, CSS y Javascript. Textos en inglés.',
  fccJavascriptSite: '<a href="https://neatdisorder.github.io/fcc-javascript-algorithms-and-data-structures/" target="_blank">🔗 VER SITIO WEB</a>',
  cmsSectionHeader: '<span class="text-grey">//</span> ADMINISTRACIÓN DE CMS',
  chevroletDescription: 'Gestión de contenidos para el sitio web de Chevrolet Brasil usando el CMS Quantum basado en Adobe Experience Manager. Liderazgo y coordinación del equipo utilizando metodologías ágiles de gestión de proyectos a través de Jira. Escalamiento, reporte y análisis de problemas técnicos al equipo de soporte global.',
  chevroletSite: '<a href="https://www.chevrolet.com.br/" target="_blank">🔗 VER SITIO WEB</a>',
  tangoSinFinDescription: 'Implementación, gestión y redacción de contenidos y mantenimiento del sitio web de la Asociación Civil Tango Sin Fin en Wordpress.',
  tangoSinFinSite: '<a href="https://www.tangosinfin.org.ar/" target="_blank">🔗 VER SITIO WEB</a>',
  tangoForMusiciansDescription: 'Implementación, gestión y redacción de contenidos y mantenimiento del sitio web del programa educativo Tango for Musicians en Wordpress. Texto en inglés.',
  tangoForMusiciansSite: '<a href="https://www.tangoformusicians.com/" target="_blank">🔗 VER SITIO WEB</a>',
  marketingSectionHeader: '<span class="text-grey">//</span> MARKETING DIGITAL',
  socialMediaProject: 'REDES SOCIALES',
  socialMediaDescription: 'Generación de contenidos, calendarización, redacción creativa en inglés/español, moderación de comentarios y mensajes privados y cobertura de eventos en Facebook, Instagram y Twitter.',
  socialMediaSite: '<a href="https://www.facebook.com/tangosinfin/photos/a.930718310374358/1736235676489280/" target="_blank">🔗 VER EJEMPLO</a>',
  emailDescription: 'Redacción de contenidos en español/inglés, calendarización y administración de bases de datos de email marketing en plataforma MailChimp.',
  emailSite: '<a href="https://mailchi.mp/37ad25751dbb/conoc-la-nueva-web-de-mtodo-de-tango-newsletter-tango-sin-fin-29-agosto-2018?e=6018eae6f3" target="_blank">🔗 VER EJEMPLO</a>',
  cvExperience: 'EXPERIENCIA LABORAL',
  mrmDates: 'JUNIO 2019 - ACTUALIDAD',
  tangoSinFinPosition: '// Responsable de comunicación',
  tangoSinFinDates: 'MAYO 2016 - MAYO 2019',
  elefantePosition: '// Prensa & Community Manager',
  elefanteDates: 'MAYO 2015 - ENERO 2017',
  freelancePosition: '// Prensa & Community Manager',
  freelanceDates: 'DICIEMBRE 2011 - MAYO 2019',
  academicEducation: 'FORMACIÓN ACADÉMICA',
  diplomaturaTitle: 'Diplomatura en proyectos culturales y producción de espacios de la cultura',
  licenciaturaTitle: 'Licenciatura en Artes Musicales',
  licenciaturaDates: '2013 - EN CURSO',
  secundarioTitle: 'Bachillerato especializado en lenguas vivas con intensificación en idioma extranjero',
  courses: 'CURSOS',
  educacionITDates: '2020 - EN CURSO',
  freeCodeCampDates: '2018 - EN CURSO',
  certifications: 'CERTIFICACIONES',
  toolsAndSkills: 'HERRAMIENTAS Y HABILIDADES',
  softwareAndApps: 'Software y aplicaciones web',
  softSkillsTitle: 'Habilidades blandas',
  softSkills: 'Flexibilidad <span class="text-grey">//</span> Comunicación <span class="text-grey">//</span> Trabajo en equipo <span class="text-grey">//</span> Resolución de problemas <span class="text-grey">//</span> Pensamiento crítico <span class="text-grey">//</span> Atención al detalle <span class="text-grey">//</span> Proactividad',
  footer: '<a href="index.html#top">↑ VOLVER ARRIBA ↑</a> <span class="text-grey">//</span> v 0.5 <span class="text-grey">//</span> Hecho con <a href="https://jquery.com/" target="_blank">jQuery</a> <span class="text-grey">//</span> 2020',
}

const dictionaryENG = {
  bajadaHeader: 'DIGITAL CONTENT',
  languageHeader: '🧉 VER EN ESPAÑOL',
  frontEndHeader: '💻 FRONT-END DEVELOPMENT',
  cmsHeader: '🔧 CMS AUTHORING',
  marketingHeader: '📱 DIGITAL MARKETING',
  bioText: 'Digital communicator with experience on planning, managing and copy-writing content both in English and Spanish. Currently studying to become a web developer.',
  frontEndSectionHeader: '<span class="text-grey">//</span> FRONT-END DEVELOPMENT',
  twelveToneProject: 'TWELVE-TONE ROW GENERATOR',
  twelveToneDescription: 'Random twelve-tone note rows generator inspired by dodecaphonic music. Project created using HTML, Bootstrap and Javascript. Text in Spanish.',
  twelveToneSite: '<a href="https://neatdisorder.github.io/series-dodecafonicas/" target="_blank">🔗 VISIT WEBSITE</a>',
  fccJavascriptProject: 'FREECODECAMP JAVASCRIPT CERTIFICATION',
  fccJavascriptDescription: 'Single-page application created for showcasing the solutions for the final projects of freeCodeCamp\'s \'Javascript Algorithms and Data Structures Certification\'. Project created using HTML, CSS and Javascript.',
  fccJavascriptSite: '<a href="https://neatdisorder.github.io/fcc-javascript-algorithms-and-data-structures/" target="_blank">🔗 VISIT WEBSITE</a>',
  cmsSectionHeader: '<span class="text-grey">//</span> CMS AUTHORING',
  chevroletDescription:'Content authoring for General Motors Brazil websites using the Adobe Experience Manager-based CMS “Quantum”. Team leading and coordination using Agile Project Management methodologies through Jira. Escalation, reporting and analysis of technical issues to the Global Support team.',
  chevroletSite: '<a href="https://www.chevrolet.com.br/" target="_blank">🔗 VISIT WEBSITE</a>',
  tangoSinFinDescription: 'Implementation, administration, content copywriting and maintenance of the website of the non-profit organization Tango Sin Fin in Wordpress.',
  tangoSinFinSite: '<a href="https://tangosinfineng.wordpress.com/" target="_blank">🔗 VISIT WEBSITE</a>',
  tangoForMusiciansDescription: 'Implementation, administration, content copywriting and maintenance of the website of the educational program Tango for Musicians in Wordpress.',
  tangoForMusiciansSite: '<a href="https://www.tangoformusicians.com/" target="_blank">🔗 VISIT WEBSITE</a>',
  marketingSectionHeader: '<span class="text-grey">//</span> DIGITAL MARKETING',
  socialMediaProject: 'SOCIAL MEDIA',
  socialMediaDescription: 'Content creation, scheduling, bilingual English/Spanish copywriting, comment and private messaging moderation and live events coverage on Facebook, Instagram and Twitter.',
  socialMediaSite: '<a href="https://www.facebook.com/tangosinfin/photos/a.930718310374358/1736235676489280/" target="_blank">🔗 VIEW SAMPLE</a>',
  emailDescription: 'English/Spanish copywriting, scheduling and email marketing database management using the Mailchimp platform.',
  emailSite: '<a href="https://mailchi.mp/455d96be6982/visit-the-new-mtodo-de-tango-website-tsf-newsletter-29-august-2018?e=d6dc8502f7" target="_blank">🔗 VIEW SAMPLE</a>',
  cvExperience: 'WORK EXPERIENCE',
  mrmDates: 'JUNE 2019 - PRESENT',
  tangoSinFinPosition: '// Communications Manager',
  tangoSinFinDates: 'MAY 2016 - MAY 2019',
  elefantePosition: '// Press Agent & Community Manager',
  elefanteDates: 'MAY 2015 - JANUARY 2017',
  freelancePosition: '// Press Agent & Community Manager',
  freelanceDates: 'DECEMBER 2011 - MAY 2019',
  academicEducation: 'ACADEMIC EDUCATION',
  diplomaturaTitle: 'Diploma in Cultural Management',
  licenciaturaTitle: 'Bachelor in Music Composition',
  licenciaturaDates: '2013 - PRESENT',
  secundarioTitle: 'High school degree in modern languages with an intensification on foreign languages',
  courses: 'COURSES',
  educacionITDates: '2020 - PRESENT',
  freeCodeCampDates: '2018 - PRESENT',
  certifications: 'CERTIFICATIONS',
  toolsAndSkills: 'TOOLS & SKILLS',
  softwareAndApps: 'Software & Web Applications',
  softSkillsTitle: 'Soft Skills',
  softSkills: 'Adaptability <span class="text-grey">//</span> Communication <span class="text-grey">//</span> Teamwork <span class="text-grey">//</span> Problem-solving <span class="text-grey">//</span> Critical thinking <span class="text-grey">//</span> Detail-oriented <span class="text-grey">//</span> Action-oriented',
  footer: '<a href="index.html#top">↑ BACK TO TOP ↑</a> <span class="text-grey">//</span> v 0.5 <span class="text-grey">//</span> Developed using <a href="https://jquery.com/" target="_blank">jQuery</a> <span class="text-grey">//</span> 2020',
}

// ONCLICK EVENT LISTENER

document.getElementById('header-btn-translate').addEventListener('click', translateSite);

// TRANSLATION FUNCTION

function translateSite() {
  if (siteLanguage == 'ESP') {
    siteLanguage = 'ENG';
    
    // ENGLISH TRANSLATION
    $('#bajada-header').text(dictionaryENG.bajadaHeader);
    $('#header-btn-translate').text(dictionaryENG.languageHeader);
    $('#front-end-header').text(dictionaryENG.frontEndHeader);
    $('#cms-header').text(dictionaryENG.cmsHeader);
    $('#marketing-header').text(dictionaryENG.marketingHeader);
    $('#bio-text').text(dictionaryENG.bioText);
    $('#front-end-section-header').html(dictionaryENG.frontEndSectionHeader);
    $('#twelve-tone-project').text(dictionaryENG.twelveToneProject);
    $('#twelve-tone-description').text(dictionaryENG.twelveToneDescription);
    $('#view-twelve-tone-site').html(dictionaryENG.twelveToneSite);
    $('#fcc-javascript-project').text(dictionaryENG.fccJavascriptProject);
    $('#fcc-javascript-description').text(dictionaryENG.fccJavascriptDescription);
    $('#fcc-javascript-site').html(dictionaryENG.fccJavascriptSite);
    $('#cms-section-header').html(dictionaryENG.cmsSectionHeader);
    $('#chevrolet-description').text(dictionaryENG.chevroletDescription);
    $('#view-chevrolet-site').html(dictionaryENG.chevroletSite);
    $('#tangosinfin-description').text(dictionaryENG.tangoSinFinDescription);
    $('#view-tangosinfin-site').html(dictionaryENG.tangoSinFinSite);
    $('#tangoformusicians-description').text(dictionaryENG.tangoForMusiciansDescription);
    $('#view-tangoformusicians-site').html(dictionaryENG.tangoForMusiciansSite);
    $('#marketing-section-header').html(dictionaryENG.marketingSectionHeader);
    $('#social-media-project').text(dictionaryENG.socialMediaProject);
    $('#social-media-description').text(dictionaryENG.socialMediaDescription);
    $('#view-social-media-site').html(dictionaryENG.socialMediaSite);
    $('#email-description').text(dictionaryENG.emailDescription);
    $('#view-email-site').html(dictionaryENG.emailSite);
    $('#cv-experience').text(dictionaryENG.cvExperience);
    $('#mrm-dates').text(dictionaryENG.mrmDates);
    $('#tangosinfin-position').text(dictionaryENG.tangoSinFinPosition);
    $('#tangosinfin-dates').text(dictionaryENG.tangoSinFinDates);
    $('#elefante-position').text(dictionaryENG.elefantePosition);
    $('#elefante-dates').text(dictionaryENG.elefanteDates);
    $('#freelance-position').text(dictionaryENG.freelancePosition);
    $('#freelance-dates').text(dictionaryENG.freelanceDates);
    $('#academic-education').text(dictionaryENG.academicEducation);
    $('#diplomatura-title').text(dictionaryENG.diplomaturaTitle);
    $('#licenciatura-title').text(dictionaryENG.licenciaturaTitle);
    $('#licenciatura-dates').text(dictionaryENG.licenciaturaDates);
    $('#secundario-title').text(dictionaryENG.secundarioTitle);
    $('#courses').text(dictionaryENG.courses);
    $('#educacionit-dates').text(dictionaryENG.educacionITDates);
    $('#freecodecamp-dates').text(dictionaryENG.freeCodeCampDates);
    $('#certifications').text(dictionaryENG.certifications);
    $('#tools-and-skills').text(dictionaryENG.toolsAndSkills);
    $('#software-and-apps').text(dictionaryENG.softwareAndApps);
    $('#soft-skills-title').text(dictionaryENG.softSkillsTitle);
    $('#soft-skills').html(dictionaryENG.softSkills);
    $('#footer').html(dictionaryENG.footer);

  } else if (siteLanguage == 'ENG') {
    siteLanguage = 'ESP';
    
    // SPANISH TRANSLATION
    $('#bajada-header').text(dictionaryESP.bajadaHeader);
    $('#header-btn-translate').text(dictionaryESP.languageHeader);
    $('#front-end-header').text(dictionaryESP.frontEndHeader);
    $('#cms-header').text(dictionaryESP.cmsHeader);
    $('#marketing-header').text(dictionaryESP.marketingHeader);
    $('#bio-text').text(dictionaryESP.bioText);
    $('#front-end-section-header').html(dictionaryESP.frontEndSectionHeader);
    $('#twelve-tone-project').text(dictionaryESP.twelveToneProject);
    $('#twelve-tone-description').text(dictionaryESP.twelveToneDescription);
    $('#view-twelve-tone-site').html(dictionaryESP.twelveToneSite);
    $('#fcc-javascript-project').text(dictionaryESP.fccJavascriptProject);
    $('#fcc-javascript-description').text(dictionaryESP.fccJavascriptDescription);
    $('#fcc-javascript-site').html(dictionaryESP.fccJavascriptSite);
    $('#cms-section-header').html(dictionaryESP.cmsSectionHeader);
    $('#chevrolet-description').text(dictionaryESP.chevroletDescription);
    $('#view-chevrolet-site').html(dictionaryESP.chevroletSite);
    $('#tangosinfin-description').text(dictionaryESP.tangoSinFinDescription);
    $('#view-tangosinfin-site').html(dictionaryESP.tangoSinFinSite);
    $('#tangoformusicians-description').text(dictionaryESP.tangoForMusiciansDescription);
    $('#view-tangoformusicians-site').html(dictionaryESP.tangoForMusiciansSite);
    $('#marketing-section-header').html(dictionaryESP.marketingSectionHeader);
    $('#social-media-project').text(dictionaryESP.socialMediaProject);
    $('#social-media-description').text(dictionaryESP.socialMediaDescription);
    $('#view-social-media-site').html(dictionaryESP.socialMediaSite);
    $('#email-description').text(dictionaryESP.emailDescription);
    $('#view-email-site').html(dictionaryESP.emailSite);
    $('#cv-experience').text(dictionaryESP.cvExperience);
    $('#mrm-dates').text(dictionaryESP.mrmDates);
    $('#tangosinfin-position').text(dictionaryESP.tangoSinFinPosition);
    $('#tangosinfin-dates').text(dictionaryESP.tangoSinFinDates);
    $('#elefante-position').text(dictionaryESP.elefantePosition);
    $('#elefante-dates').text(dictionaryESP.elefanteDates);
    $('#freelance-position').text(dictionaryESP.freelancePosition);
    $('#freelance-dates').text(dictionaryESP.freelanceDates);
    $('#academic-education').text(dictionaryESP.academicEducation);
    $('#diplomatura-title').text(dictionaryESP.diplomaturaTitle);
    $('#licenciatura-title').text(dictionaryESP.licenciaturaTitle);
    $('#licenciatura-dates').text(dictionaryENG.licenciaturaDates);
    $('#secundario-title').text(dictionaryESP.secundarioTitle);
    $('#courses').text(dictionaryESP.courses);
    $('#educacionit-dates').text(dictionaryESP.educacionITDates);
    $('#freecodecamp-dates').text(dictionaryESP.freeCodeCampDates);
    $('#certifications').text(dictionaryESP.certifications);
    $('#tools-and-skills').text(dictionaryESP.toolsAndSkills);
    $('#software-and-apps').text(dictionaryESP.softwareAndApps);
    $('#soft-skills-title').text(dictionaryESP.softSkillsTitle);
    $('#soft-skills').html(dictionaryESP.softSkills);
    $('#footer').html(dictionaryESP.footer);

  }
}