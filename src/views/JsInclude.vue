<template>
  <div class="hello">
    <div id="render-directly" />
    <div id="render-with-function" />
  </div>
</template>

<script>
export default {
  name: 'JsInclude',
  beforeMount() {
    const { head } = document;
    const script = document.createElement('script');
    head.appendChild(script);
    script.id = 'doors-wizard';
    script.src = 'http://localhost:7070/doosWizard.umd.js?targetId=render-directly';
    script.onload = () => {
      window.doosWizard.renderer.vue('#render-with-function');
    };
  },
};
</script>
