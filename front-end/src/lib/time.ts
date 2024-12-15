import { DateTime } from 'luxon';

export function format(timestamp: string, format: string) {
	const date = DateTime.fromSQL(timestamp);

	return date.setZone('Asia/Jakarta').setLocale('id').toFormat(format);
}

export const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'];

export function getDay(idx: string) {
	return days[parseInt(idx) - 1];
}
