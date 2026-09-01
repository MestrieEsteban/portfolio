const GITHUB_USER = 'MestrieEsteban';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=created&direction=desc&type=owner`;

const translations = {
  fr: {
    'nav.selected':'Projets','nav.work':'Ce que je fais','nav.archive':'Archive','nav.journey':'Parcours',
    'hero.kicker':'Développeur · IA générative · interfaces interactives',
    'hero.line1':'Je conçois des','hero.line2':'produits logiciels','hero.line3':"de l’IA aux interfaces 3D.",
    'hero.lead':"Mon travail se concentre aujourd’hui sur les applications d’IA générative. Mes projets personnels explorent aussi la 3D, Home Assistant, les interfaces et les outils web. Ici, je montre les deux — ainsi que tout ce qui m’y a amené.",
    'hero.primary':'Voir les projets','hero.secondary':'Explorer toute l’archive',
    'stats.repos':'dépôts publics','stats.years':'années de projets','stats.stars':'étoiles GitHub',
    'stage.title':'Quelques projets, en 3D.','stage.hint':'Déplace la souris pour explorer la scène.',
    'selected.kicker':'Quelques projets dont je suis fier','selected.title':'Ceux que je montrerais en premier.',
    'selected.copy':"Pas forcément les plus gros. Ceux qui racontent le mieux ce que j'aime construire aujourd'hui.",
    'project.owlnest':"Une maison 3D vivante dans Home Assistant. Lumières synchronisées, météo, vues caméra, interactions, éditeur visuel et moteur de règles : l'idée était de sortir du floorplan statique et d'en faire une vraie interface.",
    'project.groove':"Un media player transformé en platine vinyle animée : pochette, bras, seek, volume, plein écran, couleurs dynamiques et petits détails inutiles donc indispensables.",
    'project.enuboard':"Une petite expérimentation d'interface autonome. J'aime aussi les projets qui n'ont pas besoin de dix services et d'une architecture distribuée pour être intéressants.",
    'common.github':'Voir sur GitHub',
    'work.kicker':'Deux façons de construire','work.title':'La journée, et après.',
    'work.copy':"Le même métier, pas toujours les mêmes contraintes. C'est probablement ce mélange qui me plaît le plus.",
    'work.dayLabel':'CÔTÉ TRAVAIL','work.dayTitle':"Faire passer l'IA du prototype au vrai service.",
    'work.dayCopy':"Je conçois et industrialise des applications fondées sur des modèles de langage : architecture, intégration, RAG, recherche hybride, reranking, transcription, APIs, conteneurisation, déploiement et supervision.",
    'work.secure':'Environnements sécurisés','work.note':'Les projets professionnels sensibles restent volontairement hors de GitHub.',
    'work.nightLabel':'CÔTÉ PERSO','work.nightTitle':"Suivre une idée parce qu'elle a l'air amusante.",
    'work.nightCopy':"3D, domotique, interfaces, jeux, petits outils : je commence souvent par “ce serait drôle si…” et quelques heures plus tard il y a un nouveau dépôt GitHub.",
    'archive.kicker':'Le tiroir à projets','archive.title':'Tout est là. Même les vieux trucs.',
    'archive.copy':"Projets étudiants, tests, APIs, apps mobiles, jeux et expériences. Je préfère montrer le chemin entier plutôt que faire semblant d'avoir commencé hier.",
    'archive.search':'Rechercher un projet...','archive.random':'Projet au hasard ↝','archive.github':'Ouvrir GitHub ↗',
    'archive.newest':'Plus récents ↓','archive.oldest':'Plus anciens ↑','archive.count':'projets affichés',
    'archive.empty':'Aucun projet ne correspond à cette recherche.','archive.error':"Impossible de charger GitHub pour le moment. Les projets mis en avant restent accessibles au-dessus.",
    'archive.fallback':'Pas encore de description. Le code parlera pour lui.',
    'filter.all':'Tout','filter.recent':'Récent','filter.home':'Home Assistant','filter.mobile':'Mobile','filter.games':'Jeux','filter.learning':'Learning',
    'journey.kicker':'Chronologie GitHub','journey.title':'Depuis 2019, beaucoup trop de repos.',
    'journey.copy':"La timeline est générée depuis les dates réelles des dépôts publics. Les premiers projets ne sont pas les meilleurs, mais c'est justement le principe.",
    'journey.projects':'projets',
    'about.title':'Je ne me définis pas vraiment par une stack.',
    'about.lead':"J'aime comprendre le problème, apprendre la couche technique qui me manque, puis pousser l'idée jusqu'à ce qu'elle fonctionne vraiment.",
    'about.copy':"Parfois ça donne un système RAG. Parfois une maison en Three.js. Parfois un projet vieux de six ans que je garde simplement parce qu'il raconte une étape du parcours.",
    'about.archive':'Tous les projets ↓',
    'footer.role':'Développeur · IA · interfaces · open source','footer.note':'Conçu comme un projet, pas comme un template.','footer.top':'Retour en haut ↑'
  },
  en: {
    'nav.selected':'Projects','nav.work':'What I do','nav.archive':'Archive','nav.journey':'Journey',
    'hero.kicker':'Developer · generative AI · interactive interfaces',
    'hero.line1':'I design','hero.line2':'software products','hero.line3':'from AI to 3D interfaces.',
    'hero.lead':'My work currently focuses on generative AI applications. My personal projects also explore 3D, Home Assistant, interfaces and web tools. This portfolio shows both — and everything that led there.',
    'hero.primary':'See the projects','hero.secondary':'Explore the full archive',
    'stats.repos':'public repositories','stats.years':'years of projects','stats.stars':'GitHub stars',
    'stage.title':'A few projects, in 3D.','stage.hint':'Move your mouse to explore the scene.',
    'selected.kicker':'A few projects I am proud of','selected.title':'The ones I would show first.',
    'selected.copy':'Not necessarily the biggest ones. The ones that best explain what I enjoy building today.',
    'project.owlnest':'A living 3D home inside Home Assistant. Synchronized lights, weather, camera views, interactions, a visual editor and a rules engine — built to move beyond the usual static floorplan.',
    'project.groove':'A media player turned into an animated vinyl turntable: artwork, tonearm, seeking, volume, fullscreen, dynamic colors and tiny unnecessary details that therefore became essential.',
    'project.enuboard':'A small self-contained interface experiment. I also like projects that do not need ten services and a distributed architecture to be interesting.',
    'common.github':'View on GitHub',
    'work.kicker':'Two ways of building','work.title':'During the day, and after.',
    'work.copy':'The same craft, not always the same constraints. That mix is probably what I like most.',
    'work.dayLabel':'AT WORK','work.dayTitle':'Taking AI from prototype to actual service.',
    'work.dayCopy':'I design and productionize language-model applications: architecture, integrations, RAG, hybrid search, reranking, transcription, APIs, containers, deployment and observability.',
    'work.secure':'Secure environments','work.note':'Sensitive professional projects deliberately stay off GitHub.',
    'work.nightLabel':'ON THE SIDE','work.nightTitle':'Following an idea because it sounds fun.',
    'work.nightCopy':'3D, home automation, interfaces, games, small tools: I often start with “wouldn’t it be funny if…” and a few hours later there is another GitHub repository.',
    'archive.kicker':'The project drawer','archive.title':'Everything is here. Even the old stuff.',
    'archive.copy':'Student projects, tests, APIs, mobile apps, games and experiments. I would rather show the whole path than pretend I started yesterday.',
    'archive.search':'Search a project...','archive.random':'Random project ↝','archive.github':'Open GitHub ↗',
    'archive.newest':'Newest first ↓','archive.oldest':'Oldest first ↑','archive.count':'projects shown',
    'archive.empty':'No project matches this search.','archive.error':'GitHub could not be loaded right now. The selected projects above are still available.',
    'archive.fallback':'No description yet. The code will have to speak for itself.',
    'filter.all':'All','filter.recent':'Recent','filter.home':'Home Assistant','filter.mobile':'Mobile','filter.games':'Games','filter.learning':'Learning',
    'journey.kicker':'GitHub timeline','journey.title':'Since 2019, far too many repositories.',
    'journey.copy':'The timeline is generated from the real creation dates of my public repositories. The first projects are not the best ones, which is exactly the point.',
    'journey.projects':'projects',
    'about.title':'I do not really define myself by a stack.',
    'about.lead':'I like understanding the problem, learning whatever technical layer I am missing, then pushing the idea until it actually works.',
    'about.copy':'Sometimes that becomes a RAG system. Sometimes a house in Three.js. Sometimes a six-year-old project I keep simply because it represents a step in the journey.',
    'about.archive':'All projects ↓',
    'footer.role':'Developer · AI · interfaces · open source','footer.note':'Designed as a project, not a template.','footer.top':'Back to top ↑'
  }
};

let language = localStorage.getItem('portfolio-language') || 'fr';
let repositories = [];
let activeFilter = 'all';
let sortMode = 'newest';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const t = (key) => translations[language]?.[key] || key;

function applyLanguage(){
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  const switcher = $('#languageSwitch');
  if(switcher) switcher.textContent = language === 'fr' ? 'EN' : 'FR';
  updateSortButton();
  if(repositories.length){
    renderProjects();
    renderTimeline();
  }
}

function categoryFor(repo){
  const haystack = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')} ${repo.language || ''}`.toLowerCase();
  const year = new Date(repo.created_at).getFullYear();
  const currentYear = new Date().getFullYear();
  const categories = new Set();

  if(year >= currentYear - 1) categories.add('recent');
  if(/home assistant|home-assistant|hacs|lovelace|owlnest|groove/.test(haystack)) categories.add('home');
  if(/react-native|react native|android|mobile|cross-platform|cross-|rn-/.test(haystack)) categories.add('mobile');
  if(/game|towerfall|pokemon|pokedex|terraria|quizz|memory|boba|ailumette/.test(haystack)) categories.add('games');
  if(/codeflix|prelude|oav|efrei|learn|starter|exercism|todo|pp-|baratie|tefeta|formation|school|klaus/.test(haystack)) categories.add('learning');

  return [...categories];
}

