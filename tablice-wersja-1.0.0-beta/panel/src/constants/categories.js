import iconDashboard from '../assets/dashboard.png'
import iconSlider from '../assets/slider.png'
import iconTable from '../assets/table.png'
import iconHeader from '../assets/header.png'
import iconAnnouncements from '../assets/announcements.png'
import iconSettings from '../assets/settings.png'
import iconUsers from '../assets/users.png'

export const CATEGORIES = [
	{
		title: 'Strony',
		list: [
			{
				title: 'Panel',
				path: '/panel',
				icon: iconDashboard,
			},
			{
				title: 'Nagłówek',
				path: '/panel/naglowek',
				icon: iconHeader,
			},
			{
				title: 'Zastępstwa',
				path: '/panel/zastepstwa',
				icon: iconTable,
			},
			{
				title: 'Slider',
				path: '/panel/slider',
				icon: iconSlider,
			},
			{
				title: 'Ogłoszenia',
				path: '/panel/ogloszenia',
				icon: iconAnnouncements,
			},
			{
				title: 'Sale',
				path: '/panel/sale',
				icon: iconTable,
			},
		],
	},
	{
		title: 'Opcje',
		list: [
			{
				title: 'Użytkownicy',
				path: '/panel/uzytkownicy',
				icon: iconUsers,
			},
			{
				title: 'Ustawienia',
				path: '/panel/ustawienia',
				icon: iconSettings,
			},
		],
	},
]

export const NAME_CONVERSION = {
	naglowek: 'nagłówek',
	zastepstwa: 'zastępstwa',
	ogloszenia: 'ogłoszenia',
	uzytkownicy: 'użytkownicy',
	slider: 'slider',
	panel: 'panel',
	sale: 'sale',
	ustawienia: 'ustawienia',
	dodaj: 'dodaj użytkownika',
}

export const REPLACEMENTS = [
	{ title: 'Lekcja', key: 0 },
	{ title: 'Nauczyciel', key: 1 },
	{ title: 'Odział', key: 2 },
	{ title: 'Przedmiot', key: 3 },
	{ title: 'Sala', key: 4 },
	{ title: 'Zastępca', key: 5 },
	{ title: 'Okres', key: 6 },
]

export const USER_NAME_TABLE = [
	{ title: 'Avatar', key: 0 },
	{ title: 'Imię', key: 1 },
	{ title: 'Nazwisko', key: 2 },
	{ title: 'Login', key: 3 },
	{ title: 'Email', key: 4 },
	{ title: 'Admin', key: 5 },
	{ title: 'Akcje', key: 6 },
]
