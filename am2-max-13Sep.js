function clearCode1(e) {
    " " == e.value.slice(-1) && (e.value = "");
}
function initMapKit() {
    console.log("mapKit loaded");
}
const params = new URLSearchParams(window.location.search);
(params.has("Apple") ||
    location.href.toLowerCase().indexOf("appl") > 0 ||
    params.has("Bing") ||
    location.href.toLowerCase().indexOf("bing") > 0) &&
    (document.getElementById("addr").setAttribute("hidden", "hidden"),
    document.getElementById("addrlist").removeAttribute("hidden")),
    (params.has("Google") ||
        params.has("Apple") ||
        location.href.toLowerCase().indexOf("appl") > 0 ||
        params.has("Bing") ||
        location.href.toLowerCase().indexOf("bing") > 0) &&
        (document.getElementById("sOmni").setAttribute("hidden", "hidden"),
        document.getElementById("addr").setAttribute("size", "45"),
        document.getElementById("sTrack").setAttribute("hidden", "hidden"));
var Mtype = 2;
(Mtype = -2),
    document.getElementById("code").setAttribute("placeholder", "@xxyy.xx"),
    params.has("4") && ((Mtype = -2), document.getElementById("code").setAttribute("placeholder", "@xxyy")),
    params.has("6") && ((Mtype = -3), document.getElementById("code").setAttribute("placeholder", "@xxxyyy"));
var POSN = { lat: 33.66848, lng: -117.86359, adj: "" };
(document.getElementById("addr").value = "4590 MacArthur Blvd, Newport Beach, CA, USA"),
    google.maps.event.addDomListener(window, "load", initMap);
var anchor,
    map,
    marker,
    markers = [],
    mlabel,
    mlabel0,
    markerLatitude,
    markerLongitude;
const gLL = document.getElementById("LL");
function clearPlace() {
    with (document.getElementById("addr")) (value = ""), setAttribute("hidden", "hidden");
    document.getElementById("addrlist").setAttribute("hidden", "hidden"),
        document.getElementById("locale").removeAttribute("hidden"),
        initPlace();
}
function initPlace() {
    const e = document.getElementById("locale");
    e.focus(), e.value && (value = "");
    const t = new google.maps.places.Autocomplete(e, { fields: ["place_id", "geometry", "formatted_address", "name"] });
    t.addListener("place_changed", () => {
        const e = t.getPlace();
        e.geometry &&
            e.geometry.location &&
            ((POSN.lat = e.geometry.location.lat()),
            (POSN.lng = e.geometry.location.lng()),
            initMap1(e.formatted_address));
    });
}
function reInitPlace() {
    var i = document.getElementById("addrlist").selectedIndex;
    if (1 != i)
        with ((i > 0 && (v = document.getElementById("addrlist").options[i].value),
        (POSN.lat = parseFloat(v.slice(0, v.indexOf(",")))),
        (POSN.lng = parseFloat(v.slice(v.indexOf(",") + 1))),
        marker && 0 == POSN.lat && 0 == POSN.lng && ((POSN.lat = markerLatitude), (POSN.lng = markerLongitude)),
        initMap1(document.getElementById("addrlist").options[i].text),
        document.getElementById("addrlist")))
            i == options.length - 1 && (selectedIndex = 0);
    else clearPlace();
}
async function initMap() {
    document.getElementById("multi").selectedIndex = 4;
    const { Map: e } = await google.maps.importLibrary("maps");
    initMap1();
}
var CXX,
    Cxxyy,
    Cxx50,
    Cyy50,
    uPosn,
    rect,
    rects = [];
