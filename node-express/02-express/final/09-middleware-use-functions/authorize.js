const authorize = (req, res, next) => {
	console.log('Authorization Complete...')
	next()
}
module.exports = authorize
