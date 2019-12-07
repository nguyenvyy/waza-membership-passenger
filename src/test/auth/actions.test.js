import * as types from "../../redux/actions/auth/types";
import * as actions from "../../redux/actions/auth/actions";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('US27 start send request login', () => {
    it('SendRequest01', () => {
        const expectAction = {
            type: types.SEND_REQUEST
        }
        expect(actions.sendRequest()).toEqual(expectAction)
    })
})

describe('US27 stop send request login', () => {
    it('UTCID01', () => {
        const expectAction = {
            type: types.STOP_REQUEST
        }
        expect(actions.stopRequest()).toEqual(expectAction)
    })
})

describe('US27 Save user info', () => {
    it('UTCID01', () => {
        const user = {
            "image": "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/c15.0.60.60a/p60x60/54277795_174411110210809_864931466235084800_n.jpg?_nc_cat=106&_nc_oc=AQkakh09ZlyyAvJjHEOMQquwb3msRxVs8KDatvfPkZ_GQRPQtMudBLjp6y7MxueR5G9iOK-cGwnCPgjgkvXfvx5u&_nc_ht=scontent.fsgn5-6.fna&oh=ef7b253e3e46a6f309ec6eed40b4a1eb&oe=5E48E9D5",
            "signinCount": 341,
            "Score": 0,
            "Rank": 0,
            "_id": "5dcd4221d1fc286fcb7a32ec",
            "email": "nguyenvy@gmail.com",
            "phone": "0373671713",
            "fullName": "Nguyên Vy"
        }
        const expectAction = {
            type: types.RECEIVE_USER,
            user: user
        }
        expect(actions.receiveUser(user)).toEqual(expectAction)
    })
})

describe('US27 send request login', () => {
    let store
    beforeEach(() => {
        store = mockStore({
            user: null,
            wallet: {
                balance: 0,
                id: 'x'
            },
            reward: null,
            isLoggedIn: false,
            isLoading: false
        });
    });
    it('UTCID01', () => {
        const user = {
            "image": "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/c15.0.60.60a/p60x60/54277795_174411110210809_864931466235084800_n.jpg?_nc_cat=106&_nc_oc=AQkakh09ZlyyAvJjHEOMQquwb3msRxVs8KDatvfPkZ_GQRPQtMudBLjp6y7MxueR5G9iOK-cGwnCPgjgkvXfvx5u&_nc_ht=scontent.fsgn5-6.fna&oh=ef7b253e3e46a6f309ec6eed40b4a1eb&oe=5E48E9D5",
            "signinCount": 341,
            "Score": 0,
            "Rank": 0,
            "_id": "5dcd4221d1fc286fcb7a32ec",
            "email": "nguyenvy@gmail.com",
            "phone": "0373671713",
            "fullName": "Nguyên Vy",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNkNDIyMWQxZmMyODZmY2I3YTMyZWMiLCJpYXQiOjE1NzU1NTQ0MDd9.DQ4cIoJ3zw5ClhrcvhU7fCVqT__MWTtoPSy8zjBiuEg"
        }
        const email = 'nguyenvy@gmail.com'
        const password = 'nguyenvy'
        const expectedActions = [
            { type: types.SEND_REQUEST },
            { type: types.RECEIVE_USER, user },
            { type: types.STOP_REQUEST }
        ]

        return store.dispatch(actions.requestLogin(email, password)).then((e) => {
            expect(store.getActions()).toEqual(expectedActions)
            expect(e).toBeDefined()
            expect(e).toEqual(200)
        })
    })
    it('UTCID02', () => {
        const email = 'invalid@gmail.com'
        const password = 'nguyenvy'
        const expectedActions = [
            { type: types.SEND_REQUEST },
            { type: types.STOP_REQUEST }
        ]

        return store.dispatch(actions.requestLogin(email, password)).then((e) => {
            expect(store.getActions()).toEqual(expectedActions)
            expect(e).toBeDefined()
            expect(e).toEqual(400)
        })
    })
})