import { useEffect, useState } from "react";

function Breadcrumb() {
    const [breadcrumbText, setBreadcrumbText] = useState('Home');

  useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/photo':
        setBreadcrumbText('Our Photos');
        break;
      case '/Faculties':
        setBreadcrumbText('Our Faculties');
        break;
        case '/about':
          setBreadcrumbText('About');
          break;
          case '/contact':
          setBreadcrumbText('Contact');
          break;
      default:
        setBreadcrumbText('Home'); 
    }
  }, []); 
  return (
    <div>
      <div className="container-fluid page-header py-5 mb-5" style={{height: "25rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">{breadcrumbText}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                    {/* <!-- <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li> --> */}
                    <li className="breadcrumb-item text-white active" aria-current="page">{breadcrumbText}</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Breadcrumb
