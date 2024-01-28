<template lang="pug">
h-page(padding)
  .row.justify-center.align-items-center(style="height: calc(100% - 100px)")
    .col-auto.text-center
      img(src="/img/site/imgtudocerto.png")
      br
      p.text-bold Tudo certo!
      p.text-gray Clique em continuar para ser direcionado para a página solicitada.
      img.cursor-pointer(src="/img/site/btntudocerto.png" @click="openUrl(afrogotars)")
</template>

<script>
export default {
  data() {
    return {
      afrogotars: 'https://app.monetizze.com.br/r/APM21063287',
    };
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
  },
};
</script>
