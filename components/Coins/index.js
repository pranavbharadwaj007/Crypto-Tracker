import Styles from './Coin.module.css';
import Link from 'next/link';
function Coins({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) {
  console.log("id",id);

  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
  <a>

 
    <div className={Styles.coin_container}>
      <div className={Styles.coin_row}>
        <div className={Styles.coin}>
          <img src={image} alt={name} className={Styles.coin_img} />
          <h1 className={Styles.coin_h1}>{name}</h1>
          <p className={Styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={Styles.coin_data}>
          <p className={Styles.coin_price}>${price.toLocaleString()}</p>
          <p className={Styles.coin_volume}>${volume.toLocaleString()}</p>
          {priceChange < 0 ? 
           (<p className={Styles.coin_percent ,Styles.red}>{priceChange.toFixed(2)}%</p>)
          : (
            <p className={Styles.coin_percent ,Styles.green}>{priceChange.toFixed(2)}%</p>
          )}
          <p className={Styles.coin_marketCap}>
                Mkt Cap : ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    </a>
    </Link>
  );
}

export default Coins;
