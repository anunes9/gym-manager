import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'

export const Page404 = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-column align-items-center">
      <p className="text-8xl m-0 font-bold text-primary-900">404</p>

      <p className="font-semibold mt-4">
        Oops! It looks like you've landed on a 404 error page. Don't worry, it happens to the best of us.
      </p>

      <p className="m-0">
        The page you're looking for may have been moved, deleted, or never existed in the first place.
      </p>

      <Button className="mt-6" onClick={() => navigate('dashboard')} outlined>
        Take me back home
      </Button>
    </div>
  )
}
