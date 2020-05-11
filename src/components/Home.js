import React ,{ Component }from "react";
import Title from './Title';
import phone from '../phone.svg'
import phone1 from '../phone1.svg'
export default class Home extends Component{
render(){
  return(
    <div>
      <div className="title1">
       Welcome to PhoneShop
      </div>
      <img src={phone} alt="store" className="hello"/>
      <div className="info col-lg-4"> <div className="title2">Lorem</div> Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.</div>
      <img src={phone1} alt="store" className="hello1"/>
        <p className="info1 col-lg-4 "> <div className="title2">Lorem</div>  Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.</p>
    </div>
  )
}
}
