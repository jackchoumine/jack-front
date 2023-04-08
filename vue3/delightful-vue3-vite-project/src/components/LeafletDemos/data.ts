/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-09 00:59:04
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-09 02:11:35
 * @Description : geoJson
 */
export const points = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        'marker-color': '#205fc5',
        'marker-size': 'medium',
      },
      geometry: {
        coordinates: [106.80371122479949, 26.554385554293248],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [106.69903927909655, 26.560645070546542],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [106.67084409621214, 26.623347230879233],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [106.74085072883628, 26.668532831892776],
        type: 'Point',
      },
    },
  ],
}

export const lines = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [106.84892316105356, 26.475542351238545],
          [106.8225983736549, 26.460212157108344],
          [106.7901644283823, 26.48149593071639],
        ],
        type: 'LineString',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [106.69740167122995, 26.48058058671276],
          [106.70623263040858, 26.543532710078736],
          [106.6217869718406, 26.552802331275444],
        ],
        type: 'LineString',
      },
    },
  ],
}

export const polygon = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        area: '1200平方米',
      },
      geometry: {
        coordinates: [
          [
            [106.84305609405118, 26.476895851194897],
            [106.90333789230777, 26.488245043970466],
            [106.85205187561746, 26.553597163505927],
            [106.8332182008632, 26.518876947208994],
            [106.84305609405118, 26.476895851194897],
          ],
        ],
        type: 'Polygon',
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '面',
        area: '1000平方米',
        stroke: '#a72020',
        'stroke-width': 2,
        'stroke-opacity': 1,
        fill: '#6c117e',
        'fill-opacity': 0.9,
      },
      geometry: {
        coordinates: [
          [
            [106.61224284903733, 26.510572332835153],
            [106.65735700879907, 26.510572332835153],
            [106.65735700879907, 26.56358428857051],
            [106.61224284903733, 26.56358428857051],
            [106.61224284903733, 26.510572332835153],
          ],
        ],
        type: 'Polygon',
      },
    },
  ],
}

