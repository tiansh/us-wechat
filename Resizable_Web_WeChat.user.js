﻿// ==UserScript==
// @name              Resizable Web WeChat
// @name:zh-CN        网页微信适应窗口大小
// @name:zh-TW        網頁 WeChat 適應視窗大小 
// @name:en           Resizable Web WeChat
// @namespace         https://github.com/tiansh
// @description       根据浏览器窗口大小，自动调整网页微信的排版。让微信网页不再出现恼人的滚动条
// @description:zh-CN 根据浏览器窗口大小，自动调整网页微信的排版。让微信网页不再出现恼人的滚动条
// @description:zh-TW 根據瀏覽器視窗大小，自動配置網頁 WeChat 的排版。讓 WeChat 網頁不再出現惱人的捲軸
// @description:en    Automatically adjust Web WeChat layout according to the window size, so that the annoying scroll bar won't bother you anymore
// @include           https://wx.qq.com/*
// @exclude           https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxreadtemplate*
// @version           1.0
// @updateURL         https://tiansh.github.io/us-wechat/Resizable_Web_WeChat.meta.js
// @downloadURL       https://tiansh.github.io/us-wechat/Resizable_Web_WeChat.user.js
// @homepageURL       https://tiansh.github.io/us-wechat/Resizable_Web_WeChat.html
// @supportURL        https://github.com/tiansh/us-wechat/issues
// @author            田生
// @copyright         田生; MPL 2.0
// @license           Mozilla Public License, version 2.0; https://www.mozilla.org/MPL/2.0/
// @grant             GM_addStyle
// @run-at            document-start
// ==/UserScript==

var style = [
  "  body { overflow: hidden; }",
  "  .panelBackground, .footer { display: none; }",
  "  #swfUploaderContainer { display: none; }",
  "  .chatPanel { padding: 40px 0 0; }",
  "  ",
  "  .listContentWrap { padding-top: 72px; }",
  "  .listContentWrap > div:first-child { margin-top: -72px; height: calc(100% + 72px) !important; }",
  "  .list .chatLeftPanelShadow { display: none; }",
  "  ",
  "  .chatPanel .chatScorll { padding-top: 72px; min-height: initial; }",
  "  .chatPanel .chatMainPanel { margin-top: -72px; }",
  "  .chatPanel .chatContainer { padding-top: 72px; }",
  "  .me .cloud, .you .cloud  { max-width: 419px; }",
  "  .chatPanel { width: 962px; }",
  "  .chatPanel .chatInput { width: 391px; }",
  "  ",
  "  @media screen and (max-width: 1002px) {",
  "    .chatPanel { width: calc(100vw - 40px); }",
  "    .chatPanel .chatInput { width: calc(100vw - 611px); }",
  "    .me .cloud, .you .cloud  { max-width: calc(100vw - 583px); }  ",
  "    .chatPanel .chatInput { width: calc(100vw - 611px); }",
  "  }",
  "  ",
  "  .chatPanel .chatNameWrap .chatName { max-width: calc(100% - 80px); }",
  "  ",
  "  @media screen and (max-width: 800px) {",
  "    #chat_leftpanel { position: absolute; left: -290px; transition: left ease 0.2s 0.3s; }",
  "    #chat_leftpanel:hover { left: -20px; transition: left ease 0.1s; }",
  "    #vernierContainer { display: none; }",
  "    ",
  "    .me .cloud, .you .cloud  { max-width: calc(100vw - 271px); }  ",
  "    .chatPanel .chat { margin-left: 0; }",
  "    .chatPanel .chatInput { width: calc(100vw - 299px); }",
  "    ",
  "    #chat_leftpanel::after { content: \"\"; display: block; width: 20px; height: calc(100% + 10px); position: absolute; top: 0; left: 276px; }",
  "  }",
  "  ",
  "  @media screen and (max-width: 480px) {",
  "    #sendEmojiIcon, #screenSnapIcon, #sendFileIcon, a.chatSend { display: none; }",
  "    .chatPanel .chatInput { width: calc(100vw - 94px); }",
  "    .me .cloud, .you .cloud  { max-width: calc(100vw - 114px); }",
  "  }",
  "  ",
  "  @media screen and (max-width: 360px) {",
  "    .chatPanel .cloud .file .fileIcon { display: block; z-index: 1000; }",
  "    .chatPanel { width: 100%; padding: 0; }",
  "    .chatPanel .chatScorll { padding-top: 133px; }",
  "    .chatPanel .chatMainPanel { margin-top: -133px; }",
  "    .chatPanel .chatContainer { padding-top: 133px; }",
  "    .chatPanel .list { top: 30px; }",
  "    .chatPanel .myProfile .avatar, .chatPanel .myProfile img { border-radius: 50%; }",
  "    #chat_leftpanel:hover { left: 0px; }",
  "    #chat_leftpanel::after { width: 40px; }",
  "     .chatPanel .chatInput { width: calc(100vw - 54px); }",
  "  }",
  "  ",
  "  @media screen and (max-width: 300px) {",
  "    .chatPanel .list { display: none !important; }",
  "  }",
  ""
].join('\n');

GM_addStyle(style);