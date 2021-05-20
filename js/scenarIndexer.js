let scenarIndexer = (function () {
    function post(scenar) {
        $.ajax({
            type:"POST",
            url: "/scenario",
            data: {
               elmt : scenar,
            },
            success: () => {
                window.location.href = "/jouer";
            },
        });
    }
    return {
        send(scenar) {
            post(scenar);
        }
    }
})();