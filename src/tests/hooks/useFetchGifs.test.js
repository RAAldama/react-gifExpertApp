import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Tests on useFetchGifs Hook', () => {
    
    test('should return a initial state', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('eevee'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('should return an array of img and loading must be false', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('eevee'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
    
})
