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

  .bkgreen.h-pa-lg
    .row
      .col.text-white.text-center
        img(src="img/gfc/logoheader.png" style="width:150px")

        <div class="text-h5 h-mt-md text-bold">
          | Inovação e Segurança para Potencializar seu
          <b class="h-pl-xs" style="color: #a9c932; font-weight: 900">
            | Processo de Emagrecimento!
          </b>
        </div>

        <div class="h-mt-md" style="font-size: 12px">
          <b> Detox Fit Caps </b>
          | , o melhor detox emagrecedor 100% Natural que elimina a gordura naturalmente de forma saudável e segura.
        </div>

    .row.justify-center
      .col-auto
        img(src="img/gfc/img-header-2.png" style="width: 270px")
    .row.justify-center
      .col-auto
        img(src="img/gfc/beneficios1.png" style="width:270px")

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-green700"
          @click="goToDiv('prices')"
        )
          .text-h5.text-center QUERO EXPERIMENTAR

  .bg-white.h-pa-lg
    .row
      .col.text-black.text-center
        <div class="text-h5 text-green900 text-bold">
          | Praticidade para dar um
          <b class="h-pl-sm h-pr-sm" style="color: #a9c932; font-weight: 900">FIM na GUERRA</b>
          | contra a BALANÇA
        </div>

    .h-mt-md.text-caption
      <b>Detox Fit Caps</b> foi criado para proporcionar uma experiência completa para você. Desde a composição       totalmente natural, aos benefícios ao seu corpo e os resultados visíveis de um <b>emagrecimento saudável</b>.

    .h-mt-md.text-caption
      | Eleve a sua autoestima com Detox Fit Caps e faça tudo  que você sempre sonhou <b>sem se preocupar com peso:</b> frequente a praia, clubes e piscinas de condomínio sem vergonha alguma!

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/itenspraticidade.png" style="width:270px")

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-green700"
          @click="goToDiv('prices')"
        )
          .text-h5.text-center QUERO EXPERIMENTAR

  .bkgreen.h-pa-lg
    .row
      .col.text-white.text-center
        <div class="text-h5 text-bold" style="color: #a9c932;">
          | Benefícios do Detox Caps
          div
            <b class="h-pl-sm h-pr-sm" style="color: white; font-weight: 900">PARA SEU ORGANISMO</b>
        </div>

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/beneficios2.png" style="width:280px")

  .bg-white.h-pa-lg
    .row
      .col.text-black.text-center
        <div class="text-h5 text-green900 text-bold">
          | APROVADO
          <b class="h-pl-sm h-pr-sm" style="color: #a9c932; font-weight: 900">100%</b>
          | POR NOSSOS CLIENTES
        </div>

        <p>
          | Milhares de pessoas, no Brasil inteiro, se beneficiam dos resultados obtidos com o Detox Fit Caps.
          <br><b>Diariamente recebemos diversos relatos positivos de pessoas que usaram e recomendam</b>. Graças a fórmula altamente concentrada do Detox Fit Caps, mais e mais pessoas estão mudando sua vida para melhor. Faça parte dessa família e mude sua vida para melhor também!
        </p>

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/depoimento1.png" style="width:280px")

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-green700"
          @click="goToDiv('prices')"
        )
          .text-h5.text-center QUERO EXPERIMENTAR

  .bg-white.h-pa-md.bkgreen
    .row
      .col.text-black.text-center
        <div class="text-body text-bold" style="color:#a9c932">
          | PRINCIPAIS INGREDIENTES QUE TORNAM
          <br> <b class="h-pl-sm h-pr-sm" style="color: white; font-weight: 900">DETOX FIT CAPS EFICAZ</b>
        </div>

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/composicao1.png" style="width:100%")

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/composicao2.png" style="width:100%")

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/composicao3.png" style="width:100%")

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/gfc/garantia.png" style="width:100%")

    .row.justify-center.h-mt-md(ref="prices")
      .col-auto
        CheckoutGFCMonetizze

  .bg-white.h-pa-lg
    .column.text-center.h-pa-md
      .text-h5.text-black.text-bold(style="color: #a9c932") Dúvidas Frequentes

      h-collapsible.h-mt-md
        h-collapsible-menu(icon="fas fa-question-circle" text="O que é Detox Fit Caps?")
          .text-body.bg-gray200.h-pa-md <b>Detox Fit Caps</b> foi criado para proporcionar uma experiência completa para você. Desde a composição totalmente natural, aos benefícios ao seu corpo e os resultados visíveis de um <b>emagrecimento saudável</b>.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Como devo usar Detox Fit Caps?")
          .text-body.bg-gray200.h-pa-md Os Basta tomar 02 (duas) cápsulas ao dia. Uma cápsula meia hora antes do almoço e uma cápsula meia hora antes do jantar.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Qual kit devo escolher?")
          .text-body.bg-gray200.h-pa-md A escolha do kit fica a critério do comprador, porém, clientes usam o Detox Fit Caps relatam resultados mais rápidos a partir de 2 potes. Especialistas em nutrição e emagrecimento recomendam o uso do Detox Fit Caps por no mínimo 3 meses.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Detox Fit Caps é aprovado?")
          .text-body.bg-gray200.h-pa-md Por ser um suplemento alimentar com ingredientes 100% naturais, Detox Fit Caps é dispensado de registro Anvisa conforme resolução RDC n° 240 - 26/07/2018.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Qual o prazo de entrega?")
          .text-body.bg-gray200.h-pa-md O prazo médio de entrega é 12 dias. O produto só é enviado 72 horas úteis após a confirmação do pagamento pelo boleto ou pela administradora do seu cartão de crédito, débito ou pix.

  .bkgreen.h-pa-lg
    .column.text-white
      .col-auto
        .text-h5.text-center.text-bold AVISO
        p Não comercializamos o Detox Fit Caps no Mercado Livre. A venda só pode ser realizada através deste Site Oficial e não nos responsabilizamos por compras realizadas em outros sites. Evite falsificações e riscos a sua saúde.
      .col-auto
        .text-h5.text-center.text-bold FORMAS DE PAGAMENTO
        .row.justify-center.h-mt-md
          .col-auto
            img(src="img/gfc/formaspagamento.png" style="width:270px")
      .col-auto
      .col-auto

  iframe(src="https://app.monetizze.com.br/r/AEX21114149" width="100%" height="50px" style="border: none; padding: 0px; display: none")
</template>

<script>

import CheckoutGFCMonetizze from '../components/CheckoutGFCMonetizze.vue';

export default {
  name: 'GoldenFitCaps',
  components: {
    CheckoutGFCMonetizze,
  },
  data() {
    return {
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20golden%20fit%20caps%20e%20gostaria%20de%20atendimento',
    };
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

<style scoped lang="css">
.bkgreen {
  background-color: #014327;
}
</style>
