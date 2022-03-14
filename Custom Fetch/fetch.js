const myFetch = (url, opts = {}) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    let newUrl = new URL(url);
    if (opts.params && typeof opts.params === "object") {
      Object.keys(opts.params).forEach((key) => {
        newUrl.searchParams.set(key, opts.params[key]);
      });
    }

    if (opts.mode && opts.mode === "cors") {
      xhr.withCredentials = true;
    }

    xhr.open(opts.method ? opts.method : "GET", newUrl);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(
          new Error(
            "Unable to complete " + opts.method + " request for: " + newUrl
          )
        );
      }
    };

    xhr.onerror = () => {
      reject(
        new Error(
          "Unable to complete " + opts.method + " request for: " + newUrl
        )
      );
    };

    if (opts.headers) {
      Object.keys(opts.headers).forEach((key) => {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }

    xhr.send(opts.body ? JSON.stringify(opts.body) : {});
  });
};

myFetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "POST",
  params: { query: "something" },
  body: {
    mark: "nice",
  },
  headers: {
    "Content-Type": "application/json",
  },
}).then((resp) => console.log(resp));
