// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { CDPBrowser } from './package/lib/esm/puppeteer/common/Browser.js';
import { Connection } from './package/lib/esm/puppeteer/common/Connection.js';
import { type ConnectionTransport } from './package/lib/esm/puppeteer/common/ConnectionTransport.js';
import { Frame } from './package/lib/esm/puppeteer/common/Frame.js';
import { CDPElementHandle } from './package/lib/esm/puppeteer/common/ElementHandle.js';
import { CDPPage } from './package/lib/esm/puppeteer/common/Page.js';
import { CDPTarget } from './package/lib/esm/puppeteer/common/Target.js';

export { CDPBrowser as Browser, CDPTarget as Target, Connection, ConnectionTransport, CDPElementHandle as ElementHandle, Frame, CDPPage as Page };
