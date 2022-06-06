addEventListener("DOMContentLoaded", function() {
    let models = [{
        width: "450",
        height: "500",
        left: "-150px",
        bottom: "-100px",
        basePath: "https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets",
        role: "bisimai_2",
        background: "",
        opacity: 1,
        mobile: false,
    }];
    new Live2dLoader(models);
});