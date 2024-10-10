export const calculatorRoutes = [
    { path: '/calculator/length', component: 'Converter', calcType: 'length' },
    { path: '/calculator/temperature', component: 'Converter', calcType: 'temperature' },
    { path: '/calculator/volume', component: 'Converter', calcType: 'volume' },
    { path: '/calculator/weight', component: 'Converter', calcType: 'weight' },
    { path: '/calculator/time', component: 'Converter', calcType: 'time' },
    { path: '/calculator/sphereVolume', component: 'VolumeCalculator', calcType: 'sphereVolume' },
    { path: '/calculator/coneVolume', component: 'VolumeCalculator', calcType: 'coneVolume' },
    { path: '/calculator/cubeVolume', component: 'VolumeCalculator', calcType: 'cubeVolume' },
    { path: '/calculator/cylinderVolume', component: 'VolumeCalculator', calcType: 'cylinderVolume' },
    { path: '/calculator/rectangleVolume', component: 'VolumeCalculator', calcType: 'rectangleVolume' },
];
