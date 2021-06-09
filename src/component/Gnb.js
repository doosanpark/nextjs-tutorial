import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react'

export default function Gnb() {
    const router = useRouter();
    console.log(router);
    let activeItem;

    if (router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    } else if (router.pathname === "/contact") {
        activeItem = "contact";
    }

    function goLink(e, data) {
        if (data.name === 'home') {
            router.push("/");   //SPA 방식으로 페이지 전환
            //location.href="/" //페이지가 새로고침 돼서 이동함.
        } else if (data.name === 'about') {
            router.push("/about");
        } else if (data.name === 'Contact Us') {
            router.push("/contact");
        }
    }

    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={goLink}
            />

            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={goLink}
            />

            <Menu.Item
                name='Contact Us'
                active={activeItem === 'contact'}
                onClick={goLink}
            />
        </Menu>
    );

}