import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/something.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );
    
    test('should show <GifGridItem /> correctly', () => {   

        expect(wrapper).toMatchSnapshot();

    })
    

    test('should have a paragraph with text in the title', () => {
        
        const paragraph = wrapper.find('p');

        expect( paragraph.text().trim() ).toBe( title );

    })

    test('should have the image = to the url and alt of the props', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('should have class animated__fadeIn', () => {
        
        const div = wrapper.find('div');

        expect( div.prop('className').includes('animate__fadeIn') ).toBe(true);

    })
    
})
