import React from "react"
import './bookings.css';

import ContactForm from './components/ContactForm/ContactForm'

export default function Contact() {
    return (
        <div className="wrapper">
            <h1 className="Title">Design Bookings</h1>  
            <ContactForm/>
        </div>
    ) 
}
   // const [menu, setMenu] = useState(false)

//    export default function Home() {
//     return (
//       <div className={aleo.className}>
//         <Link href="founders">This is the founders page</Link>
//         <HeaderImagePage />
//         <Hero />
//         <Reviews/>
//         <HowItWorksImage />
//         <HowItWorksSection />
//         <WeCome/>
//         <WeComeToYou/>
//         <Recommend/>
//         <RecommendScr/>
//       </div>
//     );
//   }