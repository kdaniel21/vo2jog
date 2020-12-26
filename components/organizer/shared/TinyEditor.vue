<template>
  <div id="tiny-editor">
    <editor
      :api-key="apiKey"
      :value="value"
      :toolbar="toolbar"
      :plugins="plugins"
      @input="val => $emit('input', val)"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'TinyEditor',
  components: { Editor },
  props: { value: { type: String, default: null } },
  data() {
    return {
      apiKey: this.$config.tinyApiKey,
      plugins: 'link autolink wordcount lists emoticons table',
      toolbar:
        'bold italic underline emoticons | h1 h2 h3 formatselect | link numlist bullist alignleft aligncenter alignright | table | undo redo',
    };
  },
};
</script>

<style></style>
