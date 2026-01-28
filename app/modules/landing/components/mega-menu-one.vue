<template>
  <!-- <div class="mega-menu"> -->
    <div class="flex items-start bg-white rounded-xl w-fit">
      <div class="mega-menu-column">
        <ul class="mega-menu-list">
          <li class="megaTablinks" data-menu="mainDemo">
            <a class="" href="/">Main Demo</a>
          </li>
          <li class="megaTablinks" data-menu="CustomerService">
            <a class="" href="/customer-service">Customer Service</a>
          </li>
          <li class="megaTablinks" data-menu="Team">
            <a class="" href="/team-collaboration">Team Collaboration</a>
          </li>
          <li class="megaTablinks" data-menu="sass1">
            <a class="" href="/sass-landing">SaaS Landing One</a>
          </li>
          <li class="megaTablinks" data-menu="sass2">
            <a class="" href="/sass-landing-two">SaaS Landing Two</a>
            <div class="tag new">new</div>
          </li>
          <li class="megaTablinks" data-menu="app">
            <a class="" href="/app-landing">App Landing</a>
          </li>
          <li class="megaTablinks" data-menu="corporate">
            <a class="" href="/corporate">Corporate</a>
          </li>
        </ul>
      </div>
      <div class="mega-menu-column">
        <ul class="mega-menu-list">
          <li class="megaTablinks" data-menu="cryptoWallet1">
            <a class="" href="/crypto-wallet-one">Crypto Wallet One</a>
            <div class="tag hot">hot</div>
          </li>
          <li class="megaTablinks" data-menu="cryptoWallet2">
            <a class="" href="/crypto-wallet-two">Crypto Wallet Two</a>
            <div class="tag trendy">trendy</div>
          </li>
          <li class="megaTablinks" data-menu="cryptoToken">
            <a class="" href="/crypto-token">Crypto Token</a>
          </li>
          <li class="megaTablinks" data-menu="defi">
            <a class="" href="/defi-landing">DeFi Landing</a>
            <div class="tag hot">hot</div>
          </li>
          <li class="megaTablinks" data-menu="newsletter">
            <a class="" href="/newsletter">Newsletter</a>
          </li>
          <li class="megaTablinks" data-menu="chatbot">
            <a class="" href="/chatbot">Chat Bot Landing</a>
          </li>
          <li class="megaTablinks" data-menu="business">
            <a class="" href="/business">Business</a>
          </li>
        </ul>
      </div>
      <div class="mega-menu-column">
        <ul class="mega-menu-list">
          <li class="megaTablinks" data-menu="finance">
            <a aria-current="page" class="active" href="/finance">Finance</a>
            <div class="tag trendy">trendy</div>
          </li>
          <li class="megaTablinks" data-menu="accounting">
            <a class="" href="/accounting">Accounting</a>
          </li>
          <li class="megaTablinks" data-menu="portfolio">
            <a class="" href="/portfolio">Portfolio</a>
          </li>
        </ul>
        <div class="more-demo-card">
          <p>More Demo</p>
          <p>Coming Soon...</p>
          <img
            src="data:image/svg+xml,%3csvg%20width='60'%20height='47'%20viewBox='0%200%2060%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='8'%20rx='4'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='27'%20y='13'%20width='33'%20height='4'%20rx='2'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20y='25'%20width='60'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='9'%20y='30'%20width='51'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='4'%20y='35'%20width='56'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='14'%20y='40'%20width='46'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3crect%20x='10'%20y='45'%20width='50'%20height='2'%20rx='1'%20fill='white'%20fill-opacity='0.7'/%3e%3c/svg%3e"
            alt="img"
          />
        </div>
      </div>
      <div class="mega-menu-column">
        <div class="mega-menu-tabcontent">
          <div
            id="primaryText"
            class="megaMenutabcontent"
            style="display: block"
          >
            <h5 class="wt-700 mt-3">37 HTML Pages with trendy design</h5>
          </div>
          <div id="mainDemo" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/main_demo-min-X6Z3Dadf.png"
                alt=""
              />
            </div>
          </div>
          <div
            id="CustomerService"
            class="megaMenutabcontent"
            style="display: none"
          >
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/customer_services-min-DBdfxXD4.png"
                alt=""
              />
            </div>
          </div>
          <div id="Team" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/team_collaboration-min-DRjHPMTa.png"
                alt=""
              />
            </div>
          </div>
          <div id="sass1" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/saas_landint_one-min-Doyken7-.png"
                alt=""
              />
            </div>
          </div>
          <div id="sass2" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/saas_landint_two-min-BJzDzH9X.png"
                alt=""
              />
            </div>
          </div>
          <div id="app" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/app_landing-min-CYe1Pir0.png"
                alt=""
              />
            </div>
          </div>
          <div id="corporate" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/corporate-min-DvLUrtNq.png"
                alt=""
              />
            </div>
          </div>
          <div
            id="cryptoWallet1"
            class="megaMenutabcontent"
            style="display: none"
          >
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/crypto__wallet_one-min--styF0qm.png"
                alt=""
              />
            </div>
          </div>
          <div
            id="cryptoWallet2"
            class="megaMenutabcontent"
            style="display: none"
          >
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/crypto__wallet_two-min-CzNTdANO.png"
                alt=""
              />
            </div>
          </div>
          <div
            id="cryptoToken"
            class="megaMenutabcontent"
            style="display: none"
          >
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/crypto_token-min-tFZH5A77.png"
                alt=""
              />
            </div>
          </div>
          <div id="defi" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/defi_landing-min-DWX6yGQ9.png"
                alt=""
              />
            </div>
          </div>
          <div id="newsletter" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/newsletter-min-u_S2beWB.png"
                alt=""
              />
            </div>
          </div>
          <div id="chatbot" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/chatbot-min-BTutxw4R.png"
                alt=""
              />
            </div>
          </div>
          <div id="business" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/business-min-CroDbF5B.png"
                alt=""
              />
            </div>
          </div>
          <div id="finance" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/finance-min-B1o2MCjr.png"
                alt=""
              />
            </div>
          </div>
          <div id="accounting" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/accounting-min-vavtgYWd.png"
                alt=""
              />
            </div>
          </div>
          <div id="portfolio" class="megaMenutabcontent" style="display: none">
            <div class="mega-menu-img">
              <img
                src="https://staco-react.vercel.app/assets/portfolio-min-DTHQdixz.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<style lang="css" scoped>
.mega-menu-column{
  display: flex;
  padding: 16px 32px;
  border-right: 1px solid #eee;
  gap: 12px;
}

.mega-menu-column:last-of-type{
  border-right: none;
}

.megaTablinks a{
  @apply whitespace-nowrap;
}
</style>
