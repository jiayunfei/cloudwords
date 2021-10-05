const handler = {
  get: function (target, key) {
    console.log(`${key} 被读取`);
    return target[key];
  },
  set: function (target, key, value) {
    console.log(`${key} 被设置为 ${value}`);
    target[key] = value;
  }
}

export function proxyData (data = []) {
  return new Proxy(data, handler)
}