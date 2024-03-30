// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from './routes/_app.tsx';
import * as $index from './routes/index.tsx';
import * as $md from './routes/md.tsx';
import * as $test_button from './routes/test/button.tsx';
import * as $test_card from './routes/test/card.tsx';
import * as $test_gradient from './routes/test/gradient.tsx';
import * as $test_index from './routes/test/index.tsx';
import * as $test_input from './routes/test/input.tsx';
import * as $test_kbd from './routes/test/kbd.tsx';
import * as $test_layout from './routes/test/layout.tsx';
import * as $test_text from './routes/test/text.tsx';
import * as $XDialog from './islands/XDialog.tsx';
import { type Manifest } from '$fresh/server.ts';

const manifest = {
  routes: {
    './routes/_app.tsx': $_app,
    './routes/index.tsx': $index,
    './routes/md.tsx': $md,
    './routes/test/button.tsx': $test_button,
    './routes/test/card.tsx': $test_card,
    './routes/test/gradient.tsx': $test_gradient,
    './routes/test/index.tsx': $test_index,
    './routes/test/input.tsx': $test_input,
    './routes/test/kbd.tsx': $test_kbd,
    './routes/test/layout.tsx': $test_layout,
    './routes/test/text.tsx': $test_text,
  },
  islands: {
    './islands/XDialog.tsx': $XDialog,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
