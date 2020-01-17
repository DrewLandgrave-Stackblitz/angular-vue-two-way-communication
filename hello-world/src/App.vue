<template>
  <div style="border: 3px dashed green; padding: 5px">
    I am my-vue-web-comp.
    <br />
    Value of "msg" prop: {{ msg }}
    <br />
    <input v-model="text" />
    <button @click="addText">Click me</button>
    <div v-for="t in texts" v-bind:key="t">Text: {{ t }}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ['msg'],
  data() {
        return {
            text: '',
            texts: []
        };
    },
    methods: {
      addText() {
        this.texts.push(this.text);
        this.text = '';
      }
    }
};
</script>

