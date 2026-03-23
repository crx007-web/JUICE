[
  // ✅ Rule 1: External → INTERNAL (Compliant)
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            extensionPath: "/injected.js"
          }
        },
        condition: {
          urlFilter: "example.com/script.js",
          resourceTypes: ["script"]
        }
      },

     ⚠️ Rule 2: External → External (Demo Only)
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            url: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
          }
        },
        condition: {
          urlFilter: "example.com/another.js",
          resourceTypes: ["script"]
        }
      }, 
      {
        id: 2,
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
            url: "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/dayjs.min.js"
            }
        },
        condition: {
            regexFilter: "^https://example\\.com/test\\.js$",
            resourceTypes: ["script"]
        }
      }
    ]
