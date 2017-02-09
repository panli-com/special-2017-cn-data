! function(a, b) {
    function c() {
        var b = f.getBoundingClientRect().width;
        b / i > 720 && (b = 720 * i);
        var c = b / 10;
        f.style.fontSize = c + "px", k.rem = a.rem = c
    }
    var d, e = a.document,
        f = e.documentElement,
        g = e.querySelector('meta[name="viewport"]'),
        h = e.querySelector('meta[name="flexible"]'),
        i = 0,
        j = 0,
        k = b.flexible || (b.flexible = {});
    if (g) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        l && (j = parseFloat(l[1]), i = parseInt(1 / j))
    } else if (h) {
        var m = h.getAttribute("content");
        if (m) {
            var n = m.match(/initial\-dpr=([\d\.]+)/),
                o = m.match(/maximum\-dpr=([\d\.]+)/);
            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
        }
    }
    if (!i && !j) {
        var p = a.navigator.userAgent,
            q = (!!p.match(/android/gi), !!p.match(/iphone/gi)),
            r = q && !!p.match(/OS 9_3/),
            s = a.devicePixelRatio;
        i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
    }
    if (f.setAttribute("data-dpr", i), !g)
        if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
        else {
            var t = e.createElement("div");
            t.appendChild(g), e.write(t.innerHTML)
        }
    a.addEventListener("resize", function() { clearTimeout(d), d = setTimeout(c, 300) }, !1), a.addEventListener("pageshow", function(a) { a.persisted && (clearTimeout(d), d = setTimeout(c, 300)) }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function() { e.body.style.fontSize = 12 * i + "px" }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function(a) {
        var b = parseFloat(a) * this.rem;
        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
    }, k.px2rem = function(a) {
        var b = parseFloat(a) / this.rem;
        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
    }
}(window, window.lib || (window.lib = {}));
;
(function () {
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    try {
        var pageTracker = _gat._getTracker("UA-436090-1");
        pageTracker._trackPageview();
    } catch (err) {}

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-436090-2', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');

})()
//main  