export const circle = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [106.84892316105356, 26.475542351238545],
          [106.8225983736549, 26.460212157108344],
          [106.7901644283823, 26.48149593071639],
        ],
        type: 'LineString',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [106.69740167122995, 26.48058058671276],
          [106.70623263040858, 26.543532710078736],
          [106.6217869718406, 26.552802331275444],
        ],
        type: 'LineString',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [106.68754979774172, 26.613685763975866],
            [106.68605927172949, 26.61362028970111],
            [106.68458310537619, 26.613424497653572],
            [106.68313551985416, 26.613100274080125],
            [106.68173046070343, 26.612650742506684],
            [106.6803814633558, 26.612080233615615],
            [106.67910152262931, 26.611394243483172],
            [106.67790296745689, 26.61059938058145],
            [106.6767973420594, 26.60970330205783],
            [106.67579529471179, 26.608714639908467],
            [106.67490647517533, 26.607642917760206],
            [106.67413944178455, 26.606498459065538],
            [106.67350157908297, 26.60529228759825],
            [106.67299902679854, 26.604036021211183],
            [106.67263662083934, 26.602741759882225],
            [106.67241784687292, 26.601421969129394],
            [106.67234480693035, 26.600089359919867],
            [106.67241819935023, 26.59875676623104],
            [106.6726373122485, 26.59743702144389],
            [106.67300003056903, 26.59614283475915],
            [106.6735028566405, 26.594886668826287],
            [106.67414094403328, 26.593680619762814],
            [106.6749081443847, 26.592536300717647],
            [106.67579706673503, 26.59146473009793],
            [106.67679914879864, 26.59047622553299],
            [106.67790473948016, 26.58958030459379],
            [106.67910319183873, 26.588785593220617],
            [106.6803829656046, 26.58809974273769],
            [106.68173173826102, 26.58752935625044],
            [106.68313652362473, 26.587079925131217],
            [106.68458379678542, 26.586755776201986],
            [106.68605962420685, 26.586560030120136],
            [106.68754979774172, 26.586494571366092],
            [106.6890399712766, 26.586560030120136],
            [106.69051579869803, 26.586755776201986],
            [106.69196307185872, 26.587079925131217],
            [106.6933678572224, 26.58752935625044],
            [106.69471662987885, 26.58809974273769],
            [106.6959964036447, 26.588785593220617],
            [106.69719485600329, 26.58958030459379],
            [106.69830044668481, 26.59047622553299],
            [106.69930252874842, 26.59146473009793],
            [106.70019145109875, 26.592536300717647],
            [106.70095865145016, 26.593680619762814],
            [106.70159673884295, 26.594886668826287],
            [106.7020995649144, 26.59614283475915],
            [106.70246228323495, 26.59743702144389],
            [106.70268139613319, 26.59875676623104],
            [106.7027547885531, 26.600089359919867],
            [106.70268174861053, 26.601421969129394],
            [106.70246297464409, 26.602741759882225],
            [106.70210056868491, 26.604036021211183],
            [106.70159801640048, 26.60529228759825],
            [106.70096015369889, 26.606498459065538],
            [106.7001931203081, 26.607642917760206],
            [106.69930430077164, 26.608714639908467],
            [106.69830225342405, 26.60970330205783],
            [106.69719662802655, 26.61059938058145],
            [106.69599807285412, 26.611394243483172],
            [106.69471813212765, 26.612080233615615],
            [106.69336913478001, 26.612650742506684],
            [106.69196407562929, 26.613100274080125],
            [106.69051649010723, 26.613424497653572],
            [106.68904032375396, 26.61362028970111],
            [106.68754979774172, 26.613685763975866],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [106.61730772461715, 26.446946132644655],
            [106.61494080293346, 26.446842002629086],
            [106.61259668873109, 26.446530615973],
            [106.6102979693529, 26.446014973163432],
            [106.608066794004, 26.445300042823476],
            [106.60592466000867, 26.444392713757775],
            [106.60389220539926, 26.4433017284697],
            [106.60198900984877, 26.44203759879581],
            [106.60023340587637, 26.440612504476775],
            [106.59864230215312, 26.43904017564895],
            [106.59723102061473, 26.437335760396454],
            [106.59601314895181, 26.435515678647732],
            [106.59500040989684, 26.43359746383206],
            [106.59420254856025, 26.431599593829105],
            [106.5936272388925, 26.4295413128469],
            [106.59328001016016, 26.42744244595036],
            [106.5931641941302, 26.425323208031692],
            [106.59328089345345, 26.42320400906649],
            [106.59362897153461, 26.421105257533405],
            [106.59420506396677, 26.419047163891285],
            [106.5950036114021, 26.41704954600567],
            [106.59601691352383, 26.415131638395874],
            [106.5972352035831, 26.41331190713582],
            [106.59864674276875, 26.411607872185694],
            [106.6002379334889, 26.41003593885915],
            [106.60199345046456, 26.4086112400414],
            [106.60389638836799, 26.407347490669917],
            [106.60592842458112, 26.40625685587056],
            [106.60806999550975, 26.405349834010792],
            [106.61030048475988, 26.404635155788238],
            [106.61259842137358, 26.4041197003188],
            [106.61494168622694, 26.403808429026203],
            [106.61730772461715, 26.40370433796412],
            [106.61967376300734, 26.403808429026203],
            [106.62201702786074, 26.4041197003188],
            [106.62431496447442, 26.404635155788238],
            [106.62654545372453, 26.405349834010792],
            [106.62868702465316, 26.40625685587056],
            [106.63071906086633, 26.407347490669917],
            [106.63262199876972, 26.4086112400414],
            [106.63437751574541, 26.41003593885915],
            [106.63596870646553, 26.411607872185694],
            [106.6373802456512, 26.41331190713582],
            [106.63859853571046, 26.415131638395874],
            [106.63961183783218, 26.41704954600567],
            [106.64041038526753, 26.419047163891285],
            [106.6409864776997, 26.421105257533405],
            [106.64133455578083, 26.42320400906649],
            [106.64145125510409, 26.425323208031692],
            [106.64133543907413, 26.42744244595036],
            [106.64098821034182, 26.4295413128469],
            [106.64041290067404, 26.431599593829105],
            [106.63961503933746, 26.43359746383206],
            [106.63860230028249, 26.435515678647732],
            [106.63738442861958, 26.437335760396454],
            [106.63597314708116, 26.43904017564895],
            [106.63438204335792, 26.440612504476775],
            [106.63262643938555, 26.44203759879581],
            [106.63072324383504, 26.4433017284697],
            [106.62869078922562, 26.444392713757775],
            [106.62654865523028, 26.445300042823476],
            [106.62431747988138, 26.446014973163432],
            [106.6220187605032, 26.446530615973],
            [106.61967464630082, 26.446842002629086],
            [106.61730772461715, 26.446946132644655],
          ],
        ],
      },
    },
  ],
}
