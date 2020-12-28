import { ToastProgrammatic as Toast } from 'buefy';

export default (ctx, inject) => {
  inject('toast', {
    success: message =>
      Toast.open({ message, type: 'is-success', duration: 3000 }),
    error: message =>
      Toast.open({ message, type: 'is-danger', duration: 4000 }),
    warning: message =>
      Toast.open({ message, type: 'is-warning', duration: 4000 }),
  });
};
