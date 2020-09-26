var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PROVINCIAS_CAJAMARCA_1 = new ol.format.GeoJSON();
var features_PROVINCIAS_CAJAMARCA_1 = format_PROVINCIAS_CAJAMARCA_1.readFeatures(json_PROVINCIAS_CAJAMARCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_CAJAMARCA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_CAJAMARCA_1.addFeatures(features_PROVINCIAS_CAJAMARCA_1);
var lyr_PROVINCIAS_CAJAMARCA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_CAJAMARCA_1, 
                style: style_PROVINCIAS_CAJAMARCA_1,
                interactive: true,
                title: '<img src="styles/legend/PROVINCIAS_CAJAMARCA_1.png" /> PROVINCIAS_CAJAMARCA'
            });
var format_DISTRITOS_CAJAMARCA_2 = new ol.format.GeoJSON();
var features_DISTRITOS_CAJAMARCA_2 = format_DISTRITOS_CAJAMARCA_2.readFeatures(json_DISTRITOS_CAJAMARCA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS_CAJAMARCA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_CAJAMARCA_2.addFeatures(features_DISTRITOS_CAJAMARCA_2);
var lyr_DISTRITOS_CAJAMARCA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOS_CAJAMARCA_2, 
                style: style_DISTRITOS_CAJAMARCA_2,
                interactive: true,
    title: 'DISTRITOS_CAJAMARCA<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_0.png" /> Cajabamba<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_1.png" /> Cajamarca<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_2.png" /> Celendín<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_3.png" /> Chota<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_4.png" /> Contumazá<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_5.png" /> Cutervo<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_7.png" /> Jaén<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_8.png" /> San Ignacio<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_9.png" /> San Marcos<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_10.png" /> San Miguel<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_11.png" /> San Pablo<br />\
    <img src="styles/legend/DISTRITOS_CAJAMARCA_2_12.png" /> Santa Cruz<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_PROVINCIAS_CAJAMARCA_1.setVisible(true);lyr_DISTRITOS_CAJAMARCA_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PROVINCIAS_CAJAMARCA_1,lyr_DISTRITOS_CAJAMARCA_2];
lyr_PROVINCIAS_CAJAMARCA_1.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', 'area': 'area', 'perimetro': 'perimetro', 'numero': 'numero', 'imagen': 'imagen', });
lyr_DISTRITOS_CAJAMARCA_2.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_PROVINCIAS_CAJAMARCA_1.set('fieldImages', {'PROVINCIA': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'numero': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_DISTRITOS_CAJAMARCA_2.set('fieldImages', {'IDDPTO': 'Hidden', 'DEPART': 'Hidden', 'PROV_ID': 'Hidden', 'PROVINCIA': 'Hidden', 'DIST_ID': 'Hidden', 'DISTRITO': 'Hidden', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_PROVINCIAS_CAJAMARCA_1.set('fieldLabels', {'PROVINCIA': 'header label', 'area': 'inline label', 'perimetro': 'header label', 'numero': 'no label', 'imagen': 'no label', });
lyr_DISTRITOS_CAJAMARCA_2.set('fieldLabels', {});
lyr_DISTRITOS_CAJAMARCA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});