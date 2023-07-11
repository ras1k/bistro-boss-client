import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-three-omega.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false)
    //         })
    // }, [])

    const {data: menu = [], isLoading: loading} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://bistro-boss-server-three-omega.vercel.app/menu');
            return res.json();
        }
    })

    return [menu, loading]
}

export default useMenu;