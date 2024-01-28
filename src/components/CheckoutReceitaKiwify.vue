<template lang="pug">
h-card.bg-purple700(style="width:100%")
  h-card-section.text-center.text-white.h-pa-md
    .text-h5.text-bold 300 RECEITAS
    .text-h5.text-bold + 6 BONUS
    img(
      src="/img/300receitas/capa3d300receitas2.png" alt=""
      style="width:100%"
    )

    div(v-if="price === '97'")
      p.text-bold R$ 97 a vista ou por apenas:
      .text-h4.text-bold 12x de R$ 9,74
    div(v-else-if="price === '77'")
      p.text-bold R$ 77 a vista ou por apenas:
      .text-h4.text-bold 12x de R$ 7,73
    div(v-else-if="price === '67'")
      p.text-bold R$ 67 a vista ou por apenas:
      .text-h4.text-bold 12x de R$ 6,73
    div(v-else-if="price === '49'")
      p.text-bold R$ 49,90 a vista ou por apenas:
      .text-h4.text-bold 12x de R$ 5,01

  h-card-actions.text-center
    h-btn(
      rounded
      text="COMPRAR AGORA" text-color="text-white"
      bg-color="bg-green700"
      @click="openUrl(urlCheckout)"
    )
  h-card-section
    .h-mt-md.text-center
      img(src="/img/site/comprasegura.png" style="width: 100%")

</template>

<script>

export default {
  props: {
    price: String,
    src: String,
  },
  data() {
    return {
      urlCheckout: '',
      kit97: 'https://pay.kiwify.com.br/5DY1i2y',
      kit77: 'https://pay.kiwify.com.br/RskELHf',
      kit67: 'https://pay.kiwify.com.br/7qm8ogi',
      kit49: 'https://pay.kiwify.com.br/FQOkYvb',
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
      window.fbq('track', 'InitiateCheckout');
      window.open(url);
    },
  },
};
</script>
