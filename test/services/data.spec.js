import { fetchData, url } from '@/services/data'
import mockAxios from 'axios'

const data = [{
    "items": {
        "data": [
            {
                title: 'Hamburguesa',
                price: 21,
                buyed: false
            }
        ]
    }
}]

describe('data.js', () => {
    it('calls api succesfully', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [{
                    items: {
                        data: [
                            {
                                title: 'Hamburguesa',
                                price: 21,
                                buyed: false
                            }
                        ]
                    }
                }]
            })
        );

        const response = await fetchData()

        expect(response).toEqual(data)
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
        expect(mockAxios.get).toHaveBeenCalledWith(url)
    })
})
