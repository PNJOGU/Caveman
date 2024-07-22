import React from 'react'
import Link from 'next/link'
function Livetrading() {
  return (
    <main>
      <h2>Disclaimer</h2>
      <section className='bgblue'>
        Every content available on this site is purely for informational purposes ,and should not be misconstrued as investment, financial, professional or any other advice as perceived by the reader. Information on our website does not constitute any solicitation, recommendation,inducement, endorsement to any third party service provider for reasons such as to buy or sell securities, commodities, or any financial instruments. Caveman is not a fiduciary by virtue of any person&apos;s use of content available on this website and content. Materials, content present herein is subject to change anytime without notice ,and as such, no reliance should be placed on accuracy, completeness of any information available on this site.
        You assume the sole responsibility of analysing and evaluating all merits and risks that may be associated with any use of any information or content found on this site. In exchange of using the website for reasons known to you, you agree not to hold Caveman and any third party service provider(s), liable for any possible claim for losses or damages arising from any decision you may have made based on the information or material made available to you on this website. Investing in financial instruments is risky and often result in loss of capital and emotional trauma. Beware!
      </section>
      <section>
        <p>Join us on telegram for more updates relating to day trading particularly EUR/USD currency pair</p>
        <Link href={'https://t.me/+NnnIQM6aqls4NzBk'}>
          <button>Caveman Telegram group</button>
        </Link>
      </section>
    </main>
  )
}

export default Livetrading