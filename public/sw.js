/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  console.log("error");

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  self.addEventListener("install", () => {
    console.log("service worker installed");
  });

  self.addEventListener("activate", () => {
    console.log("service worker activated", self.Notification.permission);
    self.registration.showNotification("Example Text", {
      body: "What is your Mobile Number",
      data: "I am the man behind the whole disney land",
    });
  });

  self.addEventListener("show", function (event) {
    console.log("Notification shown:", event);

    // You can perform actions when a notification is shown
    // For example, you can log the event or trigger some functionality.
  });

  self.addEventListener("push", function (event) {
    console.log(self.Notification, Notification.requestPermission);
    self.Notification.requestPermission().then((res) => console.log(res));

    if (Notification.permission === "denied") {
      console.log("Permission wasn't granted. Allow a retry.");
      return;
    }

    if (Notification.permission === "default") {
      console.log("The permission request was dismissed.");
      return;
    }

    console.log("The permission request is granted!");

    try {
      event.waitUntil(
        self.registration.showNotification(
          (event && event.data && event.data.text()) ||
            "Some Notification Here!"
        )
      );
    } catch (e) {
      throw new Error(`Error in SW: ${e}`);
    }
  });

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return (
      registry[uri] ||
      new Promise((resolve) => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = uri;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          nextDefineUri = uri;
          importScripts(uri);
          resolve();
        }
      }).then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri =
      nextDefineUri ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = (depUri) => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require,
    };
    registry[uri] = Promise.all(
      depsNames.map((depName) => specialDeps[depName] || require(depName))
    ).then((deps) => {
      factory(...deps);
      return exports;
    });
  };
}
define(["./workbox-8f0e986c"], function (workbox) {
  "use strict";

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute(
    "/",
    new workbox.NetworkFirst({
      cacheName: "start-url",
      plugins: [
        {
          cacheWillUpdate: async ({ request, response, event, state }) => {
            if (response && response.type === "opaqueredirect") {
              return new Response(response.body, {
                status: 200,
                statusText: "OK",
                headers: response.headers,
              });
            }
            return response;
          },
        },
      ],
    }),
    "GET"
  );
  workbox.registerRoute(
    /.*/i,
    new workbox.NetworkOnly({
      cacheName: "dev",
      plugins: [],
    }),
    "GET"
  );
});
//# sourceMappingURL=sw.js.map
