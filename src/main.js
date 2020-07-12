// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
//const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Para isso, usaremos o "fetch", conforme você deve ter visto nas aulas online.
// Corrija a linha abaixo, para que a requisição funcione.

fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
  .then(response => response.json())
  .then(data => {

const row = document.getElementById('row')
  
    // Como é mesmo que percorremos um array? 'hm
    data.forEach(element => {
      // Desestruture seu objeto, trazendo os seguintes dados:
      // Foto, tipo, nome e preço da propriedade.
      const { photo, property_type, name, price } = element;
     
      // Pegue a linha do container onde serão exibidos os cards.
      // Agora, crie um elemento "div" com a class "col-md-4" do Bootstrap.
      let div = document.createElement("div");
      div.className = "col-md-4";

      // Boa! Agora, precisamos criar a "div" do card a ser exibido. Ao criar, atribua a class "card mb-4 box-shadow".
      let card = document.createElement("div");
      div.className = "card mb-4 box-shadow";

      // Humm... Agora que já temos o card, que tal começarmos a popular as informações?
      // Crie um elemento "img" e, atribua a class como "card-img-top";
      // Não se esqueça que sua imagem precisa ser referenciada!
      let image = document.createElement("img");
      div.className = "card-img-top";
      image.src = photo;

      // Legal! Agora, já podemos começar a construir o "corpo" do card. Bora lá!
      // Obs.: atribua a class "card-body" do Bootstrap, para que fique bonitão. :)
      let cardBody = document.createElement("div");
      div.className = "card-body";
      
      // Beleza, corpo criado. Seguindo nossa estrutura, o próximo elemento seria os textos, para exibir
      // o tipo da propriedade, nome e preço. Mas, antes, vamos criar um elemento "div" para manter isso
      // tudo organizado. Você pode atribuir a class "card-text" do Bootstrap!
      let cardText = document.createElement("div");
      div.className = "card-text";

      // Uffa! Finalmente os elementos da proriedade!
      // Precisamos agora, listar o tipo, o nome e o preço.
      let propertyType = document.createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;

      let propertyName = document.createElement("h6");
      propertyName.className = "name";
      propertyName.innerHTML = name;

      let propertyPrice = document.createElement("p");
      propertyPrice.className = "price";
      propertyPrice.innerHTML = price;

      // AOBA! Temos agora, todos os elementos necessários para percorrer a resposta da API e,
      // anexar um ao outro para exibição ao usuário. Para "anexar" os elementos, nós usaremos
      // o método "appendChild". Se liga na estrutura do componente, para que tudo seja exibido
      // corretamente:
      //
      // row
      //   div
      //     card
      //       image
      //       cardBody
      //         cardText
      //           propertyType
      //           propertyName
      //           propertyPrice

      row.appendChild(div);
        div.appendChild(card);
          card.appendChild(image);
          card.appendChild(cardBody);
            cardBody.appendChild(cardText);
              cardText.appendChild(propertyType);
              cardText.appendChild(propertyName);
              cardText.appendChild(propertyPrice);
    });
  });


