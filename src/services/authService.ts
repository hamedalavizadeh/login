export const AuthService = {
  login: async (phone: string) => {
    const response = await fetch("https://randomuser.me/api/?results=1&nat=us")
    const data = await response.json()

    if (!data.results || data.results.length === 0)
      throw new Error("User data not received")

    const user = data.results[0]
    const userData = {
      name: `${user.name.first} ${user.name.last}`,
      phone,
    }

    localStorage.setItem("user", JSON.stringify(userData))

    return userData
  },

  logout: () => {
    localStorage.removeItem("user")
  },

  getCurrentUser: () => {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  },

  getRememberedPhone: () => {
    return localStorage.getItem("rememberedPhone")
  },

  validatePhone: (phone: string): boolean => {
    const regex = /^09[0-9]{9}$/
    return regex.test(phone)
  },
}
