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

  RSPage(
    v-if="modotela === 'rs'"
    @click="modotela = 'site'"
  )

  div(v-else-if="modotela === 'site'")

    .bg-2.h-pa-md
      .text-center.h-mt-lg
        img(src="img/gestacare/logo2.png" style="width:150px")

      .row.justify-center.h-mt-lg
        .col-auto.heading-title.text-bold.text-h3.text-center
          | Mulher  <span style="color:#fa1691">engravida</span> mesmo após fazer<span style="color:#fa1691"> laqueadura</span>! Veja como...

      .row.justify-center.h-mt-lg
        .col-auto.h-pa-md.text-h6.text-center.text-gray700.text-bold
          | Assista o vídeo abaixo e descubra como mulheres com laqueadura estão conseguindo engravidar

      .row.justify-center.h-mt-lg
        iframe.video-item.h-pa-md(width="100%" src="https://www.youtube.com/embed/0rqyo1x5YKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-center.h-mt-md
        .col-auto
          h-btn(
            rounded
            text-color="text-white"
            bg-color="bg-pink700"
            @click="goToDiv('prices')"
          )
            .text-h5.text-center.h-pa-md CLIQUE AQUI

    .bkblue.row.wrap.h-pa-md.align-items-center.justify-center
      .no-shrink.col-mobile.col-xs-10.col-sm-3.col-md-4.col-lg-3.col-xl-2
        img(src="img/gestacare/barbebe.png" style="width: 85%")

      .no-shrink.h-pa-sm.col-mobile.col-xs-10.col-sm-7.col-md-8.col-lg-3.col-xl-2
        .row.justify-center.h-mt-md
          .col-auto.text-h5.text-gray700.text-bold
            .row.justify-center.h-mt-lg
              .col-auto
                h-icon(icon="fas fa-check-double" text-color="text-pink500")
              .col.text-left.h-pl-sm.text-bold
                | Aumenta a produção hormonal
            .row.h-mt-sm.justify-center
              .col-auto
                h-icon(icon="fas fa-check-double" text-color="text-pink500")
              .col.text-left.h-pl-sm.text-bold
                | Prepara seu organismo para uma boa gestação
            .row.h-mt-sm.justify-center
              .col-auto
                h-icon(icon="fas fa-check-double" text-color="text-pink500")
              .col.text-left.h-pl-sm.text-bold
                | Da resultados até mesmo em mulheres com laqueadura!
            .row.h-mt-sm.justify-center
              .col-auto
                h-icon(icon="fas fa-check-double" text-color="text-pink500")
              .col.text-left.h-pl-sm.text-bold
                | E muito mais...

    .bg-2.row.wrap.h-pa-md.align-items-center.justify-center
      .no-shrink.h-pa-sm.col-mobile.col-xs-10.col-sm-7.col-md-8.col-lg-3.col-xl-2
        .heading-title.text-bold.text-h4.text-center
          | O <span style="color:#fa1691">papai</span> também pode tomar <span style="color:#fa1691">Gesta Care</span>

        .text-h6.text-center.text-gray700.text-bold.h-mb-lg.h-mt-lg
          | O Gesta Care ajuda a regular os hormônios masculinos para facilitar a fertilização! Assim tanto as mulheres quanto os homens podem tomar!

        .row.justify-center.h-mt-md.h-mb-lg
          .col-auto
            h-btn(
              rounded
              text-color="text-white"
              bg-color="bg-pink700"
              @click="goToDiv('prices')"
            )
              .text-h5.text-center.h-pa-md CLIQUE AQUI

      .no-shrink.col-mobile.col-xs-10.col-sm-3.col-md-4.col-lg-3.col-xl-2
        img(src="img/gestacare/paibebe.png" style="width: 85%")

    .bkblue.row.wrap.h-pa-md.align-items-center.justify-center
      .no-shrink.h-pa-sm.col-mobile.col-xs-10.col-sm-7.col-md-8.col-lg-3.col-xl-2
        .heading-title.text-bold.text-h4.text-center
          | 30 DIAS DE <span style="color:#fa1691">GARANTIA</span>

        .text-h6.text-center.text-gray700.text-bold
          | Após adquirir você recebe 30 dias de garantia, queremos que você se sinta totalmente confortável, por isso caso você peça reembolso, todo seu dinheiro será devolvido!

      .no-shrink.col-mobile.col-xs-10.col-sm-3.col-md-4.col-lg-3.col-xl-2
        img(src="img/gestacare/selogarantia.png" style="width: 85%")

    .bg-2.h-pa-md(ref="prices")
      CheckoutGTCareMonetizze

    .bkblue.h-pa-lg
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

  iframe(src="https://app.monetizze.com.br/r/AMZ22602358" width="100%" height="50px" style="border: none; padding: 0px; display: none")
</template>

<script>

import RSPage from '../components/RSPage.vue';
import CheckoutGTCareMonetizze from '../components/CheckoutGTCareMonetizze.vue';

export default {
  name: 'GoldenFitCaps',
  components: {
    RSPage,
    CheckoutGTCareMonetizze,
  },
  data() {
    return {
      modotela: 'rs',
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20gesta%20care%20e%20gostaria%20de%20atendimento',
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
.bg-2 {
  background-image: url('/img/gestacare/bg-2.jpg');
}
.heading-title {
  color: #263F5D;
  max-width: 1100px;
}

.video-item {
  max-width: 700px;
  min-width: 240;
  min-height: 240px;
}

.bkblue {
  background-color: #9accee;
}

</style>
