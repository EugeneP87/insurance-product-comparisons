import { AnswersList } from 'components';

export default {
	title: 'Components/AnswersList',
	component: AnswersList,
	tags: ['autodocs'],
	argTypes: {
		title: {
			description: 'Заголовок списка',
			type: 'string',
			control: { type: 'text' },
		},
		data: {
			name: 'Входящие данные',
			description: 'Массив с объектами ответов на вопросы.',
			type: 'array',
			control: { control: 'object' },
		},
		mode: {
			type: 'string',
			description: 'Селектор стиля компонента.',
			options: ['default'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (args) => <AnswersList {...args} />;

const arrayDefault = [
	{
		id: '123',
		title: 'В чем отличие КАСКО от ОСАГО?',
		content: `Нет однозначного ответа, какая страховка лучше, поэтому, если есть возможность, стоит оформить оба полиса. Преимущество такого страхования – защита автомобиля по максимуму.
	В случае ДТП ОСАГО покроет ремонт машины потерпевшей стороны, а КАСКО обеспечит компенсацию повреждений транспорта владельца полиса, даже если виновником аварии является именно он.
	Кроме того, выбора оформлять ОСАГО или нет у автолюбителя не имеется.`,
	},
	{
		id: '1',
		title: 'В чем отличие КАСКО от ОСАГО?',
		content: `Нет однозначного ответа, какая страховка лучше, поэтому, если есть возможность, стоит оформить оба полиса. Преимущество такого страхования – защита автомобиля по максимуму.
	В случае ДТП ОСАГО покроет ремонт машины потерпевшей стороны, а КАСКО обеспечит компенсацию повреждений транспорта владельца полиса, даже если виновником аварии является именно он.
	Кроме того, выбора оформлять ОСАГО или нет у автолюбителя не имеется.`,
	},
	{
		id: '2',
		title: 'В чем отличие КАСКО от ОСАГО?',
		content: `Нет однозначного ответа, какая страховка лучше, поэтому, если есть возможность, стоит оформить оба полиса. Преимущество такого страхования – защита автомобиля по максимуму.
	В случае ДТП ОСАГО покроет ремонт машины потерпевшей стороны, а КАСКО обеспечит компенсацию повреждений транспорта владельца полиса, даже если виновником аварии является именно он.
	Кроме того, выбора оформлять ОСАГО или нет у автолюбителя не имеется.`,
	},
	{
		id: '3',
		title: 'В чем отличие КАСКО от ОСАГО?',
		content: `Нет однозначного ответа, какая страховка лучше, поэтому, если есть возможность, стоит оформить оба полиса. Преимущество такого страхования – защита автомобиля по максимуму.
	В случае ДТП ОСАГО покроет ремонт машины потерпевшей стороны, а КАСКО обеспечит компенсацию повреждений транспорта владельца полиса, даже если виновником аварии является именно он.
	Кроме того, выбора оформлять ОСАГО или нет у автолюбителя не имеется.`,
	},
];

export const Default = Template.bind({});
Default.args = {
	title: 'Вопросы и ответы:',
	data: arrayDefault,
	mode: 'default',
};