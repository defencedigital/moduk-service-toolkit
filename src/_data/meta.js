module.exports = {

  // Environment
  env: process.env.ELEVENTY_ENV || 'development',
  
  // Service name
  serviceName: 'Defence Service Toolkit',

  // Service description
  serviceDescription: 'All you need to design, build and run great digital services in Defence.',

  // GOVUK macro assets path
  govukPath: 'node_modules/govuk-frontend/govuk/components/',

  // BaseURL
  baseURL: process.env.BASE_URL || '/'

};
