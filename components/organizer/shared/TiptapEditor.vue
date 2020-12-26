<template>
  <client-only>
    <div id="tiptap-editor">
      <editor-menu-bar
        v-slot="{ commands, isActive, getMarkAttrs }"
        :editor="editor"
      >
        <b-field>
          <p
            v-for="{ name, icon, param, text, nonActive, handler } in features"
            :key="text || name"
            class="control"
          >
            <b-button
              :icon-left="icon || name"
              :active="!nonActive ? isActive[name](param) : null"
              @click="handler ? handler : commands[name](param)"
            >
              <span v-if="text">{{ text }}</span>
            </b-button>
          </p>
        </b-field>
      </editor-menu-bar>

      <editor-content class="textarea" :editor="editor" />
    </div>
  </client-only>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
} from 'tiptap-extensions';

export default {
  name: 'TiptapEditor',
  components: { EditorContent, EditorMenuBar },
  props: {
    value: { type: String, default: null },
  },
  data() {
    return {
      editor: null,
      features: [
        { name: 'bold' },
        { name: 'italic' },
        { name: 'strike', icon: 'strikethrough' },
        { name: 'underline' },
        { name: 'paragraph' },
        { name: 'heading', param: { level: 1 }, text: '1' },
        { name: 'heading', param: { level: 2 }, text: '2' },
        { name: 'heading', param: { level: 2 }, text: '3' },
        { name: 'link', handler: this.showLinkMenu },
        { name: 'bullet_list', icon: 'list-ul' },
        { name: 'ordered_list', icon: 'list-ol' },
        { name: 'blockqoute', icon: 'quote-right', nonActive: true },
        { name: 'horizontal_rule', icon: 'arrows-alt-h', nonActive: true },
        { name: 'undo', nonActive: true },
        { name: 'redo', nonActive: true },
      ],
    };
  },
  computed: {
    content: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Italic(),
        new Strike(),
        new Underline(),
        new Heading({ levels: [1, 2, 3] }),
        new Link(),
        new BulletList(),
        new ListItem(),
        new Blockquote(),
        new HardBreak(),
        new HorizontalRule(),
        new OrderedList(),
      ],
      content: this.$store.state.organizer.events.selectedEvent.description.replace(
        /&lt;/g,
        '<'
      ),
    });
  },
  beforeDestroy() {
    if (this.editor) this.editor.destroy();
  },
  methods: {
    showLinkMenu() {
      this.$buefy.dialog.prompt({
        message: this.$t('organizer.shared.enter_url'),
        inputAttrs: {
          placeholder: this.$t('organizer.shared.url_placeholder'),
        },
      });
    },
  },
};
</script>

<style lang="scss">
#tiptap-editor {
  & > .textarea {
    height: auto;

    & > .ProseMirror {
      height: 100%;
      max-height: 40rem;
    }
    & > .ProseMirror:focus-visible {
      outline: none;
    }
  }
}
</style>
