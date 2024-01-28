<template lang="pug">
.column.bkgreen
  .col
    iframe(src="https://app.monetizze.com.br/r/AEX21114149" width="100%" height="50px" style="border: none; padding: 0px; display: none")
  .col.text-h5.text-center.text-white.h-pa-md
    | ESCOLHA O KIT IDEAL PARA VOCÊ
  .col
    .row.justify-center
      .col-auto
        h-card(style="width:280px")
          h-card-section.text-center(style="background-color: lightgray")
            .text-h5.text-bold(style="color: #014327") COMPRE 1 POTE
            .text-body.text-bold(style="opacity: 0.7") Tratamento para 1 mês
          h-card-section.text-center
            img.cursor-pointer(
              src="/img/gfc/comprar1pote.png" alt=""
              style="width:80%"
              @click="openUrl(kit1p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")
  .col
    .row.justify-center
      .col-auto
        h-card.h-mt-md(style="width:280px")
          h-card-section.text-center(style="background-color: lightgray")
            .text-h5.text-bold(style="color: #014327") COMPRE 2 POTES
            .text-body.text-bold(style="opacity: 0.7") Tratamento para 2 meses
          h-card-section
            img.cursor-pointer(
              src="/img/gfc/comprar2potes.png" alt=""
              style="width:100%"
              @click="openUrl(kit2p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")

  .col
    .row.justify-center
      .col-auto
        h-card.h-mt-md(style="width:280px")
          h-card-section.text-center(style="background-color: lightgray")
            .text-h5.text-bold(style="color: #014327") COMPRE 3 POTES
            .text-body.text-bold(style="opacity: 0.7") Tratamento para 3 meses
          h-card-section
            img.cursor-pointer(
              src="/img/gfc/comprar3potes.png" alt=""
              style="width:100%"
              @click="openUrl(kit3p)"
            )

            .text-center
              img(src="/img/gfc/fretegratis1.png" style="width: 150px")
  .col
    .row.justify-center
      .col-auto
        h-card.h-mt-md(style="width:280px")
          h-card-section.text-center(style="background-color: lightgray")
            .text-h5.text-bold(style="color: #014327") COMPRE 5 POTES
            .text-body.text-bold(style="opacity: 0.7") Tratamento para 5 meses
          h-card-section
            img.cursor-pointer(
              src="/img/gfc/comprar5potes.png" alt=""
              style="width:100%"
              @click="openUrl(kit5p)"
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
      kit1p: 'https://app.monetizze.com.br/r/AEX21114149?u=c&pl=PK168068',
      kit2p: 'https://app.monetizze.com.br/r/AEX21114149?u=c&pl=DQ171342',
      kit3p: 'https://app.monetizze.com.br/r/AEX21114149?u=c&pl=UW171344',
      kit5p: 'https://app.monetizze.com.br/r/AEX21114149?u=c&pl=AX171345',
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
.bkgreen {
  background-color: #014327;
}
</style>
