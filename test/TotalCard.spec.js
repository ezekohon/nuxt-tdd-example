import { mount } from '@vue/test-utils';
import TotalCard from '@/components/TotalCard'

let wrapper = null;

const props = {
    price: 21
};

beforeEach(() => {
    wrapper = mount(TotalCard, {
        propsData: {
            price: props.price
        }
    });
})

afterEach(() => {
    wrapper.destroy();
})

describe('TotalCard', () => {
    it('renders total price', () => {
        expect(wrapper.find('.card-footer-item').text()).toContain(props.price)
    })

    it('matches snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})