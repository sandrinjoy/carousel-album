import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import React, { useState } from "react";
import AlbumCarousel from "../components/AlbumCarousel";

export async function getStaticProps(context) {
  const albumRes = await fetch("https://jsonplaceholder.typicode.com/albums");
  let albums = await albumRes.json();

  let newAlbums = albums.map((x) => {
    x.photos = [];
    return x;
  });

  const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = await photoRes.json();
  photos.map((x) => {
    const id = x.albumId.toString();
    newAlbums[x.albumId]?.photos.push(x);
  });

  return {
    props: { albums: newAlbums },
  };
}
export interface photosType {
  albumId: number | string;
  id: number | string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface albumType {
  userId: number | string;
  id: number | string;
  title: string;
  photos: photosType[];
}
const Home: React.FC<{ albums: albumType[] }> = ({ albums }) => {
  return (
    <>
      <Head>
        <title>Carousel Albums</title>
        <meta
          name="description"
          content="Kreditbee coding problem for carousel album"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-5 mx-auto bg-gray-300 ">
        <section className="flex flex-col gap-2 ">
          {albums.map((x, index) => {
            return (
              <div key={x.id} className="p-3 bg-white">
                <div className="flex flex-col items-start justify-center gap-3">
                  <h2 className="text-xl font-normal">{x.title}</h2>
                  <div className="flex items-start justify-start gap-3 font-light text-gray-600">
                    <span>id: {x.id}</span>
                    <span>userid: {x.userId}</span>{" "}
                  </div>
                  <hr className="w-full " />
                  {/* carousel list */}
                  <AlbumCarousel photos={x.photos} />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
export default Home;
