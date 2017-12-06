const configuration = () => {
  const env = process.env
  return {
    apiUrl: env.REACT_APP_API_URL,
  }
}

export default configuration()
