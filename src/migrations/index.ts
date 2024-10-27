import * as migration_20241026_163305 from './20241026_163305';
import * as migration_20241027_024849 from './20241027_024849';

export const migrations = [
  {
    up: migration_20241026_163305.up,
    down: migration_20241026_163305.down,
    name: '20241026_163305',
  },
  {
    up: migration_20241027_024849.up,
    down: migration_20241027_024849.down,
    name: '20241027_024849'
  },
];
