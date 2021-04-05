class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    string = this.capitalize(string);
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let array = string.split(" ")
    array.forEach(function(el) {
      if (exceptions.includes(el)) {
        result.push(el)
      } else {
        result.push(Formatter.capitalize(el))
      }
    })
    return result.join(" ")
  }
}