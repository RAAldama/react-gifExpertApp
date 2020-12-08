import {getGifs} from "../../helpers/getGifs";

describe('Test on helpers/ getGifs', () => {
    
    test('should bring 10 elements', async() => {
      
        const gifs = await getGifs('eevee');

        expect(gifs.length).toBe(10);

    })

    test('should bring no elements', async() => {
      
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })

})
