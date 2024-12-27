import * as migration_20241026_163305 from './20241026_163305';
import * as migration_20241027_024849 from './20241027_024849';
import * as migration_20241027_212319 from './20241027_212319';
import * as migration_20241105_020742 from './20241105_020742';
import * as migration_20241117_222055 from './20241117_222055';
import * as migration_20241227_013228 from './20241227_013228';

export const migrations = [
  {
    up: migration_20241026_163305.up,
    down: migration_20241026_163305.down,
    name: '20241026_163305',
  },
  {
    up: migration_20241027_024849.up,
    down: migration_20241027_024849.down,
    name: '20241027_024849',
  },
  {
    up: migration_20241027_212319.up,
    down: migration_20241027_212319.down,
    name: '20241027_212319',
  },
  {
    up: migration_20241105_020742.up,
    down: migration_20241105_020742.down,
    name: '20241105_020742',
  },
  {
    up: migration_20241117_222055.up,
    down: migration_20241117_222055.down,
    name: '20241117_222055',
  },
  {
    up: migration_20241227_013228.up,
    down: migration_20241227_013228.down,
    name: '20241227_013228'
  },
];