function languageColor(name){
  const colors = {
    JavaScript:'#d0a900', TypeScript:'#3455ff', Python:'#3876a6', PHP:'#786ba8', HTML:'#d85a36',
    CSS:'#8b5fbf', Vue:'#3c8067', Java:'#a65a36', Kotlin:'#8052a8', 'C#':'#55783d', Shell:'#55534d'
  };
  return colors[name] || '#8b867e';
}

function formatMonth(dateString){
  const locale = language === 'fr' ? 'fr-FR' : 'en-GB';
  return new Date(dateString).toLocaleDateString(locale,{month:'short',year:'numeric'}).replace('.','');
}

function createRepoCard(repo){
  const card = document.createElement('a');
  card.className = 'repo-card';
  card.href = repo.html_url;
  card.target = '_blank';
  card.rel = 'noreferrer';

  const head = document.createElement('div');
  head.className = 'repo-head';
  const date = document.createElement('span');
  date.textContent = `${new Date(repo.created_at).getFullYear()} · ${formatMonth(repo.pushed_at || repo.updated_at)}`;
  const arrow = document.createElement('span');
  arrow.className = 'repo-arrow';
  arrow.textContent = '↗';
  head.append(date,arrow);

  const title = document.createElement('h3');
  title.textContent = repo.name;

  const description = document.createElement('p');
  description.textContent = repo.description?.trim() || t('archive.fallback');

  const footer = document.createElement('div');
  footer.className = 'repo-footer';
  const lang = document.createElement('span');
  lang.className = 'repo-language';
  const dot = document.createElement('i');
  dot.className = 'lang-dot';
  dot.style.background = languageColor(repo.language);
  const langText = document.createElement('span');
  langText.textContent = repo.language || '—';
  lang.append(dot,langText);

  const stats = document.createElement('span');
  stats.className = 'repo-stats';
  const stars = document.createElement('span');
  stars.textContent = `★ ${repo.stargazers_count}`;
  stats.append(stars);
  if(repo.forks_count){
    const forks = document.createElement('span');
    forks.textContent = `⑂ ${repo.forks_count}`;
    stats.append(forks);
  }
  footer.append(lang,stats);

  card.append(head,title,description,footer);
  return card;
}

