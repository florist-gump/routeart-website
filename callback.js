(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    root.RouteartOAuth = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    function buildAppUrl(search) {
        const params = new URLSearchParams(search || '');
        // Development temporarily shares the production app identity because
        // Strava and the gateway do not yet support two native callback targets.
        return 'routeart://oauth/callback?' + params.toString();
    }

    return { buildAppUrl };
}));
