import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import drinksImg from '../../../assets/menu/summer-drinks-banner.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            {/* offered menu */}
            <MenuCategory items={offered} title={'offered'} coverImg={menuImg}></MenuCategory>
            {/* dessert menu */}
            <MenuCategory items={dessert} title={'dessert'} coverImg={dessertImg}></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaImg}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title={'salad'} coverImg={saladImg}></MenuCategory>
            {/* soup menu */}
            <MenuCategory items={soup} title={'soup'} coverImg={soupImg}></MenuCategory>
            {/* drinks menu */}
            <MenuCategory items={drinks} title={'drinks'} coverImg={drinksImg}></MenuCategory>
        </div>
    );
};

export default Menu;