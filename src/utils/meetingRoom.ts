export const EQUIPMENT_LABELS: Record<string, string> = {
  tv: 'TV',
  whiteboard: '화이트보드',
  video: '화상장비',
  speaker: '스피커',
};

export const ALL_EQUIPMENT = ['tv', 'whiteboard', 'video', 'speaker'];

export const TIME_SLOTS: string[] = [];

for (let hour = 9; hour <= 20; hour++) {
  TIME_SLOTS.push(`${String(hour).padStart(2, '0')}:00`);

  if (hour < 20) {
    TIME_SLOTS.push(`${String(hour).padStart(2, '0')}:30`);
  }
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
