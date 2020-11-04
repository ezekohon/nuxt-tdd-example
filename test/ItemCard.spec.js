import { mount } from '@vue/test-utils';
import ItemCard from '@/components/ItemCard'

let wrapper = null;

const props = {
    itemData: {
        title: 'title',
        price: 21,
        buyed: false
    }
};

beforeEach(() => {
    wrapper = mount(ItemCard, {
        propsData: {
            itemData: props.itemData
        }
    });
})

afterEach(() => {
    wrapper.destroy();
})

describe('ItemCard.vue', () => {

    it('renders title ', () => {
        expect(wrapper.find(".card-header-title").text()).toBe(props.itemData.title);
    })

    it('renders price ', () => {
        expect(wrapper.find(".card-footer-item").text()).toContain(props.itemData.price);
    })

    it('has red background if not buyed', () => {

        expect(wrapper.find(".card-footer").classes()).toContain('card-footer--not-buyed');
    })

    it('has green background if buyed', () => {
        const props = {
            itemData: {
                title: 'title',
                price: 21,
                buyed: true
            }
        };

        wrapper = mount(ItemCard, {
            propsData: {
                itemData: props.itemData
            }
        });

        expect(wrapper.find(".card-footer").classes()).toContain('card-footer--buyed');
    })

    it('matches snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})