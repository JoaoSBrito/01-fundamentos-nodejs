export function buildRoutePath(path) {
  // /users/:id

  const routeParametersRegex = /:([a-zA-Z]+)/g

  // return new RegExp()

  console.log(Array.from(path.matchAll(routeParametersRegex)));
}