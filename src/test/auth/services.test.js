import { loginAPI, getUserInfoAPI } from "../../redux/actions/auth/service";
import { getFullRank } from "../../redux/actions/rank-actions/services";

describe('US26 auth API of waza-core service', () => {
    it('Login_UTCID01', () => {
        const expectData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNkNDIyMWQxZmMyODZmY2I3YTMyZWMiLCJpYXQiOjE1NzU1NTQ0MDd9.DQ4cIoJ3zw5ClhrcvhU7fCVqT__MWTtoPSy8zjBiuEg'
        return loginAPI('nguyenvy@gmail.com', 'nguyenvy').then(res => {
            expect(res).toBeDefined()
            expect(res).toEqual(expectData)
        })
    })
    it('Login_UTCID02', () => {
        const expectData = {
            message: 'email or passoword is incorrect'
        }
        return loginAPI('invalid@gmail.com', 'nguyenvy').then(res => {
            expect(res.response).toBeDefined()
            expect(res.response.data).toEqual(expectData)
        })
    })
})

describe('US38 get user info by id', () => {
    it('UTCID01', () => {
        const expectData = {
            "image": "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/c15.0.60.60a/p60x60/54277795_174411110210809_864931466235084800_n.jpg?_nc_cat=106&_nc_oc=AQkakh09ZlyyAvJjHEOMQquwb3msRxVs8KDatvfPkZ_GQRPQtMudBLjp6y7MxueR5G9iOK-cGwnCPgjgkvXfvx5u&_nc_ht=scontent.fsgn5-6.fna&oh=ef7b253e3e46a6f309ec6eed40b4a1eb&oe=5E48E9D5",
            "signinCount": 341,
            "Score": 0,
            "Rank": 0,
            "_id": "5dcd4221d1fc286fcb7a32ec",
            "email": "nguyenvy@gmail.com",
            "phone": "0373671713",
            "fullName": "Nguyên Vy"
        }
        return getUserInfoAPI('5dcd4221d1fc286fcb7a32ece', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNkNDIyMWQxZmMyODZmY2I3YTMyZWMiLCJpYXQiOjE1NzU1NTQ0MDd9.DQ4cIoJ3zw5ClhrcvhU7fCVqT__MWTtoPSy8zjBiuEg')
            .then(res => {
                expect(res.data).toBeDefined()
                expect(res.data).toEqual(expectData)
            })
    })
    it('UTCID02', () => {
        const expectData = { "message": "passenger not found" }
        return getUserInfoAPI('ramdom', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNkNDIyMWQxZmMyODZmY2I3YTMyZWMiLCJpYXQiOjE1NzU1NTQ0MDd9.DQ4cIoJ3zw5ClhrcvhU7fCVqT__MWTtoPSy8zjBiuEg')
            .catch(err => {
                expect(err.response.data).toBeDefined()
                expect(err.response.data).toEqual(expectData)
            })
    })

})

describe('US38 get full rank from waza-reward service', () => {
    it('UTCID01', () => {
        const expectData = {
            "ranks": [
                {
                    "id": 1,
                    "name": "thành viên"
                },
                {
                    "id": 2,
                    "name": "bạc"
                },
                {
                    "id": 3,
                    "name": "vàng"
                }
            ]
        }
        return getFullRank()
            .then(res => {
                expect(res.data).toBeDefined()
                expect(res.data).toEqual(expectData)
            })
    })

})