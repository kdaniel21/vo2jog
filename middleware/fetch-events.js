export default async function ({ store }) {
  // Initialize store: fetch events
  await store.dispatch('organizer/events/fetchEvents');
}
