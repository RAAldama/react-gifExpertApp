import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {

    const category = 'eevee'
    
    test('should show <GifGrid /> correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show items when images are loaded with useFetchGif', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/any/thing.jpg',
            title: 'Cualquier cosilla'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category={category} /> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#loading').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    
})
