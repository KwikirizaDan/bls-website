import "../../public/assets/css/plugins/fontawesome.css";
import "../../public/assets/css/plugins/magnifying-popup.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import 'react-modal-video/css/modal-video.min.css';

import "../../public/assets/css/style.css";

import ScriptLoader from "@/components/ScriptLoader";

export const metadata = {
  title: "Binary Labs Solutions - ICT Solutions Company",
  description: "We build digital infrastructure for East Africa. Custom web platforms, mobile apps, database design, and data systems for businesses in Uganda and beyond.",
  icons: {
    icon: "/assets/images/fav.png",
  },
  authors: [{ name: "Binary Labs Solutions" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='index-one'>

        {children}

        <ScriptLoader />
      </body>
    </html>
  );
}
