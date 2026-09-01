const GITHUB_USER = 'MestrieEsteban';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=created&direction=desc`;

const translations = {
  fr: {
    'nav.featured':'Sélection','nav.archive':'Tous les projets','nav.journey':'Parcours','nav.about':'À propos',
    'hero.eyebrow':'Je transforme des idées techniques en produits utilisables.','hero.line1':'Je construis des','hero.line2':"systèmes d'IA",'hero.line3':'et des interfaces qui sortent du cadre.',
    'hero.lead':"Développeur spécialisé en intelligence artificielle générative, je conçois des applications fondées sur les LLM et j'explore en parallèle des expériences web, 3D et domotiques. Ce portfolio rassemble tout le chemin, des premiers exercices aux produits open source actuels.",
    'hero.ctaPrimary':'Découvrir la sélection','hero.ctaSecondary':'Explorer tous les projets','hero.profileLabel':'Focus actuel',
    'stats.projects':'projets publics','stats.years':'années de création','stats.stars':'étoiles GitHub','stats.worlds':'univers : IA & créatif',
    'featured.kicker':'Selected work / 01','featured.title':"Les projets qui me ressemblent le plus aujourd'hui.",
    'featured.intro':"Des projets pensés comme de vrais produits : une idée claire, une expérience utilisateur, des contraintes techniques et suffisamment de finition pour être utilisés par d'autres.",
    'featured.owlnest':"Une maison interactive en 3D directement dans Home Assistant : éclairage temps réel, ancres interactives, éditeur visuel, météo dynamique, vues caméra et moteur de règles. Une alternative vivante aux floorplans statiques.",
    'featured.groove':"Une carte Lovelace qui transforme un lecteur multimédia en platine vinyle animée, avec pochette dynamique, bras synchronisé, seek, volume, plein écran et intégration HACS.",
    'featured.enuboard':"Une expérimentation d'interface indépendante qui illustre mon goût pour les petits produits autonomes, visuels et immédiatement utilisables dans le navigateur.",
    'featured.nasa':"Un projet plus ancien autour des contenus de la NASA. Je le garde ici volontairement : le portfolio montre aussi le chemin parcouru, pas uniquement la dernière version de moi-même.",
    'common.viewProject':'Voir le projet',
    'ai.kicker':'Current focus / 02','ai.title':"Aujourd'hui, mon terrain principal est l'IA générative.",
    'ai.copy':"Je travaille sur le cycle complet d'applications fondées sur les modèles de langage : cadrage, architecture, intégration de modèles, RAG, recherche hybride, reranking, transcription, APIs, conteneurisation, déploiement, supervision et amélioration continue.",
    'ai.note':"Les projets professionnels sensibles ne sont pas publiés ici. Je préfère montrer les compétences et les choix d'architecture plutôt que d'exposer du code ou des informations qui n'ont pas vocation à être publiques.",
    'archive.kicker':'Project library / 03','archive.title':'Tout le GitHub. Pas seulement les “beaux” projets.',
    'archive.intro':"Cette bibliothèque se synchronise avec mes dépôts publics GitHub. Projets aboutis, exercices, essais, jeux, APIs, frontends : tout fait partie du parcours.",
    'archive.search':'Rechercher un projet...','archive.loading':'Chargement des projets…','archive.sortNewest':'Plus récents','archive.sortOldest':'Plus anciens',
    'archive.error':"GitHub n'a pas répondu. La sélection principale reste disponible ci-dessus.",'archive.openGithub':'Voir tous les dépôts sur GitHub ↗',
    'filters.all':'Tout','filters.recent':'Récent','filters.home':'Home Assistant','filters.web':'Web','filters.mobile':'Mobile','filters.learning':'Learning',
    'journey.kicker':'Timeline / 04','journey.title':'Une progression visible, projet après projet.',
    'journey.intro':"Je ne cache pas les premiers essais. Ils donnent du contexte aux projets actuels et montrent comment mes centres d'intérêt ont évolué.",
    'about.kicker':'About / 05','about.title':"J'aime les logiciels qui ont une vraie présence.",
    'about.lead':"Des systèmes RAG aux maisons 3D, mon fil conducteur est le même : comprendre un problème, construire l'architecture qui va bien, puis soigner suffisamment l'expérience pour que la technologie disparaisse derrière l'usage.",
    'about.p1title':'Construire pour être utilisé','about.p1copy':"Un prototype devient intéressant quand il survit au monde réel : erreurs, déploiement, utilisateurs et maintenance compris.",
    'about.p2title':'Explorer sans rester en surface','about.p2copy':"IA, 3D, domotique, mobile ou APIs : j'aime comprendre les couches techniques, pas seulement assembler une interface.",
    'about.p3title':'Garder une trace du chemin','about.p3copy':"Les vieux projets sont imparfaits. C'est précisément pour ça qu'ils ont leur place ici.",
    'contact.kicker':'One more thing','contact.title':'Un projet étrange, utile ou ambitieux ? Ça m’intéresse.',
    'contact.copy':"Je reste curieux des projets où l'IA, le produit et l'ingénierie se rencontrent — surtout quand le problème n'a pas encore de réponse évidente.",
    'contact.projects':'Revoir les projets','footer.role':'Generative AI & Creative Engineering','footer.backTop':'Retour en haut ↑',
    'dynamic.projects':'projets affichés','dynamic.noProjects':'Aucun projet ne correspond à cette recherche.','dynamic.fallback':'Projet GitHub — ouvre le dépôt pour découvrir le code et le contexte.'
  },
  en: {
    'nav.featured':'Selected','nav.archive':'All projects','nav.journey':'Journey','nav.about':'About',
    'hero.eyebrow':'I turn technical ideas into software people can actually use.','hero.line1':'I build','hero.line2':'AI systems','hero.line3':'and interfaces that go off the beaten path.',
    'hero.lead':'I am a developer specialized in generative AI, designing LLM-powered applications while also exploring web, 3D and home-automation experiences. This portfolio keeps the whole journey visible, from early exercises to current open-source products.',
    'hero.ctaPrimary':'Explore selected work','hero.ctaSecondary':'Browse every project','hero.profileLabel':'Current focus',
    'stats.projects':'public projects','stats.years':'years building','stats.stars':'GitHub stars','stats.worlds':'worlds: AI & creative',
    'featured.kicker':'Selected work / 01','featured.title':'The projects that look most like me today.',
    'featured.intro':'Projects approached as real products: a clear idea, a user experience, technical constraints and enough polish to be useful to someone else.',
    'featured.owlnest':'An interactive 3D home inside Home Assistant: real-time lighting, interactive anchors, a visual editor, dynamic weather, camera views and a rules engine. A living alternative to static floorplans.',
    'featured.groove':'A Lovelace card that turns a media player into an animated vinyl turntable with dynamic artwork, synchronized tonearm, seeking, volume, fullscreen and HACS integration.',
    'featured.enuboard':'An independent interface experiment that reflects my interest in small, visual, self-contained products that work immediately in a browser.',
    'featured.nasa':'An older project built around NASA content. It stays here on purpose: this portfolio shows the path, not only the latest version of my work.',
    'common.viewProject':'View project',
    'ai.kicker':'Current focus / 02','ai.title':'Today, my main playground is generative AI.',
    'ai.copy':'I work across the full lifecycle of language-model applications: framing, architecture, model integration, RAG, hybrid search, reranking, transcription, APIs, containerization, deployment, observability and continuous improvement.',
    'ai.note':'Sensitive professional projects are not published here. I would rather show the skills and architectural thinking than expose code or information that was never meant to be public.',
    'archive.kicker':'Project library / 03','archive.title':'The whole GitHub. Not just the polished projects.',
    'archive.intro':'This library syncs with my public GitHub repositories. Finished products, exercises, experiments, games, APIs and frontends all belong to the journey.',
    'archive.search':'Search projects...','archive.loading':'Loading projects…','archive.sortNewest':'Newest first','archive.sortOldest':'Oldest first',
    'archive.error':'GitHub did not respond. The selected projects above are still available.','archive.openGithub':'Browse all repositories on GitHub ↗',
    'filters.all':'All','filters.recent':'Recent','filters.home':'Home Assistant','filters.web':'Web','filters.mobile':'Mobile','filters.learning':'Learning',
    'journey.kicker':'Timeline / 04','journey.title':'Progress you can see, project after project.',
    'journey.intro':'I do not hide the early experiments. They give context to what I build today and show how my interests evolved.',
    'about.kicker':'About / 05','about.title':'I like software that has a real presence.',
    'about.lead':'From RAG systems to 3D homes, the thread is the same: understand the problem, design the right architecture, then care enough about the experience that the technology fades behind the use case.',
    'about.p1title':'Build to be used','about.p1copy':'A prototype gets interesting when it survives the real world: failures, deployment, users and maintenance included.',
    'about.p2title':'Explore beyond the surface','about.p2copy':'AI, 3D, home automation, mobile or APIs: I like understanding the technical layers, not only assembling an interface.',
    'about.p3title':'Keep the path visible','about.p3copy':'Old projects are imperfect. That is exactly why they belong here.',
    'contact.kicker':'One more thing','contact.title':'A strange, useful or ambitious project? I am interested.',
    'contact.copy':'I stay curious about projects where AI, product thinking and engineering meet — especially when the problem does not have an obvious answer yet.',
    'contact.projects':'See the projects again','footer.role':'Generative AI & Creative Engineering','footer.backTop':'Back to top ↑',
    'dynamic.projects':'projects shown','dynamic.noProjects':'No project matches this search.','dynamic.fallback':'GitHub project — open the repository to explore the code and context.'
  }
};

let language = localStorage.getItem('portfolio-language') || 'fr';
let repositories = [];
let activeFilter = 'all';
let sortMode = 'newest';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const t = (key) => translations[language][key] || key;

function applyLanguage() {
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  $('#languageSwitch').textContent = language === 'fr' ? 'EN' : 'FR';
  const sortLabel = sortMode === 'newest' ? t('archive.sortNewest') : t('archive.sortOldest');
  $('#sortButton').innerHTML = `<span>${sortLabel}</span> ${sortMode === 'newest' ? '↓' : '↑'}`;
  if (repositories.length) renderProjects();
}

function categoryFor(repo) {
  const haystack = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')} ${repo.language || ''}`.toLowerCase();
  const year = new Date(repo.created_at).getFullYear();
  const categories = new Set(['web']);
  if (year >= 2025) categories.add('recent');
  if (/home assistant|home-assistant|hacs|lovelace|owlnest|groove/.test(haystack)) categories.add('home');
  if (/react-native|react native|android|mobile|cross-platform|cross-|rn-/.test(haystack)) categories.add('mobile');
  if (/codeflix|prelude|oav|efrei|learn|starter|exercism|todo|pp-|typescript-starter|baratie|tefeta|ailumette|formation|school/.test(haystack)) categories.add('learning');
  return [...categories];
}

