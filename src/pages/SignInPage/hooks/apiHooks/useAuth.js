const { signIn } = require("apis/users/users")
const { useQuery } = require("react-query")

const useAuth = (email, password, isEnabled) => {
  let { isLoading, error, data } = useQuery(
    "signin",
    async () => {
      const res = await signIn(email, password)
      return res
    },
    { enabled: isEnabled }
  )

  if (data?.status === 401) {
    error = new Error("error401")
  }

  return {
    isLoadingAuth: isLoading,
    errorAuth: error,
    auth: data?.data,
  }
}

export default useAuth
