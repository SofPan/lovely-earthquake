const LoginForm = () => {

  const postFormData = async formValues => {
    try {
      await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues),
      })
      .then(response => {
        console.log("postFormData response", response);
        response.text()})
      .then(data => console.log("post response data", data));
  
    } catch (error) {
      console.log("error!", error);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = e.target.elements;
    const formValues = {
      userEmail: formData.userEmail.value,
      userPassword: formData.userPassword.value
    }
    postFormData(formValues);
  }
  return(
    <>
      <h1>Login Form</h1>
      <form action="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmail">Email</label>
          <input id="userEmail" type="text" />
        </div>
        <div>
          <label htmlFor="userPassword">Password</label>
          <input id="userPassword" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginForm;