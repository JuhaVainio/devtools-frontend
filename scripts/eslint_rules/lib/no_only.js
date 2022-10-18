// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'usage of .only() in mocha tests',
      category: 'Possible Errors',
    },
    fixable: 'code',
    messages: {noOnly: 'Unexpected exlcusive mocha test'},
    schema: []  // no options
  },
  create: function(context) {
    return {
     MemberExpression(node) {
        if (node.property.name === 'only' && node.property.type === 'Identifier' && node.parent.type === 'CallExpression' && node.parent.callee === node) {
          context.report({node, messageId: 'noOnly'});
        }
      }
    };
  }
};
