export default function ({ store, redirect }) {
  if (!store.state.organizer.events.selectedEvent)
    return redirect('/organizers/dashboard');
}
