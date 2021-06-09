import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/item';

// const Post = () => {
//     const router = useRouter();
//     const {id} = router.query;

//     const [item, setItem] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
//     function getData(){
//         axios.get(API_URL).then((res)=>{
//             setItem(res.data);
//             setIsLoading(false);
//         })
//     }

//     useEffect(() => {
//         if(id && id > 0){
//             getData();
//         }
//     }, [id]);

//     return(
//         <>
//             {isLoading? (
//                 <div style={{padding: "300px 0"}}>
//                     <Loader inline="centered" active>
//                         Loading
//                     </Loader>
//                 </div>
//             ):(<Item item={item}/>)}
//         </>
//     );

// }
// export default Post;


const Post = ({ item, name }) => {
    return (
        <>
            {item &&
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content="박두산 집입니다." ></meta>
                    </Head>
                    {name}환경입니다.
                    <Item item={item} />
                </>
            }
        </>
    )
};

export default Post;

export async function getServerSideProps(context) {

    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    console.log("data", data);
    console.log("process.env.name", process.env.name);

    return {
        props: {
            item: data,
            name: process.env.name
        },
    }

}
