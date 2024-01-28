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

  .bg-purple700.h-pa-lg
    .row.justify-center.bg-purple700
      .col.text-white.text-bold.text-center
        span.text-h5.text-center.text-center DESCUBRA COMO CENTENAS DE PESSOAS
          span.text-h5.text-orange500  COM O NOSSO PROGRAMA DE DIETA!

    .row.justify-center.align-items-center.h-pa-lg
      .col-mobile.col-xs-6.col-sm-8.col-md-6.col-lg-4.col-xl-4
        img(src="/img/300receitas/img-header.png" style="width:100%")

    .row.justify-center.h-mt-sm
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-green700"
          @click="goToDiv('prices')"
        )
          .text-h5.text-center SIM QUERO EMAGRECER
    .row.justify-center.h-mt-md
      .col-auto.text-white
        img(src="/img/site/comprasegura.png" style="width: 270px")

  .bg-white.h-pa-lg
    .row
      .col.text-center
        .text-h6.text-bold.text-center O LIVRO DIGITAL 300 RECEITAS LOW CARB ESTÁ DIVIDIDO EM QUATRO MODALIDADES.

    .row.wrap.justify-center
      .no-shrink.col-mobile.col-xs-6.col-sm-8.col-md-5.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/cafe-da-manha-lowcarb.png" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center CAFÉ DA MANHÃ

        p.text-center Descubra A Sensação De Começar Bem O Dia Com Refeições Que Vão Te Deixar Com Água Na Boca.
      .no-shrink.col-mobile.col-xs-6.col-sm-8.col-md-5.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/almoco-e-jantar-low-carb.png" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center ALMOÇO, JANTAR E SALADAS
        p.text-center Tenha Um Almoço E Um Jantar Saboroso Com As Refeições Que Preparamos Especialmente Para Você.
      .no-shrink.col-mobile.col-xs-6.col-sm-8.col-md-5.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/sopalowcarb.png" alt=""
          style="width:100%"
        )

        .text-h5.text-bold.text-center SOPAS
        p.text-center Sopas Deliciosas Preparadas Especialmente para Você.
      .no-shrink.col-mobile.col-xs-6.col-sm-8.col-md-5.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/doces-lowcarb.jpg" alt=""
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
        img(src="/img/site/comprasegura.png" style="width: 270px")

  .h-pa-lg.bg-orange700.text-white.text-center
    .text-h6 ALÉM DAS 300 RECEITAS LOW CARB VOCÊ VAI RECEBER GRATUITAMENTE

    .h-mt-md.text-h4 + 6 BÔNUS PRO EXCLUSIVOS

  .bg-purple700.h-pa-lg
    .row.wrap.justify-center.align-items-center.text-white
      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/receitadetox3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm RECEITAS DETOX

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/vitaminas3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm VITAMINAS

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/exercicios3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm EXERCÍCIOS SEMANAIS

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/danca3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm COMO QUEIMAR GORDURA COM DANÇA

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/capa3dperderpesocomendo.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm COMO PERDER PESO COMENDO

      .no-shrink.col-mobile.col-xs-6.col-sm-4.col-md-4.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/alimentosav3d.png" alt=""
          style="width:100%"
        )

        .text-h6.text-bold.text-center.h-pa-sm ALIMENTOS ANTI-ENVELHECIMENTO

  .bg-white.h-pa-lg
    .row
      .col.text-center
        .text-orange700.text-h5.text-bold.text-center CASOS REAIS DE PESSOAS QUE FAZEM A DIETA LOW CARB

    .row.wrap.justify-center
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/depoimento-3-2.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/depoimento-4.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/depoimento-5.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/depoimento-6.png" alt=""
          style="width:100%"
        )

    .row.wrap.justify-center
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/cliente-aline.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/cliente-karla.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/cliente-livia.png" alt=""
          style="width:100%"
        )
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-6.col-lg-3.col-xl-2
        img(
          src="/img/300receitas/cliente-luciana.png" alt=""
          style="width:100%"
        )

  .h-pa-lg.bg-orange700
    .row.wrap.text-white.justify-center.align-items-center
      .no-shrink.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
        img(
          src="/img/300receitas/selo7dias.png" alt=""
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
  //-       img(src="/img/site/comprasegura.png" style="width: 270px")
  .bg-white
    .row.wrap.justify-around.align-items-center.h-pa-md.bg-white(ref="prices")
      .no-shrink.col-mobile.col-xs-12.col-sm-9.col-md-3.col-lg-3.col-xl-2.h-mb-md.h-pa-xs
        CheckoutKiwifyVue(
          v-if="plataforma === 'kiwify' && showcheckout"
          :price="price"
          :src="src"
        )
        CheckoutMonetizze(
          v-else-if="plataforma === 'monetizze' && showcheckout"
          :price="price"
          :src="src"
        )

  .row.h-pa-lg
    .col.text-purple700.text-bold
      .text-h5.text-center RECEITAS DELICIOSAS E EFICAZES TESTADA E APROVADA POR NUTRICIONISTA.

  .row.bg-orange700.h-pa-lg
    .col.text-white.text-bold
      .text-body1.text-center DIGA ADEUS AS GORDURAS LOCALIZADAS SEGUINDO O PASSO A PASSO DA NOSSA DIETA LOW CARB.

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
      img(src="/img/site/modo-de-pagamento.png" style="width: 270px")

  .row.justify-center.h-mt-md
    .col-auto
      img(src="/img/site/comprasegura.png" style="width: 270px")

  .bg-purple700.h-pa-lg
    .column.text-center.h-pa-md
      .text-h3.text-white.text-bold Dúvidas Frequentes

      h-collapsible.h-mt-md
        h-collapsible-menu(icon="fas fa-question-circle" text="Como eu vou receber as receitas?")
          .text-body.bg-gray200.h-pa-md O conteúdo é 100% online. Você receberá o acesso através do seu e-mail.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Em quanto tempo eu posso começar a ver resultados?")
          .text-body.bg-gray200.h-pa-md Os Resultados com a Dieta Low Carb aparecem logo nos primeiros dias. Vocẽ vai perceber que suas roupas vão ficar mais folgadas e você vai desinchar muito.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Tenho que pagar todos os meses para continuar participando?")
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
          src="/img/site/modo-de-pagamento.png" alt=""
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

import CheckoutKiwifyVue from '../components/CheckoutReceitaKiwify.vue';
import CheckoutMonetizze from '../components/CheckoutReceitaMonetizze.vue';

export default {
  components: {
    CheckoutKiwifyVue,
    CheckoutMonetizze,
  },
  name: '300ReceitasLowCarb',
  data() {
    return {
      plataforma: 'monetizze',
      price: '97',
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20receitas%20lowcarb%20e%20gostaria%20de%20atendimento',
      src: '?src=site',
      showcheckout: false,
    };
  },
  mounted() {
    this.showcheckout = false;

    if (this.$route.query.plataforma) {
      const localPlataforma = this.$route.query.plataforma.split('-');
      // console.log('localPlataforma: ', JSON.stringify(localPlataforma));
      // eslint-disable-next-line prefer-destructuring
      this.plataforma = localPlataforma[0];
      // eslint-disable-next-line prefer-destructuring
      this.price = localPlataforma[1] || '97';
    }

    if (this.$route.query.src) {
      this.src = `?src=${this.$route.query.src}`;
    }

    // console.log('mounted plataforma: ', this.plataforma);
    // console.log('mounted src: ', this.src);
    // console.log('mounted price: ', this.price);

    this.showcheckout = true;
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