function languageColor(languageName) {
  const map = {
    JavaScript:'#f1df67', TypeScript:'#66a8ff', Python:'#70b7ff', PHP:'#9b8cff',
    HTML:'#ff8a67', CSS:'#b17cff', Vue:'#67d7a5', Java:'#ff9466', Kotlin:'#c890ff',
    'C#':'#9ad66f', Shell:'#a8b0be'
  };
  return map[languageName] || '#7d89a0';
}

function repoDescription(repo) {
  return repo.description?.trim() || t('dynamic.fallback');
}

function createRepoCard(repo) {
  const card = document.createElement('a');
  card.className = 'repo-card';
  card.href = repo.html_url;
  card.target = '_blank';
  card.rel = 'noreferrer';

  const year = new Date(repo.created_at).getFullYear();
  const updated = new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-GB', {year:'numeric', month:'short'});
  const lang = repo.language || '—';
  card.innerHTML = `
    <div class="repo-head"><span class="repo-year">${year} · ${updated}</span><span class="repo-arrow">↗</span></div>
    <h3></h3>
    <p></p>
    <div class="repo-footer">
      <span class="repo-language"><i class="lang-dot" style="background:${languageColor(repo.language)}"></i>${escapeHtml(lang)}</span>
      <span class="repo-stats"><span>★ ${repo.stargazers_count}</span>${repo.forks_count ? `<span>⑂ ${repo.forks_count}</span>` : ''}</span>
    </div>`;
  card.querySelector('h3').textContent = repo.name;
  card.querySelector('p').textContent = repoDescription(repo);
  return card;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function filteredRepositories() {
  const query = $('#projectSearch').value.trim().toLowerCase();
  return repositories
    .filter((repo) => activeFilter === 'all' || repo._categories.includes(activeFilter))
    .filter((repo) => !query || `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase().includes(query))
    .sort((a,b) => sortMode === 'newest'
      ? new Date(b.created_at) - new Date(a.created_at)
      : new Date(a.created_at) - new Date(b.created_at));
}

function renderProjects() {
  const grid = $('#projectGrid');
  const items = filteredRepositories();
  grid.innerHTML = '';
  $('#archiveCount').textContent = `${items.length} ${t('dynamic.projects')}`;
  if (!items.length) {
    const empty = document.createElement('div');
    empty.className = 'archive-error';
    empty.style.gridColumn = '1 / -1';
    empty.textContent = t('dynamic.noProjects');
    grid.appendChild(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  items.forEach((repo) => fragment.appendChild(createRepoCard(repo)));
  grid.appendChild(fragment);
}

function renderTimeline() {
  const timeline = $('#timeline');
  timeline.innerHTML = '';
  const byYear = repositories.reduce((acc, repo) => {
    const year = new Date(repo.created_at).getFullYear();
    (acc[year] ||= []).push(repo);
    return acc;
  }, {});
  Object.keys(byYear).sort((a,b) => b-a).forEach((year) => {
    const row = document.createElement('div');
    row.className = 'timeline-year';
    const title = document.createElement('h3');
    title.textContent = year;
    const projects = document.createElement('div');
    projects.className = 'timeline-projects';
    byYear[year].forEach((repo) => {
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.textContent = repo.name;
      projects.appendChild(link);
    });
    row.append(title, projects);
    timeline.appendChild(row);
  });
}

function updateStats() {
  $('#repoCount').textContent = repositories.length;
  $('#starCount').textContent = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const years = repositories.map((repo) => new Date(repo.created_at).getFullYear());
  const first = Math.min(...years);
  const last = new Date().getFullYear();
  $('#activeYears').textContent = Math.max(1, last - first + 1);
}

async function loadRepositories() {
  try {
    const response = await fetch(API_URL, { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
    const data = await response.json();
    repositories = data
      .filter((repo) => !repo.fork)
      .filter((repo) => !['portfolio', GITHUB_USER.toLowerCase()].includes(repo.name.toLowerCase()))
      .map((repo) => ({...repo, _categories: categoryFor(repo)}));
    updateStats();
    renderProjects();
    renderTimeline();
  } catch (error) {
    console.error(error);
    $('#projectGrid').innerHTML = '';
    $('#archiveCount').textContent = '';
    $('#archiveError').hidden = false;
    $('#repoCount').textContent = '40+';
    $('#activeYears').textContent = '8+';
  }
}

function setupInteractions() {
  $('#languageSwitch').addEventListener('click', () => {
    language = language === 'fr' ? 'en' : 'fr';
    localStorage.setItem('portfolio-language', language);
    applyLanguage();
  });

  $('#projectSearch').addEventListener('input', renderProjects);

  $$('#filterRow .filter').forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      $$('#filterRow .filter').forEach((node) => node.classList.toggle('active', node === button));
      renderProjects();
    });
  });

  $('#sortButton').addEventListener('click', () => {
    sortMode = sortMode === 'newest' ? 'oldest' : 'newest';
    applyLanguage();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  $$('.reveal').forEach((node) => observer.observe(node));

  $('#currentYear').textContent = new Date().getFullYear();
}

applyLanguage();
setupInteractions();
loadRepositories();