function filteredRepositories(){
  const query = ($('#projectSearch')?.value || '').trim().toLowerCase();
  const items = repositories.filter((repo) => {
    if(activeFilter !== 'all' && !repo._categories.includes(activeFilter)) return false;
    if(!query) return true;
    return `${repo.name} ${repo.description || ''} ${repo.language || ''} ${(repo.topics || []).join(' ')}`.toLowerCase().includes(query);
  });

  return items.sort((a,b) => {
    const first = new Date(a.created_at);
    const second = new Date(b.created_at);
    return sortMode === 'newest' ? second - first : first - second;
  });
}

function renderProjects(){
  const grid = $('#projectGrid');
  if(!grid) return;
  const items = filteredRepositories();
  grid.replaceChildren();

  const count = $('#archiveCount');
  if(count) count.textContent = `${items.length} ${t('archive.count')}`;

  if(!items.length){
    const empty = document.createElement('div');
    empty.className = 'archive-error';
    empty.textContent = t('archive.empty');
    grid.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((repo) => fragment.append(createRepoCard(repo)));
  grid.append(fragment);
}

function renderTimeline(){
  const timeline = $('#timeline');
  if(!timeline) return;
  timeline.replaceChildren();

  const years = repositories.reduce((acc,repo) => {
    const year = new Date(repo.created_at).getFullYear();
    (acc[year] ||= []).push(repo);
    return acc;
  },{});

  Object.keys(years).sort((a,b) => Number(b)-Number(a)).forEach((year) => {
    const row = document.createElement('div');
    row.className = 'timeline-row';

    const yearNode = document.createElement('div');
    yearNode.className = 'timeline-year';
    yearNode.textContent = year;

    const count = document.createElement('div');
    count.className = 'timeline-count';
    count.textContent = `${years[year].length} ${t('journey.projects')}`;

    const projects = document.createElement('div');
    projects.className = 'timeline-projects';
    years[year].sort((a,b) => new Date(b.created_at)-new Date(a.created_at)).forEach((repo) => {
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.textContent = repo.name;
      projects.append(link);
    });

    row.append(yearNode,count,projects);
    timeline.append(row);
  });
}

function updateStats(){
  if(!repositories.length) return;
  const years = repositories.map((repo) => new Date(repo.created_at).getFullYear());
  const min = Math.min(...years);
  const max = Math.max(...years);
  const stars = repositories.reduce((sum,repo) => sum + (repo.stargazers_count || 0),0);
  $('#repoCount').textContent = repositories.length;
  $('#activeYears').textContent = Math.max(1,max-min+1);
  $('#starCount').textContent = stars;
}

function updateSortButton(){
  const button = $('#sortButton');
  if(button) button.textContent = sortMode === 'newest' ? t('archive.newest') : t('archive.oldest');
}

function showFetchError(){
  const grid = $('#projectGrid');
  if(!grid) return;
  grid.replaceChildren();
  const error = document.createElement('div');
  error.className = 'archive-error';
  error.textContent = t('archive.error');
  grid.append(error);
  if($('#archiveCount')) $('#archiveCount').textContent = 'GitHub offline';
}

async function loadRepositories(){
  try{
    const response = await fetch(API_URL,{headers:{Accept:'application/vnd.github+json'}});
    if(!response.ok) throw new Error(`GitHub ${response.status}`);
    const data = await response.json();
    repositories = data
      .filter((repo) => repo.name !== GITHUB_USER)
      .map((repo) => ({...repo,_categories:categoryFor(repo)}));
    updateStats();
    renderProjects();
    renderTimeline();
  }catch(error){
    console.warn('GitHub archive unavailable:',error);
    showFetchError();
  }
}

function setupControls(){
  $('#languageSwitch')?.addEventListener('click',() => {
    language = language === 'fr' ? 'en' : 'fr';
    localStorage.setItem('portfolio-language',language);
    applyLanguage();
  });

  $('#projectSearch')?.addEventListener('input',renderProjects);

  $$('.filter').forEach((button) => {
    button.addEventListener('click',() => {
      activeFilter = button.dataset.filter;
      $$('.filter').forEach((item) => item.classList.toggle('active',item === button));
      renderProjects();
    });
  });

  $('#sortButton')?.addEventListener('click',() => {
    sortMode = sortMode === 'newest' ? 'oldest' : 'newest';
    updateSortButton();
    renderProjects();
  });

  $('#randomButton')?.addEventListener('click',() => {
    const items = filteredRepositories();
    if(!items.length) return;
    const repo = items[Math.floor(Math.random()*items.length)];
    window.open(repo.html_url,'_blank','noopener,noreferrer');
  });
}

function setupReveal(){
  const nodes = $$('.reveal');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    nodes.forEach((node) => node.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -40px'});
  nodes.forEach((node) => observer.observe(node));
}

applyLanguage();
setupControls();
setupReveal();
loadRepositories();