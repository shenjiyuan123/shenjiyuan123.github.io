;(function($) {

    function initMap() {

        $('#map').vectorMap({
            map: 'world_mill',
            backgroundColor: '#ffffff',
            zoomMin:0.85,
            regionStyle:{
                initial: {
                    fill: '#aaaaaa',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                },
                hover: {
                    "fill-opacity": 0.8,
                    cursor: 'pointer'
                },
                selected: {
                    fill: 'yellow'
                },
                selectedHover: { }
            },
            series: {
                regions: [{
                  values: {
                        CN:'#5688C7',
                        RU:'#5688C7',
                        US:'#5688C7',
                        JP:'#5688C7',
                        SE:'#5688C7',
                        FN:'#5688C7',
                        EE:'#5688C7',
                        MY:'#5688C7',
                        TH:'#5688C7',
                        VN:'#5688C7',
                        TW:'#5688C7',
                        FR:'#5688C7',
                        IT:'#5688C7',
                        CH:'#5688C7',
                  }
                }]
              }
        });
    }

    initMap();
    
}) (jQuery);
