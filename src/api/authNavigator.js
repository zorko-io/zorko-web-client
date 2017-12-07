const apiBaseUri = process.env.ZORKO_API_BASE_URI

export default {
  login (provider) {
    if (provider === 'github') {
      location.href = apiBaseUri + '/auth/github'
    }
  }
}
