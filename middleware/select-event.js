export default function ({ store, $cookies }) {
  const selectedEventId = $cookies.get('selectedEventId');
  if (selectedEventId)
    return store.dispatch('organizer/events/selectEvent', selectedEventId);
}
