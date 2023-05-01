import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/logo/logo_transparent_600.png'
import { useAuth } from '../context/auth'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = location.state?.from?.pathname || '/dashboard'

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (data) => {
      auth.signin(data.email, () => navigate(from, { replace: true }))
      formik.resetForm()
    }
  })

  return (
    <div className="flex align-items-center justify-content-center mt-6">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-5">
        <div className="text-center mb-5">
          <img alt="logo" height={100} src={Logo} />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">Don't have an account?</span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Contact us!</a>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <label className="block text-900 font-medium mb-2" htmlFor="email">Email</label>
          <InputText
            className="w-full mb-3"
            id="email"
            onChange={(e) => formik.setFieldValue('email', e.target.value)}
            placeholder="Email address"
            type="text"
            value={formik.values.email}
          />

          <label className="block text-900 font-medium mb-2" htmlFor="password">Password</label>
          <InputText
            className="w-full mb-3"
            id="password"
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
            placeholder="Password"
            type="password"
            value={formik.values.password}
          />

          <a className="font-medium no-underline text-blue-500 text-right cursor-pointer">
            Forgot your password?
          </a>

          <Button className="w-full mt-4" icon="pi pi-user" label="Sign In" type="submit" />
          <Button className="w-full mt-3" label="Go back" onClick={() => navigate('/')} outlined />
        </form>
      </div>
    </div>
  )
}
