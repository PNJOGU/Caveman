import React from "react";
import Button from "./Components/Button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section>
        <h1>Background to trading</h1>
        <p>Trading as a discipline involves <strong>speculating</strong> on future price movements of specific financial instruments at a specific period of time. Traders use different <strong>probability</strong> based methods to predict prices of financial instruments at a specific time.Before we dive deep into <strong>trading psychology</strong>, a brief overview of fundamentals of trading is required</p>
        <Image src={'/trading.jpg'} alt="trading chart" width={300} height={300} />
      </section>
      <section>
        <h2>Core Trading Concepts</h2>
        <p>Financial instruments are distinguished into different asset classes such as <strong>options,futures,currencies trading,stocks,shares,derivatives,indices,criptocurrencies</strong>, e.t.c. These instruments  have unique characteristics that distinguishes one from the other. As a prospective trader, you will be required to get acquainted with the basics of whichever instrument you choose to invest in. Once you understand the subleities, you will be required to develop a trading plan to serve as a guide when trading in the market</p>
      </section>
      <section>
        <h3>Essential tools for trading</h3>
        <ul className="bgblue">
          <li>Retail broker. Must be a regulated broker within your jurisdiction e.g <strong>Capital Markets Authority(CMA)</strong>  in Kenya. <Link href={'https://licensees.cma.or.ke/'}>CMA website</Link></li>
          <li>Financial Capital</li>
          <li>Trading software like <Link href={'https://www.metatrader5.com/en'}>Metatrader 4 or 5</Link>. Subject to direction from the broker</li>
          <li>Trading plan</li>
          <li>Charting software like <Link href={'https://www.tradingview.com/'}>trading view</Link></li>
        </ul>
      </section>
      <section>
        <h2>Forex trading fundamentals</h2>
        <p>I have choosen forex trading as it is one I am currently conversant too, but the underlying principles are the same with other markets. Forex stands for foreign exchange,which refers to the exchange of one&apos;s currency for another currency based on the prevailing rate of the specific currency pair</p>
        <Image src={'/forex.jpg'} alt="forex currency pairs" width={300} height={300} />
      </section>
      <section>
        <h3>Currency pair</h3>
        <p>It is important to note that currencies are traded in pair such USD/KES or EUR/USD. The abbreviated words refer to currencies relating to subject countries such as USD for USA, KES for Kenya e.t.c. The first currency in the currency pair is the <strong>base currency</strong>  while the second currency in the currency pair is the <strong>quote currency</strong> . Base currency is always measured in <strong>one unit</strong> while the quote currency is measured according to the prevailing exchange rate.For example, if the currency pair is <strong>USD/KES</strong> exchanging at KES <strong>130.980</strong>, means for one US Dollar, you will be required to part with KES 130.980. Currencies pairs are traded 5 days/24 hours based on the different sessions such as Tokyo, New York, London e.t.c. Currency pairs are either quoted to <strong>5th</strong> or <strong>3rd</strong> decimal places. For example EUR/USD is quoted at 1.08815 while USD/KES is quoted at 130.981.</p>

      </section>
      <section>
        <h3>Pips & Pipettes</h3>
        <p>It is worth noting that profit and loss in forex markets are determined based on the number of pips or pipettes gained or lost in a single trade. A <strong>Pip</strong> is the smallest unit of price change of a currency pair usually the fourth decimal number in the currency pair. For example, if EUR/USD is trading currently at 1.08520 and 5 mins later, it is trading at 1.090020, means the currency pair increased by 5 pips. Vice versa applies to when the currency pair declines</p>
        <Image src={'/pip.jpg'} alt="forex currency pairs" width={300} height={300} />
        <p>A <strong>Pipette</strong> refers to the 3rd or 5th decimal number of currency pairs that a represent a fraction of a pip <strong>(1/10 of a pip)</strong>. For example if EUR/USD is trading at 1.08818,the last number 8 is the pipette value. In exceptional circumstances such as in <strong>USD/JPY </strong>and other Japanase YEN quoted currencies,  pipette refers to the 3rd decimal number such as number 1 in USD/JPY at rate 130.981 </p>
        <p className="bgblue">Note: 10 pipettes cumulatively add up to one I pip</p>
      </section>
      <section>
        <h3> Market Orders</h3>
        <p>There are a number of orders that a trader can use to submit trades to the foreign exchange.</p>
        <ul className="bgblue">
          <li>Market execution- refers to placing trades at current time.</li>
          <li>Buy limit order- means placing a buy order at a lower price relative to current price. e.g if current price of EUR/USD is 1.08825 and you want to buy the currency when the price declines to 1.08800, a buy limit order will suffice</li>
          <li>Buy stop order- entails placing buy orders above the current price and when price reaches that point, a buy order will be executed at that price</li>
          <li>Sell limit order- means placing sell order at a higher price relative to current price. e.g if current price of EUR/USD is 1.08825 and you want to sell the currency when the price appreciates to 1.08850, a sell limit order will be required for order to be executed</li>
          <li>Sell stop order- refers to placing orders below the current price and when price reaches that point, a sell order will be executed at that price</li>
          <li>Stop loss order- relates to risk management techiques. Required to protect the trader&apos;s capital from being completely wiped off if the speculation goes south</li>
        </ul>
        <Image src={'/orders.png'} alt="forex currency pairs" width={385} height={385} />
        <p>Most of the time you will using market execution order to place trades at right positions</p>
      </section>
      <section>
        <h2>How to trade</h2>
        <p>Basically, markets move either <strong>up,down,or sideways</strong>. Even before you begin taking positions, you will need to get a picture of the overall trend of the market either weekly or daily chart. As the ancient trading axiom states, <strong>&apos;The trend is your friend&apos;</strong>, it is your duty to make sure you trade in the direction of the trend as it will enhance your probability of winning.</p>
        <p>You will be required to learn basic techniques of trading such as analysing price and candlesticks charts, indicators and tools provided in the Charting software you use. Ultimately, your goal should be <strong>determining which methodology works for you and to consitently stick to your plan to achieve consistent results</strong>.</p>
        <div>
          <h3>Basics of a trading plan</h3>
          <p>Ideally, below information should not be misconstrued as the perfect trading plan to follow rather act as guide when you are developing you own trading system. Below are some of the ideas you can use to develop your own trading plan</p>
          <ul className="bgblue">
            <li>Risk management. You definetly need to determine your risk/reward ratio when placing a trade. How much you are willing to risk to find out if your trade is going to work and get profit, or lose if it turns out to be a losing trade</li>
            <li>How many trades you will take for a specific time period?</li>
            <li>Which criteria or methodology you will follow to determine the edge in the market. Edge means a higher probability of your trade being a winner after back-testing in a demo account</li>
            <li>Acquisition of a trader&apos;s mindset. This is very vital for a successful trading career.Learning to think in probabiliies</li>
            <li>Which market sessions you will trade and for how long?</li>
            <li>Your take profit strategy in case you find yourself in a winning trade</li>
          </ul>
        </div>
        <p className="bgblue">Always remember their you are neither a winner nor a loser rather you landed on the right or wrong side of probability relative to you and it doesn&apos;t define who you are. Goodluck in your journey</p>
      </section>
      <section >
        <Button lname="Psychology" name="Trading psychology" />
      </section>
    </main>
  );
}
