
const json = `{
  "articles": [
    {
      "id": 1,
      "category": "Poisson & Viande",
      "name": "Filet de saumon",
      "description": "Saumon frais prêt pour la cuisson",
      "price": 12.99,
      "image": "images/salmon.png"
    },
    {
      "id": 2,
      "category": "Poisson & Viande",
      "name": "Aile de poulet",
      "description": "Avec un os, pour un gout plus prononcé",
      "price": 8.99,
      "image": "images/chicken.png"
    },
    {
      "id": 3,
      "category": "Légumes",
      "name": "Brocoli",
      "description": "Brocoli frais, prêt pour la cuisson",
      "price": 2.99,
      "image": "images/broccoli.png"
    },
    {
      "id": 4,
      "category": "Légumes",
      "name": "Carottes",
      "description": "Carottes biologiques, idéales pour les salades ou les collations.",
      "price": 1.99,
      "image": "images/carrots.png"
    },
    {
      "id": 5,
      "category": "Médicaments",
      "name": "Antidouleur",
      "description": "Comprimés antidouleur efficaces.",
      "price": 9.99,
      "image": "images/pain-reliever.png"
    },
    {
      "id": 6,
      "category": "Médicaments",
      "name": "Vitamines",
      "description": "Comprimés multivitaminés pour un soutien quotidien de la santé.",
      "price": 14.99,
      "image": "images/vitamins.png"
    },
    {
      "id": 7,
      "category": "Bébé",
      "name": "Couches pour bébé",
      "description": "Couches douces et absorbantes pour les nourrissons.",
      "price": 19.99,
      "image": "images/baby-diapers.png"
    },
    {
      "id": 8,
      "category": "Bébé",
      "name": "Lingettes pour bébé",
      "description": "Lingettes douces pour une peau propre et fraîche.",
      "price": 5.99,
      "image": "images/baby-wipes.png"
    },
    {
      "id": 9,
      "category": "Bureau",
      "name": "Cahiers",
      "description": "Cahiers de haute qualité pour une utilisation au bureau ou à l'école.",
      "price": 3.99,
      "image": "images/notebooks.png"
    },
    {
      "id": 10,
      "category": "Bureau",
      "name": "Stylos",
      "description": "Ensemble de stylos à bille de qualité supérieure pour une écriture fluide.",
      "price": 7.99,
      "image": "images/pens.png"
    },
    {
      "id": 11,
      "category": "Beauté",
      "name": "Nettoyant pour le visage",
      "description": "Nettoyant facial doux pour les soins quotidiens de la peau.",
      "price": 11.99,
      "image": "images/facial-cleanser.png"
    },
    {
      "id": 12,
      "category": "Beauté",
      "name": "Lotion hydratante",
      "description": "Lotion hydratante pour une peau douce et lisse.",
      "price": 14.99,
      "image": "images/moisturizing-lotion.png"
    },
    {
      "id": 13,
      "category": "Jardinage",
      "name": "Graines de fleurs",
      "description": "Assortiment de graines de fleurs pour un beau jardin.",
      "price": 6.99,
      "image": "images/flower-seeds.png"
    },
    {
      "id": 14,
      "category": "Jardinage",
      "name": "Gants de jardinage",
      "description": "Gants durables pour un jardinage confortable.",
      "price": 8.99,
      "image": "images/gardening-gloves.png"
    }
  ]
}`;

// Fonction pour charger les données depuis le fichier JSON
function load_from_json(callback) {
  // Charger les données JSON depuis la variable 'json'
  const data = JSON.parse(json);

  // Appeler la fonction de rappel avec les données chargées
  callback(data.articles);
}
  
// Fonction pour afficher les articles dans la liste
function afficherArticles(articles) {
    // Assurez-vous que 'articles' est un tableau
    if (Array.isArray(articles)) {
      const articleContainer = document.getElementById('article-container');
  
      // Effacer le contenu actuel de la liste
      articleContainer.innerHTML = '';
  
      articles.forEach(function (article) {
        // Créer un élément d'article
        const articleElement = document.createElement('div');
        articleElement.classList.add('article'); // Ajoutez la classe 'article' au lieu de 'article-item'
  
        // Ajouter le contenu de l'article
        articleElement.innerHTML = `
          <img class="article-image" src="${article.image}" alt="${article.name}">
          <h3 class="article-name">${article.name}</h3>
          <p class="article-category">${article.category}</p>
          <p>${article.description}</p>
          <p class="price">$${article.price.toFixed(2)}</p>
        `;
  
        // Ajouter l'élément d'article à la liste
        articleContainer.appendChild(articleElement);
      });
    } else {
      console.error("Les données ne sont pas sous forme de tableau.");
    }
  }

// Récupérer l'élément qui contient la liste des articles
const articleContainer = document.getElementById('article-container');

// Fonction pour filtrer les articles par recherche
function filterBySearch(searchTerm) {
  // Récupérer tous les articles
  const articles = document.querySelectorAll('.article');

  // Parcourir tous les articles
  articles.forEach((article) => {
    // Récupérer le nom de l'article
    const articleName = article.querySelector('.article-name').innerText.toLowerCase();

    // Vérifier si le terme de recherche est inclus dans le nom de l'article
    if (articleName.includes(searchTerm.toLowerCase())) {
      // Afficher l'article s'il correspond à la recherche
      article.style.display = 'block';
      console.info('Afficher l\'article', articleName);
    } else {
      // Masquer l'article s'il ne correspond pas à la recherche
      article.style.display = 'none';
        console.info('Masquer l\'article', articleName);
    }
  });
}

function filterByCategory(category) {
  // Récupérer tous les articles
  const articles = document.querySelectorAll('.article');

  articles.forEach(article => {
    const articleName = article.querySelector('.article-category').innerText;
    if (category === 'Tous' || articleName === category) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });

  // Mettre à jour le libellé de la catégorie sélectionnée
  const selectedCategory = document.getElementById('selected-category');
  selectedCategory.textContent = category;
}

// Écouter les clics sur les éléments de catégorie
// Ajoutez ces lignes au début pour définir la catégorie active
let activeCategory = 'All';
const categoryButtons = document.querySelectorAll('.category-box');
categoryButtons.forEach(button => {
  button.addEventListener('click', function () {
    const selectedCategory = this.dataset.category;
    filterByCategory(selectedCategory);

    // Changer la couleur du bouton actif
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

categoryButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    console.info('Catégorie sélectionnée:', this.textContent);
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    const clickedCategory = this.querySelector('span').textContent;
    filterByCategory(clickedCategory);

    // Mettre à jour la couleur du bouton actif
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// Écouter l'événement de soumission du formulaire de recherche.
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (event) {
 console.info('Formulaire de recherche soumis');
  event.preventDefault(); // Empêcher le rechargement de la page
  const searchBar = document.querySelector('.search-input');
  // Filtrer les articles par recherche
  filterBySearch(searchBar.value);
});
  
  // Charger les données depuis le fichier JSON et afficher les articles dans la liste
  load_from_json(afficherArticles);
  
  