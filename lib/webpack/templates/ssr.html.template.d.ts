/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare const _default: "\n<!DOCTYPE html>\n<html <%~ it.htmlAttributes %>>\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"generator\" content=\"IANA SYSTEMS v<%= it.version %>\">\n    <% it.metaAttributes.forEach((metaAttribute) => { %>\n      <%~ metaAttribute %>\n    <% }); %>\n    <%~ it.headTags %>\n    <% it.stylesheets.forEach((stylesheet) => { %>\n      <link rel=\"stylesheet\" href=\"<%= it.baseUrl %><%= stylesheet %>\" />\n    <% }); %>\n    <% it.scripts.forEach((script) => { %>\n      <link rel=\"preload\" href=\"<%= it.baseUrl %><%= script %>\" as=\"script\">\n    <% }); %>\n  </head>\n  <body <%~ it.bodyAttributes %>>\n    <%~ it.preBodyTags %>\n    <div id=\"__ianaio\">\n      <%~ it.appHtml %>\n    </div>\n    <% it.scripts.forEach((script) => { %>\n      <script src=\"<%= it.baseUrl %><%= script %>\"></script>\n    <% }); %>\n    <%~ it.postBodyTags %>\n  </body>\n</html>\n";
export default _default;

