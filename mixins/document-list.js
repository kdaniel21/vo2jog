export default {
  data() {
    return {
      defaultIcon: { icon: 'file' },
      iconMap: [
        { icon: 'file-word', extensions: ['.doc', '.docx', '.odt'] },
        { icon: 'file-pdf', extensions: ['.pdf'] },
        { icon: 'file-excel', extensions: ['.xls', '.xlsx', '.ods'] },
        { icon: 'file-powerpoint', extensions: ['.ppt', '.pptx'] },
      ],
    };
  },
  computed: {
    documentsWithIcons() {
      const { documents } = this;

      return documents.map(doc => {
        const url = `${this.$config.staticUrl}/events/docs/${doc.file}`;
        const extension = '.' + doc.file.split('.').pop();
        const icon =
          this.iconMap.find(icon => icon.extensions.includes(extension)).icon ||
          this.defaultIcon;

        return { ...doc, icon, url };
      });
    },
  },
};
