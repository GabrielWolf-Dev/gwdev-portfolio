# [gwdev-portfolio](https://gwdev-portfolio.vercel.app/) 🧑‍💻🧑‍💻

Site de portfólio onde descrevo um pouco sobre a minha histório, como consegui achar o meu caminha na área de programação, minhas principais habilidades, últimas atividades e principais projetos. Também nele eu inseri um blog simples para falar sobre carreira tech e experiências que fizeram diferença na minha jornada até aqui.

![Sessão do banner na home page(versão desktop)](https://github.com/GabrielWolf-Dev/gwdev-portfolio/blob/main/public/imgs/home-banner.png?raw=true)

## Principais desafios:
- Foi por meio deste projeto que começei a dar os meus primeiros passos para aprender algum CMS, inicialmente iria usar o Prismic por conta de ter um bom armazenamento no seu plano gratuito, entretanto ele mudou a forma de integração e resolvi ir no datoCMS que é bem mais simples e vou utilizar o GraphQL para filtrar melhor os dados, principalmente na home, pois a API REST do Github vem muitos dados desnecessários, assim performando mais o site.
- Outro desafio foi entender na prática como funciona o getStaticPaths e as rotas dinamicas com Next.js na parte de construir o blog, pois como os dados do blog é por meio do CMS é válido utilizar uma geração de página estática do que SSR simplesmente.
- Aprender outras bibliotecas do React como o Forkmik e Yup para validar e gerenciar melhor os formulários, junto com a integração gratuita e pronta do back-end para envio de formulário ao meu e-mail. [FormSubmit](https://formsubmit.co/)
- Integrar os dados da API do Github para reaprovetar muita coisa, principalmente nos últimos commits feitos nos repositórios, já a parte dos principais projetos eu resolvi fazer via CMS para facilitar o gerenciamento por ser algo mais subjetivo.

## Porquê utilizar o Next.js?
Demonstrar uma tecnologia que eu estou focando bastante para garantir uma vaga no mercado, conseguir escalar o projeto mais fácil, padronizar de forma simples, praticar conceitos estudados, automatizar processos de build para otimizar imagens/arquivos e principalmente as funcionalidades de pré-renderizar as páginas a partir do servidor Node, podendo esconder dados sigilosos como API keys e fazer aplicações mais completas para devs front-end.

<div style="text-align: center;">
    <img src="https://github.com/GabrielWolf-Dev/gwdev-portfolio/blob/main/public/imgs/blog-post-mobile.png?raw=true" alt="Blog post(versão mobile)" />
</div>

## Sobre o design
Como a minha área é tecnologia, todo o design, as cores, tema e tipografia é voltado a transmitir uma sensação de informática. Toda a prototipação foi sendo reajustada conforme o tempo e as ideias que vinham surgindo.

## Tecnologias & Serviços:
* HTML5
* React & Next.js
    * Formik & Yup
    * XSS
    * React Simple Typewriter
    * Nextjs Progressbar
    * Lottiefiles animações
    * Font Awesome ícones
* CSS3 com BEM
* DatoCMS
* API Github

### Para mais detalhes das metas do projeto, [veja aqui](https://github.com/GabrielWolf-Dev/gwdev-portfolio/projects/1)