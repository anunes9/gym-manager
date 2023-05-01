import { Avatar } from 'primereact/avatar'
import { Image } from 'primereact/image'
import { Outlet, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo/logo_transparent_600.png'
import { useAuth } from '../context/auth'

export const Layout = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const borderColor = 'border-white-alpha-10'
  const itemStyle = 'hover:bg-black-alpha-10 pl-3 align-items-center gap-2 flex border-noround h-3rem p-link'

  return (
    <div className="flex flex-row align-items-stretch h-screen">
      {/* Menu */}
      <div className={`align-items-stretch bg-primary-900 border-right-2 flex flex-column w-12rem ${borderColor}`}>
        <button
          className={`border-bottom-2 border-noround flex h-4rem justify-content-center p-link ${borderColor}`}
          onClick={() => navigate('/dashboard')}
        >
          <Image alt="logo" src={Logo} width="68" />
        </button>

        <div className="flex flex-column flex-1 pt-2">
          <button className={itemStyle}>
            <span className="pi pi-fw pi-plus text-white-alpha-80"></span>
            <span className="font-bold text-sm text-white-alpha-80">Novo Atleta</span>
          </button>

          <button className={itemStyle}>
            <span className="pi pi-fw pi-calendar text-white-alpha-80"></span>
            <span className="font-bold text-sm text-white-alpha-80">Dashboard</span>
          </button>

          <button className={itemStyle}>
            <span className="pi pi-fw pi-users text-white-alpha-80"></span>
            <span className="font-bold text-sm text-white-alpha-80">Atletas</span>
          </button>

          <button className={itemStyle}>
            <span className="pi pi-fw pi-list text-white-alpha-80"></span>
            <span className="font-bold text-sm text-white-alpha-80">Exercícios</span>
          </button>
        </div>

        <button
          className={`
            w-full h-full p-link border-noround flex align-items-center px-2 h-4rem
             border-top-2 hover:bg-black-alpha-10 ${borderColor}
          `}
          onClick={() => navigate('/profile')}
        >
          <Avatar
            className="mr-2"
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
          />
          <span className="font-bold text-white-alpha-80">{auth.user}</span>
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-column flex-1 surface-ground">
        <ActionBar />
        <div className="flex flex-1 overflow-scroll">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

const ActionBar = () => (
  <div className="h-4rem flex px-3 align-items-center surface-card shadow-1">
    <p>Dashboard</p>
  </div>
)

const Footer = () => (
  <div className="h-2rem flex px-3 align-items-center justify-content-end surface-card shadow-1">
    <p className="text-sm text-500 font-bold">© CoachHQ - 2023</p>
  </div>
)
