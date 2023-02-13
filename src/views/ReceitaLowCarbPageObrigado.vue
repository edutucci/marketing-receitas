<template lang="pug">
h-page
  .row
    .col.text-center
      .text-h5.text-bold.text-center 300 RECEITAS LOW CARB.

  .row.wrap.justify-center.align-items-center
    .text-center.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
      img(src="img/300receitas/capa3d300receitas2.png" style="width:100%")

  .h-pa-lg.text-center
    .text-h5.text-bold PARABÉNS.
    .text-h5.text-bold SEU PEDIDO FOI REALIZADO COM SUCESSO.

    br
    .text-h6.text-bold VOCÊ FEZ UM EXCELENTE ESCOLHA. SABEMOS QUE É MUITO DIFICIL MANTER A FORMA.

    br
    .text-h6.text-bold POR ISSO NÓS PREPARAMOS CARDAPIOS DESENVOLVIDOS POR NUTRICIONISTAS PRA TE AJUDAR.

  .bg-orange700.h-pa-lg
    .row.wrap.justify-center
      .col-auto
        h-btn(text="Atendimento" bg-color="bg-positive" text-color="text-white"
          @click="openUrl(whatsapp)"
        )
    .row.justify-center
      .col-auto
        p Seg a Sex 13:00 às 21:30hs
        p Sab e Dom 9:00 as 14:00hs

</template>

<script>
export default {
  name: '300Receitasobrigado',
  data() {
    return {
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20250%20receitas%20lowcarb%20e%20gostaria%20de%20atendimento',
    };
  },
  created() {
    this.trackPurchase();
  },
  methods: {
    trackPurchase() {
      try {
        window.fbq('track', 'Purchase', { value: 0.00, currency: 'BRL' });
      } catch (error) {
        console.log(error);
      }
    },
    openUrl(url) {
      window.open(url);
    },
  },
};
</script>
