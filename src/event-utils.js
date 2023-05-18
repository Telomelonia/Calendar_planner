let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Birthday',
    start: '2023-05-08',
  },
  {
    id: createEventId(),
    title: 'Orientation',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Meeting',
    start: todayStr + 'T12:30:00',
  },
];
export function createEventId() {
  return String(eventGuid++);
}
