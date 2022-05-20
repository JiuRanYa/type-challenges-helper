function getTemplate (name) {
    return `
type ${name}<T> = any
    `
}
module.exports = getTemplate