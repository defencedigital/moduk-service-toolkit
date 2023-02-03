window.dataLayer = window.dataLayer || [];


const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)


// Google Analytics
function gtag() {
  dataLayer.push(arguments);
}


// MS Clarity
function ctag(c,l,a,r,i,t,y) {
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
}


// Send analytics
function sendAnalytics() {
  gtag('js', new Date());
  gtag('config', gID);
  ctag(window, document, 'clarity', 'script', cID);
}


// Cookie manager
var config = {
  userPreferences: {
    cookieName: 'cookie-preferences',
    cookieExpiry: 365,
    cookieSecure: false
  },
  preferencesForm: {
    class: 'cookie-preferences-form'
  },
  cookieBanner: {
    class: 'js-cookie-banner',
    showWithPreferencesForm: false,
    actions: [
      {
        name: 'accept',
        buttonClass: 'js-cookie-banner-accept',
        confirmationClass: 'js-cookie-banner-confirmation-accept',
        consent: true
      },
      {
        name: 'reject',
        buttonClass: 'js-cookie-banner-reject',
        confirmationClass: 'js-cookie-banner-confirmation-reject',
        consent: false
      },
      {
        name: 'hide',
        buttonClass: 'js-cookie-banner-hide'
      }
    ]
  },
  cookieManifest: [
    {
      categoryName: 'analytics',
      optional: true,
      cookies: [
        'analytics',
        '_ga',
        '_gid',
        '_clsk',
        '_clck'
      ]
    }
  ] ,
  additionalOptions: {
    defaultConsent: false,
    deleteUndefinedCookies: false,
    disableCookieBanner: false,
    disableCookiePreferencesForm: false
  }
}

// Callback to reload page on cookie form submission
const reloadCallback = function(eventData) {

  var successBanner = document.querySelector('.govuk-notification-banner--success');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  successBanner.removeAttribute('hidden');
  successBanner.focus();

};

// Callback to trigger sending analytics if the analytics preference has been accepted in the cookie banner
const triggerAnalyticsCallback = function(eventData) {
  if (eventData == 'accept') {
    sendAnalytics();
  }
};

// Initialise the cookie manager
window.cookieManager.on('PreferenceFormSubmitted', reloadCallback);
window.cookieManager.on('CookieBannerAction', triggerAnalyticsCallback);
window.cookieManager.init(config);

// Send analytics if the cookie is set
try {
  
  const result = (JSON.parse(getCookieValue('cookie-preferences')).analytics == 'on');
  
  // Cookie has been set
  if (result == true) {
    sendAnalytics()
  }

} catch (err) {

  // SyntaxError: Unexpected end of JSON input
  // console.log('error', err);

}
