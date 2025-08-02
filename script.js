const languages = {
  ar: {
      title: "مرحبا بكم في متجرنا",
      product1: "قميص قطني",
      product2: "بنطال جينز",
      product3: "ساعة أنيقة",
      price: "السعر"
  },
  en: {
      title: "Welcome to Our Store",
      product1: "Cotton Shirt",
      product2: "Jeans",
      product3: "Elegant Watch",
      price: "Price"
  },
  fr: {
      title: "Bienvenue dans notre boutique",
      product1: "Chemise en coton",
      product2: "Jean",
      product3: "Montre élégante",
      price: "Prix"
  }
};

function switchLanguage(lang) {
  const content = languages[lang];
  document.getElementById('title').textContent = content.title;
  document.getElementById('p1-title').textContent = content.product1;
  document.getElementById('p2-title').textContent = content.product2;
  document.getElementById('p3-title').textContent = content.product3;
  document.querySelectorAll('.price-label').forEach(el => el.textContent = content.price);
}
