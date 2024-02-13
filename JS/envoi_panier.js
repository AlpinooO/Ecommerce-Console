
const queryString_url_id = window.location.search;

const id = queryString_url_id.slice(1);

const idProduitSelectionner = reponse.find((element) => element._id === id);

const btn_envoyerPanier = document.querySelectorAll("#btn-envoyer");



btn_envoyerPanier.forEach((button) => {
  button.addEventListener("click", () => {
    let optionsProduit = {
      nomProduit: idProduitSelectionner.nomProduit,
      id_ProduitSelectionner: idProduitSelectionner,
      prix: idProduitSelectionner.prix / 100,
    };
    console.log(optionsProduit);
    let produitEnregistreDansLocalStorage = JSON.parse(
      localStorage.getItem("produit")
    );

    if (produitEnregistreDansLocalStorage) {
      produitEnregistreDansLocalStorage.push(optionsProduit);
      localStorage.setItem(
        "produit",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
    } else {
      produitEnregistreDansLocalStorage = [];
      produitEnregistreDansLocalStorage.push(optionsProduit);
      localStorage.setItem(
        "produit",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
    }
  });
});