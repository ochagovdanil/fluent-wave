import boy from '@assets/boy.webp';
import maiden from '@assets/maiden.webp';
import man from '@assets/man.webp';
import oldman from '@assets/oldman.webp';
import girlAndBoy from '@assets/girl-and-boy.webp';
import maidenAndMan from '@assets/maiden-and-man.webp';
import oldmanAndMan from '@assets/oldman-and-man.webp';

const servicesIndividualList = [
	{
		id: 1,
		src: boy,
		title: 'С 1 по 4 классы',
		description: null,
		price: '800',
	},
	{
		id: 2,
		src: maiden,
		title: 'С 5 по 9 классы',
		description: null,
		price: '1100',
	},
	{
		id: 3,
		src: man,
		title: 'Подготовка к ОГЭ',
		description: null,
		price: '1400',
	},
	{
		id: 4,
		src: oldman,
		title: 'Подготовка к ЕГЭ',
		description: null,
		price: '1800',
	},
];

const servicesGroupList = [
	{
		id: 1,
		src: girlAndBoy,
		title: 'С 1 по 4 классы',
		description: '2-3 человека',
		price: '450',
	},
	{
		id: 2,
		src: maidenAndMan,
		title: 'Подготовка к ОГЭ',
		description: '5-6 человек',
		price: '700',
	},
	{
		id: 3,
		src: oldmanAndMan,
		title: 'Подготовка к ЕГЭ',
		description: '5-6 человек',
		price: '900',
	},
];

export { servicesIndividualList, servicesGroupList };
