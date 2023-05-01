import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">CoachHQ</span>
          <div className="text-6xl text-primary font-bold mb-3">Empower your coaching experience with CoachHQ.</div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Welcome to CoachHQ - the ultimate solution for personal trainers who want to streamline their business
            and deliver exceptional training experiences. Our app offers advanced features like scheduling,
            payment tracking, progress tracking, and customized workout plans, all in one convenient location.
            With CoachHQ, you can focus on what you do best - helping your clients achieve their fitness goals -
            while we take care of the rest. Take your personal training business to the next level!
          </p>

          <Button className="mr-3 p-button-raised" label="Login" onClick={() => navigate('/login')} type="button" />
          <Button className="p-button-outlined" label="Contact us" type="button" />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img
          alt="hero-1"
          className="md:ml-auto block md:h-full"
          src="https://www.fitonefour.com/wp-content/uploads/2017/10/gym-entrance-e1508708054512.jpg"
          style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}
        />
      </div>
    </div>
  )
}