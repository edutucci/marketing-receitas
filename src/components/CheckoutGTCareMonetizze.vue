<template lang="pug">
.column.full-width.bg-2
  .col
    iframe(src="https://app.monetizze.com.br/r/AMZ22602358" width="100%" height="50px" style="border: none; padding: 0px; display: none")
  .col.heading-title.text-bold.text-h3.text-center
      | Escolha a melhor  <span style="color:#fa1691">oferta para</span> você
  .col

    .row.wrap.justify-center
      .col-auto.h-mt-md.h-pa-sm
        h-card.card-prod
          h-card-section.text-center
            img.cursor-pointer(
              src="/img/gestacare/5p.png" alt=""
              style="width:100%"
              @click="openUrl(kit5p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")
      .col-auto.h-pa-sm.h-pa-sm
        h-card.h-mt-md.card-prod
          h-card-section
            img.cursor-pointer(
              src="/img/gestacare/2p.png" alt=""
              style="width:100%"
              @click="openUrl(kit2p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")

      .col-auto.h-pa-sm.h-pa-sm
        h-card.h-mt-md.card-prod
          h-card-section
            img.cursor-pointer(
              src="/img/gestacare/3p.png" alt=""
              style="width:100%"
              @click="openUrl(kit3p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")

      .col-auto.h-pa-sm.h-pa-sm
        h-card.h-mt-md.card-prod
          h-card-section
            img.cursor-pointer(
              src="/img/gestacare/1p.png" alt=""
              style="width:100%"
              @click="openUrl(kit1p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")

</template>

<script>

export default {
  props: {
    price: String,
    src: String,
  },
  data() {
    return {
      kit1p: 'https://app.monetizze.com.br/r/BRJ1658844?src=site',
      kit2p: 'https://app.monetizze.com.br/r/BPD1658841?src=site',
      kit3p: 'https://app.monetizze.com.br/r/BPD1658845?src=site',
      kit5p: 'https://app.monetizze.com.br/r/BNZ1658840?src=site',
    };
  },
  mounted() {
    switch (this.price) {
      case '97':
        this.urlCheckout = this.kit97;
        break;
      case '77':
        this.urlCheckout = this.kit77;
        break;
      case '67':
        this.urlCheckout = this.kit67;
        break;
      case '49':
        this.urlCheckout = this.kit49;
        break;
      default:
        this.urlCheckout = this.kit97;
        break;
    }

    this.urlCheckout = `${this.urlCheckout}${this.src}`;
  },
  methods: {
    openUrl(url) {
      try {
        window.fbq('track', 'InitiateCheckout');
        window.open(url);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="css">
.heading-title {
  color: #263F5D;
}

.card-prod {
  width: 280px;
}
</style>
