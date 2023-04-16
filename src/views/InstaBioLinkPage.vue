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

  .bkgreen(style="height: calc(100vh)")
    .row.justify-center
      .col.text-white.text-center

        <div class="text-h5 h-mt-md text-bold">
          | Escolha qual opção voce quer para Potencializar seu
          <b class="h-pl-xs" style="color: #a9c932; font-weight: 900">
            | Processo de Emagrecimento!
          </b>
        </div>

    .row.justify-center
      .col-auto(style="width: 300px")
        .column.full-width.h-pa-md.align-items-center
          h-btn.full-width(
            rounded
            text-color="text-white"
            bg-color="bg-green700"
            @click="openUrl('https://receitaslowcarb.edutuccimarketing.com.br/reclowcarb?plataforma=monetizze-67')"
            text="300 Receitas Low Carb + 6 Bonus"
          )

          h-btn.full-width.h-mt-md(
            rounded
            text-color="text-white"
            bg-color="bg-green700"
            @click="openUrl('https://receitaslowcarb.edutuccimarketing.com.br/gfc')"
            text="Golden Fit Caps"
          )

          h-btn.full-width.h-mt-md(
            rounded
            text-color="text-white"
            bg-color="bg-green700"
            @click="openUrl('https://app.monetizze.com.br/r/ASL22363958')"
            text="Golden Fit Shake"
          )

          h-btn.full-width.h-mt-md(
            rounded
            text-color="text-white"
            bg-color="bg-green700"
            @click="openUrl('https://app.monetizze.com.br/r/ASL22363958/?u=ZP71546')"
            text="Golden Fit Shake + Capsulas"
          )

          h-btn.full-width.h-mt-md(
            rounded
            text-color="text-white"
            bg-color="bg-green700"
            @click="openUrl('https://app.monetizze.com.br/r/AAK22569987/?u=RG74693')"
            text="Golden Fit Gotas"
          )

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
