var config = require('/config.json');

var sso = function (options) {
    var path = '/_system/config/repository/identity/SAMLSSO/' + options.issuer64,
        server = require('/modules/server.js'),
        registry = server.systemRegistry();
    registry.put(path, {
        properties: {'Issuer': options.issuer, 'SAMLSSOAssertionConsumerURL': options.consumerUrl, 'doSignAssertions': options.doSign, 'doSingleLogout': options.singleLogout, 'useFullyQualifiedUsername': options.useFQUsername}
    });
};

sso({'issuer': 'build-dashboard',
    'consumerUrl': config.ssoConfiguration.appAcs,
    'doSign': 'true',
    'singleLogout': 'true',
    'useFQUsername': 'true',
    'issuer64': ''});

