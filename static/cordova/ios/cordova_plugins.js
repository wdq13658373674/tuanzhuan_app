cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-alipay-chenyu.MyAlipay",
    "file": "plugins/cordova-alipay-chenyu/www/MyAlipay.js",
    "pluginId": "cordova-alipay-chenyu",
    "clobbers": [
      "cordova.plugins.MyAlipay"
    ]
  },
  {
    "id": "cordova-hot-code-push-plugin.chcp",
    "file": "plugins/cordova-hot-code-push-plugin/www/chcp.js",
    "pluginId": "cordova-hot-code-push-plugin",
    "clobbers": [
      "chcp"
    ]
  },
  {
    "id": "cordova-plugin-armsoft-datepicker.DatePicker",
    "file": "plugins/cordova-plugin-armsoft-datepicker/www/ios/DatePicker.js",
    "pluginId": "cordova-plugin-armsoft-datepicker",
    "clobbers": [
      "datePicker"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-bluetooth-status.BluetoothStatus",
    "file": "plugins/cordova-plugin-bluetooth-status/BluetoothStatus.js",
    "pluginId": "cordova-plugin-bluetooth-status",
    "clobbers": [
      "cordova.plugins.BluetoothStatus"
    ]
  },
  {
    "id": "cordova-plugin-bluetoothle.BluetoothLe",
    "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
    "pluginId": "cordova-plugin-bluetoothle",
    "clobbers": [
      "window.bluetoothle"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.events",
    "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
    "pluginId": "cordova-plugin-chrome-apps-common",
    "clobbers": [
      "chrome.Event"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.errors",
    "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.stubs",
    "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.helpers",
    "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-filesystem.FileSystem",
    "file": "plugins/cordova-plugin-chrome-apps-filesystem/fileSystem.js",
    "pluginId": "cordova-plugin-chrome-apps-filesystem",
    "clobbers": [
      "chrome.fileSystem"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-storage.Storage",
    "file": "plugins/cordova-plugin-chrome-apps-storage/storage.js",
    "pluginId": "cordova-plugin-chrome-apps-storage",
    "clobbers": [
      "chrome.storage"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.Acceleration",
    "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "Acceleration"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.accelerometer",
    "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "navigator.accelerometer"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.CompassError",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassError"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.CompassHeading",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassHeading"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.compass",
    "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "navigator.compass"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.iosFileSystem",
    "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-media.MediaError",
    "file": "plugins/cordova-plugin-media/www/MediaError.js",
    "pluginId": "cordova-plugin-media",
    "clobbers": [
      "window.MediaError"
    ]
  },
  {
    "id": "cordova-plugin-media.Media",
    "file": "plugins/cordova-plugin-media/www/Media.js",
    "pluginId": "cordova-plugin-media",
    "clobbers": [
      "window.Media"
    ]
  },
  {
    "id": "cordova-plugin-navimap.NaviMap",
    "file": "plugins/cordova-plugin-navimap/www/NaviMap.js",
    "pluginId": "cordova-plugin-navimap",
    "clobbers": [
      "cordovaNaviMap"
    ]
  },
  {
    "id": "cordova-plugin-network-information-with-connection-update.network",
    "file": "plugins/cordova-plugin-network-information-with-connection-update/www/network.js",
    "pluginId": "cordova-plugin-network-information-with-connection-update",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information-with-connection-update.Connection",
    "file": "plugins/cordova-plugin-network-information-with-connection-update/www/Connection.js",
    "pluginId": "cordova-plugin-network-information-with-connection-update",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-push-baidu.baiduPush",
    "file": "plugins/cordova-plugin-push-baidu/www/baiduPush.js",
    "pluginId": "cordova-plugin-push-baidu",
    "clobbers": [
      "baiduPush"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-wechatv2.Wechat",
    "file": "plugins/cordova-plugin-wechatv2/www/wechat.js",
    "pluginId": "cordova-plugin-wechatv2",
    "clobbers": [
      "Wechat"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-alipay-chenyu": "1.1.2",
  "cordova-hot-code-push-plugin": "1.5.3",
  "cordova-plugin-armsoft-datepicker": "0.8.9",
  "cordova-plugin-badge": "0.8.7",
  "cordova-plugin-bluetooth-status": "1.0.4",
  "cordova-plugin-bluetoothle": "4.4.3",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-chrome-apps-common": "1.0.7",
  "cordova-plugin-chrome-apps-filesystem": "1.0.5",
  "cordova-plugin-chrome-apps-storage": "1.0.4",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-device-motion": "2.0.1",
  "cordova-plugin-device-orientation": "2.0.1",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-plugin-media": "5.0.2",
  "cordova-plugin-navimap": "1.2.3",
  "cordova-plugin-network-information-with-connection-update": "2.0.2",
  "cordova-plugin-push-baidu": "5.6.1",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-wechatv2": "2.1.2",
  "cordova-plugin-whitelist": "1.3.3",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-x-socialsharing": "5.4.0",
  "cordova-sqlite-storage": "2.3.1",
  "phonegap-plugin-barcodescanner": "7.1.2"
};
// BOTTOM OF METADATA
});