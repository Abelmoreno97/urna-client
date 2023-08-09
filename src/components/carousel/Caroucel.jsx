import style from './Caroucel.module.css'; // Crea este archivo para estilizar el carrusel

const images = [
    "https://static.eldiario.es/clip/64c261f9-31fa-421d-812f-b97f0c4e20d6_16-9-discover-aspect-ratio_default_0.jpg",
    "https://live-production.wcms.abc-cdn.net.au/938406c9303e5eab5cd3efc35e103dc2?impolicy=wcms_crop_resize&cropH=1069&cropW=1607&xPos=153&yPos=0&width=862&height=575",
    "https://fotografias.lasexta.com/clipping/cmsimages02/2017/12/08/78E885F1-18CA-45C1-98D0-416390B5D8F9/104.jpg?crop=3712,3712,x1014,y0&width=1200&height=1200&optimize=low&format=webply",
    "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_389,w_590/https%3A%2F%2Fplayingfor90.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1245714159-850x560.jpeg",
    "https://cdn1.edgedatg.com/aws/v2/abc/OscarsOnABC/tile/3720923/77b21e3f0c9b0af4adb2d16e30ab9d61/375x375-Q90_77b21e3f0c9b0af4adb2d16e30ab9d61.jpg",
    "https://nypost.com/wp-content/uploads/sites/2/2022/10/1388161660.jpg?quality=75&strip=all&w=1024",
  ];
const Carousel = () =>
{
  return (
    <div className={style.visor}>
        <div className={style.opacity}></div>
    <div className={style.wrapper}>
      {images.map((img, i) => (
        <img key={i} className={style.img} src={img} />
      ))}
    </div>
  </div>
  );
};

export default Carousel;