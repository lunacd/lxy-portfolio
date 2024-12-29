import * as migration_20241026_163305 from './20241026_163305';
import * as migration_20241027_024849 from './20241027_024849';
import * as migration_20241027_212319 from './20241027_212319';
import * as migration_20241105_020742 from './20241105_020742';
import * as migration_20241117_222055 from './20241117_222055';
import * as migration_20241227_013228 from './20241227_013228';
import * as migration_20241227_222352 from './20241227_222352';
import * as migration_20241228_195310 from './20241228_195310';
import * as migration_20241229_031102 from './20241229_031102';
import * as migration_20241229_202021 from './20241229_202021';
import * as migration_20241229_214200 from './20241229_214200';

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
    name: '20241227_013228',
  },
  {
    up: migration_20241227_222352.up,
    down: migration_20241227_222352.down,
    name: '20241227_222352',
  },
  {
    up: migration_20241228_195310.up,
    down: migration_20241228_195310.down,
    name: '20241228_195310',
  },
  {
    up: migration_20241229_031102.up,
    down: migration_20241229_031102.down,
    name: '20241229_031102',
  },
  {
    up: migration_20241229_202021.up,
    down: migration_20241229_202021.down,
    name: '20241229_202021',
  },
  {
    up: migration_20241229_214200.up,
    down: migration_20241229_214200.down,
    name: '20241229_214200'
  },
];
