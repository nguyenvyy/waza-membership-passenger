import {
	STOP_REQUEST,
	SEND_REQUEST,
	RECEIVE_USER,
	RECEIVE_WALLTET,
	RECEIVE_REWARD,
	CLEAR_AUTH
} from '../actions/auth/types';
const initState = {
	user: {
		signinCount: 98,
		_id: '5dcd4221d1fc286fcb7a32ec',
		email: 'nguyenvy@gmail.com',
		image:
			'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/c15.0.60.60a/p60x60/54277795_174411110210809_864931466235084800_n.jpg?_nc_cat=106&_nc_oc=AQkakh09ZlyyAvJjHEOMQquwb3msRxVs8KDatvfPkZ_GQRPQtMudBLjp6y7MxueR5G9iOK-cGwnCPgjgkvXfvx5u&_nc_ht=scontent.fsgn5-6.fna&oh=ef7b253e3e46a6f309ec6eed40b4a1eb&oe=5E48E9D5',
		phone: '0373671713',
		fullName: 'Nguyên Vy',
		createdAt: '2019-11-14T12:01:37.861Z',
		updatedAt: '2019-11-16T02:50:19.901Z',
		__v: 0,
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNkNDIyMWQxZmMyODZmY2I3YTMyZWMiLCJpYXQiOjE1NzM4NzI2MTl9.WPxUq6UuWFGe0NVDDJh6Hgl_pT7C8loh18M1bbjiNU4'
	},
	wallet: {
		balance: 4000000,
		id: 'x'
	},
	reward: {
		point: 1000,
		id: 2
	},
	isLoggedIn: true,
	isLoading: false
};

export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case STOP_REQUEST:
			return {
				...state,
				isLoading: false
			};
		case SEND_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case RECEIVE_USER:
			return {
				...state,
				user: { ...action.user },
				isLoggedIn: true
			};
		case RECEIVE_WALLTET:
			return {
				...state,
				wallet: { ...action.wallet }
			};
		case RECEIVE_REWARD:
			return {
				...state,
				reward: action.reward
			};
		case CLEAR_AUTH:
			return {
				...initState
			};
		default:
			return state;
	}
};
