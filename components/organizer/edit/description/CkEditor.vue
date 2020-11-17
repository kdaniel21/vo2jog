<template>
  <div id="ck-editor">
    <client-only placeholder="Loading Editor...">
      <ckeditor
        v-model="editorData"
        :editor="editor"
        :config="editorConfig"
        @ready="prefill"
      ></ckeditor>
    </client-only>
  </div>
</template>

<script>
// Import CKEditor only on the client-side due to SSR issues
let CKEditor, ClassicEditor;
if (process.client) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
  CKEditor = require('@ckeditor/ckeditor5-vue');
} else {
  CKEditor = { component: { template: '<div></div>' } };
}

export default {
  name: 'CkEditor',
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    // Prefill data
    value: { type: String, default: null },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: null,
      editorConfig: {},
    };
  },
  watch: {
    editorData(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    prefill(editor) {
      editor.setData(this.parseToHtml(this.value));
    },
    parseToHtml(data) {
      return data.replace(/&lt;/g, '<');
    },
  },
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 60vh;
}
</style>
