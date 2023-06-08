// 1º QUESTÃO
// var requisicao;
// requisicao = new XMLHttpRequest();
// requisicao.open('GET', 'https://www2.ifal.edu.br/', true);
// requisicao.send(null);

// requisicao.onreadystatechange = resposta
// function resposta() {
//     if (requisicao.readyState === 4 && requisicao.status === 200) {
//         document.write(requisicao.responseText)
//     }
// };
// 3º QUESTÃO
// var requisicao = new XMLHttpRequest();
// requisicao.open("GET", "https://www2.ifal.edu.br/", true);
// requisicao.setRequestHeader("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1");

// requisicao.onreadystatechange = function() {
//     if (requisicao.readyState === 4 && requisicao.status === 200) {
//         document.write(requisicao.responseText);
//     }
// };
// 5º QUESTÃO
var requisicao;
requisicao = new XMLHttpRequest();
requisicao.open('GET', 'http://monge.com.br/blog-detalhe-seo-consultoria-web-sites/como-funciona-o-http-url-link-e-www-em-um-site/17', true);
requisicao.send(null);

requisicao.onreadystatechange = resposta
function resposta() {
    if (requisicao.readyState === 4 && requisicao.status === 200) {
        document.write(requisicao.responseText)
    }
};
