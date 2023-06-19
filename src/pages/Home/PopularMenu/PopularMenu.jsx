import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <div>
            <SectionTitle
                heading={'From our menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-10 mb-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className=' mb-10 btn btn-outline border-0 border-b-4 text-center'>View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;