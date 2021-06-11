import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/itemList';
import styles from '../styles/Home.module.css'

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>Home | 박두산천재</title>
        <meta name="description" content="박두산 집입니다." ></meta>
      </Head>
        <>
          <Header as='h3' style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)}></ItemList>
          <Header as='h3' style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)}></ItemList>
        </>
    </div>
  );
}

//정적 생성은 getStaticProps
export async function getStaticProps() {

  const apiUrl = process.env.apiUrl;
  console.log("apiUrl", apiUrl)
  const res = await axios.get(apiUrl);
  const data = res.data;

  console.log("data", data);
  console.log("apiUrl", apiUrl);

  return {
      props: {
          list: data,
          name: process.env.name
      },
  }

}
