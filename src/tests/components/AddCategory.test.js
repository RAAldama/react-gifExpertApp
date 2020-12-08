import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';

describe('Test on <Add Category />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the input text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value } });
        
        const para = wrapper.find('p').text().trim();
        expect(para).toBe(value);
    })

    test('should not post the info onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call the setCategories and clear the text box', () => {
        const value = 'OwO';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe('');
    })

})
