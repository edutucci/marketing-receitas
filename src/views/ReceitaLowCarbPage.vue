<template lang="pug">
h-page
  .h-pos-abs-br(style="z-index: 100; right: 10px; bottom: 10px")
    h-btn(
      fab
      size="lg"
      text-color="text-white"
      bg-color="bg-green700"
      @click="openUrl(whatsapp)"
    )
      h-icon(icon="fab fa-whatsapp" text-color="text-white" size="32px")

  .row.bg-purple700.h-pa-lg
    .col.text-white.text-bold
      .text-h5.text-center EMAGREÇA DE VEZ E SEM SOFRIMENTO COM AS

      .text-h5.text-center.text-orange500 300 RECEITAS LOW CARB

      .h-mt-lg.text-body1.text-justify Com as 300 Receitas Low Carb, Você Encontrará as Melhores e Mais Variadas Receitas Para Todas as Refeições Do Dia. Receitas Que Vão Potencializar o seu Emagrecimento De Forma Saudável e Objetiva. E o Melhor de tudo: Receitas que vão Definitivamente Queimar Gordura!

      .row.justify-center
        .col-auto(style="max-width: 1100px;")
          .row.wrap.justify-center.align-items-center
            .text-center.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
              img(src="img/300receitas/capa3d300receitas2.png" style="width:100%")
            .text-center.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
              .row.justify-center.h-mt-md
                .col-auto
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | Livro 100% Digital E Totalmente Em Português.
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | Receitas Fáceis, Práticas, Simples E Deliciosas
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | Opções Para Todas As Refeições Do Dia
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | Cardápio Aprovado Por Nutricionistas
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | Entrega Imediata E Sem Taxas
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | 6 Bônus PRO Exclusivos
                  .row.h-mt-sm.justify-center
                    .col-auto
                      h-icon(icon="fas fa-check-circle" text-color="text-yellow700")
                    .col.text-left.h-pl-sm.text-bold
                      | Satisfação 100% Garantida

          .row.justify-center.h-mt-md
            .col-auto
              h-btn(
                rounded
                text-color="text-white"
                bg-color="bg-green700"
                @click="goToDiv('prices')"
              )
                .text-h5.text-center SIM QUERO EMAGRECER
          .row.justify-center.h-mt-md
            .col-auto
              img(src="img/site/comprasegura.png" style="width: 270px")

  .bg-white.h-pa-lg
    .row
      .col.text-center
        .text-h6.text-bold.text-center O LIVRO DIGITAL 300 RECEITAS LOW CARB ESTÁ DIVIDIDO EM QUATRO MODALIDADES.

    .row.wrap.justify-center
      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-6.col-lg-3.col-xl-2
        img(
          src="img/300receitas/cafe-da-manha-lowcarb.png" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center CAFÉ DA MANHÃ

        p.text-center Descubra A Sensação De Começar Bem O Dia Com Refeições Que Vão Te Deixar Com Água Na Boca.
      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-6.col-lg-3.col-xl-2
        img(
          src="img/300receitas/almoco-e-jantar-low-carb.png" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center ALMOÇO, JANTAR E SALADAS
        p.text-center Tenha Um Almoço E Um Jantar Saboroso Com As Refeições Que Preparamos Especialmente Para Você.
      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-6.col-lg-3.col-xl-2
        img(
          src="img/300receitas/sopalowcarb.png" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center SOPAS
        p.text-center Sopas Deliciosas Preparadas Especialmente para Você.

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-6.col-lg-3.col-xl-2
        img(
          src="img/300receitas/doces-lowcarb.jpg" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center DOCES E SOBREMESAS
        p.text-center Separamos Os Melhores Doces E Sobremesas Saudáveis E Deliciosos Para Você Comer Sem Medo E Sem Culpa.

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-purple700"
          @click="goToDiv('prices')"
        )
          .text-h6.text-center QUERO AS RECEITAS AVALIADAS E APROVADAS PELA NUTRICIONISTA

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/site/comprasegura.png" style="width: 270px")

  .h-pa-lg.bg-orange700.text-white.text-center
    .text-h6 ALÉM DAS 300 RECEITAS LOW CARB VOCÊ VAI RECEBER GRATUITAMENTE

    .h-mt-md.text-h4 + 6 BÔNUS PRO EXCLUSIVOS

  .bg-purple700.h-pa-lg
    .row.wrap.justify-center.align-items-center.text-white
      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="img/300receitas/receitadetox3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm RECEITAS DETOX

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="img/300receitas/vitaminas3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm VITAMINAS

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="img/300receitas/exercicios3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm EXERCÍCIOS SEMANAIS

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="img/300receitas/danca3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm COMO QUEIMAR GORDURA COM DANÇA

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="img/300receitas/capa3dperderpesocomendo.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm COMO PERDER PESO COMENDO

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="img/300receitas/alimentosav3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm ALIMENTOS ANTI-ENVELHECIMENTO

  .bg-white.h-pa-lg
    .row
      .col.text-center
        .text-orange700.text-h5.text-bold.text-center CASOS REAIS DE PESSOAS QUE FAZEM A DIETA LOW CARB

    .row.wrap.justify-center
      .no-shrink.col-mobile.col-xs-6.col-sm-5.col-md-6.col-lg-3.col-xl-2
        img(
          src="img/300receitas/depoimento-3.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-6.col-sm-5.col-md-6.col-lg-3.col-xl-2
        img(
          src="img/300receitas/depoimento-4.png" alt=""
          style="width:100%"
        )

  .h-pa-lg.bg-orange700
    .row.wrap.text-white.justify-center.align-items-center
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
        img(
          src="img/300receitas/selo7dias.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
        .text-body1 ESTAMOS TÃO SEGUROS QUE O CONTEÚDO QUE PREPARAMOS PARA VOCÊ NESSE LIVRO DIGITAL SERÁ UM DIVISOR DE ÁGUAS EM SUA VIDA QUE OFERECEMOS PARA VOCÊ 7 DIAS DE GARANTIA INCONDICIONAL, SEM TAXAS DE DEVOLUÇÃO E SEM MULTA. QUEREMOS QUE VOCÊ SE SINTA ABSOLUTAMENTE SEGURO (A) E ALCANCE SEU PESO IDEAL DE FORMA SAUDÁVEL COM AS RECEITAS LOW CARB.

  //- .bg-white.h-pa-lg
  //-   .text-h5.text-center ADQUIRA AGORA O KIT COMPLETO PELO PREÇO PROMOCIONAL

  //-   .row.justify-center.h-mt-md
  //-     .col-auto
  //-       h-btn(
  //-         rounded
  //-         text-color="text-white"
  //-         bg-color="bg-purple700"
  //-         @click="openUrl(urlCheckout)"
  //-       )
  //-         .text-h5.text-center SIM EU QUERO EMAGRECER

  //-   .row.justify-center.h-mt-md
  //-     .col-auto
  //-       img(src="img/site/comprasegura.png" style="width: 270px")
  .bg-white
    .row.wrap.justify-around.align-items-center.h-pa-md.bg-white(ref="prices")
      .no-shrink.col-mobile.col-xs-12.col-sm-9.col-md-3.col-lg-3.col-xl-2.h-mb-md.h-pa-xs
        h-card.bg-purple700(style="width:100%")
          h-card-section.text-center.text-white.h-pa-md
            .text-h5.text-bold 300 RECEITAS
            .text-h5.text-bold + 6 BONUS
            img(
              src="img/300receitas/capa3d300receitas2.png" alt=""
              style="width:100%"
            )

            div(v-if="price === '97'")
              p.text-bold R$ 97 a vista ou por apenas:
              .text-h4.text-bold 12x de R$ 9,74
            div(v-else-if="price === '67'")
              p.text-bold R$ 67 a vista ou por apenas:
              .text-h4.text-bold 9x de R$ 8,60

          h-card-actions.text-center
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-green700"
              @click="openUrl(urlCheckout)"
            )
          h-card-section
            .h-mt-md.text-center
              img(src="img/site/comprasegura.png" style="width: 100%")

  .row.h-pa-lg
    .col.text-orange700.text-bold
      .text-h5.text-center RECEITAS DELICIOSAS E EFICAZES TESTADA E APROVADA POR NUTRICIONISTA.

  .row.bg-orange700.h-pa-lg
    .col.text-white.text-bold
      .text-body1.text-center PERCA PESO NATURALMENTE EM POUCAS SEMANAS SEGUINDO O PASSO A PASSO DA NOSSA DIETA LOW CARB.

      .h-mt-lg.text-body1.text-center AGORA VOCÊ PODE COMER DE TUDO E AINDA MANTER FORMA.

  .row.justify-center.h-mt-md
    .col-auto
      h-btn(
          rounded
          size="lg"
          text-color="text-white"
          bg-color="bg-purple700"
          @click="goToDiv('prices')"
          style="width: 280px"
        )
          .text-h5.text-center SIM EU QUERO EMAGRECER

  .row.justify-center.h-mt-md
    .col-auto
      img(src="img/site/modo-de-pagamento.png" style="width: 270px")

  .row.justify-center.h-mt-md
    .col-auto
      img(src="img/site/comprasegura.png" style="width: 270px")

  .bg-purple700.h-pa-lg
    .column.text-center.h-pa-md
      .text-h3.text-white.text-bold Dúvidas Frequentes

      h-collapsible.h-mt-md
        h-collapsible-menu(icon="fas fa-question-circle" text="Como eu vou receber as receitas?")
          .text-body.bg-gray200.h-pa-md O conteúdo é 100% online. Você receberá o acesso através do seu e-mail.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Em quanto tempo eu posso começar a ver resultados?")
          .text-body.bg-gray200.h-pa-md Os Resultados com a Dieta Low Carb aparecem logo nos primeiros dias. Vocẽ vai perceber que suas roupas vão ficar mais folgadas e você vai desinchar muito.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Tenho que pagar todos os meses para continuar pariticipando?")
          .text-body.bg-gray200.h-pa-md Não. Com apenas um pagamento você terá acesso ao conteúdo completo.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Meu dia é corrido e não tenho muito tempo. Vai funcionar pra mim?")
          .text-body.bg-gray200.h-pa-md Sim. Temos várias clientes que trabalham o dia todo ainda sim conseguem ter resultados excelentes.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Em quanto tempo eu recebo o conteúdo?")
          .text-body.bg-gray200.h-pa-md Pagando com Cartão de Crédito receberá de imediato.
          .text-body.bg-gray200.h-pa-md Pagando por Boleto. Assim que for compensado de 1 a 2 dias uteis, receberá no e-mail cadastrado.

  .bg-orange700.h-pa-lg
    .row.wrap.justify-center
      .col-auto
        .text-body1.text-bold.text-center.text-white FORMA DE PAGAMENTO
        br
        img.cursor-pointer(
          src="img/site/modo-de-pagamento.png" alt=""
          style="width:250px"
        )
      .col-auto.h-pa-sm.text-white.text-center
        .text-h6.text-bold.text-center DÚVIDAS
        br
        h-btn(text="Atendimento" bg-color="bg-positive" text-color="text-white"
          @click="openUrl(whatsapp)"
        )
        p Seg a Sex 13:00 às 21:30hs
        p Sab e Dom 9:00 as 14:00hs

</template>

<script>
export default {
  name: '300ReceitasLowCarb',
  data() {
    return {
      kit97: 'https://app.monetizze.com.br/checkout/DNM178075?src=site',
      kit67: 'https://app.monetizze.com.br/checkout/DZV178867?src=site',
      price: '97',
      urlCheckout: '',
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20receitas%20lowcarb%20e%20gostaria%20de%20atendimento',
    };
  },
  mounted() {
    this.urlCheckout = this.kit97;
    if (this.$route.query.price) {
      this.price = this.$route.query.price;
      switch (this.price) {
        case '97':
          this.urlCheckout = this.kit97;
          break;
        case '67':
          this.urlCheckout = this.kit67;
          break;
        default:
          break;
      }
    }
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
    goToDiv(refName) {
      // console.log('goToElement: ', refName);
      const element = this.$refs[refName];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  },
};
</script>
