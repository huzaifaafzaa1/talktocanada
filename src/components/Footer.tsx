const Footer = () => {
    const footerLinks = [
      "admin@talktocanada.com",
      "+1 631 593 0559",
      "474 Grove St East Barrie, ON L4M 5W3 Canada",
    ];
  
    return (
      <div className="flex justify-between font-interTight p-4 text-[13px] w-full">
        <ul className="flex gap-3 text-corporateBlack">
          {footerLinks.map((item, index) => (
            <li key={index} className="border-b">{item}</li>
          ))}
        </ul>
        <p className="text-grey ">
          © 2006-2023 TalktoCanada — All rights reserved worldwide
        </p>
      </div>
    );
  };
  
  export default Footer;
  