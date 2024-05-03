const Footer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <p className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <span className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          Charity LinkUp ©{new Date().getFullYear()}. All Rights Reserved.
        </span>
      </p>
    </div>
  );
};

export default Footer;
