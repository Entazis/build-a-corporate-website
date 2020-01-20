function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function () {
  "use strict";
  var dictionary, set_lang;
  var slideIndex = 0;
  var backToTopButton = document.getElementById("backToTopButton");

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

  window.onscroll = function() {scrollFunction()};

  showSlides();

  dictionary = {
    "english": {
      "_who_we_are": "WHO WE ARE",
      "_we_are_a_company": "We are a Brazilian-Chinese trading company founded in 2003. Since our foundation, we have worked with Brazilian and Chinese entrepreneurs helping them in their activities of importing and exporting goods.",
      "_we_have_skilled_personnel": "We have skilled personnel in Brazil and in China who are available to meet your demand for any product.",
      "_why_we_are_different": "WHY WE ARE DIFFERENT",
      "_altough_internet_has_improved": "Although, internet has improved communications globally, there are still many obstacles in the international trade: culture, language, time zone, etc., which causes insecurity and distrust.",
      "_iton_through_its_professionals": "Iton, through its professionals in Brazil and China, acts precisely to ensure the security of transactions, giving the entrepreneur the confidence to complete the business without wasting time and money.",
      "_our_products": "OUR PRODUCTS:",
      "_home_decor": "Home Décor",
      "_lighting_accessories": "Lighting & Lighting Accessories",
      "_kitchen_dining": "Kitchen & Dining",
      "_storage_organization": "Storage & Organization",
      "_elderly_care_products": "Elderly care products",
      "_baby_care_products": "Baby care products",
      "_our_services": "OUR SERVICES:",
      "_importing_services": "Importing services;",
      "_search_for_suppliers": "Search for suppliers or buyers for products in the international market;",
      "_cost_of_import": "Costs of import or export;",
      "_survey_of_suppliers": "Survey of suppliers in accordance with the quality standards indicated by the client;",
      "_collection_and_sending_samples": "Collection and sending of samples;",
      "_visit_to_suppliers": "Visit to suppliers to survey production and send reports;",
      "_quality_survey": "Quality survey according to specifications sent by the client with reports;",
      "_product_loading": "Product loading monitoring;",
      "_conference_of_documents": "Conference of documents for import and export of products;",
      "_accompany_client": "Accompany client to fairs and suppliers.",
      "_clients": "CLIENTS",
      "_contact": "CONTACT",
      "_products": "PRODUCTS",
      "_services": "SERVICES",
      "_difference": "WHY ARE WE DIFFERENT",
      "_tower_cranes": "Tower cranes",
      "_rack_lift_wire_mesh": "Rack lift and wire mesh fence",
      "_construction_products": "Construction products",
      "_solar_lighting_products": "Solar Lighting products"
    },
    "portuguese": {
      "_who_we_are": "QUEM SOMOS",
      "_we_are_a_company": "Somos uma empresa brasileira-chinesa fundada em 2003, que presta serviços de assessoria em comércio exterior. Desde sua fundação, a Iton trabalha auxiliando empresários brasileiros e chineses nas atividades de importação e exportação de produtos.",
      "_we_have_skilled_personnel": "A Iton conta com equipes de profissionais especializados em comércio exterior, no Brasil e na China, que estão disponíveis para atender a sua demanda por qualquer produto.",
      "_why_we_are_different": "NOSSO DIFERENCIAL: SEGURANÇA",
      "_altough_internet_has_improved": "Apesar da facilidade de comunicação por meio da internet, ainda existem muitos obstáculos para a atuação no mercado internacional: cultura, língua, fuso horário etc., o que causa insegurança e desconfiança.",
      "_iton_through_its_professionals": "A Iton, por meio de seus profissionais no Brasil e na China, atua exatamente para garantir a segurança das transações, transmitindo ao empresário a confiança necessária para concluir o negócio, sem perder tempo e dinheiro.",
      "_our_products": "NOSSOS PRODUTOS:",
      "_home_decor": "Artigos para decoração",
      "_lighting_accessories": "Luminárias e acessórios para iluminação",
      "_kitchen_dining": "Artigos para o lar",
      "_storage_organization": "Organizadores",
      "_elderly_care_products": "Itens de segurança para idosos",
      "_baby_care_products": "Artigos para bebês",
      "_our_services": "NOSSOS SERVIÇOS:",
      "_importing_services": "Importação por encomenda e por conta e ordem",
      "_search_for_suppliers": "Busca de fornecedores ou compradores para o produto pretendido no mercado internacional;",
      "_cost_of_import": "Estudos de viabilidade da importação ou exportação;",
      "_survey_of_suppliers": "Homologação de fornecedores de acordo com os padrões de qualidade indicados pelo cliente;",
      "_collection_and_sending_samples": "Obtenção e envio de amostras;",
      "_visit_to_suppliers": "Visita a fornecedores para acompanhamento da produção e envio de relatório com imagens;",
      "_quality_survey": "Inspeção de qualidade nos produtos de acordo com as especificações enviadas pelo cliente e envio de relatório com imagens;",
      "_product_loading": "Acompanhamento de carregamento dos produtos;",
      "_conference_of_documents": "Conferência de documentos para importação e exportação de produtos;",
      "_accompany_client": "Acompanhamento de visitas a feiras e a fornecedores.",
      "_clients": "CLIENTES",
      "_contact": "CONTATO",
      "_products": "PRODUTOS",
      "_services": "SERVIÇOS",
      "_difference": "DIFERENCIAL",
      "_tower_cranes": "Gruas",
      "_rack_lift_wire_mesh": "Elevador de cremalheira e gradil",
      "_construction_products": "Produtos para construção civil",
      "_solar_lighting_products": "Produtos de iluminação operados por energia solar"
    }
  };

  // Function for swapping dictionaries
  set_lang = function (dictionary) {
    $("[data-translate]").text(function () {
      var key = $(this).data("translate");
      if (dictionary.hasOwnProperty(key)) {
        return dictionary[key];
      }
    });
  };

  // Swap languages when menu changes
  $("#lang").on("change", function () {
    var language = $(this).val().toLowerCase();
    if (dictionary.hasOwnProperty(language)) {
      set_lang(dictionary[language]);
    }
  });

  // Set initial language to English
  set_lang(dictionary.english);

});