"use strict";
/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const Dialog_js_1 = require("../../api/Dialog.js");
/**
 * @internal
 */
class Dialog extends Dialog_js_1.Dialog {
    #context;
    /**
     * @internal
     */
    constructor(context, type, message, defaultValue = '') {
        super(type, message, defaultValue);
        this.#context = context;
    }
    /**
     * @internal
     */
    async sendCommand(options) {
        await this.#context.connection.send('browsingContext.handleUserPrompt', {
            context: this.#context.id,
            accept: options.accept,
            userText: options.text,
        });
    }
}
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map