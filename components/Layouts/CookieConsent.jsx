import CookieConsent from 'react-cookie-consent'

function index() {
  return (
    <CookieConsent
      cookieName="GPUFinder_CookieConsent"
      buttonText="Comprendo"
      expires={30}
      location="bottom"
      buttonStyle={{ borderRadius: '6px' }}
      style={{}}
      buttonClasses="btn btn-primary"
      containerClasses="alert alert-warning items-center text-center sm:text-left justify-center sm:justify-left"
    >
      <div className="grid -mb-4 sm:-mb-0">
        <span className="text-lg font-semibold -mt-2">Privacidad</span>
        <div className="grid">
          <span className="text-sm">
            Esta web no hace ningún uso de cookies.
          </span>
        </div>
      </div>
    </CookieConsent>
  )
}

export default index
