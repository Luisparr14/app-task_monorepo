
export const validateEmail = (email) => {
  let message = ''
  let error = false
  if (email.length === 0) {
    message = 'The field is required'
    error = true
    return { error, message }
  }
  if (email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    message = 'Invalid email address'
    error = true
  }
  return { error, message }
}

export const validField = (value) => {
  let message = ''
  let error = false
  if (value.length === 0) {
    message = 'The field is required'
    error = true
    return { error, message }
  }
  return { error, message }
}
