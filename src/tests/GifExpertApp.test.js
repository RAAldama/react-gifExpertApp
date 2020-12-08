import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Test on <GifExpertApp />', () => {
    
    test('should show <GifExpertApp /> correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show a list of categories', () => {
        
        const categories = ['Pikachu', 'Eevee'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();

        const gifGridQuantity = wrapper.find('GifGrid').length;
        expect(gifGridQuantity).toBe(categories.length);

    })
    
    
})