function initMap1(e) {
    (uPosn = toUTM(POSN)),
        console.log(uPosn.Eing + "_" + uPosn.Ning),
        (CXY = uPosn.Eing.toString().slice(3, 4) + uPosn.Ning.toString().slice(4, 5)),
        (Cxxyy = "@" + uPosn.Eing.toString().slice(-2) + uPosn.Ning.toString().slice(-2)),
        (Cxx50 = Cxxyy.slice(1, 3) - 50),
        (Cyy50 = Cxxyy.slice(3, 5) - 50);
    const t =
        (Mtype < 0 ? "" : CXY) +
        "@" +
        uPosn.Eing.toString().slice(-Math.abs(Mtype)) +
        uPosn.Ning.toString().slice(-Math.abs(Mtype));
    var n = UGRS(POSN);
    (document.getElementById("tile").value = n.slice(0, 7) + n.slice(10, 12)),
        (document.getElementById("1Mloc").value = n.slice(7, 10) + n.slice(12, 15));
    var a = toLL(uPosn, uPosn.Zone);
    document.getElementById("LL").value = a.lng.toFixed(6) + "_" + a.lat.toFixed(6);
    const i = {
        center: POSN,
        zoom: e && isNaN(parseInt(e)) ? 16 : 18,
        minZoom: 14,
        maxZoom: 20,
        clickableIcons: !1,
        tilt: 0,
        rotateControl: !1,
    };
    if (params.has("Apple") || location.href.toLowerCase().indexOf("appl") > 0) {
        document.querySelector("title").textContent = "Applemaps2";
        var o = new mapkit.Coordinate(POSN.lat, POSN.lng),
            l = new mapkit.CoordinateSpan(e && isNaN(parseInt(e)) ? 0.01 : 0.002),
            r = new mapkit.CoordinateRegion(o, l);
        map && map.destroy(),
            (map = new mapkit.Map("map", {
                center: o,
                region: r,
                mapType: mapkit.Map.MapTypes.Hybrid,
                showsMapTypeControl: !0,
                showsCompass: mapkit.FeatureVisibility.Hidden,
            })),
            (ecmC1 = new mapkit.CircleOverlay(o, 50)),
            (ecmC1.style = new mapkit.Style({ lineWidth: 2, strokeColor: "#00f", fillColor: null, fillOpacity: 0 })),
            map.addOverlay(ecmC1),
            (ecmC12 = new mapkit.CircleOverlay(o, 100)),
            (ecmC12.style = new mapkit.Style({ lineWidth: 2, strokeColor: "#ccc", fillColor: null, fillOpacity: 0 })),
            map.addOverlay(ecmC12),
            (ecmC2 = new mapkit.CircleOverlay(o, 500)),
            (ecmC2.style = new mapkit.Style({ lineWidth: 2, strokeColor: "#f00", fillColor: null, fillOpacity: 0 })),
            map.addOverlay(ecmC2);
        var s = new mapkit.MarkerAnnotation(o, { color: "#00f", title: "+", subtitle: "" });
        (markers[0] = s), map.addAnnotation(s), (rects[0] = null), map.addEventListener("single-tap", clickMarkerA);
    } else if (params.has("Bing") || location.href.toLowerCase().indexOf("bing") > 0) {
        (document.querySelector("title").textContent = "Bingmaps2"),
            (map = new Microsoft.Maps.Map("#map", {
                center: new Microsoft.Maps.Location(POSN.lat, POSN.lng),
                zoom: e && isNaN(parseInt(e)) ? 16 : 18,
            }));
        var c = new Microsoft.Maps.Pushpin(map.getCenter(), {
            color: "blue",
            title: t,
            subTitle: "(anchor)",
            text: "+",
        });
        (markers[0] = c),
            map.entities.push(c),
            drawCircle(50, "blue"),
            drawCircle(100, "silver"),
            drawCircle(500, "red"),
            Microsoft.Maps.Events.addHandler(map, "click", clickMarkerB);
    } else {
        (map = new google.maps.Map(document.getElementById("map"), i)).addListener("mousemove", updateLocators);
        const e = {
            url: "http://addressplus.co/plus-sign2t.png",
            size: new google.maps.Size(17, 15),
            anchor: new google.maps.Point(8, 8),
        };
        (s = new google.maps.Marker({
            position: POSN,
            title: CXY,
            icon: e,
            animation: google.maps.Animation.DROP,
            map: map,
        })),
            new google.maps.Circle({
                center: POSN,
                radius: 5,
                clickable: !1,
                fillOpacity: 0,
                strokeColor: "#00f",
                strokeWeight: 0.5,
                map: map,
            }),
            (ecmC1 = new google.maps.Circle({
                center: POSN,
                radius: 50,
                strokeColor: "#00f",
                strokeWeight: 4,
                strokeOpacity: 0.33,
                fillOpacity: 0,
                clickable: !1,
                map: map,
            })),
            (ecmC12 = new google.maps.Circle({
                center: POSN,
                radius: 100,
                strokeColor: "#ccc",
                strokeWeight: 4,
                strokeOpacity: 0.67,
                fillOpacity: 0.01,
                clickable: !0,
                map: map,
            })),
            (ecmC2 = new google.maps.Circle({
                center: POSN,
                radius: 500,
                strokeColor: "#00f",
                strokeWeight: 9,
                strokeOpacity: 0.16,
                fillOpacity: 0.02,
                clickable: !1,
                map: map,
            })),
            (ecmC2b = new google.maps.Circle({
                center: POSN,
                radius: 500,
                strokeColor: "#f00",
                strokeWeight: 1,
                strokeOpacity: 0.67,
                fillOpacity: 0,
                clickable: !1,
                map: map,
            })),
            (mlabel0 = new MapLabel({
                position: { lat: POSN.lat - 1e-5, lng: POSN.lng - 45e-6 },
                text: Cxxyy,
                fontColor: "#0000ff",
                fontSize: 12,
                maxZoom: 20,
                map: map,
            })),
            ecmC12.addListener("mousemove", updateLocators),
            ecmC12.addListener("click", clickMarkerG);
    }
    clearCode();
}
function drawCircle(e, t) {
    const n = 9e-6,
        a = Math.PI / 180,
        o = Math.cos(POSN.lat * a),
        l = [];
    for (l[0] = new Microsoft.Maps.Location(POSN.lat + e * n, POSN.lng), i = 1; i <= 360; i++)
        l[i] = new Microsoft.Maps.Location(
            POSN.lat + e * Math.cos(i * a) * n,
            POSN.lng + (e * Math.sin(i * a) * n) / o
        );
    var r = new Microsoft.Maps.Polyline(l, { strokeColor: t, strokeThickness: 3 });
    map.entities.push(r);
}
function updateLocators(e) {
    var t = e.latLng.lat(),
        n = e.latLng.lng();
    document.getElementById("LL").value = n.toFixed(6) + "_" + t.toFixed(6);
    const a = UGRS({ lat: t, lng: n });
    (document.getElementById("tile").value = a.slice(0, 7) + a.slice(10, 12)),
        (document.getElementById("1Mloc").value = a.slice(7, 10) + a.slice(12, 15));
}
function clickMarkerA(e) {
    var t = map.convertPointOnPageToCoordinate(e.pointOnPage);
    clickMarker1(t.latitude, t.longitude);
}
function clickMarkerB(e) {
    clickMarker1(e.location.latitude, e.location.longitude);
}
function clickMarkerG(e) {
    clickMarker1(e.latLng.lat(), e.latLng.lng());
}
function clearCode() {
    with (document.getElementById("code")) (value = ""), setAttribute("style", "color:black"), focus();
}
var rmarkers = "";
function clickMarker1(e, t) {
    var n = toUTM({ lat: e, lng: t }),
        a =
            (n.Zone,
            Math.sqrt((n.Eing - uPosn.Eing) * (n.Eing - uPosn.Eing) + (n.Ning - uPosn.Ning) * (n.Ning - uPosn.Ning)));
    if (a > 9e9) return;
    n.Eing.toString().slice(3, 4), n.Ning.toString().slice(4, 5);
    const i = n.Eing.toString(),
        o = n.Ning.toString();
    var l,
        r,
        s,
        c =
            (2 == Mtype ? i.slice(-3, -2) + o.slice(-3, -2) : "") +
            "@" +
            i.slice(-Math.abs(Mtype)) +
            o.slice(-Math.abs(Mtype)),
        m = parseInt(c.slice(1, 3)),
        p = parseInt(c.slice(-2));
    if (
        (a > 50
            ? ((l = 0),
              n.Eing < uPosn.Eing - 50 ? (l = -1) : n.Eing > uPosn.Eing + 50 && (l = 1),
              (r = 0),
              n.Ning < uPosn.Ning - 50 ? (r = -1) : n.Ning > uPosn.Ning + 50 && (r = 1))
            : ((l = Cxx50 >= 0 ? (m >= 100 - Cxx50 ? 1 : 0) : m >= 100 + Cxx50 ? -1 : 0),
              (r = Cyy50 >= 0 ? (p >= 100 - Cyy50 ? 1 : 0) : p >= 100 + Cyy50 ? -1 : 0)),
        (s = 5 + l - 3 * r),
        params.has("Apple") || location.href.toLowerCase().indexOf("appl") > 0)
    ) {
        (markerLatitude = e), (markerLongitude = t);
        n.Eing.toString().slice(-1),
            n.Ning.toString().slice(-1),
            toLL({ Ning: 10 * Math.trunc(n.Ning / 10) - 1, Eing: 10 * Math.trunc(n.Eing / 10) + 5 }, uPosn.Zone);
        (s = ""), (c = "@" + i.slice(-3, -1) + o.slice(-3, -1)), (s = i.slice(-1) + o.slice(-1));
        var g = !1;
        rmarkers.indexOf(c) < 0 && ((rmarkers += c), (g = !0)),
            (marker = new mapkit.MarkerAnnotation(new mapkit.Coordinate(e, t), {
                title: g ? c : "",
                subtitle: "",
                glyphText: "." + (s || "55"),
            })),
            markers.push(marker),
            map.addAnnotation(marker);
    } else if (params.has("Bing") || location.href.toLowerCase().indexOf("bing") > 0)
        (marker = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(e, t), {
            title: c,
            subTitle: "",
            text: s + "",
        })),
            markers.push(marker),
            map.entities.push(marker);
    else {
        marker && (marker.setMap(), mlabel.setMap());
        var d = n.Eing.toString().slice(-3) + n.Ning.toString().slice(-3);
        (marker = new google.maps.Marker({
            position: { lat: e, lng: t },
            label: s + "",
            title: d,
            icon: "https://maps.google.com/mapfiles/ms/icons/pink.png",
            map: map,
        })),
            (mlabel = new MapLabel({
                position: { lat: e - 1e-5, lng: t - 45e-6 },
                text: c,
                fontColor: "#ff00ff",
                fontSize: 12,
                maxZoom: 20,
                map: map,
            }));
    }
}
function annof() {
    var e = document.createElement("div");
    return (e.className = "circle-annotation"), e;
}
var calloutDelegate = {
    calloutElementForAnnotation: function (e) {
        var t = document.createElement("div");
        return (
            (t.appendChild(document.createElement("h1")).textContent = e.text), (t.className = "callout-annotation"), t
        );
    },
};
function showMarkerList(e) {
    for (var t = 0, n = e.value.split(","); ++t <= n.length; ) showMarker1(n[t - 1].trim());
}
function showMarker(e) {
    var t = {},
        n = e.value;
    switch (
        ("." == e.value.slice(-1) && (n = n.slice(0, 4)),
        6 == n.length && ((n = n.slice(0, 4) + "." + n.slice(-2)), (e.value = n)),
        "@" == n.charAt(0) && (n = n.slice(1)),
        2 == n.indexOf("@") &&
            (n = n.charAt(0) + n.slice(3, 3 + (n.length - 3) / 2) + n.charAt(1) + n.slice(3 + (n.length - 3) / 2)),
        "#" == n.charAt(-1) && (n = n.slice(0, n.length - 1)),
        n.indexOf("#") > 0 && (n = n.replace("#", "5") + "5"),
        (t.Eing = uPosn.Eing),
        (t.Ning = uPosn.Ning),
        n.length)
    ) {
        case 2:
            n = n.charAt(0) + 5 + n.charAt(1) + 5;
        case 4:
            var a = parseInt(n.slice(0, 2)),
                i = parseInt(n.slice(-2));
            if (params.has("Apple") || location.href.toLowerCase().indexOf("appl") > 0) {
                (t.Eing -= (t.Eing % 1e3) - (10 * a + 5)), (t.Ning -= (t.Ning % 1e3) - (10 * i + 5));
                break;
            }
            n =
                5 +
                (o = Cxx50 >= 0 ? (a >= 100 - Cxx50 ? 1 : 0) : a >= 100 + Cxx50 ? -1 : 0) -
                3 * (l = Cyy50 >= 0 ? (i >= 100 - Cyy50 ? 1 : 0) : i >= 100 + Cyy50 ? -1 : 0) +
                n;
        case 5:
            var o = ((r = parseInt(n.charAt(0))) % 3 ? r % 3 : 3) - 2,
                l = r < 4 ? 1 : r < 7 ? 0 : -1;
            (t.Eing -= (t.Eing % 100) - parseInt(n.slice(-4, -2)) - 100 * o),
                (t.Ning -= (t.Ning % 100) - parseInt(n.slice(-2)) - 100 * l);
            break;
        case 7:
            n = n.slice(0, 2) + n.slice(-2, -1) + n.slice(2, 4) + n.slice(-1);
        case 6:
            var r = 0;
            (t.Eing -= (t.Eing % 1e3) - parseInt(n.slice(0, 3))), (t.Ning -= (t.Ning % 1e3) - parseInt(n.slice(-3)));
            break;
        default:
            return document.getElementById("code").setAttribute("style", "color:red"), void alert("Bad code; re-enter");
    }
    var s = 0,
        c = 0;
    uPosn.Eing % 1e3 < 500
        ? t.Eing % 1e3 >= (uPosn.Eing + 500) % 1e3 && (s = -1e3)
        : t.Eing % 1e3 < (uPosn.Eing - 500) % 1e3 && (s = 1e3),
        uPosn.Ning % 1e3 < 500
            ? t.Ning % 1e3 >= (uPosn.Ning + 500) % 1e3 && (c = -1e3)
            : t.Ning % 1e3 < (uPosn.Ning - 500) % 1e3 && (c = 1e3),
        (t.Eing += s),
        (t.Ning += c);
    var m = toLL(t, uPosn.Zone);
    toLL({ Ning: 10 * Math.trunc(t.Ning / 10) - 1, Eing: 10 * Math.trunc(t.Eing / 10) + 5 }, uPosn.Zone);
    const p = t.Eing.toString(),
        g = t.Ning.toString();
    var d =
        (2 == Mtype ? p.slice(-3, -2) + g.slice(-3, -2) : "") +
        "@" +
        p.slice(-Math.abs(Mtype)) +
        g.slice(-Math.abs(Mtype));
    if (((elat = m.lat), (elng = m.lng), 6 == n.length)) {
        var u = 45e-7;
        (elng += u * Math.cos((elat * Math.PI) / 180)), (elat += u);
    }
    if (params.has("Apple") || location.href.toLowerCase().indexOf("appl") > 0) {
        (r = ""), (d = "@" + p.slice(-3, -1) + g.slice(-3, -1)), 6 == n.length && (r = p.slice(-1) + g.slice(-1));
        var k = !1;
        rmarkers.indexOf(d) < 0 && ((rmarkers += d), (k = !0)),
            (marker = new mapkit.MarkerAnnotation(new mapkit.Coordinate(elat, elng), {
                title: k ? d : "",
                subtitle: "",
                glyphText: "." + (r || "55"),
            })),
            markers.push(marker),
            map.addAnnotation(marker),
            "." == e.value.slice(-1) && ((rect = rectf(t, uPosn.Zone)), rects.push(map.addOverlay(rect))),
            (markerLatitude = elat),
            (markerLongitude = elng);
    } else if (params.has("Bing") || location.href.toLowerCase().indexOf("bing") > 0)
        (marker = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(elat, elng), {
            title: d,
            subTitle: "",
            text: r ? r.toString() : "",
        })),
            markers.push(marker),
            map.entities.push(marker);
    else {
        marker && (marker.setMap(), mlabel.setMap());
        var f = t.Eing.toString().slice(-3, -2) + t.Ning.toString().slice(-3, -2);
        (marker = new google.maps.Marker({
            position: m,
            label: r ? r.toString() : "",
            title: f,
            icon: "https://maps.google.com/mapfiles/ms/icons/pink.png",
            map: map,
        })),
            (mlabel = new MapLabel({
                position: m,
                text: d,
                fontColor: "#ff00ff",
                fontSize: 12,
                maxZoom: 20,
                map: map,
            }));
    }
    clearCode();
}
function rectf(e, t) {
    var n = {},
        a = new Array(5),
        i = parseInt(e.Eing.toString()),
        o = parseInt(e.Ning.toString());
    return (
        (i -= (i % 10) - 5),
        (o -= (o % 10) - 5),
        (e.Eing = i - 5),
        (e.Ning = o - 5),
        (n = toLL(e, t)),
        (a[0] = new mapkit.Coordinate(n.lat, n.lng)),
        (e.Eing = i + 5),
        (e.Ning = o - 5),
        (n = toLL(e, t)),
        (a[1] = new mapkit.Coordinate(n.lat, n.lng)),
        (e.Eing = i + 5),
        (e.Ning = o + 5),
        (n = toLL(e, t)),
        (a[2] = new mapkit.Coordinate(n.lat, n.lng)),
        (e.Eing = i - 5),
        (e.Ning = o + 5),
        (n = toLL(e, t)),
        (a[3] = new mapkit.Coordinate(n.lat, n.lng)),
        (a[4] = a[0]),
        new mapkit.PolylineOverlay(a, { style: new mapkit.Style({ lineWidth: 2, strokeColor: "#FF0" }) })
    );
}
function clearMarkers() {
    if (((rmarkers = ""), params.has("Apple") || location.href.toLowerCase().indexOf("appl") > 0))
        map.removeAnnotations(markers.slice(1)),
            (markers.length = 1),
            map.removeOverlays(rects.slice(1)),
            (rects.length = 1);
    else if (params.has("Bing") || location.href.toLowerCase().indexOf("bing") > 0)
        for (var e = markers.length; --e > 0; ) map.entities.remove(markers[e]);
}
var factory = function (e, t) {
        var n = document.createElement("div");
        return (n.textContent = t.data.xxyy), (n.className = "circle-annotation1"), n;
    },
    CALLOUT_OFFSET1 = new DOMPoint(-0, 25),
    xCallout = {
        calloutElementForAnnotation: function (e) {
            return calloutForLandmark1Annotation(e);
        },
        calloutAnchorOffsetForAnnotation: function (e, t) {
            return CALLOUT_OFFSET1;
        },
    };
function calloutForLandmark1Annotation(e) {
    var t = document.createElement("div");
    return (t.className = "callout1"), (t.appendChild(document.createElement("h5")).textContent = "50"), t;
}
