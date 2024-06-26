import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

console.log('background loaded');

chrome.action.onClicked.addListener(() => {
  // console.log('图标被点击，执行逻辑');
  // 恢复上一个关闭的标签页
  chrome.sessions.restore();
});
