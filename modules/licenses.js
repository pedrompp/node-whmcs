var utils = require('../lib/utils');
var extend = utils.extend;

var Licenses = function(config) {
  this.config = config;
};

/**
 * Add License -
 * The Add License function can be used to generate a new WHMCS License Key.
 * @param type - License type (branding/nobranding)
 * @param callback
 */
Licenses.prototype.addlicense = function (type, callback) {
  var options = {
    action: 'addlicense',
    type: type || 'branding',
    responsetype: 'xml'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * Cancel License -
 * This will cancel an active WHMCS License Key and prevent it from being billed
again. It will terminate it immediately and not allow it to be reactivated.
 * @param key - License Key to be cancelled
 * @param callback
 */
Licenses.prototype.cancellicense = function (key, callback) {
  var options = {
    action: 'cancel',
    key: key,
    responsetype: 'xml'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * List License -
 * The List Licenses function can be used to retrieve a list of all keys eligible for
resale within your account.
The no branding status will be true/false. And the license status either Active,
Reissued, or Suspended. Expired keys are excluded.
 * @param callback
 */
Licenses.prototype.listlicenses = function (callback) {
  var options = {
    action: 'listlicenses',
    responsetype: 'xml'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * Reissue License -
 * Reissuing a license allows the valid domain, ip, or directory for a license to be
automatically reset. This change occurs automatically upon the next admin login to
the associated installation.
 * @param key - License Key to be reissued.
 * @param callback
 */
Licenses.prototype.reissuelicense = function (key, callback) {
  var options = {
    action: 'reissue',
    key: key,
    responsetype: 'xml'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * Modify License -
 * Modifying a license allows you to set the valid domain, ip, or directory for a license
key.
 * @param key - License Key to be reissued.
 * @param [opts] Object
 * @param [opts.domain] Comma separated list of allowed domains
 * @param [opts.ipaddr] Comma separated list of allowed IP addreses
 * @param [opts.directory] Comma separated list of allowed directories
 * @param callback
 */
Licenses.prototype.modifylicense = function (key, opts, callback) {
  var options = {
    action: 'modify',
    key: key,
    responsetype: 'xml'
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * Get Pricing License -
 * The Get Pricing can be used to retrieve pricing information for your account.
 * @param callback
 */
Licenses.prototype.getpricinglicense = function (callback) {
  var options = {
    action: 'getpricing',
    responsetype: 'xml'
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * Search License -
 * The Search License function can be used to retrieve a list of keys matching
specified criteria.
nobranding will return a 1 if branding has been disabled.
At least one criteria must be submitted.
 * @param [opts] Object
 * @param [opts.licensekey] (Optional) Obtain results of a specific license key
 * @param [opts.domain] (Optional) Obtain results of a specific domain
 * @param [opts.ipaddr] (Optional) Obtain results of a specific IP address
 * @param callback
 */
Licenses.prototype.searchlicense = function (opts, callback) {
  var options = {
    action: 'searchlicenses',
    responsetype: 'xml'
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};

/**
 * Branding Management License -
 * This function allows you to turn the Powered by WHMCompleteSolution on or off.
 * @param action boolean (true = enables Branding Management; false = disable Branding Management)
 * @param key License Key
 * @param callback
 */
Licenses.prototype.brandinglicense = function (action, key, callback) {
  // action The function to perform [brandingenable/brandingdisable]
  if (action && action === true) {
    action = 'brandingenable';
  } else {
    action = 'brandingdisable';
  }

  var options = {
    action: action || 'brandingdisable',
    key: key,
    responsetype: 'xml'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback, true);
};


module.exports = Licenses;
