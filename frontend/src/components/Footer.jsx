const Footer = () => {
  return (
    <footer className="w-full text-center text-sm text-gray-500 py-4 border-t border-gray-200 mt-10">
      <div>
        &copy; {new Date().getFullYear()} Vikram Aditya | 
        <a
          href="https://www.linkedin.com/in/vikramaditya04/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          LinkedIn
        </a>
        <span className="mx-2">|</span>
        Version 1.0.0
      </div>
    </footer>
  );
};

export default Footer;
