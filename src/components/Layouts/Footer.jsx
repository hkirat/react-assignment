//

function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p className="footer">
        <b>Manthan-MK || Copyright &copy; {currentYear}</b>
      </p>
    </footer>
  );
}

export default Footer;
