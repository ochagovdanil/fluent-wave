import danilkaRound from '@assets/danilka-round.webp';
import danilkaFull from '@assets/danilka-full.webp';
import lizkaRound from '@assets/lizka-round.webp';
import lizkaFull from '@assets/lizka-full.webp';

type OurTeamArrayType = {
	id: number;
	roundSrc: string;
	fullSrc: string;
	fullname: string;
	position: string;
	emoji: number;
}[];

const ourTeamArray: OurTeamArrayType = [
	{
		id: 1,
		roundSrc: lizkaRound,
		fullSrc: lizkaFull,
		fullname: 'Лемешева Елизавета',
		position: 'Преподаватель',
		emoji: 0x1f451,
	},
	{
		id: 2,
		roundSrc: danilkaRound,
		fullSrc: danilkaFull,
		fullname: 'Очагов Данил',
		position: 'Frontend разработчик',
		emoji: 0x26a1,
	},
];

export default ourTeamArray;
