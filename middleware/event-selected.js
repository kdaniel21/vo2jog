export default function ({ store, redirect }) {
  if (!store.state.organizer.selectedEvent) {
    return redirect('/organizers/dashboard');
  }
}
